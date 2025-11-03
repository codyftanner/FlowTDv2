# Product Requirements Document: FlowTD

---

## 1. Product Overview

### Vision

FlowTD is a task management system designed to be a trusted extension of your mind. It eliminates the gap between having an idea and taking action, while ensuring everything you do connects to what matters most. The system adapts to how you work, not the other way around.

### Core Value Proposition

**For ambitious professionals who value focus and efficiency, FlowTD transforms task management from a burden into a strategic advantage by:**

1. **Instant Capture Everywhere** - Catch any thought in under 5 seconds, anywhere you are
2. **Process Once, Never Revisit** - Make one decision about each item and move on with your day
3. **Tasks Meet Time** - See what needs doing alongside when you're actually available
4. **Daily Work, Bigger Goals** - Every task visibly connects to your long-term aspirations
5. **Smart Defaults, Less Decisions** - The system makes good choices so you don't have to
6. **Weekly Reset** - A simple ritual keeps everything organized and inspiring

### Target Users

**Primary Persona: Alex, The Professional**

Alex is an ambitious knowledge worker—a manager, consultant, or creative professional—who juggles multiple projects and competing priorities. They're familiar with productivity systems like GTD (Getting Things Done) and have tried various task management tools, but nothing has stuck. They're drowning in:
- An overflowing inbox of unprocessed items
- A calendar full of meetings with no time for actual work
- A disconnect between daily tasks and quarterly goals
- Constant decision fatigue from too many choices

They need a system that respects their time, reduces cognitive load, and helps them see the bigger picture without losing sight of what needs doing today.

### Key Differentiators

Unlike other task management tools, FlowTD:
- **Connects tasks to calendar time** - Not just lists, but realistic time-based planning
- **Links actions to goals** - Every task shows why it matters through goal alignment
- **Processes inbox items in one action** - No revisiting, no decision paralysis
- **Guides weekly reviews** - Builds the habit that keeps everything working
- **Opinionated by design** - Makes smart defaults so you don't have to configure everything

---

## 2. User Journeys & Core Flows

### 2.1 The Daily Flow: Capture → Process → Plan → Execute

**The Complete Cycle:**

**Morning: Processing & Planning**
1. Alex opens FlowTD and sees their inbox with 12 items from yesterday
2. They enter "Process Mode" and fly through each item:
   - "Buy groceries" → **Do It** (quickly added to shopping list)
   - "Q4 strategy presentation" → **Project** → Creates project with outcome "Deliver strategy presentation that gets buy-in"
   - "Follow up with Sarah about budget" → **Waiting** → Tags as waiting on Sarah
   - "Research competitor pricing" → **Next Action** → Tags as "Deep Work"
3. They see their calendar for today and drag 3 tasks into available time slots
4. They review their "Today" view—a curated mix of calendar events, due tasks, and suggested next actions

**Throughout the Day: Capturing**
5. In a meeting, Alex remembers something → Opens FlowTD on phone → Types "Call vendor about contract" → Submits in 3 seconds
6. Later, reading email → Forwards important email to their FlowTD capture address → It appears in inbox automatically
7. Walking to car → Has an idea → Opens share sheet on iPhone → Captures with photo attachment

**Evening: Quick Triage**
8. Before closing laptop, Alex quickly processes the 5 items captured during the day
9. They mark 3 tasks complete, defer 1, and create 1 project
10. Tomorrow's plan is already visible and time-blocked

### 2.2 The Weekly Review Flow: Reset & Align

**Every Friday Afternoon (or Sunday Morning):**

1. **System prompts:** "You haven't reviewed in 6 days. Time for a weekly reset?"

2. **Guided Review Journey:**
   - **Collect:** "Gather all your capture points—notes, emails, physical inbox. Ready?"
   - **Process:** Process all inbox items to zero using the clarification flow
   - **Projects:** Review each active project. "Strategy Presentation" has no Next Action—Alex creates one
   - **Goals:** System shows 3 projects without goal alignment. Alex connects them to quarterly objectives
   - **Incubator:** Reviews 5 ideas in the incubator. One is ready—promotes to project
   - **Calendar:** Reviews next week's calendar, time-blocks important tasks

3. **Complete:** "Great work! You've processed 23 items and aligned 3 projects to goals."

4. **Result:** Alex feels clear, organized, and ready for the week ahead

### 2.3 The Opportunistic Execution Flow: Quick Wins

**Scenario: 10 minutes between meetings**

1. Alex opens "Focus Mode" 
2. Sees a queue of "Quick Win" tasks (<15 minutes each)
3. Sets a 10-minute timer
4. Completes 3 tasks in rapid succession:
   - Send that email
   - Approve that expense report  
   - Update project status
5. Timer ends with satisfying completion summary
6. Feels productive and energized for next meeting

---

## 3. User Needs & Problems

### 3.1 Need: Capture Thoughts Before They're Lost

