# MyAfrimall

MyAfrimall is a web-based dashboard prototype for an international shipping and logistics service. Its interface is designed around the shipment journey from Nigeria: users can view shipment and wallet summaries, inspect shipment status, and access navigation for services, addresses, notifications, and account features.

> **Project status:** The repository currently implements the front-end interface and sample dashboard content. The displayed shipment, balance, and chart values are hard-coded examples; this codebase does not currently include a shipping API, database, or connected authentication/payment flow.

**Live preview:** [myafrimall-delta.vercel.app](https://myafrimall-delta.vercel.app)

## Features in the current UI

- Dashboard layout with collapsible sidebar navigation.
- Summary cards for wallet balance, shipments, exports, and imports.
- Shipment cards with sample tracking IDs, sender/receiver details, route, amount, processing time, and status.
- Sample shipment-growth area chart and period controls.
- Sign-in and sign-up form screens.
- Light/dark theme support and toast notification infrastructure.
- Shared UI component package for forms, cards, navigation, charts, and other interface elements.

These are currently presentation-layer features. Actions such as logging in, creating an account, funding a wallet, or loading live shipment information are not wired to a backend in this repository.

## Tech stack

- **Language:** TypeScript (with CSS for styling).
- **Runtime and package manager:** Bun `1.4.2`.
- **Web framework:** React 19 with React Router 8 framework mode, Vite, and server-side rendering support.
- **Styling and UI:** Tailwind CSS 4, shared `@myafrimall/ui` components, and Lucide icons.
- **Other notable libraries:** Recharts for charts, `next-themes` for theme handling, Sonner for toast notifications, and Varlock for environment schema/code generation.

## Repository structure

```text
.
├── apps/
│   └── web/                 React Router web application
│       ├── src/
│       │   ├── routes/      File-based routes: dashboard, sign-in, sign-up
│       │   ├── components/  Dashboard content and app sidebar
│       │   └── Images/      Images used by the screens
│       ├── public/          Static public assets
│       └── .env.schema      Varlock environment schema
├── packages/
│   ├── config/              Shared TypeScript configuration
│   └── ui/                  Shared UI components, hooks, utilities, and styles
├── package.json             Bun workspace configuration and root scripts
└── bun.lock                 Locked dependency versions
```

### How the app is organized

The web app is configured in `apps/web/vite.config.ts` and `apps/web/react-router.config.ts`. `apps/web/src/routes.ts` discovers file-based routes; `apps/web/src/root.tsx` provides the document shell, theme provider, global toast outlet, and route error boundary. The root route (`apps/web/src/routes/_index.tsx`) combines `AppSidebar` with `DashContent` to render the dashboard. The `signin.tsx` and `signup.tsx` route modules render the account form screens.

Reusable components are imported from the private workspace package `@myafrimall/ui` (for example, `@myafrimall/ui/components/card`). Its global Tailwind theme and CSS variables are defined in `packages/ui/src/styles/globals.css` and loaded by the web app. The dashboard currently uses local sample data in `apps/web/src/components/dash-content.tsx`, rather than fetching it from a service.

## Getting started

### Prerequisites

- [Bun](https://bun.sh/) `1.4.2` (the version declared in the root `package.json`).
- Git.

### Install dependencies

```bash
git clone https://github.com/chimdi3850/myafrimall.git
cd myafrimall
bun install
```

The install lifecycle runs Varlock code generation for `apps/web`. The environment schema currently declares `NODE_ENV` with `development`, `production`, and `test` values. No API credentials or other application environment variables are declared in the checked-in schema.

### Run the web app locally

From the repository root:

```bash
bun run dev:web
```

Open the local URL printed by the React Router/Vite development server (usually `http://localhost:5173`). To run development scripts for all workspaces instead, use:

```bash
bun run dev
```

### Build and type-check

```bash
bun run build
bun run check-types
```

To serve the built web app, first build and then run the `web` workspace server:

```bash
bun run --filter web build
bun run --filter web start
```

## Routes

Routes are generated from files under `apps/web/src/routes/` using `@react-router/fs-routes`.

| Screen | Route module | Purpose |
| --- | --- | --- |
| Dashboard | `apps/web/src/routes/_index.tsx` | Main overview with sidebar, metrics, chart, and sample shipments |
| Sign in | `apps/web/src/routes/signin.tsx` | Sign-in form UI |
| Sign up | `apps/web/src/routes/signup.tsx` | Account creation form UI |

The account form screens are currently visual forms and do not submit to an authentication service. Confirm paths against the route configuration when linking to them; for example, the sign-in screen is implemented by `signin.tsx`, while some links in the UI currently use `/login`.

## Development notes

- **Workspace packages:** Bun workspaces are configured for `apps/*` and `packages/*`. Dependency versions are centralized in the root workspace catalog.
- **Environment:** Update `apps/web/.env.schema` when adding environment variables, then regenerate types with `bun run env:generate` if needed. Keep secrets out of source control.
- **Shared components:** Add reusable UI pieces under `packages/ui/src/components/`; package exports are configured in `packages/ui/package.json`.
- **Styling:** The shared Tailwind CSS entry point is `packages/ui/src/styles/globals.css`. The app imports its own `apps/web/src/index.css` as part of the root document.
- **Tests:** No test script or test suite is currently configured in the workspace manifests.

## Contributing

1. Create a branch for your change.
2. Install dependencies with `bun install`.
3. Run the app with `bun run dev:web` and verify the affected screens.
4. Run `bun run check-types` and `bun run build` before opening a pull request.
5. Describe any new environment variables, external services, or setup steps in your change.

## License

No license file is currently included. Unless a license is added, standard copyright restrictions apply; please contact the repository owner before redistributing this project.
