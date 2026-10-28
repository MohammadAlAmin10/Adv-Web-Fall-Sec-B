# Product & Employee Management API (NestJS)

Lab Task 1 – a small shop system built with NestJS, TypeORM and PostgreSQL.
Products and Employees each have their own module, controller, service, entity and DTOs.
All database operations live in the services and read/write real PostgreSQL records.

## Student Details

| SL | Name | ID | Section |
|----|------|----|---------|
| 00 | Your Full Name | 00-00000-0 | B |

## Tech Used

NestJS, TypeScript, TypeORM, PostgreSQL, class-validator, pnpm

## Database Setup

1. Install PostgreSQL (and optionally pgAdmin).
2. Create the database. Either in pgAdmin (right-click Databases → Create → Database → `shop_db`) or with psql:
   ```bash
   psql -U postgres
   ```
   ```sql
   CREATE DATABASE shop_db;
   \q
   ```
3. The `products` and `employees` tables are created automatically the first time the app starts (TypeORM `synchronize: true`).

## Installation

```bash
pnpm install
cp .env.example .env
```

Open `.env` and set your own PostgreSQL password in `DB_PASSWORD`.
The real `.env` file is git-ignored and must never be committed.

| Variable | Meaning | Example |
|----------|---------|---------|
| DB_HOST | Database host | localhost |
| DB_PORT | Database port | 5432 |
| DB_USERNAME | Database user | postgres |
| DB_PASSWORD | Database password | (your own) |
| DB_NAME | Database name | shop_db |
| PORT | API port | 3000 |

## Run

```bash
# development (auto reload)
pnpm start:dev

# or production build
pnpm build
pnpm start:prod
```

The API runs at http://localhost:3000

## Endpoints

### Products

| Method | Endpoint | What it does |
|--------|----------|--------------|
| POST | /products | Create a product |
| GET | /products | Get all products |
| GET | /products/:id | Get one product |
| PATCH | /products/:id | Update a product |
| DELETE | /products/:id | Delete a product |

Product fields: `id` (auto), `name`, `category`, `price`, `quantity`

```json
{ "name": "Laptop", "category": "Electronics", "price": 850.5, "quantity": 12 }
```

### Employees

| Method | Endpoint | What it does |
|--------|----------|--------------|
| POST | /employees | Create an employee |
| GET | /employees | Get all employees |
| GET | /employees/:id | Get one employee |
| PATCH | /employees/:id | Update an employee |
| DELETE | /employees/:id | Delete an employee |

Employee fields: `id` (auto), `name`, `email`, `phone`, `password` (dummy), `age`, `yearsOfWorking`

```json
{
  "name": "Rahim Uddin",
  "email": "rahim@shop.com",
  "phone": "01712345678",
  "password": "dummy123",
  "age": 29,
  "yearsOfWorking": 4
}
```

### Behaviour notes

- Invalid request bodies return `400 Bad Request` with the validation messages.
- Unknown IDs return `404 Not Found`.
- `PATCH` accepts any subset of the fields.

## Project Structure

```
src/
├── main.ts
├── app.module.ts            # TypeORM + PostgreSQL connection
├── products/
│   ├── dto/                 # create / update DTOs
│   ├── entities/            # Product entity
│   ├── products.controller.ts
│   ├── products.service.ts  # all DB operations
│   └── products.module.ts
└── employees/               # same layout as products
```

## Screenshots

Postman screenshots for every product operation are in the `screenshots/` folder:

| File | Shows |
|------|-------|
| 01-create.png | POST /products request body and saved product |
| 02-get-all.png | GET /products with at least two products |
| 03-get-by-id.png | GET /products/:id for one real ID |
| 04-update.png | PATCH /products/:id request body and response |
| 05-confirm-update.png | GET /products/:id showing the changed values |
| 06-delete.png | DELETE /products/:id |
| 07-confirm-delete.png | GET /products without the deleted product |
