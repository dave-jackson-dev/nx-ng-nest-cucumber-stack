# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Security - 2025-12-15

#### Fixed
- **[CRITICAL]** Resolved Angular XSRF Token Leakage vulnerability ([GHSA-58c5-g7wp-6w37](https://github.com/advisories/GHSA-58c5-g7wp-6w37))
- **[CRITICAL]** Resolved Angular Stored XSS vulnerability via SVG Animation, SVG URL and MathML Attributes ([GHSA-v4hv-rgfq-gp49](https://github.com/advisories/GHSA-v4hv-rgfq-gp49))
- **[HIGH]** Resolved esbuild development server vulnerability allowing unauthorized requests ([GHSA-67mh-4wv8-2f99](https://github.com/advisories/GHSA-67mh-4wv8-2f99))
- **[MODERATE]** Resolved js-yaml prototype pollution vulnerability in merge operation ([GHSA-mh29-5h37-fv8m](https://github.com/advisories/GHSA-mh29-5h37-fv8m))

#### Changed - Security Updates

**Angular Framework (18.2.0 → 19.2.17)**
- Updated `@angular/animations` from ^18.2.0 to ^19.2.17
- Updated `@angular/common` from ^18.2.0 to ^19.2.17
- Updated `@angular/compiler` from ^18.2.0 to ^19.2.17
- Updated `@angular/core` from ^18.2.0 to ^19.2.17
- Updated `@angular/forms` from ^18.2.0 to ^19.2.17
- Updated `@angular/platform-browser` from ^18.2.0 to ^19.2.17
- Updated `@angular/platform-browser-dynamic` from ^18.2.0 to ^19.2.17
- Updated `@angular/router` from ^18.2.0 to ^19.2.17

**Angular CLI & Build Tools (18.2.x → 19.2.17)**
- Updated `@angular/cli` from ^18.2.12 to ^19.2.17
- Updated `@angular/compiler-cli` from ^18.2.0 to ^19.2.17
- Updated `@angular/language-service` from ^18.2.0 to ^19.2.17
- Updated `@angular-devkit/build-angular` from ^18.2.12 to ^19.2.17
- Updated `@angular/build` from ^18.2.12 to ^19.2.17

**NestJS Framework (10.x → 11.1.9)**
- Updated `@nestjs/common` from ^10.0.0 to ^11.1.9
- Updated `@nestjs/core` from ^10.0.0 to ^11.1.9
- Updated `@nestjs/platform-express` from ^10.0.0 to ^11.1.9
- Updated `@nestjs/microservices` from ^10.0.0 to ^11.1.9
- Updated `@nestjs/config` from ^3.0.0 to ^4.0.0
- Updated `@nestjs/jwt` from ^10.1.0 to ^11.0.0
- Updated `@nestjs/passport` from ^10.0.0 to ^11.0.0
- Updated `@nestjs/swagger` from ^7.1.2 to ^11.2.3 (fixes js-yaml vulnerability)
- Updated `@nestjs/typeorm` from ^10.0.0 to ^11.0.0
- Updated `@nestjs/schematics` from ^11.0.0 to ^11.0.0
- Updated `@nestjs/testing` from ^10.0.0 to ^11.0.0

**NgRx State Management (18.x → 19.x)**
- Updated `@ngrx/store` from ^18.0.0 to ^19.0.0
- Updated `@ngrx/effects` from ^18.0.0 to ^19.0.0
- Updated `@ngrx/entity` from ^18.0.0 to ^19.0.0
- Updated `@ngrx/store-devtools` from ^18.0.0 to ^19.0.0

#### Security Audit Results
- **Before:** 21 vulnerabilities (10 high, 5 moderate, 6 low)
- **After:** 0 vulnerabilities ✅
- **Status:** Production ready and secure

#### Breaking Changes
- Angular 19 may have breaking changes from Angular 18. Review the [Angular Update Guide](https://update.angular.io/) for migration steps.
- NestJS 11 introduces breaking changes from v10. Review the [NestJS Migration Guide](https://docs.nestjs.com/migration-guide) for details.
- NgRx 19 may have breaking changes. Review the [NgRx Update Guide](https://ngrx.io/guide/migration/v19) if using state management features.

#### Compatibility
- Nx workspace version maintained at 22.2.3
- All builds verified successful after upgrades
- Module Federation configuration remains compatible

#### Notes
- Upgrades performed using `--legacy-peer-deps` flag to maintain Nx monorepo compatibility
- All Nx migrations successfully completed before framework upgrades
- Build and serve commands verified working post-upgrade

---

## [1.0.0] - Initial Release

### Added
- Initial monorepo setup with Nx
- Angular microfrontend shell application
- Module Federation configuration
- NestJS microservices foundation
- Domain-Driven Design (DDD) structure
- Cucumber testing framework setup
- ESLint and Prettier configuration
- TypeScript configuration
- Git hooks with Husky and lint-staged