**The Problem:** Great ideas and important tasks slip away because there's no easy way to capture them in the moment. By the time you get to your task management tool, you've forgotten half of what you wanted to remember.

**Current Pain Points:**
- Opening apps takes too long
- Too many steps to save something
- Different tools for different devices creates friction
- Email-based tasks get lost in inbox

**Desired Outcome:** Capture any thought or task in under 5 seconds, from any device or location, with zero context switching.

---

### 3.2 Need: Process Inbox Without Decision Paralysis

**The Problem:** Most task management tools dump everything into an inbox, then require multiple clicks, fields, and decisions to process each item. Users either avoid their inbox (letting it grow) or spend too much time processing.

**Current Pain Points:**
- Too many fields to fill out
- Unclear what to do with each item
- Have to revisit items multiple times
- Don't know where items "should" go

**Desired Outcome:** Process each inbox item with a single action that fully handles it—no revisiting, no second-guessing.

---

### 3.3 Need: See Tasks and Calendar Together

**The Problem:** Tasks live in one tool, calendar in another. Users can't realistically plan because they don't see available time alongside what needs doing. Result: tasks pile up, calendar fills with meetings, and important work never gets scheduled.

**Current Pain Points:**
- Tasks and calendar are separate
- Can't see if there's time for a task
- Hard to plan realistically
- Schedule conflicts go unnoticed

**Desired Outcome:** See tasks and calendar in one unified view, with the ability to drag tasks onto available time slots and see conflicts immediately.

---

### 3.4 Need: Connect Daily Work to Bigger Goals

**The Problem:** It's easy to get lost in daily tasks and lose sight of why you're doing them. There's no visible connection between the urgent email reply and your quarterly objective. This creates a sense of busy work without progress.

**Current Pain Points:**
- Goals and tasks live in separate worlds
- Hard to see if daily work matters
- Feel busy but not productive
- Can't prioritize based on what matters

**Desired Outcome:** Every task and project shows which goal it supports, making it easy to see if you're spending time on what matters.

---

### 3.5 Need: Know What to Do Right Now

**The Problem:** Users spend too much time deciding what to do next. They see long lists of tasks but don't know which one to tackle. Energy levels, available time, and priorities all matter, but most tools ignore these factors.

**Current Pain Points:**
- Overwhelmed by long task lists
- Don't know what to prioritize
- Energy and time aren't considered
- Miss quick wins between meetings

**Desired Outcome:** A curated "Today" view that considers due dates, goals, available time, and energy levels to show what's most relevant right now.

---

### 3.6 Need: Maintain the System Without Friction

**The Problem:** Task management systems fall apart when not maintained. Inboxes fill up, projects go stale, and goals get forgotten. Most tools require discipline but don't help build it.

**Current Pain Points:**
- System gets messy over time
- Hard to know what to review
- Weekly review feels like a chore
- No guidance on maintenance

**Desired Outcome:** A guided weekly review that's fast, helpful, and builds the habit of keeping everything organized and aligned.

---

### 3.7 Need: Store Ideas for Later Without Clutter

**The Problem:** Not every idea is ready to become a project. Users need a place to park future possibilities without cluttering their active task lists, but with a way to revisit them regularly.

**Current Pain Points:**
- Don't know where to put "maybe someday" ideas
- Active lists get cluttered with future stuff
- Forget about ideas because they're buried
- No good way to evaluate if an idea is ready

**Desired Outcome:** A dedicated space (the Incubator) for ideas and aspirations that aren't ready yet, with regular review prompts to reassess them.

---

## 4. Product Requirements

Product requirements are organized by user need, building from simplest to most complex. Each requirement includes user stories for approval.

---

### 4.1 Requirement Set: Universal Capture

**User Need:** Capture thoughts before they're lost (Section 3.1)

#### 4.1.1 Basic Web Capture (MVP - Simplest)

**Product Requirement:** Users must be able to capture tasks and ideas instantly from a web browser, with the capture mechanism always available.

**User Stories:**

**US-001: Always-Visible Capture Input**
*As a user, I want a capture input field that's always visible on the web interface, so I can add tasks without navigating to a specific page.*

**US-002: One-Key Submit**
*As a user, I want to submit captures by pressing Enter, so I can add tasks quickly without using a mouse.*

**US-003: Instant Feedback**
*As a user, I want immediate confirmation when I capture something, so I know it was saved successfully.*

**US-004: Ready for Next Capture**
*As a user, I want the capture field to clear automatically after submission, so I can immediately capture the next item.*

**Acceptance Criteria:**
- Capture input is visible on all main views (Inbox, Today, Projects)
- Pressing Enter submits the capture
- User sees confirmation within 300ms
- Field clears and refocuses for next entry
- Minimum required field: title/text only (all other metadata optional)

---

#### 4.1.2 Mobile Capture (MVP - Core)

