# Architecture

## Tech Stack
- **React 19**: Frontend framework.
- **Vite**: Build tool and dev server.
- **Tailwind CSS**: Styling.
- **Lucide React**: Icons.
- **Google Gemini AI**: Used for generating "prophecies" for locations.

## Directory Structure
- `components/`: Reusable UI components.
- `views/`: Main page components.
- `services/`: Logic for AI interaction and error reporting.
- `types.ts`: TypeScript interfaces and enums.
- `constants.tsx`: Static data (locations, descriptions).

## Error Handling
The app uses a React `ErrorBoundary` to catch runtime glitches. Errors are logged and can be reported to GitHub Issues automatically via specialized workflows.
