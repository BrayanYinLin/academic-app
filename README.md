# Accademic App

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)
- [Author](#author)
- [License](#license)

## Description
This is a accademic app built as a monorepo. It consists of a client-side application and a server-side API.

## Features
- **Client-side application:** Built with React, Vite, and TypeScript.
- **Server-side API:** Built with Express, TypeORM, and TypeScript.
- **Monorepo:** Managed with pnpm.
- **Linting and formatting:** Enforced with ESLint and Prettier.
- **Testing:** Set up with Playwright for end-to-end testing and Vitest for unit testing.

## Getting Started
To get started with this project, follow these steps:
1. Clone the repository.
2. Install the dependencies using `pnpm install`.
3. Run the development server using `pnpm dev`.

## Project Structure
The project is organized as a monorepo with the following structure:
```
.
├── apps
│   ├── api
│   └── client
├── package.json
└── README.md
```
- `apps/api`: Contains the server-side API.
- `apps/client`: Contains the client-side application.

## Available Scripts
### Root
- `prepare`: Sets up Husky for pre-commit hooks.

### API
- `dev`: Starts the development server with hot-reloading.
- `typeorm`: Runs TypeORM commands.

### Client
- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `lint`: Lints the codebase.
- `preview`: Previews the production build.

## Dependencies
### API
- `bullmq`: Message queue for background jobs.
- `express`: Web framework for Node.js.
- `morgan`: HTTP request logger middleware.
- `pg`: PostgreSQL client for Node.js.
- `redis`: In-memory data structure store.
- `reflect-metadata`: Required by TypeORM.
- `typeorm`: Object-Relational Mapper (ORM) for TypeScript and JavaScript.
- `zod`: TypeScript-first schema validation with static type inference.
- `client`: Shared code between the client and API.

### Client
- `@tailwindcss/vite`: Vite plugin for Tailwind CSS.
- `react`: JavaScript library for building user interfaces.
- `react-dom`: Entry point to the DOM and server renderers for React.
- `tailwindcss`: A utility-first CSS framework.

## DevDependencies
### Root
- `husky`: Git hooks made easy.
- `lint-staged`: Run linters against staged git files.
- `turbo`: High-performance build system for JavaScript and TypeScript codebases.

### API
- `@eslint/js`: Core ESLint rules.
- `@types/express`: Type definitions for Express.
- `@types/morgan`: Type definitions for morgan.
- `@types/swagger-ui-express`: Type definitions for swagger-ui-express.
- `eslint`: Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- `eslint-config-prettier`: Turns off all rules that are unnecessary or might conflict with Prettier.
- `eslint-plugin-prettier`: Runs Prettier as an ESLint rule.
- `globals`: Global identifiers for ESLint.
- `prettier`: Opinionated code formatter.
- `supertest`: Super-agent driven library for testing Node.js HTTP servers.
- `swagger-ui-express`: Serves auto-generated API docs from a Swagger-compliant API.
- `tsx`: TypeScript execution and REPL for Node.js.
- `typescript`: Superset of JavaScript that compiles to plain JavaScript.
- `typescript-eslint`: Monorepo for all the tooling which enables ESLint to support TypeScript.
- `vitest`: A blazing fast unit-test framework powered by Vite.
- `yaml`: YAML parser and stringifier.

### Client
- `@eslint/js`: Core ESLint rules.
- `@playwright/test`: Cross-browser end-to-end testing for modern web apps.
- `@testing-library/dom`: Simple and complete DOM testing utilities that encourage good testing practices.
- `@testing-library/react`: Simple and complete React DOM testing utilities that encourage good testing practices.
- `@types/node`: Type definitions for Node.js.
- `@types/react`: Type definitions for React.
- `@types/react-dom`: Type definitions for React DOM.
- `@vitejs/plugin-react-swc`: All-in-one Vite plugin for React projects.
- `eslint`: Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- `eslint-config-prettier`: Turns off all rules that are unnecessary or might conflict with Prettier.
- `eslint-plugin-prettier`: Runs Prettier as an ESLint rule.
- `eslint-plugin-react-hooks`: Enforces the Rules of Hooks.
- `eslint-plugin-react-refresh`: A Vite plugin that provides React Refresh support for Vite.
- `globals`: Global identifiers for ESLint.
- `jsdom`: A pure-JavaScript implementation of many web standards.
- `prettier`: Opinionated code formatter.
- `typescript`: Superset of JavaScript that compiles to plain JavaScript.
- `typescript-eslint`: Monorepo for all the tooling which enables ESLint to support TypeScript.
- `vite`: Next generation frontend tooling.
- `vitest`: A blazing fast unit-test framework powered by Vite.

## Author
Brayan Yin Lin

## License
ISC