**Product Requirement:** Users must be able to capture from their mobile device through a dedicated app interface.

**User Stories:**

**US-005: Mobile App Capture**
*As a user, I want a simple mobile app to capture tasks when I'm away from my computer, so ideas don't get lost.*

**US-006: Fast Mobile Entry**
*As a user, I want to open the mobile app and capture in under 5 seconds, so I don't lose the thought.*

**US-007: Offline Mobile Capture**
*As a user, I want to capture tasks even when offline, so connectivity issues don't prevent me from saving ideas.*

**US-008: Share Sheet Integration**
*As a mobile user, I want to capture from anywhere using the iOS share sheet, so I can add tasks from other apps without switching.*

**Acceptance Criteria:**
- Mobile app opens to capture screen in <2 seconds
- Capture submission completes in <5 seconds total
- Offline captures queue locally
- Captures sync when connectivity returns
- iOS share sheet extension available from any app

---

#### 4.1.3 Email Capture (MVP - Enhanced)

**Product Requirement:** Users must be able to forward emails to FlowTD to capture them as tasks, preserving the original message for reference.

**User Stories:**

**US-009: Email Forward Capture**
*As a user, I want to forward emails to FlowTD, so email-based tasks go directly to my inbox without manual entry.*

**US-010: Preserve Email Content**
*As a user, I want forwarded emails to include the original message body, so I have full context when processing the task.*

**US-011: Unique Capture Address**
*As a user, I want my own unique email address for capturing, so forwarded emails are securely routed to my account.*

**Acceptance Criteria:**
- Each user receives unique capture email address (format: `user-[id]@capture.flowtd.com`)
- Forwarded emails appear in inbox within 60 seconds
- Original email body, subject, sender preserved
- Email metadata visible in task details
- Only Gmail/Google Workspace supported in MVP

---

#### 4.1.4 Browser Extension Capture (Future - Advanced)

*Deferred to post-MVP. Start with web and mobile, add extension once core flows are validated.*

---

### 4.2 Requirement Set: Inbox Processing

**User Need:** Process inbox without decision paralysis (Section 3.2)

#### 4.2.1 The "Think Once" Clarification Flow (MVP - Core)

**Product Requirement:** Users must be able to process each inbox item with a single action that fully handles it—no revisiting, no additional clicks required.

**User Stories:**

**US-012: Single-Action Processing**
*As a user, I want to process inbox items with one action, so I can clear my inbox quickly without overthinking.*

**US-013: Clear Action Options**
*As a user, I want clear action buttons for each inbox item (Do It, Next Action, Later, Waiting, Project, Delete), so I know exactly what to do.*

**US-014: Automatic Advancement**
*As a user, I want the system to move to the next inbox item automatically after I process one, so I can work through my inbox efficiently.*

**US-015: Minimal Prompts**
*As a user, I want the system to only ask for additional information when absolutely necessary (e.g., delegate name for "Waiting"), so I'm not slowed down by unnecessary fields.*

**US-016: Keyboard Shortcuts**
*As a user, I want keyboard shortcuts for each action (e.g., D for Do It, N for Next), so I can process items even faster.*

**Acceptance Criteria:**
- All clarification actions available via single click or keyboard shortcut
- System only prompts for required metadata (e.g., delegate name for "Waiting" items)
- After processing, automatically shows next inbox item
- Processing history tracked for analytics
- Median processing time per item: <10 seconds

**Clarification Actions:**
- **Do It:** Complete immediately, remove from inbox
- **Next Action:** Promote to active task list, optionally attach to project
- **Later:** Defer to future, optionally set date
- **Waiting:** Mark as waiting on someone/something, prompt for name/description
- **Project:** Create new project or attach to existing, prompt for desired outcome
- **Delete:** Remove permanently

---

#### 4.2.2 Batch Processing Mode (MVP - Enhanced)

**Product Requirement:** Users must be able to process multiple inbox items in rapid succession with keyboard-only navigation.

**User Stories:**

**US-017: Keyboard-Only Processing**
*As a user, I want to process my entire inbox using only the keyboard, so I can work through it quickly without switching between mouse and keyboard.*

**US-018: Progress Indicator**
*As a user, I want to see how many items remain in my inbox, so I know my progress.*

**US-019: Pause and Resume**
*As a user, I want to pause inbox processing and resume later, so I can take breaks without losing my place.*

**Acceptance Criteria:**
- All clarification actions available via keyboard
- Progress indicator shows "X of Y items remaining"
- Queue order preserved when pausing/resuming
- Can exit batch mode and return to normal view

---

### 4.3 Requirement Set: Calendar Integration

**User Need:** See tasks and calendar together (Section 3.3)

#### 4.3.1 Calendar Connection (MVP - Foundation)

**Product Requirement:** Users must be able to connect their Google Calendar account to FlowTD, enabling bidirectional sync of events.

**User Stories:**

