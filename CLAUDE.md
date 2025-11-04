# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript Express.js web application using Nunjucks templating engine. The project serves a blog-style website using the Clean Blog Bootstrap theme.

## Development Commands

### Build
```bash
npm run build
```
Compiles TypeScript files from `src/` to `dist/` using the TypeScript compiler.

### Run (Production)
```bash
npm start
```
Builds and starts the application in production mode.

### Development Mode
```bash
npm run dev
```
Runs the application with `nodemon`, which automatically restarts on file changes. Watches for changes in `.ts`, `.json`, and `.njk` files.

### Start Development
The server runs on port 3030 by default (or the port specified in `.env` file).

## Architecture

### Application Structure

- **Entry Point**: `src/index.ts` - Express server setup, Nunjucks configuration, and route definitions
- **Handlers**: `src/handler/` - Request handlers for different routes (e.g., `indexhandler.ts`)
- **Templates**: `src/templates/` - Nunjucks template files
  - `base.njk` - Base template with navbar and footer layout
  - `blog/blogpost.njk` - Blog post template that extends base.njk
- **Static Files**: `src/public/` - CSS, JS, and other static assets served via `express.static`
- **Utils**: `src/utils/` - Utility functions

### Templating System

The application uses Nunjucks with the following configuration (in `src/index.ts`):
- Template directory: `src/templates`
- Autoescape enabled for security
- View engine set to `.njk`

Templates use Nunjucks block inheritance:
- `base.njk` defines the main layout with a `{% block content %}` placeholder
- Child templates extend base and override content blocks with `{% extends "base.njk" %}`

### Request Flow

1. Express routes are defined in `src/index.ts`
2. Routes call handler functions from `src/handler/`
3. Handlers use `res.render()` to render Nunjucks templates
4. Templates extend base layout and inject specific content

### Static File Serving

Static files in `src/public/` are served directly via `express.static` middleware. Bootstrap theme assets (CSS, images) should be placed here.

## TypeScript Configuration

- Target: ES2022
- Module: CommonJS
- Strict mode enabled
- Source directory: `src/`
- Output directory: `dist/`

## Environment Variables

The application uses `dotenv` for configuration. Create a `.env` file to set:
- `PORT` - Server port (defaults to 3030)
