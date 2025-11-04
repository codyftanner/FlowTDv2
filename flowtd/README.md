# FlowTD

FlowTD is a task management system designed to be a trusted extension of your mind. It eliminates the gap between having an idea and taking action, while ensuring everything you do connects to what matters most.

## Core Features

- ⚡ **Instant Capture Everywhere** - Catch any thought in under 5 seconds
- 🎯 **Process Once, Never Revisit** - Make one decision about each item and move on
- 📅 **Tasks Meet Time** - See tasks alongside calendar availability
- 🎯 **Daily Work, Bigger Goals** - Connect every task to long-term aspirations
- 🔄 **Weekly Reset** - A simple ritual keeps everything organized

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Database:** Prisma + SQLite (MVP)
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS
- **UI Components:** Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd flowtd
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="dev-secret-change-in-production"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

4. Initialize the database
```bash
npm run db:generate
npm run db:push
```

5. Run the development server
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Development

### Database Commands

- `npm run db:generate` - Generate Prisma Client
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Prisma Studio

### Project Structure

```
flowtd/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   ├── dashboard/            # Dashboard pages
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── components/              # React components
├── lib/                     # Utilities and configurations
│   ├── auth.ts             # NextAuth configuration
│   └── db.ts               # Prisma client
├── prisma/
│   └── schema.prisma       # Database schema
└── public/                 # Static assets
```

## MVP Status

### ✅ Completed
- Project setup and database schema
- Authentication (Google OAuth)
- Landing page
- Dashboard navigation
- Universal capture input
- Today view
- Inbox with "Think Once" clarification flow

### 🚧 In Progress
- Projects and Next Actions
- Goals system
- Calendar integration
- Time blocking
- Weekly Review
- Incubator
- Focus Mode

### 📋 Planned
- Mobile app
- Email capture
- Advanced filtering
- Analytics

## Contributing

This is a private project. For questions or suggestions, please contact the maintainers.

## License

Private - All rights reserved