**US-020: Connect Calendar**
*As a user, I want to connect my Google Calendar account, so FlowTD can see my schedule and help me plan realistically.*

**US-021: Simple Connection**
*As a user, I want calendar connection to be a simple OAuth flow, so I don't have to manage API keys or complex setup.*

**US-022: Disconnect Anytime**
*As a user, I want to disconnect my calendar at any time, so I remain in control of my data.*

**Acceptance Criteria:**
- OAuth flow completes in <30 seconds
- Clear explanation of calendar permissions requested
- Disconnect option available in settings
- Calendar connection status visible in UI

---

#### 4.3.2 Calendar View Integration (MVP - Core)

**Product Requirement:** Users must see their calendar events alongside their tasks in the Today view, with a unified timeline.

**User Stories:**

**US-023: Unified Today View**
*As a user, I want to see my calendar events and tasks together in the Today view, so I can see everything I need to do in one place.*

**US-024: Visual Distinction**
*As a user, I want calendar events and tasks to look different but integrated, so I can tell them apart while seeing the full picture.*

**US-025: Conflict Highlighting**
*As a user, I want to see when tasks are scheduled during existing calendar events, so I can identify and resolve scheduling conflicts.*

**Acceptance Criteria:**
- Today view displays calendar events and tasks on same timeline
- Calendar events visually distinct from tasks (e.g., different color/shape)
- Conflicts highlighted with warning indicator
- Calendar events are read-only (cannot edit Google Calendar events in FlowTD)
- Calendar syncs within 60 seconds of changes

---

#### 4.3.3 Time Blocking (MVP - Advanced)

**Product Requirement:** Users must be able to drag tasks onto their calendar to create time blocks, with the time block syncing to Google Calendar.

**User Stories:**

**US-026: Drag Tasks to Calendar**
*As a user, I want to drag tasks onto my calendar to schedule them, so I can see when I'll actually work on them.*

**US-027: Calendar Sync**
*As a user, I want time blocks I create to appear in my Google Calendar, so they're visible everywhere I check my schedule.*

**US-028: Resize Time Blocks**
*As a user, I want to adjust the duration of time blocks by dragging their edges, so I can match my actual time estimates.*

**US-029: Default Durations**
*As a user, I want to set default durations for different task types (Quick Win, Focused, Deep Work), so time blocking is faster.*

**Acceptance Criteria:**
- Drag-and-drop works on desktop (mouse) and mobile (touch)
- Time blocks appear in Google Calendar within 60 seconds
- Time blocks can be resized by dragging edges
- Default durations applied based on task tags
- Creating time block links back to original task
- Deleting time block removes calendar event and clears task's planned start

---

#### 4.3.4 Planning View (MVP - Enhanced)

**Product Requirement:** Users must have a dedicated planning view showing a 7-day calendar alongside their task list for strategic weekly planning.

**User Stories:**

**US-030: Weekly Planning View**
*As a user, I want a 7-day calendar view with my task list alongside, so I can plan my week visually.*

**US-031: See Available Time**
*As a user, I want to see my existing calendar events alongside empty time slots, so I know when I can schedule work.*

**US-032: Plan Multiple Days**
*As a user, I want to drag tasks onto any day in the next week, so I can plan ahead realistically.*

**Acceptance Criteria:**
- 7-day calendar view with task list panel
- Existing calendar events shown as non-editable blocks
- Drag-and-drop tasks onto any visible day
- Time blocks created with appropriate default durations
- Changes sync bidirectionally

---

### 4.4 Requirement Set: Goals & Alignment

**User Need:** Connect daily work to bigger goals (Section 3.4)

#### 4.4.1 Goal Creation (MVP - Foundation)

**Product Requirement:** Users must be able to define goals across four horizons (Purpose, 3-5 Year Vision, 1-2 Year Goals, Quarterly Objectives).

**User Stories:**

**US-033: Create Goals**
*As a user, I want to create goals in different time horizons, so I can organize my aspirations from long-term vision to quarterly objectives.*

**US-034: Goal Details**
*As a user, I want to add success criteria and target dates to goals, so I can track progress over time.*

**US-035: View All Goals**
*As a user, I want to see all my goals organized by horizon, so I can review and update them.*

**Acceptance Criteria:**
- Users can create goals in four horizons: Purpose, 3-5 Year Vision, 1-2 Year Goals, Quarterly Objectives
- Goals can include optional success criteria and target dates
- Goals can be edited, archived, or marked complete
- Goals view shows all goals organized by horizon

---

#### 4.4.2 Project-to-Goal Alignment (MVP - Core)

**Product Requirement:** Users must be able to link projects and areas to goals, with the relationship visible throughout the system.

**User Stories:**

**US-036: Link Projects to Goals**
*As a user, I want to connect my projects to goals, so I can see how my work supports my bigger aspirations.*

