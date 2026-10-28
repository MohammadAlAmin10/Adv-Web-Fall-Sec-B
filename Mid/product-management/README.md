# Product & Employee Management API (NestJS)

## Student Details
| SL | Name | ID | Section |
|----|------|----|---------|
| 00 | Your Full Name | 00-00000-0 | A |

## Tech Used
NestJS, TypeScript, TypeORM, PostgreSQL, pnpm

## Database Setup
1. Install PostgreSQL and open pgAdmin.
2. Create a database named `shop_db`.
3. Tables are created automatically when the app starts.

## Installation
```bash
pnpm install
cp .env.example .env
```
Open `.env` and put your real PostgreSQL password in `DB_PASSWORD`.

## Run
```bash
pnpm start:dev
```
The app runs at http://localhost:3000

## Endpoints
| Method | Endpoint | What it does |
|--------|----------|--------------|
| POST | /products | Create a product |
| GET | /products | Get all products |
| GET | /products/:id | Get one product |
| PATCH | /products/:id | Update a product |
| DELETE | /products/:id | Delete a product |
| POST | /employees | Create an employee |
| GET | /employees | Get all employees |
| GET | /employees/:id | Get one employee |
| PATCH | /employees/:id | Update an employee |
| DELETE | /employees/:id | Delete an employee |

## Screenshots
Postman screenshots are in the `screenshots` folder.
