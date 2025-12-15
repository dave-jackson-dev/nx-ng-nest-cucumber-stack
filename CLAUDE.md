# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Nx monorepo template designed for full-stack applications using Angular and NestJS, with Cucumber testing capabilities. The repository is currently a template with empty application and library directories.

## Architecture

- **Monorepo Structure**: Uses Nx workspace for managing multiple applications and libraries
- **Frontend**: Angular applications (via @nx/angular)
- **Backend**: NestJS applications (via @nx/nest)
- **Testing**: Cucumber-based testing framework
- **Build System**: Nx build system with caching and task orchestration

## Directory Structure

- `apps/` - Application projects (frontend and backend applications)
- `libs/` - Shared libraries and utilities
- `tests/` - Test files and configurations
- `docs/` - Project documentation

## Common Commands

Since this uses Nx, use the Nx MCP Server for all operations:

### Development

- `nx serve <app-name>` - Start development server for an application
- `nx build <app-name>` - Build an application for production
- `nx test <app-name>` - TODO: Run Cucumber tests for a project (no Jest/Playwright)
- `nx e2e <app-name>` - TODO: Run Cucumber end-to-end tests

### Code Generation

- `nx g @nx/angular:app <app-name>` - Generate Angular application
- `nx g @nx/nest:app <app-name>` - Generate NestJS application
- `nx g @nx/angular:lib <lib-name>` - Generate Angular library
- `nx g @nx/nest:lib <lib-name>` - Generate NestJS library

### Workspace Operations

- `nx graph` - View project dependency graph
- `nx affected:build` - Build only affected projects
- `nx affected:test` - TODO: Run Cucumber tests only for affected projects
- `nx format:check` - Check code formatting
- `nx format:write` - Format code

## Development Notes

- Always use the Nx MCP Server rather than running commands directly in the terminal
- The workspace uses Nx's project.json files for project configuration (no workspace.json)
- Dependencies are managed at the workspace root level
- Follow Nx conventions for project naming and organization

## Nx MCP Server Integration

When working with this repository, Claude Code should use the following MCP server tools:

1. `mcp_nx_mcp_server_nx_docs`

   - Use for searching Nx documentation
   - Always consult this first when unsure about configuration or best practices

2. `mcp_nx_mcp_server_nx_workspace`

   - Use to understand workspace architecture and configuration
   - Call this before making workspace changes

3. `mcp_nx_mcp_server_nx_project_details`

   - Use for detailed project-specific information
   - Important for understanding individual project configuration

4. `mcp_nx_mcp_server_nx_generators`

   - Use before any code generation tasks
   - Lists available generators for the workspace

5. `mcp_nx_mcp_server_nx_generator_schema`

   - Use to understand generator options
   - Required before running generators

6. `mcp_nx_mcp_server_nx_run_generator`

   - Use for all code generation tasks
   - Prefer this over CLI commands

7. `mcp_nx_mcp_server_nx_visualize_graph`

   - Use for understanding project dependencies
   - Helpful for explaining task relationships

8. `mcp_nx_mcp_server_nx_available_plugins`
   - Use to check available Nx plugins
   - Helpful when adding new capabilities

### Best Practices for Claude Code

1. Verify server status first with any tool call
2. Always get workspace context before making changes
3. Use the UI for generators instead of CLI commands
4. Maintain project structure according to Nx conventions
5. Visualize dependencies when explaining relationships
6. Consult documentation through nx_docs when uncertain

<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# General Guidelines for working with Nx

- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`) instead of using the underlying tooling directly
- You have access to the Nx MCP server and its tools, use them to help the user
- When answering questions about the repository, use the `nx_workspace` tool first to gain an understanding of the workspace architecture where applicable.
- When working in individual projects, use the `nx_project_details` mcp tool to analyze and understand the specific project structure and dependencies
- For questions around nx configuration, best practices or if you're unsure, use the `nx_docs` tool to get relevant, up-to-date docs. Always use this instead of assuming things about nx configuration
- If the user needs help with an Nx configuration or project graph error, use the `nx_workspace` tool to get any errors

<!-- nx configuration end-->
