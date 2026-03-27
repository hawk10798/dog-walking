# AGENTS.md - Codebase Guide for AI Agents

This document provides a guide for AI agents to understand and work with this Astro project.

## 1. Project Overview

This is an Astro project, a modern static site builder that uses UI components from various frameworks (React, Vue, Svelte, etc.) to build fast, content-focused websites.

-   **Purpose:** To provide a basic Astro starter kit. (Further details would require more context from the user or codebase).
-   **Key Technologies:**
    -   Astro (v5.17.1)
    -   Tailwind CSS (v4.2.1)
    -   Node.js with npm for dependency management

## 2. Getting Started

To get started with this project, follow these steps:

### Setup
The project uses Node.js with npm for dependency management.

```sh
# Install dependencies
npm install
```

### Development Server

To start the local development server:

```sh
npm run dev
```

The server will typically run at `localhost:4321`.

### Build Production Site

To build the production-ready static site:

```sh
npm run build
```

The output will be generated in the `./dist/` directory.

### Preview Build Locally

To preview the built production site locally before deploying:

```sh
npm run preview
```

## 3. Project Structure

The project follows a standard Astro project structure. Key directories and files include:

```text
/
├── public/
│   └── favicon.svg       # Static assets, served directly
├── src/
│   ├── assets/           # Store global assets like images, fonts
│   │   └── astro.svg
│   ├── components/       # Reusable UI components (e.g., Welcome.astro)
│   │   └── Welcome.astro
│   ├── layouts/          # Layout components for pages (e.g., Layout.astro)
│   │   └── Layout.astro
│   └── pages/            # Astro pages, routes based on file names (e.g., index.astro)
│       └── index.astro
└── package.json          # Project metadata and dependencies
```

-   `astro.config.mjs`: Astro configuration file.
-   `tsconfig.json`: TypeScript configuration file.

## 4. Key Commands

Here's a summary of important commands, run from the project root:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 5. Coding Conventions

-   **Astro Components:** Components typically reside in `src/components/` and have a `.astro` extension.
-   **Layouts:** Page layouts are in `src/layouts/`.
-   **Styling:** Tailwind CSS is used for styling, as indicated by `@tailwindcss/vite` and `tailwindcss` in `package.json`. Agents should adhere to Tailwind's utility-first approach for styling components.
-   **TypeScript:** `tsconfig.json` indicates that TypeScript is configured for the project. Type safety should be maintained when making changes.

## 6. Troubleshooting

(No specific troubleshooting information was found in the `README.md` or `package.json`. Common issues might include dependency conflicts, build errors, or styling not applying correctly.)