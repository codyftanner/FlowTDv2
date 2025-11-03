# Product Requirements Document: GTD Task Management System

## 1. Executive Summary

### Product Vision
A task management system that enables users to capture, clarify, and execute tasks with minimal friction, based on Getting Things Done (GTD) methodology principles.

### Core Principle
**"Think Once"** - Every decision should be captured in a single interaction. Users should never need to re-process or re-decide on the same item.

## 2. User Personas

### Primary: Knowledge Worker
- Receives 50-100 inputs daily (emails, messages, ideas, requests)
- Struggles with deciding what to work on next
- Needs to track commitments to others
- Works across multiple contexts (office, home, online)

### Secondary: Manager
- Delegates tasks to team members
- Needs to track what they're waiting for from others
- Requires visibility into commitment timelines
- Balances urgent requests with important projects

## 3. Problem Statements

**P1**: Users spend too much time re-reviewing tasks they've already processed because systems require multiple decision points for a single item.

**P2**: When processing a backlog of inputs, users cannot efficiently handle quick tasks without losing track of potentially urgent items still unreviewed.

**P3**: Users cannot quickly determine what they should work on "right now" based on their current context, energy level, and available time.

**P4**: Users lose track of delegated items and miss follow-up opportunities, leading to dropped commitments.

**P5**: Tasks without immediate deadlines get lost in the system and never surface at appropriate times.

## 4. Functional Requirements

### 4.1 Capture Requirements

**R-CAP-01**: System SHALL allow users to capture any input in under 3 seconds
- Acceptance: Time from thought to captured < 3 seconds
- Rationale: Reduces resistance to capturing everything

**R-CAP-02**: System SHALL NOT require any metadata during capture
- Acceptance: Item can be saved with title only
- Rationale: Minimize friction at capture point

### 4.2 Clarification Requirements

**R-CLA-01**: System SHALL allow users to fully process an item with a single action
- Acceptance: One interaction moves item from unclarified to final state
- Rationale: Implements "think once" principle

**R-CLA-02**: System SHALL support the following single-action clarification decisions:
- Mark as complete (for 2-minute rule items)
- Assign to actionable state
- Defer to a future date
- Delegate with tracking
- Delete as non-actionable
- Convert to multi-step project

**R-CLA-03**: System SHALL allow batch processing of multiple items
- Acceptance: Can process 20+ items without context switching
- Priority: High
- Rationale: Users often have many items to clarify at once

**R-CLA-04**: System SHALL automatically detect response-type tasks
- Acceptance: Tasks with "reply", "respond", "answer" are flagged
- Rationale: Responses have different urgency characteristics

**R-CLA-05**: System SHALL queue 2-minute tasks for batch execution
- Acceptance: User can defer immediate execution without losing track
- Rationale: Solves the "too many 2-minute tasks" problem during clarification

### 4.3 Organization Requirements

**R-ORG-01**: System SHALL support context-based organization
- Acceptance: Tasks can be filtered by location/tool/person contexts
- Examples: @office, @phone, @online, @home, @agenda-personname
- Rationale: Core GTD principle for actionability

**R-ORG-02**: System SHALL support optional project associations
- Acceptance: Tasks can exist standalone or within projects
- Rationale: Not all tasks belong to projects

**R-ORG-03**: System SHALL track project outcomes
- Acceptance: Each project has a defined desired outcome
- Rationale: Projects need clear success definitions

**R-ORG-04**: System SHALL distinguish between "discuss with" and "waiting for"
- Acceptance: Separate tracking for agenda items vs delegated items
- Rationale: Different follow-up patterns and ownership

### 4.4 Task Selection Requirements

**R-SEL-01**: System SHALL present tasks based on current context
- Acceptance: Filtering by context shows only actionable items
- Rationale: Can only do @office tasks when at office

**R-SEL-02**: System SHALL support energy-based filtering
- Acceptance: Tasks can be filtered by required energy level
- Constraint: Maximum 2 energy levels to reduce decision complexity
- Rationale: Users have varying energy throughout the day

**R-SEL-03**: System SHALL support time-based filtering
- Acceptance: Tasks filterable by time requirement
- Constraint: Maximum 3 time categories, boundaries at ~15min and ~60min
- Rationale: "Can I do this before my next meeting?"

**R-SEL-04**: System SHALL intelligently surface daily tasks without manual curation
- Required sections:
  - Items with true deadlines today
  - Items needing follow-up today
  - Items deliberately deferred until today
  - Quick wins available in current context
- Rationale: Reduce decision fatigue about what to work on

### 4.5 Temporal Requirements

**R-TEM-01**: System SHALL distinguish between true deadlines and preferences
- Acceptance: Only externally-imposed deadlines are treated as due dates
- Rationale: Artificial urgency undermines trust in the system

**R-TEM-02**: System SHALL support "hide until" functionality
- Acceptance: Items can be hidden until a specific future date
- Rationale: Reduces noise from items that cannot be acted upon

**R-TEM-03**: System SHALL track follow-up dates for delegated items
- Acceptance: System prompts for follow-up on specified date
- Rationale: Ensures delegated items don't get forgotten

