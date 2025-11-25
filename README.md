# NoteApp
NoteApp is a full-stack web application for creating, managing, and storing notes. It features a clean, responsive user interface and a robust backend built with Node.js and Express. The application leverages a MERN stack (MongoDB, Express, React, Node.js) and includes features like API rate limiting with Upstash Redis.

## Features

*   **CRUD Operations:** Create, Read, Update, and Delete notes.
*   **Responsive UI:** A modern interface built with React, Tailwind CSS, and daisyUI that works on all screen sizes.
*   **Dynamic Note Grid:** View all notes in an organized grid on the homepage.
*   **Detailed Note View:** Click on a note to view and edit its details on a dedicated page.
*   **Real-time Feedback:** User actions are confirmed with toast notifications.
*   **Rate Limiting:** The backend API is protected against abuse with a sliding window rate limiter, implemented using Upstash Redis.
*   **Loading & Empty States:** The UI provides feedback during data fetching and displays a user-friendly message when no notes are found.

## Tech Stack

*   **Frontend:**
    *   **Framework:** React (with Vite)
    *   **Styling:** Tailwind CSS, daisyUI
    *   **Routing:** React Router
    *   **HTTP Client:** Axios
    *   **Icons:** Lucide React

*   **Backend:**
    *   **Runtime:** Node.js
    *   **Framework:** Express.js
    *   **Database ORM:** Mongoose
    *   **Rate Limiting:** Upstash Redis (`@upstash/ratelimit`, `@upstash/redis`)

*   **Database:**
    *   MongoDB

## API Endpoints

The backend exposes the following REST API endpoints under `/api/notes`:

| Method | Endpoint      | Description           |
| :----- | :------------ | :-------------------- |
| `GET`  | `/`           | Fetches all notes     |
| `GET`  | `/:id`        | Fetches a single note |
| `POST` | `/`           | Creates a new note    |
| `PUT`  | `/:id`        | Updates an existing note |
| `DELETE`| `/:id`      | Deletes a note        |

## Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

*   Node.js (v16.20.1 or higher)
*   npm
*   MongoDB instance (local or cloud-based, e.g., MongoDB Atlas)
*   Upstash account for Redis

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/gourypriya20/NoteApp.git
    cd NoteApp
    ```

2.  **Create an environment file for the backend:**
    Navigate to the `backend` directory and create a `.env` file. Add the following environment variables:
    ```
    MONGO_URI=your_mongodb_connection_string
    UPSTASH_REDIS_REST_URL=your_upstash_redis_url
    UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
    PORT=5001
    NODE_ENV=development
    ```

3.  **Install dependencies for both frontend and backend:**
    From the root directory, run the following command. This will install all necessary packages for both services and build the frontend for production.
    ```sh
    npm install
    ```

### Running in Development Mode

To run the application in a development environment with hot-reloading:

1.  **Start the backend server:**
    Open a terminal and navigate to the `backend` directory.
    ```sh
    cd backend
    npm run dev
    ```
    The backend server will start on the port specified in your `.env` file (e.g., `http://localhost:5001`).

2.  **Start the frontend development server:**
    Open a second terminal and navigate to the `frontend` directory.
    ```sh
    cd frontend
    npm run dev
    ```
    The frontend will be available at `http://localhost:5173`.

### Running in Production Mode

To run the application in production, you can use the scripts defined in the root `package.json`.

1.  Ensure all dependencies are installed and the frontend is built by running `npm install` from the root directory.

2.  Set `NODE_ENV` to `production` in your `backend/.env` file.

3.  Start the server from the root directory:
    ```sh
    npm start
    ```
    The application will be served from the backend server on the port you defined (e.g., `http://localhost:5001`).