**US-037: See Goal Alignment**
*As a user, I want to see which goal each project supports in the project view, so I'm reminded why it matters.*

**US-038: Goal-Driven Projects**
*As a user, I want to see all projects supporting a goal when viewing that goal, so I can see the full scope of work toward it.*

**US-039: Identify Unaligned Projects**
*As a user, I want the system to highlight projects without goal alignment, so I can decide if they need a goal or should be deprioritized.*

**Acceptance Criteria:**
- Projects can be associated with exactly one goal/horizon
- Goal association visible in project detail view
- Goal detail view shows all associated projects
- Projects without goal alignment visually highlighted
- Goal associations can be changed at any time

---

#### 4.4.3 Goal Visibility in Daily Work (MVP - Enhanced)

**Product Requirement:** Users must see goal alignment context when viewing tasks and in planning views.

**User Stories:**

**US-040: Task Goal Context**
*As a user, I want to see which goal a task supports when viewing it, so I understand why it matters.*

**US-041: Goal-Filtered Views**
*As a user, I want to filter tasks and projects by goal, so I can focus on work supporting specific objectives.*

**US-042: Goal Progress**
*As a user, I want to see progress toward goals based on completed projects, so I know if I'm on track.*

**Acceptance Criteria:**
- Task detail view shows associated project's goal (if applicable)
- Filter by goal available in task and project views
- Goal progress visible in goal detail view
- Today view can show goal context for tasks

---

### 4.5 Requirement Set: Smart Task Organization

**User Need:** Know what to do right now (Section 3.5)

#### 4.5.1 Today View (MVP - Core)

**Product Requirement:** Users must have a curated "Today" view that shows the most relevant tasks and calendar events for the current day.

**User Stories:**

**US-043: Curated Today View**
*As a user, I want a Today view that shows me what matters most for today, so I don't have to decide what to focus on.*

**US-044: Organized Sections**
*As a user, I want Today view organized into clear sections (Calendar, Due Tasks, Suggested Actions, Quick Wins), so I can scan and prioritize easily.*

**US-045: See Overdue Items**
*As a user, I want to see overdue tasks prominently, so I can catch up on what I've missed.*

