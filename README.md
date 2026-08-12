# IVP Africa Backend

## Overview

This repository contains the backend API for the IVP Africa platform. It is built with NestJS, Prisma, and PostgreSQL. The application provides authentication, email verification, password recovery, employer profile management, job posting, subscription handling, payment flow, and messaging support.

## Tech Stack

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT authentication
- Nodemailer for email delivery
- Paystack-style webhook handling
- Class-validator / ValidationPipe

## Project Layout

- `src/main.ts` — Application bootstrap, global prefix, validation pipe, and exception filter
- `src/app.module.ts` — Root module importing feature modules
- `src/app.controller.ts` — Root welcome route
- `src/common/filters/http-exception.filter.ts` — Custom API error formatter
- `src/modules/` — Feature modules and controllers
  - `auth/` — Authentication, registration, login, email verification, password reset
  - `payments/` — Payment initialization and webhook handling
  - `jobs/` — Job creation, applicant management, interview and fill actions
  - `subscriptions/` — Subscription plan creation and purchase flows
  - `employer/` — Employer profile management
  - `health/` — Health check endpoint
  - `system/` — Database seeding utilities
  - `messaging/` — Messaging and conversations
  - `prisma/` — Prisma database integration
  - `applications/` — Placeholder module
  - `users/` — Placeholder module
  - `talent/` — Talent profile and dashboard controller (not wired into `AppModule`)

## Getting Started

Install dependencies:

```bash
npm install
```

Generate Prisma client (also runs automatically after install):

```bash
npx prisma generate
```

Run the app in development mode:

```bash
npm run start:dev
```

Build for production:

```bash
npm run build
```

Run tests:

```bash
npm test
```

## OpenAPI / Swagger

This project exposes interactive OpenAPI docs powered by `@nestjs/swagger` and served via Swagger UI.

- Swagger UI: `GET /api/docs` — browse endpoints and try requests.
- OpenAPI JSON: available from the Swagger module (the UI fetches it automatically).

To use locally:

```bash
npm install
npm run start:dev
# then open http://localhost:3000/api/docs
```

Notes:

- Protected endpoints require providing a JWT via the Swagger "Authorize" button (use `Bearer <token>`).
- If you change controller route prefixes, restart the server so Swagger regenerates the OpenAPI spec.


## Environment Variables

The application uses `dotenv` and requires the following variables:

- `DATABASE_URL` — PostgreSQL connection string
- `DIRECT_URL` — Direct database connection string used by Prisma migrations
- `JWT_SECRET` — JWT signing secret
- `PAYSTACK_SECRET_KEY` — Paystack webhook secret
- `PAYSTACK_PUBLIC_KEY` — Paystack public key
- `API_URL` — Public API URL used in email links
- `SMTP_HOST` — SMTP server host
- `SMTP_PORT` — SMTP server port
- `SMTP_SECURE` — `true` or `false`
- `SMTP_USER` — SMTP username
- `SMTP_PASS` — SMTP password

## Runtime Configuration

`src/main.ts` applies a global API prefix and validation pipe:

- `app.setGlobalPrefix('api/v1')`
- `ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true })`
- `HttpExceptionFilter` formats exceptions as JSON

## Active Modules

### Included in `AppModule`

- `AuthModule`
- `UsersModule` (empty placeholder)
- `JobsModule`
- `ApplicationsModule` (empty placeholder)
- `PaymentsModule`
- `EmployerModule`
- `HealthModule`
- `SystemModule`
- `PrismaModule`
- `SubscriptionsModule`
- `MessagingModule`

### Not wired into `AppModule`

- `TalentController` exists under `src/modules/talent/`, but there is no `TalentModule` import in `AppModule`. As a result, talent routes are currently not registered.

## Available Routes

### Base URL

`http://localhost:3000/api/v1`

### Root Route

- `GET /api/v1` — Returns a welcome payload from `AppController`

### Authentication

