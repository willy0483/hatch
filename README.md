# Modern Blog Platform - Monorepo (NestJS + Next.js + Turborepo)

🚀 Build a real-world, scalable, production-grade web application using the latest technologies: **NestJS**, **Next.js**, **Turborepo**, **Prisma**, **TailwindCSS**, and more.

---

## 📚 What You'll Learn
- ✅ Monorepo setup using **Turborepo** (enterprise-grade tooling)
- ✅ High-performance API with **NestJS**, **GraphQL**, and **Prisma**
- ✅ Dynamic frontend with **Next.js 15** and **TailwindCSS 4**
- ✅ Secure authentication and authorization (JWT)
- ✅ PostgreSQL integration with Prisma ORM
- ✅ Cloud deployment ready (Vercel, AWS, DigitalOcean)

---

## 🏗️ Tech Stack

| Layer      | Tech                                                          |
|------------|---------------------------------------------------------------|
| Backend    | NestJS, Prisma, GraphQL, PostgreSQL, Argon2 (password hashing) |
| Frontend   | Next.js 15, React 19, TailwindCSS 4                            |
| Monorepo   | Turborepo                                                      |
| Dev Tools  | TypeScript, ESLint, Prettier, Jest, SWC, Docker                |

---

## 📁 Project Structure

```
apps/
  ├── api/         # NestJS backend (GraphQL API)
  └── frontend/    # Next.js frontend (React 19)

packages/
  ├── db/          # Prisma schema and DB Client
  ├── ui/          # Shared UI components (optional)
  └── config/      # Shared configurations (eslint, tsconfig, tailwind)
```

---

## ⚙️ Requirements

- Node.js 18+
- pnpm (preferred) / npm / yarn
- Docker (for local PostgreSQL database)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/modern-blog-platform.git
cd modern-blog-platform
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root:

```env
# Database
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/blogdb"

# JWT Secret
JWT_SECRET="your_secret_key"
JWT_EXPIRES_IN="1d"

# API URL
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

### 4. Start the Database with Docker

```bash
docker-compose up -d
```

### 5. Run Prisma Migrations

```bash
pnpm db:migrate
```

or directly inside `/packages/db/` if you separate it.

### 6. Run Development Servers

```bash
pnpm dev
```

- Frontend ➔ http://localhost:3000  
- Backend ➔ http://localhost:3001/graphql (NestJS GraphQL Playground)

---

## 📦 Package Details

### Backend (`apps/api`)

- Built with **NestJS 11**
- GraphQL server using Apollo Server
- Prisma ORM with PostgreSQL
- Authentication with JWT and Argon2

Scripts:

```bash
pnpm --filter api dev      # Start API in watch mode
pnpm --filter api build    # Build API
pnpm --filter api db:seed  # Run DB seed script
pnpm --filter api test     # Run tests
```

---

### Frontend (`apps/frontend`)

- Built with **Next.js 15** and **React 19**
- Styled with **TailwindCSS 4**
- TurboPack enabled for super fast dev

Scripts:

```bash
pnpm --filter frontend dev     # Start Next.js frontend
pnpm --filter frontend build   # Build frontend
pnpm --filter frontend start   # Start production frontend
```

---

## 🧹 Code Quality

- **ESLint** for linting
- **Prettier** for formatting
- **Jest** for unit and e2e testing
- **SWC** for ultra-fast compilation

Format and lint the codebase:

```bash
pnpm format
pnpm lint
```

---

## 🛳 Deployment

- **Frontend** can be easily deployed to **Vercel**.
- **Backend** can be deployed to **AWS**, **Render**, **DigitalOcean**, etc.
- Docker-ready for easy cloud deployments.

---

## 🛠️ Useful Commands

```bash
pnpm run dev            # Run frontend & backend concurrently
pnpm run build          # Build frontend & backend
pnpm run lint           # Lint the codebase
pnpm run format         # Format the codebase
pnpm db:migrate         # Run database migrations
pnpm db:seed            # Seed the database
```

---

## 🤝 Contributing

Contributions are welcome!  
Please open an issue or submit a PR if you want to contribute.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🌟 Support

If you like this project, please consider giving it a ⭐ on GitHub!
