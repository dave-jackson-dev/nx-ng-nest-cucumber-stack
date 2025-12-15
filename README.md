# Nx Angular + NestJS + Cucumber Template

This is an Nx monorepo template for full-stack applications using Angular, NestJS, and Cucumber testing. It implements Domain-Driven Design (DDD) principles and Module Federation for micro-frontends.

## Features
- **Nx Monorepo**: Efficient workspace management with caching and task orchestration
- **Angular 18**: Modern frontend with Module Federation support
- **NestJS 10**: Scalable Node.js backend framework
- **Cucumber Testing**: BDD-style testing framework (no Jest/Playwright)
- **DDD Architecture**: Domain-driven design with ESLint boundary enforcement
- **Module Federation**: Micro-frontend architecture support
- **TypeScript**: Full type safety across the stack

## Getting Started
1. Click the "Use this template" button at the top of the repository
2. Clone your new repository
3. Install dependencies: `npm install`
4. Start the shell application: `nx serve shell`

## Project Structure
```
.
├── apps/              # Applications (Angular frontends, NestJS backends)
├── libs/              # Shared libraries and domain modules
├── tests/             # Test files (Cucumber-based)
├── docs/              # Project documentation
└── .github/           # GitHub workflows and templates
```

## Testing
This template will use Cucumber for behavior-driven development (BDD) testing:
- **Unit Tests**: Domain logic testing with Cucumber scenarios
- **Integration Tests**: Service interaction testing
- **E2E Tests**: End-to-end user workflow testing

Run tests with: `nx test <project-name>`

## Available Commands
- `nx serve <app>` - Start development server
- `nx build <app>` - Build application
- `nx test <app>` - Run Cucumber tests
- `nx lint <app>` - Run ESLint
- `nx graph` - View dependency graph

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details