- `POST /api/v1/auth/register/talent`
- `POST /api/v1/auth/register/employer`
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/password-reset/request`
- `GET /api/v1/auth/verify-email?token=<verification-token>`
- `POST /api/v1/auth/password-reset/confirm`

### Employer Profile

- `GET /api/v1/employer/profile`
- `PATCH /api/v1/employer/profile`

### Jobs

- `GET /api/v1/jobs/admin/filled-jobs`
- `POST /api/v1/jobs`
- `GET /api/v1/jobs/:id/applicants`
- `PATCH /api/v1/jobs/:id/applicants/:applicationId/status`
- `PATCH /api/v1/jobs/:id`
- `PATCH /api/v1/jobs/:id/close`
- `GET /api/v1/jobs/my-postings`
- `PATCH /api/v1/jobs/:id/applicants/:applicationId/shortlist`
- `PATCH /api/v1/jobs/:id/applicants/:applicationId/reject`
- `POST /api/v1/jobs/:id/applicants/:applicationId/interview`
- `PATCH /api/v1/jobs/:id/fill`
- `PATCH /api/v1/jobs/interviews/:interviewId/reschedule`
- `PATCH /api/v1/jobs/interviews/:interviewId/cancel`

### Subscriptions

- `POST /api/v1/subscriptions/admin/plans`
- `PATCH /api/v1/subscriptions/admin/plans/:id`
- `PATCH /api/v1/subscriptions/admin/plans/:id/status`
- `GET /api/v1/subscriptions/admin/employers`
- `GET /api/v1/subscriptions/plans`
- `POST /api/v1/subscriptions/purchase/:planId`

### Payments

- `POST /api/v1/payments/initialize`
- `POST /api/v1/payments/webhook`
- `GET /api/v1/payments/history`

### Messaging

- `POST /api/v1/messaging/send`
- `GET /api/v1/messaging/conversations`
- `GET /api/v1/messaging/conversations/:id/messages`
- `DELETE /api/v1/messaging/conversations/:id`

### Health & System

- `GET /api/v1/health`
- `POST /api/v1/system/seed`

## Important Notes

- `PaymentsController` and `MessagingController` are annotated with `@Controller('api/v1/...')` in addition to the global prefix. This may cause route duplication at runtime (`/api/v1/api/v1/...`) unless the controller paths are adjusted.
- `TalentController` declares routes under `@Controller('api/v1')` but is not registered through `AppModule`, so those routes are not currently active.
- `UsersModule` and `ApplicationsModule` are imported by `AppModule` but currently contain no controllers or routes.
- `SubscriptionsController` uses `JwtAuthGuard` and role guards, while `PaymentsController` uses `JwtAuthGuard` only for `initialize` and `history`.
- `SystemController.seedDatabase()` is exposed as `POST /api/v1/system/seed`.

## Database Schema Overview

The Prisma schema defines core models such as:

- `User`
- `TalentProfile`
- `EmployerProfile`
- `Job`
- `Application`
- `SubscriptionPlan`
- `Subscription`
- `Payment`

These models power user flows, job postings, subscriptions, and payment records.

## Scripts

- `npm run start` — Start NestJS in production mode
- `npm run start:dev` — Start development server with watch mode
- `npm run build` — Build the app
- `npm run lint` — Run ESLint
- `npm test` — Run Jest tests

## Maintenance Notes

- Fix duplicate `api/v1` route declarations in controllers
- Import or remove the `talent` module to match actual route availability
- Add controllers for `UsersModule` and `ApplicationsModule` if those features are intended to be active

### Example Request Bodies

#### Talent Registration

`POST /api/v1/auth/register/talent`

```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane@example.com",
  "password": "StrongP@ssw0rd!",
  "confirmPassword": "StrongP@ssw0rd!",
  "acceptTerms": true
}
```

#### Employer Registration

`POST /api/v1/auth/register/employer`

```json
{
  "companyName": "IVP Solutions",
  "contactPerson": "John Doe",
  "email": "hr@example.com",
  "password": "StrongP@ssw0rd!",
  "confirmPassword": "StrongP@ssw0rd!",
  "industry": "Technology",
  "companySize": "50-100",
  "rcNumber": "RC123456",
  "acceptTerms": true
}
```

#### Login

`POST /api/v1/auth/login`

```json
{
  "email": "jane@example.com",
  "password": "StrongP@ssw0rd!"
}
```

#### Password Reset Request

`POST /api/v1/auth/password-reset/request`

```json
{
  "email": "jane@example.com"
}
```

#### Confirm Password Reset

`POST /api/v1/auth/password-reset/confirm`

```json
{
  "token": "<reset-token>",
  "newPassword": "NewStr0ngP@ss!"
}
```


```json
{
  "message": "Password has been successfully reset. You can now log in with your new password."
}
```

### Jobs Endpoint

#### Create Job

`POST /api/v1/jobs`

Request body:

```json
{
  "title": "Backend Engineer",
  "description": "Build APIs for the IVP platform"
}
```

Response:

```json
{
  "message": "Job created successfully (Mocked)",
  "jobId": "mock-uuid-9876",
  "title": "Backend Engineer"
}
```

> The jobs endpoint currently returns a mocked success response.

### Payments and Webhooks

#### Initialize Payment

`POST /api/v1/payments/initialize`

Request body:

```json
{
  "email": "hr@example.com",
  "amount": 199.99
}
```

Response:

```json
{
  "status": "success",
  "checkoutUrl": "https://checkout.paystack.com/mock-session-code",
  "reference": "IVP_REF_2026_<random>"
}
```

#### Webhook Verification

`POST /api/v1/payments/webhook`

Headers:

- `x-paystack-signature`: `<webhook-signature>`

Request body example:

```json
{
  "event": "charge.success",
  "data": {
    "reference": "IVP_REF_2026_12345",
    "amount": 19999,
    "status": "success"
  }
}
```

Response:

```json
{
  "status": "received",
  "message": "Webhook signature validated. Transaction reference IVP_REF_2026_12345 processed cleanly."
}
```

#### Verify Payment Configuration

`POST /api/v1/payments/verify-config`

Response:

```json
{
  "success": true,
  "message": "Paystack configurations validated and loaded into internal memory safely."
}
```

### Applications

- `POST /api/v1/applications/apply/:jobId`
  - Description: Apply to a job as an authenticated talent user.
  - Requirements: JWT auth (role: `TALENT`).
  - Body: none (application uses the authenticated user's talent profile and the `jobId` URL param).
  - Response (201 Created):
    ```json
    { "message": "Application submitted", "applicationId": "<uuid>" }
    ```

- `GET /api/v1/applications/my-applications`
  - Description: Retrieve the authenticated talent user's applications.
  - Requirements: JWT auth (any authenticated user, typically `TALENT`).
  - Query: optional pagination/search parameters (implementation-defined).
  - Response (200):
    ```json
    [{ "applicationId": "<uuid>", "jobId": "<uuid>", "status": "PENDING", "appliedAt": "2026-08-12T..." }, ...]
    ```

### Talent profile endpoints

- `PUT /api/v1/talent/profile/personal`
  - Description: Update personal information for the authenticated talent user.
  - Requirements: JWT auth.
  - Body (example):
    ```json
    {
      "firstName": "Jane",
      "lastName": "Doe",
      "headline": "Backend Engineer",
      "location": "Lagos, NG"
    }
    ```
  - Response (200): updated talent profile object.

- `POST /api/v1/talent/profile/experience`
  - Description: Add a work experience entry to the authenticated talent profile.
  - Requirements: JWT auth.
  - Body (example):
    ```json
    {
      "company": "ACME Corp",
      "role": "Software Engineer",
      "startDate": "2022-01-01",
      "endDate": "2023-12-31",
      "description": "Worked on APIs"
    }
    ```
  - Response (201): created work experience object.

- `POST /api/v1/talent/profile/education`
  - Description: Add an education entry.
  - Requirements: JWT auth.
  - Body (example):
    ```json
    {
      "institution": "University",
      "degree": "BSc Computer Science",
      "fieldOfStudy": "Computer Science",
      "startDate": "2016-09-01",
      "endDate": "2020-06-30"
    }
    ```
  - Response (201): created education object.

- `PUT /api/v1/talent/profile/skills`
  - Description: Replace or update the skills array for the talent profile.
  - Requirements: JWT auth.
  - Body (example):
    ```json
    { "skills": ["Node.js", "TypeScript", "PostgreSQL"] }
    ```
  - Response (200): updated skills list.

### Messaging (admin)

- `GET /api/v1/messaging/admin/conversations`
  - Description: Admin-only listing of all conversations with optional search.
  - Requirements: JWT auth and admin role (`ADMIN` or `SUPER_ADMIN`).
  - Query: `?search=<query>` (optional)
  - Response (200): array of conversation summaries.

### Payments / Webhook notes

- `POST /api/v1/payments/webhook`
  - Description: Paystack webhook receiver. The endpoint accepts webhook posts and responds immediately with HTTP 200 to acknowledge delivery, then processes the payload asynchronously.
  - Requirements: None for the external service, but the request must include header `x-paystack-signature` for signature verification.
  - Body: Paystack event payload (implementation forwards to `PaymentsService.handlePaystackWebhook`).
  - Response: 200 OK (empty) — processing happens in background.

For correctness: ensure your Paystack webhook settings send the `x-paystack-signature` header and that `PAYSTACK_SECRET_KEY` is set in environment variables.

## Contributors & Maintenance

- Keep secrets out of the repository (`.env` should never be committed).
- If you add controllers, prefer using relative controller paths (e.g., `@Controller('messaging')`) and rely on the global prefix set in `src/main.ts` (`api/v1`) to avoid duplicated prefixes.
- When adding new endpoints that accept uploads, use `FileInterceptor` and `ParseFilePipeBuilder` (as the employer profile update does) to centrally enforce file-type and size limits.


## Auth and Email Flow

- Registration creates a `User` and either a `TalentProfile` or `EmployerProfile`.
- A verification token is emailed to the user.
- Email verification updates `isVerified` and clears `verificationToken`.
- Password reset generates a token and expiry, sends it by email, then confirms with `password-reset/confirm`.

## Notes

- `AuthService` uses `bcrypt` for password hashing.
- The `EmailService` builds verification and reset URLs from `API_URL`.
- `PrismaService` uses `@prisma/adapter-pg` and connects on module init.
- The API currently has mocked job creation and payment initialization for architecture validation.

## Running the Project

Install dependencies:

```bash
npm install
```

Generate Prisma client (runs automatically after install):

```bash
npm run postinstall
```

Start in development mode:

```bash
npm run start:dev
```

Run tests:

```bash
npm test
```