**Acceptance Criteria:**
- Today view loads in <2 seconds
- Sections displayed in priority order:
  1. Calendar Events (today's schedule)
  2. Active Tasks (with planned start today)
  3. Due/Overdue (tasks due today or past due)
  4. Waiting On (tasks blocked on others)
  5. Suggested Next Actions (system recommendations)
  6. Quick Wins (tasks <15 minutes)
- Sections can be collapsed/expanded
- Overdue items visually distinct (e.g., red indicator)

---

#### 4.5.2 Next Action Suggestions (MVP - Enhanced)

**Product Requirement:** The system must intelligently suggest next actions based on due dates, goal alignment, available time, and energy levels.

**User Stories:**

**US-046: Smart Suggestions**
*As a user, I want the system to suggest what to do next based on my schedule and priorities, so I don't have to figure it out myself.*

**US-047: Consider Multiple Factors**
*As a user, I want suggestions that consider due dates, goal alignment, and my available time, so recommendations are actually useful.*

**US-048: Snooze Suggestions**
*As a user, I want to snooze suggestions I don't want to do right now, so they don't clutter my view.*

**US-049: Accept Suggestions**
*As a user, I want to easily accept suggestions to add them to my Today view, so I can act on recommendations quickly.*

**Acceptance Criteria:**
- Next Action suggestions appear in Today view
- Scoring algorithm considers:
  - Due dates (closer = higher priority)
  - Goal alignment (aligned = higher priority)
  - Available calendar time (fits schedule = higher priority)
  - Energy tags (matches current state = higher priority)
- Users can snooze suggestions (hides for current session)
- Users can accept suggestions (adds to Today view)
- Suggestions refresh based on calendar changes

---

#### 4.5.3 Energy & Time Block Tags (MVP - Foundation)

**Product Requirement:** Users must be able to tag tasks with energy levels (High/Low) and time block categories (Quick Win/Focused/Deep Work) to aid in selection and planning.

**User Stories:**

**US-050: Tag Energy Levels**
*As a user, I want to tag tasks as High Energy or Low Energy, so I can match tasks to my current state.*

**US-051: Tag Time Blocks**
*As a user, I want to tag tasks as Quick Win, Focused, or Deep Work, so I know how long they'll take and when to schedule them.*

**US-052: Filter by Tags**
*As a user, I want to filter tasks by energy and time tags, so I can find tasks matching my current capacity.*

**Acceptance Criteria:**
- Tasks can be tagged with energy level (High ⚡, Low 🪫, or none)
- Tasks can be tagged with time block (Quick Win <15m, Focused 15-60m, Deep Work >1h)
- Tags are optional and user-assignable
- Filters available by energy and time block across views
- Tags visible in task lists and detail views

---

#### 4.5.4 Context Filtering (MVP - Enhanced)

**Product Requirement:** Users must be able to create custom contexts (e.g., #office, #errands) and filter tasks by them.

**User Stories:**

**US-053: Create Contexts**
*As a user, I want to create custom contexts using # tags (like #office or #errands), so I can organize tasks by where or when I do them.*

**US-054: Filter by Context**
*As a user, I want to filter my Today view and task lists by context, so I can see what I can do in my current location or situation.*

**US-055: Multiple Contexts**
*As a user, I want to filter by multiple contexts at once, so I can be specific about what I'm looking for.*

**Acceptance Criteria:**
- Users can create contexts using # prefix (e.g., #office, #errands, #calls)
- Contexts can be assigned to tasks
- Filter by one or more contexts available in Today and task views
- Multiple context filters use AND logic (task must match all)
- Contexts persist across sessions

---

#### 4.5.5 Focus Mode (MVP - Advanced)

**Product Requirement:** Users must have a dedicated "Focus Mode" for knocking out Quick Win tasks in batches.

**User Stories:**

**US-056: Focus Mode Access**
*As a user, I want a Focus Mode that shows only Quick Win tasks, so I can power through small items without distraction.*

**US-057: Timer Option**
*As a user, I want an optional timer in Focus Mode, so I can do focused work in time blocks (like Pomodoro).*

**US-058: Completion Summary**
*As a user, I want to see how many tasks I completed in Focus Mode, so I feel a sense of progress.*

**Acceptance Criteria:**
- Focus Mode filters to Quick Win tasks only (<15 minutes)
- Optional timer available (user-configurable duration)
- Full-screen or distraction-free UI option
- Tasks presented one at a time or short list
- Completed tasks removed from queue immediately
- Timer shows completion summary at end
- Focus Mode loads in <1 second

---

### 4.6 Requirement Set: Weekly Review

**User Need:** Maintain the system without friction (Section 3.6)

#### 4.6.1 Guided Weekly Review (MVP - Core)

**Product Requirement:** Users must have a guided, step-by-step weekly review process that walks them through maintaining their system.

**User Stories:**

**US-059: Review Prompt**
*As a user, I want to be reminded to do my weekly review if I haven't done one in 7 days, so the habit sticks.*

**US-060: Guided Steps**
*As a user, I want the review to walk me through clear steps, so I know exactly what to do without having to remember a process.*

**US-061: Review Progress**
*As a user, I want to see my progress through the review steps, so I know how much is left.*

**US-062: Skip or Complete**
*As a user, I want to be able to skip steps I don't need or mark them complete, so the review fits my workflow.*

**Acceptance Criteria:**
- System prompts for weekly review if none completed in 7 days
- Review includes these stages (in order):
  1. Capture Collection (prompt to gather all capture points)
  2. Inbox Zeroing (process all inbox items)
  3. Project Check (review projects, identify missing Next Actions)
  4. Goal Alignment (review and align unaligned projects)
  5. Incubator Review (review rotating subset of incubator items)
  6. Calendar Lookahead (review next week, plan time blocks)
- Each stage can be marked complete or skipped
- Progress indicator shows completion status
- Review can be paused and resumed
- All stages enabled by default (can be customized later)

---

#### 4.6.2 Review Analytics & Tracking (MVP - Enhanced)

**Product Requirement:** The system must track weekly review completion to support habit formation and success metrics.

**User Stories:**

**US-063: Review History**
*As a user, I want to see my review history, so I can track my consistency and feel good about maintaining the habit.*

**US-064: Review Duration**
*As a user, I want to see how long reviews take, so I know if I'm being efficient.*

**Acceptance Criteria:**
- Review sessions create audit trail (date, duration, stages completed)
- Users can view review history
- Review completion tracked for success metrics
- Data used to calculate "60% of users complete weekly review every 7 days" metric

---

### 4.7 Requirement Set: The Incubator

**User Need:** Store ideas for later without clutter (Section 3.7)

#### 4.7.1 Incubator Storage (MVP - Foundation)

**Product Requirement:** Users must have a dedicated "Incubator" space for storing ideas and aspirations that aren't ready to become projects yet.

**User Stories:**

**US-065: Create Incubator Items**
*As a user, I want to add ideas to an Incubator, so I don't lose them but also don't clutter my active project list.*

**US-066: Rich Notes**
*As a user, I want to add notes, images, and links to incubator items, so I can capture all the details I might need later.*

**US-067: Promote to Project**
*As a user, I want to promote an incubator item to a project with one action, so when an idea is ready, I can activate it quickly.*

**Acceptance Criteria:**
- Users can create incubator items with title and notes
- Incubator items support:
  - Rich text notes
  - Image attachments
  - URL links (stored as clickable references)
- Incubator items separate from active projects/tasks
- One-click promotion to project or task
- Promotion copies all notes, attachments, and links
- Original incubator item can be archived after promotion

---

#### 4.7.2 Incubator Review (MVP - Enhanced)

**Product Requirement:** The system must surface incubator items during weekly review for regular reassessment.

**User Stories:**

**US-068: Rotating Review**
*As a user, I want the weekly review to show me a rotating subset of incubator items, so I regularly reconsider ideas without being overwhelmed.*

**US-069: Configurable Count**
*As a user, I want to choose how many incubator items I review each week, so it matches my capacity.*

**Acceptance Criteria:**
- Weekly Review includes "Incubator Review" stage
- Shows rotating subset of items (default 5, user-configurable)
- Rotation ensures all items reviewed over time
- Users can promote items to projects during review
- Users can add new items to incubator from review flow

---

## 5. Projects & Next Actions (Core Concepts)

### 5.1 Projects

**Concept:** A Project is any outcome that requires more than one action to complete. Projects are the building blocks that organize related tasks.

**Product Requirements:**

**US-070: Create Projects**
*As a user, I want to create projects with a desired outcome, so I know what success looks like.*

**US-071: Project Status**
*As a user, I want projects to have status (Active, On Hold, Completed), so I can track their state.*

**US-072: Project Next Actions**
*As a user, I want each active project to have at least one Next Action, so I always know what to do next to move it forward.*

**Acceptance Criteria:**
- Projects require a "Desired Outcome" (clear success criteria)
- Projects can have status: Active, On Hold, Completed
- Active projects must have at least one Next Action
- Projects can be linked to one goal/horizon
- Projects can be archived or deleted

---

### 5.2 Next Actions

**Concept:** A Next Action is the single, visible task that moves a project forward. It's the answer to "What's the very next thing I need to do?"

**Product Requirements:**

**US-073: Next Actions List**
*As a user, I want to see all my Next Actions in one list, so I can choose what to do next.*

**US-074: Next Action Details**
*As a user, I want Next Actions to support optional metadata (context, energy, time block, due date), so I can organize and filter them.*

**US-075: Project Connection**
*As a user, I want to see which project a Next Action belongs to, so I understand why it matters.*

**Acceptance Criteria:**
- Next Actions are tasks that move projects forward
- Next Actions can optionally have:
  - Context tags (#office, #errands)
  - Contact tags (@person)
  - Energy level (High/Low)
  - Time block (Quick Win/Focused/Deep Work)
  - Due date
  - Planned start time
- Next Actions show associated project
- Completing a Next Action prompts to create the next one for that project

---

### 5.3 Areas (Future Consideration)

**Concept:** Areas are ongoing areas of responsibility (e.g., "Health", "Family") that don't have end dates but require maintenance. *Note: Evaluate during MVP development if Areas are needed or if Projects can serve this purpose.*

---

## 6. MVP Scope Summary

### 6.1 What's In (MVP)

**Platforms:**
- Responsive web app (works on desktop and mobile browsers)
- iOS mobile app (native or React Native)
- Email capture via unique forwarding address

**Core Features:**
- Web-based capture (always-visible input)
- Inbox with "Think Once" clarification flow
- Projects and Next Actions
- Today view with calendar integration
- Goal creation and project alignment
- Time blocking with Google Calendar sync
- Weekly Review guided flow
- Incubator for future ideas
- Focus Mode for Quick Wins
- Energy and time block tagging

**Integrations:**
- Google Calendar (OAuth, read/write sync)
- Gmail/Google Workspace email forwarding only

**Account Model:**
- Individual accounts
- Single personal workspace
- No collaboration features

---

### 6.2 What's Out (Post-MVP)

**Platforms:**
- Android native app
- Desktop applications (macOS/Windows)
- Browser extensions (Chrome, Safari, etc.)
- Additional capture methods beyond web, mobile, email

**Integrations:**
- Microsoft 365 / Outlook calendar
- Apple Calendar
- Exchange calendar
- Non-Gmail email providers

**Features:**
- Shared workspaces or team collaboration
- Advanced automation or AI features
- Contact directory integrations
- Public API or third-party integrations
- Machine-learned prioritization

**Other:**
- Multiple languages (English only in MVP)
- Multi-region data hosting beyond US/EU

---

## 7. Success Metrics

### 7.1 How We Measure Success

All metrics are measured per Weekly Active User (WAU) and aggregated at the cohort level. Analytics instrumentation respects user privacy and only collects data necessary for these metrics.

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| **Capture Speed** | 90% of captures saved in <5 seconds | Fast capture reduces friction and prevents lost ideas |
| **Inbox Health** | Median inbox items >24 hours old ≤10 by week 4 | Low inbox age means users are processing regularly |
| **Goal Alignment** | 70% of users align ≥1 project to goal in first 30 days | Goal alignment is core to value proposition |
| **Weekly Review** | 60% of users complete review every 7 days | Weekly review habit keeps system working |
| **Time Blocking** | 75% of tasks with due dates are time-blocked before due date | Time blocking connects tasks to realistic planning |

---

## 8. Assumptions & Constraints

### 8.1 User Assumptions

- Early adopters primarily use Google Workspace (Gmail + Google Calendar)
- Users accept opinionated design with smart defaults in exchange for speed
- Users will grant Google OAuth permissions for calendar access
- Weekly review coaching and nudges are essential for habit formation
- Users are familiar with or open to GTD-like productivity methodologies

### 8.2 Technical Constraints

- MVP supports Google Calendar only (most common among target users)
- Email capture limited to Gmail/Google Workspace (simplifies implementation)
- English-only interface for MVP (reduces complexity)
- Individual accounts only (no team features in MVP)
- Web-first with mobile companion (not native desktop apps)

### 8.3 Business Constraints

- MVP focuses on individual users, not teams
- Must be SOC 2 Type I ready and GDPR compliant at launch
- Analytics must respect privacy (no PII without consent)
- Account deletion must complete within 24 hours

---

## 9. Future Considerations

Features and enhancements deferred beyond MVP, organized by potential value and complexity:

### High Priority (Post-MVP)
- Android native app for broader mobile coverage
- Browser extensions for capture ubiquity
- Additional calendar integrations (Outlook, Apple Calendar)
- Enhanced mobile capture (share sheet improvements, offline-first)

### Medium Priority
- Collaboration features (shared projects, team workspaces)
- Advanced automation (templates, recurring projects)
- Contact management (integrated contacts, delegate tracking)
- Intelligence features (ML-based suggestions, auto-tagging)

### Lower Priority
- Public API and third-party integrations
- Advanced reporting and analytics dashboards
- Customizable views and workflows
- Multi-language support

---

## Appendix: User Story Reference

This section lists all user stories for easy reference and approval tracking.

### Capture (US-001 through US-011)
- US-001: Always-Visible Capture Input
- US-002: One-Key Submit
- US-003: Instant Feedback
- US-004: Ready for Next Capture
- US-005: Mobile App Capture
- US-006: Fast Mobile Entry
- US-007: Offline Mobile Capture
- US-008: Share Sheet Integration
- US-009: Email Forward Capture
- US-010: Preserve Email Content
- US-011: Unique Capture Address

### Inbox Processing (US-012 through US-019)
- US-012: Single-Action Processing
- US-013: Clear Action Options
- US-014: Automatic Advancement
- US-015: Minimal Prompts
- US-016: Keyboard Shortcuts
- US-017: Keyboard-Only Processing
- US-018: Progress Indicator
- US-019: Pause and Resume

### Calendar Integration (US-020 through US-032)
- US-020: Connect Calendar
- US-021: Simple Connection
- US-022: Disconnect Anytime
- US-023: Unified Today View
- US-024: Visual Distinction
- US-025: Conflict Highlighting
- US-026: Drag Tasks to Calendar
- US-027: Calendar Sync
- US-028: Resize Time Blocks
- US-029: Default Durations
- US-030: Weekly Planning View
- US-031: See Available Time
- US-032: Plan Multiple Days

### Goals & Alignment (US-033 through US-042)
- US-033: Create Goals
- US-034: Goal Details
- US-035: View All Goals
- US-036: Link Projects to Goals
- US-037: See Goal Alignment
- US-038: Goal-Driven Projects
- US-039: Identify Unaligned Projects
- US-040: Task Goal Context
- US-041: Goal-Filtered Views
- US-042: Goal Progress

### Smart Organization (US-043 through US-058)
- US-043: Curated Today View
- US-044: Organized Sections
- US-045: See Overdue Items
- US-046: Smart Suggestions
- US-047: Consider Multiple Factors
- US-048: Snooze Suggestions
- US-049: Accept Suggestions
- US-050: Tag Energy Levels
- US-051: Tag Time Blocks
- US-052: Filter by Tags
- US-053: Create Contexts
- US-054: Filter by Context
- US-055: Multiple Contexts
- US-056: Focus Mode Access
- US-057: Timer Option
- US-058: Completion Summary

### Weekly Review (US-059 through US-064)
- US-059: Review Prompt
- US-060: Guided Steps
- US-061: Review Progress
- US-062: Skip or Complete
- US-063: Review History
- US-064: Review Duration

### Incubator (US-065 through US-069)
- US-065: Create Incubator Items
- US-066: Rich Notes
- US-067: Promote to Project
- US-068: Rotating Review
- US-069: Configurable Count

### Projects & Actions (US-070 through US-075)
- US-070: Create Projects
- US-071: Project Status
- US-072: Project Next Actions
- US-073: Next Actions List
- US-074: Next Action Details
- US-075: Project Connection

---

*This PRD is a living document and will evolve based on user feedback and development learnings. User stories marked for approval will be finalized before development begins.*
