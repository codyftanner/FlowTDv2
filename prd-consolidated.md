# Product Requirements Document: FlowTD
**A Task Management System Built on "Think Once" Principles**

Version: 1.0
Last Updated: 2025-11-03
Status: Draft for Review

---

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [User Needs](#2-user-needs)
3. [Requirements](#3-requirements)
4. [User Stories](#4-user-stories)
5. [MVP Scope](#5-mvp-scope)
6. [Success Metrics](#6-success-metrics)
7. [Constraints & Assumptions](#7-constraints--assumptions)
8. [Appendices](#8-appendices)

---

## 1. Product Overview

### 1.1 Vision

FlowTD is a task management system designed to be a trusted extension of your mind. It eliminates the gap between having an idea and taking action, while ensuring everything you do connects to what matters most. Built on GTD (Getting Things Done) principles, the system adapts to how you work, not the other way around.

### 1.2 Core Principle: "Think Once"

Every decision about a task should be captured in a single interaction. Users should never need to re-process or re-decide on the same item. This principle drives every design decision in FlowTD.

### 1.3 Value Proposition

**For ambitious professionals who value focus and efficiency, FlowTD transforms task management from a burden into a strategic advantage by:**

1. **Instant Capture Everywhere** - Catch any thought in under 5 seconds, anywhere you are
2. **Process Once, Never Revisit** - Make one decision about each item and move on
3. **Tasks Meet Time** - See what needs doing alongside when you're actually available
4. **Daily Work, Bigger Goals** - Every task visibly connects to your long-term aspirations
5. **Smart Defaults, Less Decisions** - The system makes good choices so you don't have to
6. **Weekly Reset** - A simple ritual keeps everything organized and inspiring

### 1.4 Target User: Alex, The Ambitious Professional

Alex is a knowledge worker—a manager, consultant, or creative professional—who juggles multiple projects and competing priorities. They're familiar with productivity systems like GTD and have tried various task management tools, but nothing has stuck.

**Alex's Daily Reality:**
- Receives 50-100 inputs daily (emails, messages, ideas, requests)
- An overflowing inbox of unprocessed items
- A calendar full of meetings with no time for actual work
- A disconnect between daily tasks and quarterly goals
- Constant decision fatigue from too many choices
- Struggles deciding what to work on next
- Works across multiple contexts (office, home, online)

**What Alex Needs:**
A system that respects their time, reduces cognitive load, helps them see the bigger picture, and connects daily work to what truly matters—without requiring constant maintenance or decision-making.

### 1.5 Key Differentiators

Unlike other task management tools, FlowTD:
- **Connects tasks to calendar time** - Not just lists, but realistic time-based planning
- **Links actions to goals** - Every task shows why it matters through goal alignment
- **Processes inbox items in one action** - No revisiting, no decision paralysis
- **Guides weekly reviews** - Builds the habit that keeps everything working
- **Opinionated by design** - Makes smart defaults so you don't have to configure everything
- **Context-first organization** - Can only do @office tasks when at office

---

## 2. User Needs

This section documents the fundamental user needs that drive all requirements. Each need includes context, value, and traceability.

### N1: Capture Thoughts Before They're Lost

**Context:** Great ideas and important tasks slip away because there's no easy way to capture them in the moment. Opening apps takes too long, requiring too many steps to save something. By the time you get to your task management tool, you've forgotten half of what you wanted to remember.

**Value:** Without frictionless capture, users lose critical information, miss commitments, and develop distrust in their system. Fast capture reduces resistance to capturing everything, which is the foundation of GTD methodology.

**Current Pain Points:**
- Opening apps takes too long
- Too many steps and required fields to save something
- Different tools for different devices creates friction
- Email-based tasks get lost in inbox
- Capture depends on internet connectivity

**Desired Outcome:** Capture any thought or task in under 5 seconds, from any device or location, with zero context switching and no required metadata.

---

### N2: Process Inbox Without Decision Paralysis

**Context:** Most task management tools dump everything into an inbox, then require multiple clicks, fields, and decisions to process each item. Users either avoid their inbox (letting it grow to hundreds of items) or spend too much time processing. During clarification of a large backlog, users cannot efficiently handle quick tasks without losing track of potentially urgent items still unreviewed.

**Value:** If inbox processing is painful, users stop doing it. The system becomes a graveyard of unprocessed items. A backlog of 50+ unclarified items creates anxiety and reduces trust in the system.

**Current Pain Points:**
- Too many fields to fill out for each item
- Unclear what to do with each item
- Have to revisit items multiple times
- Don't know where items "should" go
- Multiple decision points per item breaks flow
- Quick tasks interrupt clarification flow

**Desired Outcome:** Process each inbox item with a single action that fully handles it—no revisiting, no second-guessing. Ability to batch process 20+ items without context switching while handling quick tasks efficiently.

---

### N3: See Tasks and Calendar Together

**Context:** Tasks live in one tool, calendar in another. Users can't realistically plan because they don't see available time alongside what needs doing. Result: tasks pile up, calendar fills with meetings, and important work never gets scheduled. Plans feel aspirational rather than realistic.

**Value:** Without integrated calendar visibility, users overcommit, miss deadlines, and feel constantly behind. The disconnect between "what to do" and "when to do it" is a fundamental failure of most task systems.

**Current Pain Points:**
- Tasks and calendar are in separate systems
- Can't see if there's actually time for a task
- Hard to plan realistically
- Schedule conflicts go unnoticed until too late
- Time blocking requires manual duplication

**Desired Outcome:** See tasks and calendar in one unified view, with the ability to drag tasks onto available time slots, see conflicts immediately, and sync time blocks back to calendar for universal visibility.

---

### N4: Connect Daily Work to Bigger Goals

**Context:** It's easy to get lost in daily tasks and lose sight of why you're doing them. There's no visible connection between the urgent email reply and your quarterly objective. This creates a sense of busy work without progress. Users feel productive (completing tasks) but not effective (advancing goals).

**Value:** Without goal alignment, users spend time on what's urgent rather than what's important. The tyranny of the urgent dominates, and strategic objectives slip quarter after quarter.

**Current Pain Points:**
- Goals and tasks live in separate worlds
- Hard to see if daily work matters
- Feel busy but not productive
- Can't prioritize based on what matters
- Goals get reviewed once per quarter then forgotten

**Desired Outcome:** Every task and project shows which goal it supports, making it easy to see if you're spending time on what matters. Unaligned work is visible and can be questioned or deprioritized.

---

### N5: Know What to Do Right Now

**Context:** Users spend too much time deciding what to do next. They see long lists of tasks but don't know which one to tackle. Energy levels, available time, current location, and priorities all matter, but most tools ignore these factors. A user at home can't do @office tasks. A user with 10 minutes can't start deep work.

**Value:** Decision fatigue is real. Every moment spent deciding "what should I work on?" is wasted cognitive energy. Without context-aware filtering, users scan long lists trying to mentally filter what's actually possible right now.

**Current Pain Points:**
- Overwhelmed by long, unfiltered task lists
- Don't know what to prioritize
- Energy levels and available time aren't considered
- Context (location, tools, people) isn't respected
- Miss quick wins between meetings
- Can't find tasks that fit available time

**Desired Outcome:** A curated "Today" view that considers due dates, goals, available time, energy levels, and context to show what's most relevant right now. Ability to filter by context, time requirement, and energy level to find actionable tasks.

---

### N6: Maintain the System Without Friction

**Context:** Task management systems fall apart when not maintained. Inboxes fill up, projects go stale, tasks sit untouched for months, and goals get forgotten. Most tools require discipline but don't help build it. Users know they "should" do a weekly review but don't know what that means or how to make it efficient.

**Value:** Without regular maintenance, systems degrade. Stale tasks create noise and distrust. Users abandon systems that become messy. Regular weekly reviews are the linchpin habit that keeps GTD systems working, but they need to be guided and efficient.

**Current Pain Points:**
- System gets messy over time
- Hard to know what to review
- Weekly review feels like a chore (takes 1-2 hours)
- No guidance on what maintenance means
- Can't identify stale or problematic items
- No bulk operations for cleanup

**Desired Outcome:** A guided weekly review that's fast (20-30 minutes), helpful (surfaces real issues), and builds the habit of keeping everything organized and aligned. System identifies stale items, projects without next actions, and overdue follow-ups automatically.

---

### N7: Store Ideas for Later Without Clutter

**Context:** Not every idea is ready to become a project. Users need a place to park future possibilities (GTD's "Someday/Maybe") without cluttering their active task lists, but with a way to revisit them regularly. Without this, users either lose ideas or clutter their active workspace.

**Value:** The mind holds onto ideas that don't have a trusted place to go. A dedicated incubator reduces mental clutter while preserving optionality for the future.

**Current Pain Points:**
- Don't know where to put "maybe someday" ideas
- Active lists get cluttered with future aspirations
- Forget about ideas because they're buried in lists
- No good way to evaluate if an idea is ready
- Someday/maybe becomes a graveyard rather than an incubator

**Desired Outcome:** A dedicated space (the Incubator) for ideas and aspirations that aren't ready yet, with regular review prompts during weekly reviews to reassess them. Easy promotion to active projects when ready.

---

### N8: Track Delegated Items and Commitments

**Context:** When users delegate tasks to others or are waiting on responses, they need to track these items separately from their own next actions. Without tracking, delegated items are forgotten, follow-ups are missed, and commitments fall through the cracks. Users need to distinguish between "discuss with person" (agenda items) and "waiting for person" (delegated items).

**Value:** Dropped commitments damage relationships and reputation. Managers especially need visibility into what they're waiting for from team members. Without this, users either micromanage (constant check-ins) or abandon (forget entirely).

**Current Pain Points:**
- Lose track of delegated items
- Miss follow-up opportunities
- Can't quickly see what they're waiting for from a specific person
- No distinction between agenda items and waiting items
- Overdue delegations discovered too late

**Desired Outcome:** Clear tracking of waiting items with follow-up dates. Ability to see all items waiting on a specific person. System prompts for follow-up when dates arrive. Distinction between agenda items (to discuss) and waiting items (delegated).

---

## 3. Requirements

Requirements are organized by capability area and use RFC 2119 language (SHALL, SHOULD, MAY, SHALL NOT, SHOULD NOT). Each requirement is testable and includes traceability to user needs.

### 3.1 Capture Requirements

#### R1 [→ N1]: Instant Web-Based Capture

The system SHALL provide a capture input field that is visible on all primary web interface views without navigation.

**Test Criteria:**
- Capture input visible on Inbox, Today, Projects, and Goals views
- No navigation required to access capture
- Field accepts text input of at least 500 characters
- Visual confirmation provided within 300ms of submission

**Priority:** P0 (MVP Core)

---

#### R2 [→ N1]: Minimal Capture Requirements

The system SHALL NOT require any metadata beyond a title/description during initial capture.

**Test Criteria:**
- Item can be saved with title text only
- All other fields (due date, project, context, energy, etc.) are optional
- No required dropdowns or selections during capture
- Submission succeeds with title-only input

**Priority:** P0 (MVP Core)

**Rationale:** Minimize friction at capture point. Clarification happens later during processing.

---

#### R3 [→ N1]: Rapid Capture Submission

The system SHALL allow capture submission via Enter key without requiring mouse interaction.

**Test Criteria:**
- Pressing Enter submits the capture
- Field clears automatically after submission
- Focus returns to capture field for next entry
- Total time from typing to ready-for-next: <500ms

**Priority:** P0 (MVP Core)

---

#### R4 [→ N1]: Capture Performance

The system SHALL complete capture submission in under 100ms (client-side) and under 3 seconds (end-to-end including sync).

**Test Criteria:**
- Client-side feedback: <100ms
- Item appears in inbox: <3 seconds
- No blocking UI during submission
- Offline captures queue and sync when connected

**Priority:** P0 (MVP Core)

---

#### R5 [→ N1]: Mobile Capture Application

The system SHALL provide a mobile application (iOS) optimized for rapid capture with app launch to capture completion in under 5 seconds total.

**Test Criteria:**
- App opens to capture screen in <2 seconds
- Capture submission completes in <3 seconds
- Total elapsed time: <5 seconds
- Measured from cold start on representative device

**Priority:** P0 (MVP Core)

---

#### R6 [→ N1]: Offline Mobile Capture

The system SHALL support offline capture on mobile devices with automatic sync when connectivity is restored.

**Test Criteria:**
- Captures succeed without network connection
- Items queue locally with visual indication
- Automatic sync on reconnection
- No data loss during offline period

**Priority:** P0 (MVP Core)

---

#### R7 [→ N1]: Mobile Share Sheet Integration

The system SHALL provide iOS share sheet integration allowing capture from any application.

**Test Criteria:**
- FlowTD appears in iOS share sheet
- Can capture text, URLs, and images
- Captured content appears in inbox with source metadata
- Completes in <5 seconds from share sheet invocation

**Priority:** P1 (MVP Enhanced)

---

#### R8 [→ N1]: Email Capture

The system SHALL provide each user a unique email address for capturing tasks via email forwarding.

**Test Criteria:**
- Unique address format: `user-[id]@capture.flowtd.com`
- Forwarded emails appear in inbox within 60 seconds
- Email subject becomes task title
- Email body, sender, and metadata preserved in task details
- Gmail/Google Workspace supported in MVP

**Priority:** P1 (MVP Enhanced)

---

### 3.2 Clarification Requirements

#### R9 [→ N2]: Single-Action Processing

The system SHALL allow users to fully process an inbox item with a single action, moving it from unclarified to final state without additional interactions.

**Test Criteria:**
- One click/keypress completes clarification
- Item removed from inbox after action
- System automatically advances to next inbox item
- No intermediate confirmation dialogs (except where contextually required)
- 95% of clarifications complete in one interaction

**Priority:** P0 (MVP Core)

**Rationale:** Implements "think once" principle. Multiple decision points break flow.

---

#### R10 [→ N2]: Clarification Action Set

The system SHALL support the following single-action clarification decisions:

1. **Do It** - Mark as complete immediately (2-minute rule)
2. **Next Action** - Promote to active task list with optional project assignment
3. **Later** - Defer to future date with optional "hide until" date
4. **Waiting** - Mark as waiting on person/thing with follow-up date
5. **Project** - Convert to project or attach to existing project with outcome
6. **Delete** - Remove permanently

**Test Criteria:**
- All six actions available for every inbox item
- Each action completes in one interaction (except minimal prompts noted below)
- Required prompts only:
  - Waiting: Delegate name, follow-up date
  - Project: Desired outcome (if new project)
  - Later: Date (optional)
- All other metadata (context, energy, time) remains optional

**Priority:** P0 (MVP Core)

---

#### R11 [→ N2]: Keyboard-Driven Clarification

The system SHALL provide keyboard shortcuts for all clarification actions enabling keyboard-only batch processing.

**Test Criteria:**
- Each clarification action has single-key shortcut
- Shortcuts work consistently across all inbox items
- Visual indication of available shortcuts
- No requirement for modifier keys (Ctrl, Alt, etc.) for primary actions
- Can process 20+ items without mouse interaction

**Priority:** P0 (MVP Core)

**Suggested Shortcuts:** D (Do It), N (Next Action), L (Later), W (Waiting), P (Project), Del/Backspace (Delete)

---

#### R12 [→ N2]: Automatic Advancement

The system SHALL automatically display the next inbox item immediately after processing the current item.

**Test Criteria:**
- Next item appears within 200ms of current item processing
- No manual "next" button required
- Order preserves queue (FIFO unless user-sorted)
- Clear indication when inbox is empty
- Processing history tracked for analytics

**Priority:** P0 (MVP Core)

---

#### R13 [→ N2]: Minimal Processing Prompts

The system SHALL minimize additional prompts during clarification, requesting only essential metadata that cannot be deferred.

**Test Criteria:**
- Do It: No prompts
- Next Action: No prompts (all metadata optional)
- Later: Optional date picker only
- Waiting: Required delegate name + optional follow-up date with smart default
- Project: Required outcome if creating new project
- Delete: Confirm only if item has metadata/attachments

**Priority:** P0 (MVP Core)

**Constraint:** SHALL NOT prompt for context, energy level, time estimate, or priority during clarification. These can be added later if needed but should not block rapid processing.

---

#### R14 [→ N2]: Clarification Performance

The system SHALL complete clarification actions with latency under 200ms for responsive batch processing.

**Test Criteria:**
- Action to next-item-display: <200ms
- Measured for all clarification actions
- Maintains performance with 100+ inbox items
- No degradation during batch sessions

**Priority:** P0 (MVP Core)

---

#### R15 [→ N2]: Batch Processing Mode

The system SHALL provide a dedicated batch processing interface for rapid inbox processing with progress indication and pause/resume capability.

**Test Criteria:**
- Progress indicator shows "X of Y items remaining"
- Can pause processing and exit without losing place
- Can resume processing from last position
- Keyboard shortcuts enabled throughout
- Median processing time per item: <10 seconds

**Priority:** P1 (MVP Enhanced)

---

#### R16 [→ N2]: Quick Task Queue

The system SHALL allow users to queue 2-minute "Do It" tasks for batch execution without interrupting clarification flow.

**Test Criteria:**
- "Do It → Queue" action available during clarification
- Queued tasks visible in dedicated "Quick Wins" view
- Can execute queued tasks in batch
- Queued tasks auto-tagged as <15 minutes
- User can defer immediate execution without losing track

**Priority:** P2 (Future)

**Rationale:** Solves problem of too many 2-minute tasks during clarification. Users can queue them and knock them out in one focused batch later.

---

### 3.3 Calendar Integration Requirements

#### R17 [→ N3]: Google Calendar Connection

The system SHALL allow users to connect their Google Calendar account via OAuth 2.0 for bidirectional event sync.

**Test Criteria:**
- OAuth flow completes in <30 seconds
- Clear explanation of requested permissions
- Disconnect option available in settings
- Connection status visible in UI
- Supports Google Workspace and consumer Gmail accounts

**Priority:** P0 (MVP Core)

---

#### R18 [→ N3]: Calendar Event Visibility

The system SHALL display Google Calendar events in FlowTD views with visual distinction from tasks while maintaining unified timeline.

**Test Criteria:**
- Calendar events appear in Today view
- Events visually distinct from tasks (color, shape, or styling)
- Events are read-only (no editing in FlowTD)
- Events sync within 60 seconds of changes in Google Calendar
- Multiple calendars supported with filtering

**Priority:** P0 (MVP Core)

---

#### R19 [→ N3]: Unified Today View

The system SHALL present a unified Today view showing both calendar events and tasks on the same timeline.

**Test Criteria:**
- Single view shows both events and tasks
- Timeline organized by time of day
- Unscheduled tasks shown in separate section
- Drag-and-drop enabled (see R21)
- View updates in real-time with calendar changes

**Priority:** P0 (MVP Core)

---

#### R20 [→ N3]: Scheduling Conflict Detection

The system SHALL visually highlight when tasks are scheduled during existing calendar events.

**Test Criteria:**
- Overlapping time blocks highlighted with warning indicator
- Conflict explanation available on hover/tap
- Does not prevent creation (warns but allows)
- Conflicts detected within 60 seconds of creation

**Priority:** P1 (MVP Enhanced)

---

#### R21 [→ N3]: Task-to-Calendar Time Blocking

The system SHALL allow users to drag tasks onto calendar timeline to create time blocks that sync bidirectionally with Google Calendar.

**Test Criteria:**
- Drag-and-drop works on desktop (mouse) and mobile (touch)
- Time blocks appear in Google Calendar within 60 seconds
- Time blocks link back to original FlowTD task
- Deleting time block in either system removes both
- Task shows planned start time after scheduling

**Priority:** P0 (MVP Core)

---

#### R22 [→ N3]: Time Block Duration Management

The system SHALL allow users to resize time blocks and set default durations by task type.

**Test Criteria:**
- Time blocks resizable by dragging edges
- Default durations configurable by tag (Quick Win, Focused, Deep Work)
- Suggested defaults: Quick Win 15m, Focused 30m, Deep Work 90m
- Manual override available during drag
- Duration changes sync to calendar

**Priority:** P1 (MVP Enhanced)

---

#### R23 [→ N3]: Weekly Planning View

The system SHALL provide a 7-day calendar planning view with task list panel for strategic weekly planning.

**Test Criteria:**
- Shows 7 days starting from current day or Monday
- Existing calendar events displayed as non-editable blocks
- Task list panel alongside calendar
- Drag tasks onto any visible day
- All changes sync bidirectionally
- Available time visually distinct from scheduled time

**Priority:** P1 (MVP Enhanced)

---

### 3.4 Organization Requirements

#### R24 [→ N5]: Context-Based Task Organization

The system SHALL support context tags using # prefix for location/tool/person-based organization.

**Test Criteria:**
- Contexts created using # prefix (e.g., #office, #phone, #errands)
- Tasks can have multiple contexts assigned
- Context filtering available in all task views
- Common contexts suggested during tagging
- Contexts persist across sessions

**Priority:** P0 (MVP Core)

**Examples:** #office, #phone, #online, #home, #errands, #agenda-[person]

**Rationale:** Core GTD principle. Can't do @office tasks at home.

---

#### R25 [→ N5]: Energy Level Tagging

The system SHALL support energy level tagging with maximum 2 levels to reduce decision complexity.

**Test Criteria:**
- Two energy levels: High Energy (⚡) and Low Energy (🪫)
- Tasks can be tagged with energy level (optional)
- Energy filter available in task selection views
- No energy tag = works for either energy level
- Energy tags visible in task lists

**Priority:** P1 (MVP Enhanced)

**Constraint:** SHALL NOT support more than 2 energy levels. Additional granularity creates decision paralysis.

**Rationale:** Users have varying energy throughout the day. High energy tasks require focus and creativity. Low energy tasks are routine or administrative.

---

#### R26 [→ N5]: Time Estimate Categories

The system SHALL support time estimate categories with maximum 3 levels to enable quick filtering.

**Test Criteria:**
- Three time categories:
  - Quick Win: <15 minutes
  - Focused Work: 15-60 minutes
  - Deep Work: >1 hour
- Tasks can be tagged with time category (optional)
- Time filter available in task views
- No time tag = duration unknown
- Time tags visible in task lists

**Priority:** P1 (MVP Enhanced)

**Constraint:** SHALL NOT support finer-grained time estimates or free-text time entry. Three categories reduce decision overhead.

**Rationale:** "Can I do this before my next meeting?" Users need to find tasks that fit available time.

---

#### R27 [→ N8]: Waiting For Tracking

The system SHALL distinguish between "Waiting For" (delegated items) and "Agenda" (discussion topics) with separate tracking.

**Test Criteria:**
- Waiting items track: person/thing waiting on, follow-up date
- Agenda items track: person, discussion topics
- Separate views for Waiting and Agenda
- Can filter by person to see all items related to them
- System prompts for follow-up when dates arrive

**Priority:** P1 (MVP Enhanced)

**Rationale:** Different follow-up patterns and ownership. Waiting = you delegated and need follow-up. Agenda = you want to discuss in next meeting.

---

### 3.5 Project Requirements

#### R28 [→ N4, N6]: Project Creation and Management

The system SHALL support multi-step projects with defined outcomes, status tracking, and next action requirements.

**Test Criteria:**
- Projects require "Desired Outcome" field (what success looks like)
- Projects support status: Active, On Hold, Completed, Archived
- Active projects must have at least one Next Action (system warns if missing)
- Projects can be linked to one goal/horizon
- Projects can have optional notes, links, and metadata

**Priority:** P0 (MVP Core)

**Rationale:** Projects are outcomes requiring more than one action. Clear outcomes prevent projects from becoming task graveyards.

---

#### R29 [→ N4, N6]: Next Action Linkage

The system SHALL visibly connect Next Actions to their parent projects and show project context in task views.

**Test Criteria:**
- Next Actions display associated project
- Project detail view shows all Next Actions
- Completing Next Action prompts to create next one
- Orphaned Next Actions (no project) clearly indicated
- Can filter tasks by project

**Priority:** P0 (MVP Core)

---

#### R30 [→ N6]: Stale Project Detection

The system SHALL identify projects without Next Actions during weekly review for maintenance.

**Test Criteria:**
- Weekly review surfaces projects without Next Actions
- Projects with no activity for 30+ days highlighted
- Bulk actions available (add Next Action, put On Hold, Archive)
- Count of stale projects visible in dashboard

**Priority:** P1 (MVP Enhanced)

**Rationale:** Projects without Next Actions are stuck. This is a key indicator of system health.

---

### 3.6 Goal Alignment Requirements

#### R31 [→ N4]: Multi-Horizon Goal Framework

The system SHALL support goal definition across four time horizons: Purpose, 3-5 Year Vision, 1-2 Year Goals, and Quarterly Objectives.

**Test Criteria:**
- Four horizon levels available
- Goals can include: title, description, success criteria, target date
- Goals can be edited, archived, marked complete
- Goals view organized by horizon
- Within-horizon ordering supported

**Priority:** P1 (MVP Enhanced)

**Rationale:** Aligns with GTD's Horizons of Focus framework. Quarterly objectives are minimum for MVP impact.

---

#### R32 [→ N4]: Project-to-Goal Linking

The system SHALL allow projects and areas to be linked to goals with relationship visibility throughout the system.

**Test Criteria:**
- Projects can be associated with exactly one goal/horizon
- Goal association visible in project detail view
- Goal detail view shows all associated projects
- Can filter projects by goal
- Association can be changed at any time

**Priority:** P1 (MVP Enhanced)

---

#### R33 [→ N4]: Unaligned Project Visibility

The system SHALL visually highlight projects without goal alignment to support prioritization decisions.

**Test Criteria:**
- Projects without goal alignment have visual indicator
- Weekly review includes "Align Projects" stage
- Count of unaligned projects visible in dashboard
- Can bulk-select and assign goals

**Priority:** P2 (Future)

**Rationale:** Unaligned projects may be important but should be consciously evaluated. Forces users to question if work supports goals.

---

#### R34 [→ N4]: Goal Context in Task Views

The system SHALL display goal alignment context in task detail views and support goal-based filtering.

**Test Criteria:**
- Task detail shows: Task → Project → Goal hierarchy
- Today view can optionally show goal context
- Filter by goal available in task and project views
- Goal progress based on completed projects visible in goal view

**Priority:** P2 (Future)

---

### 3.7 Task Selection Requirements

#### R35 [→ N5]: Intelligent Today View

The system SHALL present a curated Today view with sections organized by priority and actionability.

**Test Criteria:**
- Today view loads in <2 seconds
- Sections displayed in order:
  1. Calendar Events (today's schedule)
  2. Active Tasks (with planned start today)
  3. Due/Overdue (true deadlines today or past)
  4. Waiting On (items blocked on others, follow-up today)
  5. Suggested Next Actions (system recommendations)
  6. Quick Wins (tasks <15 minutes, current context)
- Sections collapsible
- Overdue items visually distinct
- Empty sections hidden by default

**Priority:** P0 (MVP Core)

---

#### R36 [→ N5]: Context-Based Task Filtering

The system SHALL filter task lists by current context to show only actionable items for user's location/situation.

**Test Criteria:**
- Filter by one or more contexts
- Multiple context filters use AND logic (must match all)
- Context filtering available in Today and all task views
- Quick context toggles for common contexts
- Selected contexts persist across sessions

**Priority:** P0 (MVP Core)

**Rationale:** Can only do @office tasks when at office. Context awareness is fundamental to GTD.

---

#### R37 [→ N5]: Multi-Dimensional Task Filtering

The system SHALL support filtering by combinations of context, energy level, and time available.

**Test Criteria:**
- Can filter by: context + energy + time simultaneously
- Example: "Show me @office tasks, high energy, <30 minutes"
- Filters applied without page reload
- Filter state visible and clearable
- Common filter combinations saveable (P2)

**Priority:** P1 (MVP Enhanced)

**Rationale:** "What can I do right now given I'm at the office, have 30 minutes before my meeting, and am low energy?"

---

#### R38 [→ N5]: Smart Next Action Suggestions

The system SHOULD intelligently suggest next actions based on multiple factors without requiring manual curation.

**Test Criteria:**
- Scoring algorithm considers:
  - Due dates (closer = higher priority)
  - Goal alignment (aligned = higher priority)
  - Available calendar time (fits schedule = higher priority)
  - Energy tags (matches time of day patterns = higher priority)
  - Context (matches current or unspecified = higher priority)
- Suggestions appear in Today view
- Users can snooze suggestions (hides for current day)
- Users can accept suggestions (adds to Active Tasks)
- Suggestions refresh based on context/time changes

**Priority:** P2 (Future)

**Note:** Algorithm complexity requires iteration. Start simple (due dates + goal alignment) and enhance.

---

#### R39 [→ N5]: Focus Mode

The system SHALL provide a distraction-free Focus Mode for batch execution of Quick Win tasks.

**Test Criteria:**
- Focus Mode shows only Quick Win tasks (<15 minutes)
- Optional timer available (configurable duration, default 25 minutes)
- Tasks presented one at a time or short list (user configurable)
- Completed tasks removed immediately
- Completion summary at end of session
- Focus Mode loads in <1 second

**Priority:** P2 (Future)

**Rationale:** For knocking out small tasks in pockets of time between meetings.

---

### 3.8 Temporal Requirements

#### R40 [→ N5]: True Deadline Distinction

The system SHALL distinguish between externally-imposed deadlines and user preferences, treating only true deadlines as due dates.

**Test Criteria:**
- Due date field labeled as "True Deadline" with explanation
- Guidance: "Only externally-imposed deadlines, not preferences"
- Optional "Target Date" field for preferences (displayed differently)
- Due dates trigger high-priority placement in Today view
- Target dates suggest but don't demand

**Priority:** P1 (MVP Enhanced)

**Constraint:** SHALL NOT treat all tasks as requiring due dates. Most tasks don't have true deadlines.

**Rationale:** Artificial urgency undermines trust in the system. If everything is urgent, nothing is urgent.

---

#### R41 [→ N2]: Hide Until / Defer Functionality

The system SHALL support "Hide Until" functionality to remove tasks from views until a specified future date.

**Test Criteria:**
- "Hide Until" date can be set during clarification or later
- Hidden tasks removed from all views (Inbox, Today, Next Actions) until date
- Hidden tasks automatically surface on specified date
- Hidden tasks visible in dedicated "Hidden" view
- Count of hidden tasks shown in sidebar

**Priority:** P1 (MVP Enhanced)

**Rationale:** Reduces noise from items that cannot be acted upon yet. "Can't work on this until contractor finishes repairs" shouldn't clutter daily views.

---

#### R42 [→ N8]: Follow-Up Date Tracking

The system SHALL track follow-up dates for Waiting For items with automatic surfacing on specified dates.

**Test Criteria:**
- Waiting items require follow-up date (with smart default suggestion)
- Waiting items surface in Today view on follow-up date
- Overdue follow-ups highlighted in Waiting view
- System suggests default based on any existing due date
- Can update follow-up date without removing from Waiting

**Priority:** P1 (MVP Enhanced)

**Rationale:** Ensures delegated items aren't forgotten. "I delegated this to Bob, need to follow up Friday if not done."

---

#### R43 [→ N5]: No Task Reminder Times

The system SHALL NOT support time-of-day reminders or notifications for tasks.

**Test Criteria:**
- No reminder time field available for tasks
- No push notifications for "do this task now"
- Calendar events have times (from Google Calendar)
- Time blocks have times (scheduled work)
- Tasks are context-based, not time-based

**Priority:** P0 (MVP Core)

**Constraint:** This is a deliberate design decision.

**Rationale:** Tasks are not calendar events. They're done when context allows, not at specific times. Time-based reminders create false urgency and interrupt flow.

---

### 3.9 Weekly Review Requirements

#### R44 [→ N6]: Guided Weekly Review Process

The system SHALL provide a step-by-step guided weekly review process with progress tracking and pause/resume capability.

**Test Criteria:**
- Review includes stages (in order):
  1. Capture Collection (prompt to gather all capture points)
  2. Inbox Zero (process all inbox items to empty)
  3. Project Check (review projects, identify missing Next Actions)
  4. Goal Alignment (review and align unaligned projects)
  5. Incubator Review (review rotating subset)
  6. Calendar Lookahead (review next week, plan time blocks)
- Each stage can be marked complete or skipped
- Progress indicator shows completion status
- Can pause and resume review across sessions
- Review entry point prominent in UI

**Priority:** P0 (MVP Core)

---

#### R45 [→ N6]: Weekly Review Prompts

The system SHALL prompt users to complete weekly review if none completed in 7 days.

**Test Criteria:**
- Prompt appears if no review in 7 days
- Prompt non-intrusive (banner, not blocking modal)
- Can dismiss or start review
- Snooze options available (later today, tomorrow)
- Review streak visible for habit reinforcement

**Priority:** P1 (MVP Enhanced)

---

#### R46 [→ N6]: Stale Item Detection

The system SHALL identify stale and problematic items during weekly review for cleanup.

**Test Criteria:**
- System identifies:
  - Tasks unchanged for 30+ days
  - Projects without Next Actions
  - Overdue follow-ups (Waiting items past follow-up date)
  - Repeatedly deferred items (deferred 3+ times)
  - Unaligned projects (no goal connection)
- Identified items surfaced during appropriate review stage
- Bulk operations available (defer, delete, archive, update)
- Count of issues visible before starting review

**Priority:** P1 (MVP Enhanced)

**Rationale:** Maintains system trust and relevance. Weekly review is the maintenance ritual that keeps GTD systems working.

---

#### R47 [→ N6]: Review Analytics

The system SHALL track weekly review completion for habit formation metrics and system health.

**Test Criteria:**
- Review sessions create audit trail: date, duration, stages completed
- Review history visible to user (encourages consistency)
- Completion tracked for success metrics
- Average review duration calculated
- Data used for "60% weekly review" success metric

**Priority:** P2 (Future)

---

### 3.10 Incubator Requirements

#### R48 [→ N7]: Incubator Storage

The system SHALL provide a dedicated Incubator space for ideas and aspirations not ready to become active projects.

**Test Criteria:**
- Incubator items separate from active projects/tasks
- Items support: title, rich text notes, image attachments, URL links
- One-click promotion to project or task
- Promotion copies all content
- Original item archived after promotion (optional)
- Incubator accessible from main navigation

**Priority:** P1 (MVP Enhanced)

**Rationale:** GTD's "Someday/Maybe" list. Reduces mental clutter by providing trusted place for future ideas.

---

#### R49 [→ N7]: Rotating Incubator Review

The system SHALL surface a rotating subset of incubator items during weekly review for regular reassessment.

**Test Criteria:**
- Weekly review includes "Incubator Review" stage
- Shows configurable count of items (default 5, user-adjustable)
- Rotation algorithm ensures all items reviewed over time
- Can promote items during review
- Can add notes or delete items during review
- Can skip review stage if desired

**Priority:** P2 (Future)

**Rationale:** Regular exposure prevents incubator from becoming a graveyard. Ensures ideas resurface when timing might be better.

---

### 3.11 Non-Functional Requirements

#### NFR1: Capture Performance

The system SHALL complete capture submission in under 100ms (client-side) with end-to-end sync in under 3 seconds.

**Test Criteria:**
- Client-side feedback: <100ms (measured)
- Item appears in inbox: <3 seconds (measured)
- Measured on representative devices and network conditions
- 95th percentile performance meets targets

**Priority:** P0 (MVP Core)

**Rationale:** Capture must feel instantaneous. Any delay increases resistance.

---

#### NFR2: Clarification Performance

The system SHALL complete clarification actions with latency under 200ms for responsive batch processing.

**Test Criteria:**
- Action to next-item-display: <200ms (measured)
- Measured for all clarification actions
- Maintains performance with 100+ inbox items
- No degradation during sustained batch sessions

**Priority:** P0 (MVP Core)

---

#### NFR3: View Switching Performance

The system SHALL complete view transitions in under 300ms to prevent flow interruption.

**Test Criteria:**
- Navigation between views: <300ms (measured)
- Applies to: Inbox ↔ Today ↔ Projects ↔ Goals ↔ Waiting
- Measured from click to interactive content
- Perceived performance (skeleton/loading states) for longer loads

**Priority:** P0 (MVP Core)

---

#### NFR4: Keyboard Accessibility

The system SHALL provide keyboard shortcuts for all primary actions, accessible within 2 taps/clicks maximum.

**Test Criteria:**
- All clarification actions have shortcuts
- Navigation between major views has shortcuts
- Shortcuts documented and discoverable (? for help)
- Works without requiring modifier keys for common actions
- Shortcut conflicts avoided

**Priority:** P0 (MVP Core)

**Rationale:** Power users process faster with keyboard. Reduces interaction overhead.

---

#### NFR5: Offline Capability

The system SHALL work offline with local storage and automatic sync when connectivity is restored.

**Test Criteria:**
- Capture works offline (mobile and web)
- Clarification actions work offline
- Clear indication of offline state
- Automatic sync on reconnection
- Conflict resolution for concurrent edits (last-write-wins acceptable for MVP)

**Priority:** P0 (MVP Core)

**Rationale:** Capture cannot depend on connectivity. System must be trusted anywhere.

---

#### NFR6: Mobile Responsiveness

The system SHALL provide fully functional responsive web interface for mobile browsers and native mobile application for iOS.

**Test Criteria:**
- Web interface works on mobile browsers (iOS Safari, Chrome)
- Touch interactions supported (tap, drag, swipe)
- Native iOS app for optimal capture experience
- Feature parity between web and mobile (except device-specific features)
- Offline support on both platforms

**Priority:** P0 (MVP Core)

---

#### NFR7: Data Privacy and Security

The system SHALL be SOC 2 Type I ready and GDPR compliant at launch with privacy-respecting analytics.

**Test Criteria:**
- User data encrypted in transit (TLS) and at rest
- No PII in analytics without explicit consent
- Account deletion completes within 24 hours (GDPR right to erasure)
- Data export available (GDPR right to portability)
- Privacy policy and terms of service published

**Priority:** P0 (MVP Core)

---

#### NFR8: Pattern Learning (Future)

The system SHOULD learn user patterns without explicit configuration to reduce setup friction.

**Test Criteria:**
- Common contexts identified from usage
- Typical energy levels by time of day detected
- Context suggestions based on task title keywords
- Learning opt-out available
- Learned patterns adjustable/deletable

**Priority:** P3 (Future)

**Note:** Start without ML/AI. Add intelligence incrementally based on usage patterns.

---

## 4. User Stories

User stories are organized by capability area and follow the INVEST criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable). Each story includes acceptance criteria in Given/When/Then format and traceability to requirements.

### 4.1 Capture Stories

#### US1 [→ R1, R3]: Always-Visible Capture Input

**Story:** As a user, I want a capture input field that's always visible on every main screen, so I can add tasks instantly without navigating to a specific page or opening a modal.

**Acceptance Criteria:**
- **Given** I am on the Inbox, Today, Projects, or Goals view
- **When** I look at the screen
- **Then** I see the capture input field at the top of the page without scrolling
- **And** I can immediately type without clicking to focus

**INVEST Check:**
- ✓ Independent: Can be implemented standalone
- ✓ Negotiable: Location and styling can be discussed
- ✓ Valuable: Reduces capture friction significantly
- ✓ Estimable: Clear scope for implementation
- ✓ Small: Can complete in single sprint
- ✓ Testable: Visual presence verifiable

**Priority:** P0 (MVP Core)

---

#### US2 [→ R2, R3]: One-Key Submit with No Required Fields

**Story:** As a user, I want to capture a task by simply typing text and pressing Enter with no required metadata fields, so I can save ideas in under 3 seconds without decision fatigue.

**Acceptance Criteria:**
- **Given** I have typed text in the capture field
- **When** I press Enter
- **Then** the task is saved to my inbox
- **And** the field clears immediately for the next capture
- **And** I see confirmation within 300ms
- **And** no metadata (due date, project, context, etc.) is required

**INVEST Check:**
- ✓ Independent: Doesn't depend on other stories
- ✓ Negotiable: Confirmation style negotiable
- ✓ Valuable: Core "think once" principle
- ✓ Estimable: Straightforward implementation
- ✓ Small: Single feature
- ✓ Testable: Clear success criteria

**Priority:** P0 (MVP Core)

---

#### US3 [→ R4]: Instant Capture Feedback

**Story:** As a user, I want immediate visual confirmation when I capture something, so I trust it was saved and can move on mentally.

**Acceptance Criteria:**
- **Given** I submit a capture
- **When** the submission completes
- **Then** I see confirmation within 300ms
- **And** the confirmation does not block the next capture
- **And** if offline, I see indication that it will sync later

**INVEST Check:**
- ✓ Independent: Can implement standalone
- ✓ Negotiable: Confirmation UI style negotiable
- ✓ Valuable: Builds trust in system
- ✓ Estimable: Clear scope
- ✓ Small: Single interaction pattern
- ✓ Testable: Timing measurable

**Priority:** P0 (MVP Core)

---

#### US4 [→ R5, R6]: Fast Mobile Capture with Offline Support

**Story:** As a mobile user, I want to open the FlowTD app and capture a task in under 5 seconds total, even when offline, so I never lose a thought while away from my desk.

**Acceptance Criteria:**
- **Given** the FlowTD iOS app is installed on my phone
- **When** I launch the app from cold start
- **Then** the capture screen appears in under 2 seconds
- **And** I can type and submit in under 3 additional seconds
- **And** if offline, the capture is queued locally with visual indication
- **And** the capture syncs automatically when connectivity returns

**INVEST Check:**
- ✓ Independent: Mobile-specific implementation
- ✓ Negotiable: Exact timing and UI negotiable
- ✓ Valuable: Critical for mobile capture adoption
- ✓ Estimable: Performance testing defines scope
- ✓ Small: Focus on capture performance only
- ✓ Testable: Timing measurable

**Priority:** P0 (MVP Core)

---

#### US5 [→ R7]: Share Sheet Capture from Any App

**Story:** As an iOS user, I want to capture content from any app using the share sheet, so I can add tasks, save links, or capture screenshots without switching to FlowTD.

**Acceptance Criteria:**
- **Given** I am using any iOS app with shareable content
- **When** I tap the share button
- **Then** FlowTD appears as an option in the share sheet
- **And** selecting FlowTD opens capture with content pre-filled
- **And** I can submit immediately or add notes
- **And** supported content types include: text, URLs, images

**INVEST Check:**
- ✓ Independent: iOS-specific feature
- ✓ Negotiable: Content handling details negotiable
- ✓ Valuable: Ubiquitous capture from anywhere
- ✓ Estimable: iOS extension scope clear
- ✓ Small: Single platform feature
- ✓ Testable: Share sheet presence verifiable

**Priority:** P1 (MVP Enhanced)

---

#### US6 [→ R8]: Email-to-Inbox Capture

**Story:** As a user, I want my own unique email address for FlowTD so I can forward emails as tasks directly to my inbox, preserving the full message for context.

**Acceptance Criteria:**
- **Given** I have a FlowTD account
- **When** I check my settings
- **Then** I see my unique capture email address (format: user-[id]@capture.flowtd.com)
- **And** when I forward an email to this address
- **Then** it appears in my inbox within 60 seconds
- **And** the email subject becomes the task title
- **And** the email body, sender, and metadata are preserved in task details

**INVEST Check:**
- ✓ Independent: Email integration standalone
- ✓ Negotiable: Email format handling negotiable
- ✓ Valuable: Reduces email-to-task friction
- ✓ Estimable: Email integration scope clear
- ✓ Small: Single integration
- ✓ Testable: Email processing verifiable

**Priority:** P1 (MVP Enhanced)

---

### 4.2 Clarification Stories

#### US7 [→ R9, R10]: Single-Action Inbox Processing

**Story:** As a user, I want to process each inbox item with just one action that fully handles it, so I can clear my inbox quickly without revisiting items or making multiple decisions.

**Acceptance Criteria:**
- **Given** I have an item in my inbox
- **When** I choose an action (Do It, Next Action, Later, Waiting, Project, Delete)
- **Then** the item is removed from my inbox
- **And** the item is moved to the appropriate location based on my action
- **And** I see the next inbox item automatically
- **And** no intermediate confirmation dialogs appear (except minimal prompts like delegate name)

**INVEST Check:**
- ✓ Independent: Core clarification feature
- ✓ Negotiable: UI presentation negotiable
- ✓ Valuable: Implements "think once" principle
- ✓ Estimable: Clear action set
- ✓ Small: Core workflow
- ✓ Testable: Action completion verifiable

**Priority:** P0 (MVP Core)

---

#### US8 [→ R11, R12]: Keyboard-Only Batch Processing

**Story:** As a user, I want to process my entire inbox using only keyboard shortcuts, so I can fly through 20+ items without switching between mouse and keyboard.

**Acceptance Criteria:**
- **Given** I have multiple items in my inbox
- **When** I use keyboard shortcuts for clarification (D for Do It, N for Next Action, etc.)
- **Then** each action completes instantly
- **And** the next inbox item appears automatically within 200ms
- **And** I can process all items without touching the mouse
- **And** keyboard shortcuts are visually indicated on action buttons

**INVEST Check:**
- ✓ Independent: Keyboard interface layer
- ✓ Negotiable: Specific key mappings negotiable
- ✓ Valuable: Power users love keyboard efficiency
- ✓ Estimable: Shortcut implementation scope clear
- ✓ Small: Interface layer
- ✓ Testable: Shortcut functionality verifiable

**Priority:** P0 (MVP Core)

---

#### US9 [→ R13]: Minimal Processing Prompts

**Story:** As a user, I want the system to only ask for additional information when absolutely necessary during clarification, so I'm not slowed down by unnecessary fields or decision points.

**Acceptance Criteria:**
- **Given** I select "Do It" action
- **When** the action completes
- **Then** no additional prompts appear
- **Given** I select "Waiting" action
- **When** the action is triggered
- **Then** I'm prompted only for delegate name and optional follow-up date (with smart default)
- **And** I can submit with just the name if desired
- **Given** I select "Next Action"
- **When** the action completes
- **Then** the item moves to my Next Actions list without prompts
- **And** I can optionally assign project, context, etc. later

**INVEST Check:**
- ✓ Independent: Prompt logic separate
- ✓ Negotiable: Smart defaults negotiable
- ✓ Valuable: Reduces processing friction
- ✓ Estimable: Prompt flows clear
- ✓ Small: Prompt logic per action
- ✓ Testable: Prompt appearance verifiable

**Priority:** P0 (MVP Core)

---

#### US10 [→ R14, R15]: Batch Processing with Progress

**Story:** As a user, I want to see my progress when processing multiple inbox items and be able to pause and resume without losing my place, so large inbox sessions don't feel overwhelming.

**Acceptance Criteria:**
- **Given** I have 50 items in my inbox
- **When** I start processing
- **Then** I see a progress indicator showing "15 of 50 items remaining"
- **And** each action completes in under 200ms
- **And** if I exit the inbox view
- **Then** my processing position is preserved
- **And** when I return, I can resume from where I left off

**INVEST Check:**
- ✓ Independent: Progress tracking feature
- ✓ Negotiable: Progress UI negotiable
- ✓ Valuable: Makes large inbox less daunting
- ✓ Estimable: Progress tracking scope clear
- ✓ Small: Progress indicator + state persistence
- ✓ Testable: Progress display verifiable

**Priority:** P1 (MVP Enhanced)

---

### 4.3 Calendar Integration Stories

#### US11 [→ R17]: Simple Google Calendar Connection

**Story:** As a user, I want to connect my Google Calendar account with a simple OAuth flow, so FlowTD can see my schedule and help me plan realistically without complex setup.

**Acceptance Criteria:**
- **Given** I am in FlowTD settings
- **When** I click "Connect Google Calendar"
- **Then** I'm redirected to Google OAuth consent screen
- **And** I see clear explanation of requested permissions
- **And** after granting permission, I'm returned to FlowTD within 30 seconds total
- **And** my connection status shows as "Connected"
- **And** I can disconnect at any time from settings

**INVEST Check:**
- ✓ Independent: OAuth integration standalone
- ✓ Negotiable: UI flow negotiable
- ✓ Valuable: Foundation for calendar features
- ✓ Estimable: OAuth implementation clear
- ✓ Small: Single integration flow
- ✓ Testable: Connection success verifiable

**Priority:** P0 (MVP Core)

---

#### US12 [→ R18, R19]: Unified Calendar + Tasks Today View

**Story:** As a user, I want to see my calendar events and tasks together in the Today view on a single timeline, so I can see everything I need to do in one place and understand what time I actually have available.

**Acceptance Criteria:**
- **Given** I have connected my Google Calendar
- **When** I open the Today view
- **Then** I see my calendar events and tasks on the same timeline
- **And** calendar events are visually distinct from tasks (different color/styling)
- **And** events are read-only (cannot edit in FlowTD)
- **And** unscheduled tasks appear in a separate section below timeline
- **And** calendar events sync within 60 seconds of changes in Google Calendar

**INVEST Check:**
- ✓ Independent: Today view implementation
- ✓ Negotiable: Visual design negotiable
- ✓ Valuable: Core value proposition
- ✓ Estimable: View integration clear
- ✓ Small: Single unified view
- ✓ Testable: Visual integration verifiable

**Priority:** P0 (MVP Core)

---

#### US13 [→ R20]: Scheduling Conflict Warnings

**Story:** As a user, I want to see visual warnings when I schedule a task during an existing calendar event, so I can identify and resolve scheduling conflicts before they cause problems.

**Acceptance Criteria:**
- **Given** I have a calendar event from 2:00-3:00 PM
- **When** I drag a task onto 2:30 PM
- **Then** I see a warning indicator on the time block
- **And** hovering/tapping shows conflict explanation
- **And** the system allows me to create the time block (warns but doesn't prevent)
- **And** conflicts are detected within 60 seconds of creation

**INVEST Check:**
- ✓ Independent: Conflict detection layer
- ✓ Negotiable: Warning UI negotiable
- ✓ Valuable: Prevents overcommitment
- ✓ Estimable: Conflict logic clear
- ✓ Small: Detection + warning only
- ✓ Testable: Conflict detection verifiable

**Priority:** P1 (MVP Enhanced)

---

#### US14 [→ R21, R22]: Drag Tasks to Calendar with Sync

**Story:** As a user, I want to drag tasks onto my calendar to schedule them, with the time blocks appearing in my Google Calendar, so my plans are visible everywhere I check my schedule.

**Acceptance Criteria:**
- **Given** I have tasks in my Next Actions list
- **When** I drag a task onto my calendar timeline
- **Then** a time block is created at that time
- **And** the time block appears in Google Calendar within 60 seconds
- **And** the task shows "Planned Start" time
- **And** I can resize the time block by dragging its edges
- **And** if I delete the time block in FlowTD, it's removed from Google Calendar
- **And** if I delete the calendar event in Google Calendar, the task's planned start is cleared

**INVEST Check:**
- ✓ Independent: Time blocking feature
- ✓ Negotiable: Drag behavior negotiable
- ✓ Valuable: Core value proposition
- ✓ Estimable: Drag + sync clear
- ✓ Small: Single interaction pattern
- ✓ Testable: Bidirectional sync verifiable

**Priority:** P0 (MVP Core)

---

#### US15 [→ R23]: Weekly Planning View

**Story:** As a user, I want a 7-day calendar planning view with my task list alongside, so I can plan my week visually and drag tasks onto any day to schedule them.

**Acceptance Criteria:**
- **Given** I am in the Planning view
- **When** the view loads
- **Then** I see 7 days starting from today (or Monday)
- **And** existing calendar events appear as non-editable blocks
- **And** my task list appears in a panel alongside the calendar
- **And** I can drag tasks onto any visible day
- **And** time blocks are created with appropriate default durations based on task tags
- **And** all changes sync bidirectionally with Google Calendar

**INVEST Check:**
- ✓ Independent: Planning view feature
- ✓ Negotiable: Layout negotiable
- ✓ Valuable: Strategic weekly planning
- ✓ Estimable: 7-day view clear
- ✓ Small: Extended view of Today
- ✓ Testable: Multi-day drag verifiable

**Priority:** P1 (MVP Enhanced)

---

### 4.4 Organization & Selection Stories

#### US16 [→ R24, R36]: Context-Based Task Filtering

**Story:** As a user, I want to create custom contexts using # tags (like #office or #errands) and filter my tasks by them, so I only see tasks I can actually do in my current location or situation.

**Acceptance Criteria:**
- **Given** I have tasks tagged with contexts
- **When** I apply a context filter (e.g., #office)
- **Then** I see only tasks with the #office context or no context
- **And** I can select multiple contexts for AND filtering
- **And** the filter applies across Today, Next Actions, and all task views
- **And** my selected contexts persist across sessions

**INVEST Check:**
- ✓ Independent: Context filtering feature
- ✓ Negotiable: Tag syntax negotiable
- ✓ Valuable: Core GTD principle
- ✓ Estimable: Tag + filter clear
- ✓ Small: Single filtering mechanism
- ✓ Testable: Filter results verifiable

**Priority:** P0 (MVP Core)

---

#### US17 [→ R25, R26, R37]: Multi-Dimensional Task Filtering

**Story:** As a user, I want to filter tasks by combinations of context, energy level, and time available, so I can answer "what can I do right now?" given my current state and available time.

**Acceptance Criteria:**
- **Given** I am at the office with 30 minutes before a meeting and feeling low energy
- **When** I apply filters: #office + Low Energy + <30 minutes
- **Then** I see only tasks matching all three criteria
- **And** tasks without energy/time tags are included (flexible)
- **And** filters apply without page reload
- **And** I can clear filters individually or all at once
- **And** common filter combinations can be saved (future enhancement)

**INVEST Check:**
- ✓ Independent: Filter combination logic
- ✓ Negotiable: Filter UI negotiable
- ✓ Valuable: Answers "what now?"
- ✓ Estimable: Multi-filter logic clear
- ✓ Small: Filter combination interface
- ✓ Testable: Filter logic verifiable

**Priority:** P1 (MVP Enhanced)

---

#### US18 [→ R35]: Intelligent Curated Today View

**Story:** As a user, I want a Today view that intelligently shows me what matters most right now without manual curation, organized by priority with due dates, calendar events, and suggested actions.

**Acceptance Criteria:**
- **Given** it is a work day
- **When** I open the Today view
- **Then** I see sections in this order:
  1. Calendar Events (today's schedule)
  2. Active Tasks (with planned start today)
  3. Due/Overdue (true deadlines today or past)
  4. Waiting On (follow-ups due today)
  5. Suggested Next Actions (system recommendations)
  6. Quick Wins (<15 minutes, current context)
- **And** overdue items are visually distinct
- **And** empty sections are hidden
- **And** sections are collapsible
- **And** the view loads in under 2 seconds

**INVEST Check:**
- ✓ Independent: Today view logic
- ✓ Negotiable: Section order negotiable
- ✓ Valuable: Reduces decision fatigue
- ✓ Estimable: Section logic clear
- ✓ Small: View assembly
- ✓ Testable: Section presence verifiable

**Priority:** P0 (MVP Core)

---

#### US19 [→ R39]: Focus Mode for Quick Wins

**Story:** As a user, I want a Focus Mode that shows only Quick Win tasks (<15 minutes) with an optional timer, so I can power through small items in pockets of time between meetings.

**Acceptance Criteria:**
- **Given** I have Quick Win tasks in my list
- **When** I enter Focus Mode
- **Then** I see only tasks tagged as <15 minutes
- **And** tasks are presented one at a time (or short list)
- **And** I can optionally set a timer (default 25 minutes)
- **And** completed tasks are removed immediately
- **And** at the end of the session I see a completion summary
- **And** Focus Mode loads in under 1 second

**INVEST Check:**
- ✓ Independent: Focus mode feature
- ✓ Negotiable: Timer behavior negotiable
- ✓ Valuable: Batch execution of small tasks
- ✓ Estimable: Filtered view + timer
- ✓ Small: Single mode
- ✓ Testable: Filter + timer verifiable

**Priority:** P2 (Future)

---

### 4.5 Project & Goal Stories

#### US20 [→ R28, R29]: Create Projects with Outcomes

**Story:** As a user, I want to create projects with clear desired outcomes and associate Next Actions with them, so I know what success looks like and always know the next step to move projects forward.

**Acceptance Criteria:**
- **Given** I create a new project
- **When** I fill out the project form
- **Then** I'm required to specify a "Desired Outcome" (what success looks like)
- **And** I can set status: Active, On Hold, Completed, Archived
- **And** I can add optional notes, links, and metadata
- **And** if status is Active, system warns if no Next Action exists
- **And** when viewing the project, I see all associated Next Actions

**INVEST Check:**
- ✓ Independent: Project entity creation
- ✓ Negotiable: Form fields negotiable
- ✓ Valuable: Projects aren't just task lists
- ✓ Estimable: CRUD + associations clear
- ✓ Small: Project entity
- ✓ Testable: Project creation verifiable

**Priority:** P0 (MVP Core)

---

#### US21 [→ R30]: Stale Project Detection in Review

**Story:** As a user, I want the system to identify projects without Next Actions during my weekly review, so I can keep projects moving or put them On Hold rather than letting them languish.

**Acceptance Criteria:**
- **Given** I have projects without Next Actions
- **When** I start the weekly review
- **Then** the Project Check stage highlights these projects
- **And** I can take actions: Add Next Action, Put On Hold, or Archive
- **And** I see the count of stale projects before starting review
- **And** projects with no activity for 30+ days are also highlighted

**INVEST Check:**
- ✓ Independent: Review detection logic
- ✓ Negotiable: Highlight UI negotiable
- ✓ Valuable: Maintains system health
- ✓ Estimable: Detection logic clear
- ✓ Small: Review stage enhancement
- ✓ Testable: Detection verifiable

**Priority:** P1 (MVP Enhanced)

---

#### US22 [→ R31, R32]: Link Projects to Goals

**Story:** As a user, I want to link my projects to goals in different time horizons (quarterly, annual, multi-year), so I can see how my daily work connects to my long-term aspirations and prioritize accordingly.

**Acceptance Criteria:**
- **Given** I have created goals in different horizons
- **When** I create or edit a project
- **Then** I can associate it with one goal
- **And** the project view shows which goal it supports
- **And** the goal view shows all projects supporting it
- **And** I can filter projects by goal
- **And** I can change goal associations at any time

**INVEST Check:**
- ✓ Independent: Project-goal linking
- ✓ Negotiable: Association UI negotiable
- ✓ Valuable: Connects work to meaning
- ✓ Estimable: Association logic clear
- ✓ Small: Relationship entity
- ✓ Testable: Links verifiable

**Priority:** P1 (MVP Enhanced)

---

#### US23 [→ R33]: Identify Unaligned Projects

**Story:** As a user, I want the system to visually highlight projects without goal alignment, so I can decide if they need a goal connection or should be deprioritized or deleted.

**Acceptance Criteria:**
- **Given** I have projects without goal alignment
- **When** I view my projects list
- **Then** unaligned projects have a visual indicator
- **And** during weekly review, the Goal Alignment stage shows these projects
- **And** I can bulk-select and assign goals
- **And** I see the count of unaligned projects in my dashboard

**INVEST Check:**
- ✓ Independent: Alignment detection
- ✓ Negotiable: Indicator UI negotiable
- ✓ Valuable: Forces prioritization
- ✓ Estimable: Detection + display clear
- ✓ Small: Visual indicator + filter
- ✓ Testable: Indicator presence verifiable

**Priority:** P2 (Future)

---

### 4.6 Temporal & Delegation Stories

#### US24 [→ R40]: True Deadline vs Target Date

**Story:** As a user, I want to distinguish between externally-imposed deadlines and my own preferences, so only true deadlines create urgency and the system maintains my trust.

**Acceptance Criteria:**
- **Given** I am setting a date on a task
- **When** I see the date fields
- **Then** I see "True Deadline" field with explanation: "Only externally-imposed deadlines"
- **And** I see optional "Target Date" field for preferences
- **And** True Deadlines appear prominently in Today view as "Due"
- **And** Target Dates appear as suggestions, not demands
- **And** most tasks have neither (both optional)

**INVEST Check:**
- ✓ Independent: Date type distinction
- ✓ Negotiable: Field labels negotiable
- ✓ Valuable: Prevents false urgency
- ✓ Estimable: Two date fields
- ✓ Small: Field + display logic
- ✓ Testable: Date behavior verifiable

**Priority:** P1 (MVP Enhanced)

---

#### US25 [→ R41]: Hide Until / Defer to Future

**Story:** As a user, I want to hide tasks until a specific future date, so items I can't act on yet don't clutter my views but automatically surface when the time is right.

**Acceptance Criteria:**
- **Given** I have a task that can't be done until next month
- **When** I set "Hide Until" date to next month
- **Then** the task disappears from Inbox, Today, and Next Actions views
- **And** the task appears in a dedicated "Hidden" view
- **And** on the specified date, the task automatically reappears in my views
- **And** I see a count of hidden tasks in my sidebar

**INVEST Check:**
- ✓ Independent: Hide/defer feature
- ✓ Negotiable: Hidden view UI negotiable
- ✓ Valuable: Reduces noise
- ✓ Estimable: Date filter logic clear
- ✓ Small: Filter + resurface logic
- ✓ Testable: Date behavior verifiable

**Priority:** P1 (MVP Enhanced)

---

#### US26 [→ R27, R42]: Track Waiting For with Follow-Up

**Story:** As a user, I want to mark tasks as "Waiting For [person]" with a follow-up date, so I can track delegated items and ensure I follow up on time without micromanaging or forgetting.

**Acceptance Criteria:**
- **Given** I delegate a task to Bob
- **When** I select "Waiting" action
- **Then** I'm prompted for person name and follow-up date (with smart default)
- **And** the item moves to my "Waiting For" list
- **And** on the follow-up date, the item appears in Today view as "Follow Up"
- **And** I can filter Waiting items by person
- **And** overdue follow-ups are highlighted in Waiting view

**INVEST Check:**
- ✓ Independent: Waiting tracking
- ✓ Negotiable: Follow-up logic negotiable
- ✓ Valuable: Prevents dropped commitments
- ✓ Estimable: Waiting state + date logic
- ✓ Small: Single state + filters
- ✓ Testable: Follow-up behavior verifiable

**Priority:** P1 (MVP Enhanced)

---

### 4.7 Weekly Review Stories

#### US27 [→ R44, R45]: Guided Weekly Review Flow

**Story:** As a user, I want a step-by-step guided weekly review that walks me through maintaining my system, so I know exactly what to do and the review doesn't take hours.

**Acceptance Criteria:**
- **Given** I haven't done a review in 7+ days
- **When** I see the review prompt
- **Then** I can start a guided review with clear stages:
  1. Capture Collection
  2. Inbox Zero
  3. Project Check
  4. Goal Alignment
  5. Incubator Review
  6. Calendar Lookahead
- **And** I see progress indicator showing which stage I'm on
- **And** I can mark stages complete or skip them
- **And** I can pause and resume across sessions
- **And** the review is designed to take 20-30 minutes

**INVEST Check:**
- ✓ Independent: Review workflow
- ✓ Negotiable: Stage order negotiable
- ✓ Valuable: Habit formation for maintenance
- ✓ Estimable: Six-stage workflow
- ✓ Small: Wizard-style flow
- ✓ Testable: Stage progression verifiable

**Priority:** P0 (MVP Core)

---

#### US28 [→ R46]: Automatic Stale Item Detection

**Story:** As a user, I want the system to automatically identify stale items during weekly review (old tasks, projects without next actions, overdue follow-ups), so I can clean up problems efficiently.

**Acceptance Criteria:**
- **Given** I have various stale items in my system
- **When** I start weekly review
- **Then** the system identifies:
  - Tasks unchanged for 30+ days
  - Projects without Next Actions
  - Overdue follow-ups (Waiting items past due)
  - Repeatedly deferred items (3+ times)
  - Unaligned projects (no goal)
- **And** these items are surfaced during appropriate review stages
- **And** I can take bulk actions (defer, delete, archive, update)
- **And** I see count of issues before starting review

**INVEST Check:**
- ✓ Independent: Detection logic
- ✓ Negotiable: Detection thresholds negotiable
- ✓ Valuable: Efficient maintenance
- ✓ Estimable: Detection rules clear
- ✓ Small: Analysis + display
- ✓ Testable: Detection verifiable

**Priority:** P1 (MVP Enhanced)

---

### 4.8 Incubator Stories

#### US29 [→ R48]: Incubator for Future Ideas

**Story:** As a user, I want a dedicated Incubator space for ideas and aspirations not ready to become projects yet, so I can capture possibilities without cluttering my active workspace.

**Acceptance Criteria:**
- **Given** I have an idea that's not ready yet
- **When** I add it to the Incubator
- **Then** it's stored separately from active projects/tasks
- **And** I can add title, rich notes, images, and links
- **And** I can promote it to a project or task with one click
- **And** promotion copies all content
- **And** the Incubator is accessible from main navigation

**INVEST Check:**
- ✓ Independent: Incubator entity
- ✓ Negotiable: Content types negotiable
- ✓ Valuable: GTD Someday/Maybe
- ✓ Estimable: Storage + promotion clear
- ✓ Small: Single entity type
- ✓ Testable: Storage + promotion verifiable

**Priority:** P1 (MVP Enhanced)

---

#### US30 [→ R49]: Rotating Incubator Review

**Story:** As a user, I want the weekly review to show me a rotating subset of incubator items (default 5), so I regularly reconsider ideas without being overwhelmed by reviewing everything every week.

**Acceptance Criteria:**
- **Given** I have 20 items in my Incubator
- **When** I reach the Incubator Review stage of weekly review
- **Then** I see 5 items (configurable)
- **And** the rotation ensures all items are reviewed over time
- **And** I can promote items to projects during review
- **And** I can add notes or delete items
- **And** I can skip this stage if desired

**INVEST Check:**
- ✓ Independent: Review rotation logic
- ✓ Negotiable: Rotation count negotiable
- ✓ Valuable: Prevents graveyard effect
- ✓ Estimable: Rotation algorithm clear
- ✓ Small: Review stage
- ✓ Testable: Rotation verifiable

**Priority:** P2 (Future)

---

## 5. MVP Scope

### 5.1 What's IN Scope (MVP)

**Platforms:**
- ✓ Responsive web application (works on desktop and mobile browsers)
- ✓ iOS mobile application (native or React Native)
- ✓ Email capture via unique forwarding address

**Core Capabilities:**
- ✓ Instant capture (web, mobile, email) with no required metadata
- ✓ Single-action inbox clarification with six actions (Do It, Next Action, Later, Waiting, Project, Delete)
- ✓ Keyboard-driven batch processing
- ✓ Projects with outcomes and Next Actions
- ✓ Context-based organization (#tags)
- ✓ Energy levels (High/Low) and time estimates (Quick Win/Focused/Deep Work)
- ✓ Google Calendar integration with bidirectional sync
- ✓ Unified Today view showing calendar events + tasks
- ✓ Drag-and-drop time blocking
- ✓ Weekly Planning view (7-day calendar)
- ✓ Goal creation with four horizons
- ✓ Project-to-goal linking
- ✓ Guided weekly review with six stages
- ✓ Incubator for future ideas
- ✓ Waiting For tracking with follow-up dates
- ✓ True Deadline vs Target Date distinction
- ✓ Hide Until / defer functionality
- ✓ Offline support for capture and clarification

**Integrations:**
- ✓ Google Calendar (OAuth, read/write sync)
- ✓ Gmail/Google Workspace email forwarding

**Account Model:**
- ✓ Individual accounts (single user)
- ✓ Single personal workspace
- ✗ No collaboration features

**Non-Functional:**
- ✓ SOC 2 Type I readiness
- ✓ GDPR compliance
- ✓ Capture latency <3 seconds
- ✓ Clarification latency <200ms
- ✓ View switching <300ms
- ✓ Offline capability
- ✓ Privacy-respecting analytics

---

### 5.2 What's OUT of Scope (Post-MVP)

**Platforms:**
- Android native app (future high priority)
- Desktop applications (macOS/Windows native)
- Browser extensions (Chrome, Safari, Firefox)
- Additional capture methods beyond web, mobile, email

**Integrations:**
- Microsoft 365 / Outlook calendar
- Apple Calendar / iCloud
- Exchange calendar
- Non-Gmail email providers (Outlook, Yahoo, etc.)
- Third-party automation tools (Zapier, IFTTT)
- Public API

**Features:**
- Shared workspaces or team collaboration
- Subtasks or task dependencies
- Recurring tasks
- File attachments (beyond images via share sheet)
- Time tracking and reporting
- Advanced automation or templates
- Machine learning / AI features (pattern learning, smart suggestions beyond basic)
- Custom fields or flexible schemas
- Multiple user accounts/profiles
- Contact directory integrations

**Other:**
- Multiple languages (English only in MVP)
- Multi-region data hosting beyond US/EU
- Mobile apps for platforms other than iOS
- Advanced customization of views and workflows

**Explicitly Deferred:**
- Focus Mode (P2 - Future)
- Smart Next Action Suggestions (P2 - Future, algorithm requires iteration)
- Rotating Incubator Review (P2 - Future)
- Unaligned Project Visibility in Dashboard (P2 - Future)
- Goal Context in Task Views (P2 - Future)
- Pattern Learning / AI (P3 - Future, start simple)

---

## 6. Success Metrics

All metrics are measured per Weekly Active User (WAU) and aggregated at cohort level. Analytics instrumentation respects user privacy and collects only data necessary for these metrics.

### 6.1 Efficiency Metrics

| Metric | Target | Measurement Method | Why It Matters |
|--------|--------|-------------------|----------------|
| **Capture Speed** | 90% of captures in <5 seconds | Time from app launch/focus to submission confirmation | Fast capture reduces friction and prevents lost ideas. Core value proposition. |
| **Inbox Zero Rate** | >60% of users achieve empty inbox weekly | % of WAU with inbox count = 0 at least once per 7 days | Regular processing indicates system trust and effective clarification flow. |
| **Clarification Velocity** | Median >3 items/minute | Items processed per minute during batch sessions | Fast processing means "think once" principle is working. Should feel effortless. |
| **Single-Action Rate** | >95% of clarifications in one interaction | % of clarifications completing without additional prompts (except required: delegate name) | Core "think once" principle. Multiple decision points indicate friction. |

### 6.2 Engagement Metrics

| Metric | Target | Measurement Method | Why It Matters |
|--------|--------|-------------------|----------------|
| **Weekly Review Participation** | >60% of users complete review every 7 days | % of WAU completing review within 7-day window | Weekly review is the linchpin habit. Without it, systems degrade. |
| **Context Usage** | >70% of Next Actions have meaningful contexts | % of Next Actions with at least one context tag | Context-based organization is core GTD principle. Indicates proper usage. |
| **Goal Alignment** | >70% of users align ≥1 project to goal in first 30 days | % of new users creating goal linkage within 30 days | Goal alignment is core value proposition. Early adoption indicates understanding. |
| **Time Blocking** | >75% of tasks with true deadlines are time-blocked before due date | % of due tasks with calendar time block created prior to deadline | Time blocking connects intention to reality. Indicates planning behavior. |
| **Follow-Up Success** | >80% of Waiting items followed up within 2 days of follow-up date | % of Waiting items with action taken within 48 hours of follow-up date | Tracks commitment management, prevents dropped balls. |

### 6.3 Quality Metrics

| Metric | Target | Measurement Method | Why It Matters |
|--------|--------|-------------------|----------------|
| **Inbox Health** | Median inbox items >24 hours old ≤10 by week 4 | Median count of inbox items with age >24 hours, measured at week 4 of usage | Old inbox items indicate processing backlog. Low count = healthy processing habit. |
| **Task Age** | Median time from creation to completion <7 days | Median days between task created date and completed date (for Next Actions) | Fast throughput indicates system is action-oriented, not a graveyard. |
| **Deferral Cycles** | Average deferrals per task <2 | Mean number of "Hide Until" or "Later" actions per task before completion or deletion | Excessive deferral indicates unclear tasks or unrealistic commitments. |
| **Stale Task Rate** | <10% of active tasks untouched for 30+ days | % of active Next Actions with no updates in 30+ days | Stale tasks create noise and reduce trust. Low rate indicates active engagement. |
| **Project Stagnation** | <15% of active projects without Next Actions | % of active projects with zero Next Actions | Projects without Next Actions are stuck. Indicates maintenance issues. |

### 6.4 Measurement Implementation

**Privacy Principles:**
- No PII (personally identifiable information) collected without explicit consent
- Task content, titles, notes never transmitted for analytics
- Aggregate metrics only, no individual user tracking beyond account ID
- User can opt out of analytics entirely
- Data retention: 90 days for raw events, lifetime for aggregated metrics

**Instrumentation Points:**
- Capture: timestamp of submission, platform (web/mobile/email), duration
- Clarification: action type, timestamp, duration, prompt count
- Views: page views, time spent, navigation patterns
- Review: start time, completion time, stages completed
- Context usage: presence of context tags (not content)
- Calendar integration: time block creation, sync events

---

## 7. Constraints & Assumptions

### 7.1 Design Constraints

**C1 [Principle]:** System SHALL NOT require more than one decision point per task during clarification (implements "think once" principle).

**C2 [Complexity Reduction]:** System SHALL NOT implement priority levels. Priority is determined by combination of context, energy, time available, due dates, and goal alignment.

**C3 [Complexity Reduction]:** System SHALL NOT allow arbitrary complexity in energy levels (max 2) or time estimates (max 3 categories).

**C4 [Temporal Realism]:** System SHALL NOT treat all tasks as requiring dates. Most tasks don't have true external deadlines.

**C5 [Task Nature]:** System SHALL NOT support time-of-day reminders or notifications for tasks. Tasks are context-based, not time-based. (Calendar events and time blocks have times, tasks do not.)

**C6 [False Urgency]:** System SHALL NOT use artificial urgency mechanisms (priority colors, stars, "importance" ratings). Only true external deadlines create urgency.

**C7 [Calendar Integration]:** MVP SHALL support Google Calendar only. Additional calendar systems deferred to post-MVP.

**C8 [Email Capture]:** MVP SHALL support Gmail/Google Workspace email forwarding only. Other providers deferred to post-MVP.

**C9 [Mobile Platform]:** MVP SHALL support iOS only. Android deferred to post-MVP (high priority).

**C10 [Collaboration]:** MVP SHALL support individual accounts only. No team collaboration, shared workspaces, or multi-user features.

### 7.2 User Assumptions

**A1 [Target User]:** Early adopters are ambitious professionals familiar with or open to GTD-like productivity methodologies.

**A2 [Google Ecosystem]:** Early adopters primarily use Google Workspace (Gmail + Google Calendar) or Google consumer accounts.

**A3 [Opinionated Design]:** Users accept opinionated design with smart defaults in exchange for reduced decision fatigue and faster workflows.

**A4 [Calendar Permissions]:** Users will grant Google OAuth permissions for calendar access to enable time blocking and unified views.

**A5 [Weekly Review]:** Users need coaching and guided flows to establish weekly review habit. It doesn't happen automatically without system support.

**A6 [Mobile First Capture]:** Mobile capture speed is critical for adoption. Users must be able to capture in <5 seconds from any context.

**A7 [Context Discipline]:** Users will adopt context-based organization if the system makes it easy and demonstrates value quickly.

### 7.3 Technical Constraints

**T1 [Platform]:** Web-first architecture with responsive design for mobile browsers. Native mobile app for optimal capture experience.

**T2 [Calendar Integration]:** Google Calendar API with OAuth 2.0 for authentication and bidirectional sync.

**T3 [Email Capture]:** Inbound email processing via unique email addresses routed to capture system.

**T4 [Offline Support]:** Progressive Web App (PWA) capabilities for offline capture and sync. Native mobile app with local storage.

**T5 [Performance]:** Client-side optimistic updates for perceived performance (<100ms feedback). Background sync for server persistence.

**T6 [Data Storage]:** Relational database for structured data (tasks, projects, goals) with efficient querying for filtered views.

**T7 [Localization]:** English-only interface for MVP. Internationalization architecture deferred to post-MVP.

### 7.4 Business Constraints

**B1 [Account Model]:** Individual accounts only in MVP. No team pricing, collaboration, or multi-seat licensing.

**B2 [Compliance]:** Must be SOC 2 Type I ready at launch. GDPR compliance required (right to erasure, data portability).

**B3 [Privacy]:** Analytics must respect privacy. No PII without consent. No task content in analytics.

**B4 [Data Deletion]:** Account deletion must complete within 24 hours (GDPR requirement).

**B5 [Support]:** English-language support only for MVP.

**B6 [Pricing]:** Pricing model TBD (not in scope of this PRD).

### 7.5 Edge Cases & Error Scenarios

**E1 [Large Inbox]:** User attempts to clarify 100+ items in one session.
- **Requirement:** System must maintain <200ms performance and provide progress indication without degradation.

**E2 [Repeated Deferral]:** User repeatedly defers the same item (3+ times).
- **Requirement:** System should suggest deletion or conversion to Incubator during weekly review.

**E3 [No Matching Context]:** User has no tasks matching current context.
- **Requirement:** System should suggest context-free tasks or display "All caught up in this context!" message.

**E4 [Missing Follow-Up Date]:** User creates Waiting item without follow-up date.
- **Requirement:** System should suggest default based on any existing due date or standard default (e.g., +7 days).

**E5 [Calendar Sync Failure]:** Google Calendar API temporarily unavailable.
- **Requirement:** Time blocks queue locally, sync when available, user sees "Syncing..." indicator.

**E6 [Offline Capture Conflict]:** User captures offline on multiple devices, creates conflicting data.
- **Requirement:** Last-write-wins acceptable for MVP. Conflict resolution UI deferred to post-MVP.

**E7 [Empty Weekly Review]:** User starts weekly review but inbox is empty, all projects healthy.
- **Requirement:** System congratulates user, offers optional incubator review or goal review, doesn't force empty stages.

---

## 8. Appendices

### Appendix A: GTD Principles Preserved

This system is built on Getting Things Done (GTD) methodology. These principles are non-negotiable:

1. **Capture Everything** - System must handle any input type without friction. No thought is too small or too big.

2. **Clarify to Actionable** - Clear distinction between actionable (Next Actions, Projects, Waiting) and non-actionable (Reference, Someday/Maybe, Trash).

3. **Context is King** - Can't do @office tasks at home. Context-based organization is fundamental to actionability.

4. **No Fake Urgency** - Only real externally-imposed deadlines are deadlines. Artificial urgency undermines trust.

5. **Regular Reviews** - System degrades without maintenance. Weekly review is the linchpin habit that keeps everything working.

6. **Projects Have Outcomes** - Projects are not just task lists. They're outcomes requiring multiple actions. Clear outcomes prevent project graveyards.

7. **Waiting For Tracking** - Delegated doesn't mean forgotten. Track what you're waiting for and follow up.

8. **Mind Like Water** - The system is a trusted external brain. If it's in the system, it's off your mind.

---

### Appendix B: RFC 2119 Language Reference

This PRD uses RFC 2119 keywords for requirement precision:

- **SHALL** / **SHALL NOT**: Absolute requirement or prohibition. No exceptions. Must be implemented/avoided for system to be correct.

- **SHOULD** / **SHOULD NOT**: Strong recommendation but not absolute. May be valid reasons to ignore in particular circumstances, but implications must be understood and carefully weighed.

- **MAY** / **OPTIONAL**: Truly optional. One vendor may choose to include, another may omit. Implementation-dependent.

When these keywords appear in this document (in ALL CAPS), they are used with the RFC 2119 meaning. When they appear in lowercase, they are used in natural language sense.

---

### Appendix C: User Story Reference Map

Complete list of user stories for approval tracking:

**Capture (US1-US6):**
- US1: Always-Visible Capture Input → R1, R3
- US2: One-Key Submit with No Required Fields → R2, R3
- US3: Instant Capture Feedback → R4
- US4: Fast Mobile Capture with Offline Support → R5, R6
- US5: Share Sheet Capture from Any App → R7
- US6: Email-to-Inbox Capture → R8

**Clarification (US7-US10):**
- US7: Single-Action Inbox Processing → R9, R10
- US8: Keyboard-Only Batch Processing → R11, R12
- US9: Minimal Processing Prompts → R13
- US10: Batch Processing with Progress → R14, R15

**Calendar Integration (US11-US15):**
- US11: Simple Google Calendar Connection → R17
- US12: Unified Calendar + Tasks Today View → R18, R19
- US13: Scheduling Conflict Warnings → R20
- US14: Drag Tasks to Calendar with Sync → R21, R22
- US15: Weekly Planning View → R23

**Organization & Selection (US16-US19):**
- US16: Context-Based Task Filtering → R24, R36
- US17: Multi-Dimensional Task Filtering → R25, R26, R37
- US18: Intelligent Curated Today View → R35
- US19: Focus Mode for Quick Wins → R39

**Projects & Goals (US20-US23):**
- US20: Create Projects with Outcomes → R28, R29
- US21: Stale Project Detection in Review → R30
- US22: Link Projects to Goals → R31, R32
- US23: Identify Unaligned Projects → R33

**Temporal & Delegation (US24-US26):**
- US24: True Deadline vs Target Date → R40
- US25: Hide Until / Defer to Future → R41
- US26: Track Waiting For with Follow-Up → R27, R42

**Weekly Review (US27-US28):**
- US27: Guided Weekly Review Flow → R44, R45
- US28: Automatic Stale Item Detection → R46

**Incubator (US29-US30):**
- US29: Incubator for Future Ideas → R48
- US30: Rotating Incubator Review → R49

**Total: 30 User Stories**

---

### Appendix D: Traceability Matrix

Full traceability from User Needs → Requirements → User Stories:

**N1: Capture Thoughts Before They're Lost**
- R1, R2, R3, R4: Web capture → US1, US2, US3
- R5, R6: Mobile capture → US4
- R7: Share sheet → US5
- R8: Email capture → US6

**N2: Process Inbox Without Decision Paralysis**
- R9, R10: Single-action processing → US7
- R11, R12: Keyboard batch processing → US8
- R13: Minimal prompts → US9
- R14, R15: Batch with progress → US10
- R16: Quick task queue → (no story, P2 future)

**N3: See Tasks and Calendar Together**
- R17: Calendar connection → US11
- R18, R19: Unified view → US12
- R20: Conflict detection → US13
- R21, R22: Time blocking → US14
- R23: Weekly planning → US15

**N4: Connect Daily Work to Bigger Goals**
- R31: Goal framework → US22
- R32: Project-goal linking → US22
- R33: Unaligned visibility → US23
- R34: Goal context in tasks → (no story, P2 future)

**N5: Know What to Do Right Now**
- R24, R36: Context filtering → US16
- R25, R26, R37: Multi-dimensional filtering → US17
- R35: Today view → US18
- R38: Smart suggestions → (no story, P2 future)
- R39: Focus Mode → US19
- R40: True deadlines → US24

**N6: Maintain System Without Friction**
- R28, R30: Project management → US20, US21
- R44, R45: Weekly review → US27
- R46: Stale detection → US28
- R47: Review analytics → (no story, P2 future)

**N7: Store Ideas for Later**
- R48: Incubator storage → US29
- R49: Rotating review → US30

**N8: Track Delegated Items**
- R27: Waiting vs Agenda → US26
- R42: Follow-up dates → US26

---

### Appendix E: Definition of Terms

**Actionable:** An item that requires an action from the user (Next Action, Project, or Waiting For).

**Capture:** The act of getting something out of your head and into the system. First step of GTD workflow.

**Clarify:** The act of processing an inbox item to determine what it is and what to do with it. Second step of GTD workflow.

**Context:** A tag indicating where, with what tools, or with whom a task can be done. Examples: #office, #phone, #errands, #online.

**Deferral:** Moving a task to a future date (Hide Until functionality) so it doesn't appear in current views.

**Deep Work:** Tasks requiring >1 hour of focused, uninterrupted time.

**Focused Work:** Tasks requiring 15-60 minutes of moderate concentration.

**Goal Alignment:** The connection between a project/task and a higher-level goal or horizon.

**Horizons of Focus:** GTD's framework of different time spans (Purpose, 3-5 Year Vision, 1-2 Year Goals, Quarterly Objectives, Projects, Next Actions).

**Incubator:** A holding space for ideas and aspirations not yet ready to become active projects (GTD's "Someday/Maybe").

**Next Action:** The single, visible, physical action that will move a project forward. Answer to "What's the very next thing I need to do?"

**Project:** Any outcome requiring more than one action to complete.

**Quick Win:** A task requiring <15 minutes to complete.

**Stale Item:** A task or project that hasn't been updated or acted upon in 30+ days.

**Think Once Principle:** The core principle that every task should be processed once with a single decision that fully handles it. No revisiting or re-deciding.

**Time Block:** A calendar event created by dragging a task onto the calendar, representing scheduled time to work on that task.

**True Deadline:** An externally-imposed deadline with real consequences if missed (not a preference or target).

**Waiting For:** A task delegated to another person that the user is tracking for follow-up.

**Weekly Review:** The maintenance ritual (typically weekly) where users process their inbox to zero, review projects, align goals, and plan the week ahead.

---

### Appendix F: Future Considerations

Features explicitly deferred beyond MVP, organized by potential value and complexity:

**High Priority Post-MVP:**
- Android native app for broader mobile coverage
- Browser extensions (Chrome, Safari) for ubiquitous capture
- Microsoft Outlook / 365 calendar integration
- Apple Calendar / iCloud integration
- Enhanced mobile features (widgets, Siri shortcuts)
- Smart Next Action Suggestions (algorithmic recommendations)
- Focus Mode with timer and completion tracking

**Medium Priority:**
- Collaboration features (shared projects, team workspaces)
- Recurring tasks and project templates
- File attachments beyond images
- Advanced automation (if-then rules, templates)
- Contact management and directory integration
- Public API for third-party integrations
- Custom views and saved filters
- Dark mode and theme customization

**Lower Priority:**
- Advanced reporting and analytics dashboards
- Time tracking and productivity metrics
- Multi-language support and internationalization
- Subtasks and task dependencies
- Multiple workspaces per user
- Advanced customization and flexible schemas

**Research / TBD:**
- Machine learning for pattern detection and suggestions
- Natural language processing for capture
- Integration with AI assistants (ChatGPT, etc.)
- Voice capture and transcription
- Wearable device integration (Apple Watch, etc.)

---

**End of Product Requirements Document**

*This PRD is a living document and will evolve based on user feedback, development learnings, and market insights. Requirements and user stories will be finalized before development begins on each feature set.*

**Document Prepared By:** Product Requirements Team
**Last Review Date:** 2025-11-03
**Next Review Date:** TBD based on development milestones
**Version History:**
- v1.0 (2025-11-03): Consolidated PRD from initial drafts, applying best practices for requirements management
