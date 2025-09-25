# GitHub Copilot Instructions

This file provides essential guidance for AI coding agents working in this repository.

## Project Architecture

This is an Nx monorepo template implementing a Domain-Driven Design (DDD) microfrontend architecture using:
- Angular for frontend applications
- NestJS for backend services
- Nx for monorepo management and build orchestration
- Module Federation for microfrontend composition
- Cucumber for behavioral testing

### Key Structural Patterns

1. **Microfrontend Shell Architecture**
   - Main shell application in `apps/shell/` orchestrates other microfrontends
   - Module Federation config in `apps/shell/module-federation.config.ts` defines remote loading
   - Shared dependencies managed through webpack configuration

2. **Project Organization**
   - `apps/` - Host applications (shell and feature apps)
   - `libs/` - Shared libraries following DDD principles
   - `tests/` - E2E tests using Cucumber

## Development Workflow

### Essential Commands
All commands should be run through the Nx system:

```bash
nx serve shell        # Start the shell application
nx test shell        # Run unit tests
nx e2e shell-e2e    # Run E2E tests
nx affected:*       # Run commands only on affected projects
```

### Key Integration Points

1. **Module Federation**
   - Remote apps must be registered in `apps/shell/module-federation.config.ts`
   - Shared dependencies configured in `apps/shell/webpack.config.ts`

2. **DDD Boundaries**
   - Each domain has its own library in `libs/`
   - Cross-domain communication through well-defined interfaces
   - Domain events for cross-boundary updates

## Testing Strategy

1. **Unit Tests**
   - Jest-based testing configured in `jest.config.ts`
   - Follow patterns in existing tests

2. **E2E Tests**
   - Cucumber features in `tests/<app>-e2e/src/`
   - Playwright for browser automation
   - Example spec: `tests/shell-e2e/src/example.spec.ts`

## Important Conventions

1. **Project Generation**
   - Always use Nx generators for new projects/files
   - Angular apps: `nx g @nx/angular:app`
   - NestJS apps: `nx g @nx/nest:app`
   - Libraries: `nx g @nx/angular:lib` or `nx g @nx/nest:lib`

2. **Code Organization**
   - Follow DDD principles for domain separation
   - Use feature libraries for domain-specific code
   - Shared utilities in shared libraries

## Build and Deploy

1. **Build Configuration**
   - Production builds managed through project.json files
   - Module Federation requires all remotes to be built

2. **Performance Considerations**
   - Use Nx computation caching for faster builds
   - Leverage affected commands for CI efficiency

## Useful Files
- `nx.json` - Workspace configuration
- `apps/shell/project.json` - Shell app configuration
- `apps/shell/module-federation.config.ts` - Microfrontend setup
- `jest.config.ts` - Test configuration

Need help? Check the documentation in `/docs` or use `nx graph` to visualize project dependencies.