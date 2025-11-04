# FlowTD Setup Instructions

FlowTD is a task management system built following your PRD. This MVP includes the core features needed to get started.

## ✅ What's Been Built

### Core Infrastructure
- ✅ Next.js 16 with TypeScript and App Router
- ✅ Prisma ORM with SQLite database
- ✅ NextAuth authentication (Google OAuth ready)
- ✅ Tailwind CSS styling
- ✅ Complete database schema for all entities

### Implemented Features
- ✅ **Landing Page** - Marketing page with Google sign-in
- ✅ **Dashboard Layout** - Navigation with Today, Inbox, Projects, Goals, Incubator, Weekly Review, Focus Mode
- ✅ **Universal Capture** - Always-visible input field for quick task capture
- ✅ **Today View** - Shows active tasks for today with energy levels and time blocks
- ✅ **Inbox Processing** - "Think Once" clarification flow with keyboard shortcuts:
  - Do It (D)
  - Next Action (N)
  - Later (L)
  - Waiting (W)
  - Project (P)
  - Delete (Del)
- ✅ **API Endpoints** - RESTful APIs for inbox and tasks

### Database Models
- ✅ Users with authentication
- ✅ Tasks with full metadata support
- ✅ Projects with goal alignment
- ✅ Goals with 4 horizons
- ✅ InboxItems with source tracking
- ✅ IncubatorItems for future ideas
- ✅ WeeklyReview tracking
- ✅ TimeBlocks for calendar integration
- ✅ CalendarConnection for OAuth
- ✅ AnalyticsEvent for metrics

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd flowtd
npm install
```

### 2. Set Up Environment Variables
Create a `.env` file in the flowtd directory:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-here"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### 3. Set Up Google OAuth (for authentication)
1. Go to Google Cloud Console
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Secret to `.env`

### 4. Initialize Database
```bash
npm run db:generate
npm run db:push
```

### 5. Run Development Server
```bash
npm run dev
```

Open http://localhost:3000

## 📋 Next Steps

### To Complete MVP
1. **Google Calendar Integration**
   - Implement OAuth token refresh
   - Add calendar API calls
   - Build time blocking UI
   - Sync events bidirectionally

2. **Projects & Goals**
   - Create project management UI
   - Build goal creation and editing
   - Link projects to goals
   - Add goal progress tracking

3. **Incubator**
   - Build item creation UI
   - Add promotion flow
   - Implement rotating review

4. **Weekly Review**
   - Build guided flow UI
   - Add progress tracking
   - Implement reminders

5. **Focus Mode**
   - Create Quick Wins filter
   - Add Pomodoro timer
   - Build completion tracking

6. **Mobile App**
   - Set up React Native
   - Build capture interface
   - Add offline support

## 🗂️ Project Structure

```
flowtd/
├── app/                    # Next.js App Router
│   ├── api/                # API routes
│   ├── dashboard/          # Dashboard pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── providers.tsx      # Session provider
├── components/            # React components
│   ├── capture-input.tsx   # Universal capture
│   ├── dashboard-layout.tsx # Navigation
│   ├── inbox-processor.tsx # Clarification flow
│   ├── landing.tsx        # Landing page
│   └── today-view.tsx     # Today view
├── lib/                   # Utilities
│   ├── auth.ts           # NextAuth config
│   └── db.ts             # Prisma client
└── prisma/
    └── schema.prisma      # Database schema
```

## 🎯 User Stories Implemented

### Capture (MVP - Basic)
- US-001: Always-Visible Capture Input ✅
- US-002: One-Key Submit ✅
- US-003: Instant Feedback ✅
- US-004: Ready for Next Capture ✅

### Inbox Processing (MVP - Core)
- US-012: Single-Action Processing ✅
- US-013: Clear Action Options ✅
- US-014: Automatic Advancement ✅
- US-016: Keyboard Shortcuts ✅

## 📊 Architecture Decisions

### Database
- SQLite for MVP (easy to switch to Postgres for production)
- Prisma ORM for type safety
- No enums (SQLite limitation) - using strings with validation

### Authentication
- NextAuth.js for OAuth
- Google provider only for MVP
- Session-based auth with JWT

### UI
- Tailwind CSS for styling
- Lucide icons
- Responsive design
- Mobile-first approach

## 🧪 Testing

Currently no tests. Recommended to add:
- Unit tests for business logic
- Integration tests for APIs
- E2E tests for critical flows

## 📝 Notes

- All user stories from PRD are tracked and prioritized
- Database schema supports all MVP features
- API structure is in place
- UI components are basic but functional
- Ready for feature enhancement

## 🚧 Known Limitations

- No calendar integration yet
- No email capture yet
- No mobile app yet
- Placeholder pages for several features
- No analytics tracking yet
- Google OAuth needs configuration

## 🤝 Contributing

This is a foundation for building out the full MVP per your PRD. Each major feature can be built incrementally.

## 📄 License

Private - All rights reserved

