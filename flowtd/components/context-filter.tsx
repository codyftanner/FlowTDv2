'use client'

export default function ContextFilter({
  selectedContexts,
  onContextsChange,
  selectedEnergy,
  onEnergyChange,
  selectedTimeBlock,
  onTimeBlockChange,
}: {
  selectedContexts: string[]
  onContextsChange: (contexts: string[]) => void
  selectedEnergy: string
  onEnergyChange: (energy: string) => void
  selectedTimeBlock: string
  onTimeBlockChange: (timeBlock: string) => void
}) {
  const contexts = ['Home', 'Office', 'Errands', 'Computer', 'Phone']
  const energyLevels = ['', 'HIGH', 'LOW']
  const timeBlocks = ['', 'QUICK_WIN', 'FOCUSED', 'DEEP']

  const toggleContext = (context: string) => {
    if (selectedContexts.includes(context)) {
      onContextsChange(selectedContexts.filter(c => c !== context))
    } else {
      onContextsChange([...selectedContexts, context])
    }
  }

  return (
    <div className="glass-card rounded-2xl p-4 shadow-lg">
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-2 mr-4">
          <span className="text-sm font-medium text-gray-700">Context:</span>
          {contexts.map(context => (
            <button
              key={context}
              onClick={() => toggleContext(context)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                selectedContexts.includes(context)
                  ? 'glass-active text-blue-700'
                  : 'glass-button text-gray-700'
              }`}
            >
              {context}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 mr-4">
          <span className="text-sm font-medium text-gray-700">Energy:</span>
          <select
            value={selectedEnergy}
            onChange={(e) => onEnergyChange(e.target.value)}
            className="glass-button px-3 py-1 rounded-full text-xs font-medium text-gray-700 focus:outline-none focus:ring-0"
          >
            <option value="">All</option>
            <option value="HIGH">High</option>
            <option value="LOW">Low</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Time:</span>
          <select
            value={selectedTimeBlock}
            onChange={(e) => onTimeBlockChange(e.target.value)}
            className="glass-button px-3 py-1 rounded-full text-xs font-medium text-gray-700 focus:outline-none focus:ring-0"
          >
            <option value="">All</option>
            <option value="QUICK_WIN">Quick Win (&lt;15m)</option>
            <option value="FOCUSED">Focused (15-60m)</option>
            <option value="DEEP">Deep Work (&gt;1h)</option>
          </select>
        </div>
      </div>
    </div>
  )
}
