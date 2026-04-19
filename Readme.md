🚗 What did you build and why?

I built CarBatao, a guided car recommendation web app that helps users go from “I don’t know what to buy” → “I have a confident shortlist of cars”.

Most car platforms overwhelm users with filters and long lists. CarBatao flips this by introducing a step-by-step decision flow:

Budget → Type → Fuel → Seating → Priority → Results

Each step dynamically filters available options so users never hit irrelevant or empty choices. The final output is a ranked shortlist with explanations.

The goal was to simulate a human-like car advisor experience, not just a filter UI.

✂️ What did you deliberately cut?

To keep the scope within 2–3 hours, I intentionally avoided:

User authentication / login system
Database persistence (used JSON dataset instead)
Real car APIs or external integrations
Advanced comparison features (side-by-side comparison)
Payment / booking flows
Review submission system
Mobile-native app version

The focus was strictly on core decision intelligence + UX flow.

🧰 Tech Stack & Why I chose it

Frontend:
React (Vite)
Tailwind CSS

Why:

Fast setup and iteration (important for time-boxed build)
Component-based structure suited for step-by-step wizard
Tailwind allowed rapid UI polishing without writing custom CSS

Backend:
Node.js + Express

Why:

Lightweight and fast to build APIs
Easy filtering and scoring logic implementation
Good fit for JSON-based dataset operations

Data Layer:
Static JSON dataset (25 cars)

Why:

Avoided database overhead
Allowed focus on recommendation logic instead of infra

🤖 AI Tools Usage vs Manual Work

Used AI for:
Initial project scaffolding and folder structure
UI component generation (React step screens)
Tailwind styling improvements
Debugging React state issues (filter backtracking bug)
Enhancing UX copy (Hinglish tone, taglines, microcopy)
Deployment guidance (Vercel + Render setup)

Done manually:
Core app architecture (step flow design)
Filter logic and backend API design
Scoring and ranking logic for recommendations
State management across steps
Final integration and bug fixing

🚀 Where AI helped most:
Speeding up UI iteration (biggest time saver)
Debugging React state mutation issues
Improving UX language and microcopy tone
Structuring deployment steps correctly

⚠️ Where AI got in the way:
Occasionally suggested over-engineered solutions which were unnecessary for a 2–3 hour build
Some UI suggestions were too generic and needed manual refinement for Indian user context
Needed manual correction for React state mutation and stale state issues

⏱️ If I had another 4 hours, I would add:
🔥 1. Smart recommendation engine upgrades
Constraint relaxation (if no results, suggest closest alternatives)
Weighted scoring combining mileage, safety, and price
“Why this car” deeper explanations per recommendation

🔥 2. Better UX improvements
Step transition animations
Save & resume shortlist flow

🔥 3. Shareable results
Generate shareable URL for final car shortlist
“Send to friend” comparison view

🔥 4. Personalization layer
“City vs Highway usage mode”
Family vs solo driver mode presets

🔥 5. Data improvements
Expand dataset with trims, real variants, and brands
Add EV charging cost estimation
Add resale value scoring
