# IVP Africa Backend

## Project Overview

This repository contains the backend API for the IVP Africa platform. It is built with NestJS, Prisma, and PostgreSQL. The backend supports talent and employer registration flows, email verification, authentication, password reset, job creation, subscription/payment initialization, and webhook validation.

## Key Features

- Talent and employer registration
- Email verification for account activation
- JWT authentication
- Password reset workflow
- Job creation endpoint
- Paystack-style payment initialization and webhook verification
- Prisma ORM with PostgreSQL

## Project Structure

- `src/`
  - `app.module.ts` — Root module wiring all feature modules
  - `main.ts` — NestJS bootstrap and global pipeline setup
  - `common/filters/http-exception.filter.ts` — Standard JSON error formatter
  - `modules/`
    - `auth/` — Authentication, registration, verification, login, and password reset
      - `auth.controller.ts`
      - `auth.service.ts`
      - `auth.module.ts`
      - `dto/auth.dto.ts`
      - `jwt.strategy.ts`
    - `payments/` — Payment initialization and webhook verification
      - `payments.controller.ts`
      - `payments.service.ts`
      - `payments.module.ts`
    - `jobs/` — Job posting API
      - `jobs.controller.ts`
      - `jobs.module.ts`
    - `email/` — Email service for verification and password reset
      - `email.service.ts`
    - `prisma/` — Prisma database integration
      - `prisma.module.ts`
      - `prisma.service.ts`
    - `health/`, `applications/`, `system/`, `users/` — additional feature modules
- `prisma/schema.prisma` — Database schema and model definitions
- `package.json` — Scripts and dependencies

## Backend Architecture

- **NestJS** for modular server architecture and decorators.
- **Prisma** as the ORM connected to PostgreSQL via `DATABASE_URL`.
- **JWT** for authentication tokens in `AuthModule`.
- **Class-validator** + `ValidationPipe` for request validation.
- **Global route prefix**: `/api/v1`
- **EmailService** uses SMTP config and builds verification/reset links.
- **PaymentsService** uses a Paystack-style webhook signature verification.

### Global runtime behavior

- `app.setGlobalPrefix('api/v1')`
- `ValidationPipe` configured with:
  - `whitelist: true`
  - `forbidNonWhitelisted: true`
  - `transform: true`
- `HttpExceptionFilter` returns JSON error shape with `statusCode`, `timestamp`, and `error`.

## Environment Variables

Required environment variables:

- `DATABASE_URL` — PostgreSQL connection string
- `JWT_SECRET` — JWT signing secret
- `PAYSTACK_SECRET_KEY` — Paystack webhook secret
- `PAYSTACK_PUBLIC_KEY` — Paystack public key
- `API_URL` — Public API URL used in email links
- `SMTP_HOST` — SMTP host
- `SMTP_PORT` — SMTP port
- `SMTP_SECURE` — `true` or `false`
- `SMTP_USER` — SMTP username
- `SMTP_PASS` — SMTP password

## Database Schema

The Prisma schema defines the following models:

- `User`
  - `id`, `email`, `passwordHash`, `role`, `isVerified`
  - `verificationToken`, `resetToken`, `resetTokenExpiry`
  - Relations: `talentProfile`, `employerProfile`
- `TalentProfile`
  - Personal fields like `firstName`, `lastName`, `skills`, `resumeUrl`
  - Relation: `applications`
- `EmployerProfile`
  - Company fields like `companyName`, `contactPerson`, `industry`, `companySize`, `rcNumber`, `website`
  - Relations: `jobs`, `subscriptions`
- `Job`
  - `title`, `description`, `isActive`
  - Relation: `applications`
- `Application`
  - `jobId`, `talentId`, `status`
  - Unique constraint: one talent may apply only once per job
- `SubscriptionPlan`
  - Pricing plan metadata and features
- `Subscription`
  - Employer subscription record with `status`, `startDate`, `endDate`
- `Payment`
  - Payment record with `amount`, `status`, `paidAt`

### Enums

- `Role`: `ADMIN`, `TALENT`, `EMPLOYER`
- `ApplicationStatus`: `PENDING`, `REVIEWING`, `ACCEPTED`, `REJECTED`
- `SubscriptionStatus`: `ACTIVE`, `CANCELED`, `PAST_DUE`
- `PaymentStatus`: `PENDING`, `COMPLETED`, `FAILED`

## API Documentation

### Base URL

`http://localhost:3000/api/v1`

> All endpoints are prefixed with `/api/v1`.

### Authentication Endpoints

#### Register Talent

`POST /api/v1/auth/register/talent`

Request body:

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

Response:

```json
{
  "message": "Registration successful. Please check your email to verify your account.",
  "userId": "<new-user-uuid>"
}
```

#### Register Employer

`POST /api/v1/auth/register/employer`

Request body:

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

Response:

```json
{
  "message": "Registration successful. Please check your email to verify your account.",
  "userId": "<new-user-uuid>"
}
```

#### Login

`POST /api/v1/auth/login`

Request body:

```json
{
  "email": "jane@example.com",
  "password": "StrongP@ssw0rd!"
}
```

Response:

```json
{
  "access_token": "<jwt-token>",
  "user": {
    "id": "<user-uuid>",
    "email": "jane@example.com",
    "role": "TALENT"
  }
}
```

> Login requires the account to be verified first.

#### Verify Email

`GET /api/v1/auth/verify-email?token=<verification-token>`

Response:

```json
{
  "message": "Email verified successfully! Your account is now active."
}
```

If already verified:

```json
{
  "message": "Account is already verified. You can log in."
}
```

#### Request Password Reset

`POST /api/v1/auth/password-reset/request`

Request body:

```json
{
  "email": "jane@example.com"
}
```

Response:

```json
{
  "message": "A password reset link has been sent."
}
```

#### Confirm Password Reset

`POST /api/v1/auth/password-reset/confirm`

Request body:

```json
{
  "token": "<reset-token>",
  "newPassword": "NewStr0ngP@ss!"
}
```

Response:

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
