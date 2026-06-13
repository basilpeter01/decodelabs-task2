# DecodeLabs | Project 2 — Backend API

Node.js + Express backend.

---

## API Endpoints

| Method | Route | Body | What it does |
|---|---|---|---|
| `POST` | `/api/register` | `{ username, password }` | Create a new user account |
| `POST` | `/api/login` | `{ username, password }` | Log in |
| `POST` | `/api/logout` | — | Log out |
| `POST` | `/api/courses/enroll` | `{ username, courseIds: [] }` | Save enrolled courses |
| `GET` | `/api/courses/enrolled?username=` | — | Get enrolled courses for a user |
| `DELETE` | `/api/courses/enroll/:id` | `{ username }` | Remove one course |

---

## How to run

```bash
npm install
node server.js
```

Opens at `http://localhost:3000`. Frontend files are served from `../frontend`.

> Requires MongoDB running on `localhost:27017`. Set the connection string in `.env`.

---

*DecodeLabs Internship — 2026*
