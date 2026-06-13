# DecodeLabs | Project 2 — Backend API

Node.js + Express backend.

---

## What it does

- **Serves the frontend** — `express.static` serves the `frontend/` folder, so visiting `localhost:3000` loads the HTML, CSS, and JS directly from the backend.
- **Register** — validates that username and password are present and password is at least 6 characters, checks MongoDB for duplicate usernames, then creates a new user document.
- **Login** — queries MongoDB for a user matching both username and password. Returns the user's name on success or a 401 error on failure.
- **Logout** — receives the logout signal from the frontend and responds with success.
- **Save courses** — receives an array of course IDs from the frontend and updates the user's `enrolledCourses` field in MongoDB using `findOneAndUpdate`.
- **Get enrolled courses** — on login, the frontend calls this with the username as a query parameter. The backend finds the user in MongoDB and returns their `enrolledCourses` array.
- **Remove a course** — takes a course ID from the URL and the username from the request body, then removes that ID from the user's `enrolledCourses` array in MongoDB using the `$pull` operator.
- **Database connection** — `db.js` connects to MongoDB at startup using the URI from `.env`. All routes use `async/await` with `try/catch` to handle database errors without crashing the server.

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