**R-TEM-04**: System SHALL NOT use reminder times for tasks
- Acceptance: No time-of-day notifications for tasks
- Rationale: Tasks are not calendar events; they're done when context allows

### 4.6 Review Requirements

**R-REV-01**: System SHALL identify stale items during weekly review
- Required identifications:
  - Tasks unchanged for 30+ days
  - Projects without next actions
  - Overdue follow-ups
  - Repeatedly deferred items
- Rationale: Maintains system trust and relevance

**R-REV-02**: System SHALL support bulk operations during review
- Acceptance: Can defer/delete/update multiple items at once
- Rationale: Reviews should be efficient

## 5. Non-Functional Requirements

### 5.1 Performance

**NFR-PERF-01**: Task creation latency SHALL be <100ms
- Rationale: Capture must feel instantaneous

**NFR-PERF-02**: Clarification action latency SHALL be <200ms
- Rationale: Batch processing requires snappy responses

**NFR-PERF-03**: View switching latency SHALL be <300ms
- Rationale: Context switching should not interrupt flow

### 5.2 Usability

**NFR-USE-01**: Core actions SHALL be accessible within 2 taps/clicks
- Measurement: User journey mapping
- Rationale: Reduce interaction overhead

**NFR-USE-02**: System SHALL provide keyboard shortcuts for all clarification actions
- Rationale: Power users process faster with keyboard

**NFR-USE-03**: System SHALL work offline with sync when connected
- Rationale: Capture cannot depend on connectivity

### 5.3 Intelligence

**NFR-INT-01**: System SHALL learn user patterns without explicit configuration
- Examples: Common contexts, typical energy levels by time of day
- Rationale: Reduce setup friction

**NFR-INT-02**: System SHALL auto-suggest contexts based on title keywords
- Rationale: Accelerate clarification without forcing decisions

## 6. Constraints

**C-01**: System SHALL NOT require more than one decision point per task during clarification

**C-02**: System SHALL NOT implement priority levels (use context + energy + time instead)

**C-03**: System SHALL NOT allow arbitrary complexity in energy levels or time estimates

**C-04**: System SHALL NOT treat all tasks as requiring dates

## 7. Success Metrics

### Efficiency Metrics
- **Inbox Zero Rate**: % of users achieving empty inbox weekly (Target: >60%)
- **Clarification Velocity**: Average items processed per minute (Target: >3)
- **Single-Action Rate**: % of clarifications completed in one interaction (Target: >95%)

### Engagement Metrics
- **Weekly Review Participation**: % of active users doing weekly review (Target: >40%)
- **Context Usage**: % of tasks with meaningful contexts (Target: >70%)
- **Follow-up Success Rate**: % of waiting items followed up on time (Target: >80%)

### Quality Metrics
- **Task Age**: Median time from creation to completion (Target: <7 days for actionable items)
- **Deferral Cycles**: Average number of times an item is deferred (Target: <2)
- **Stale Task Rate**: % of tasks untouched for 30+ days (Target: <10%)

## 8. User Stories

### Capture Stories
- As a user, I want to capture a thought instantly so that I don't lose it while trying to decide where it goes
- As a user, I want to email tasks to the system so that I can capture from anywhere

### Clarification Stories
- As a user, I want to defer an item to next month with one action so that I don't have to think about it until then
- As a user, I want to process 50 inbox items quickly so that I can identify what's truly urgent
- As a user, I want to queue small tasks for later execution so that I don't interrupt my clarification flow

### Execution Stories
- As a user, I want to see only tasks I can do at my current location so that I don't waste time reviewing impossible tasks
- As a user, I want to find tasks that fit in 10 minutes so that I can be productive between meetings
- As a user, I want to see what I'm waiting for from Bob so that I can follow up in our meeting

### Review Stories
- As a user, I want to identify stale projects so that I can close or revive them
- As a user, I want to bulk defer someday items so that my review doesn't take hours

## 9. Edge Cases & Error Scenarios

**E-01**: User attempts to clarify 100+ items in one session
- Requirement: System must maintain performance and provide progress indication

**E-02**: User repeatedly defers the same item
- Requirement: System should suggest deletion or conversion to someday/maybe

**E-03**: User has no tasks matching current context
- Requirement: System should suggest context-free tasks or indicate successful completion

**E-04**: Delegated task has no follow-up date
- Requirement: System should suggest a default based on any existing due date

## 10. Out of Scope

- Time tracking and reporting
- Collaboration features
- Calendar integration for scheduling
- File attachments
- Subtasks or task dependencies
- Recurring tasks
- Multiple user accounts/sharing

## 11. Appendix: GTD Principles to Preserve

1. **Capture everything** - System must handle any input type
2. **Clarify to actionable** - Clear distinction between actionable and non-actionable
3. **Context is king** - Can't do @office tasks at home
4. **No fake urgency** - Only real deadlines are deadlines
5. **Regular reviews** - System degrades without maintenance
6. **Projects have outcomes** - Not just task lists
7. **Waiting for tracking** - Delegated doesn't mean forgotten
