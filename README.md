# DecodeLabs | Project 2 — Backend API

Node.js + Express backend for the DecodeLabs Intern Portal.

---

## API Endpoints

| Method | Route | Body | What it does |
|---|---|---|---|
| `POST` | `/api/register` | `{ username, password }` | Create a new user account |
| `POST` | `/api/login` | `{ username, password }` | Log in |
| `POST` | `/api/logout` | — | Log out |
| `POST` | `/api/courses/enroll` | `{ username, courseIds: [] }` | Save enrolled courses |
| `DELETE` | `/api/courses/enroll/:id` | `{ username }` | Remove one course |

---

## How to run

```bash
npm install express
node server.js
```

Opens at `http://localhost:3000`. Frontend files are served from `../frontend`.

> Note: `users` and `enrollments` are stored in memory and reset on server restart. Project 3 (Database) will persist this data.

---

*DecodeLabs Internship — 2026*
