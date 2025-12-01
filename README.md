# Todo App

A premium, responsive Todo List application designed to help you organize your daily activities efficiently. Now powered by a Node.js backend with SQLite database.

## How to Use

1.  **Add Activity**: Click the floating **+** button at the bottom of the screen. Enter the activity name, select a date, and set a time.
2.  **View Activities**: Your activities are automatically sorted into "Overdue", "Today", "Tomorrow", "Next 7 Days", and "Upcoming". Scroll through the list to see what's coming up.
3.  **Complete Activity**: Click the **Done** button on any activity card. This will mark it as completed and move it to the **History**.
4.  **View History**: Click the **Menu** button (hamburger icon) in the top-left corner to open the History panel. Here you can see all your completed tasks.
5.  **Permanent Delete**: In the History panel, click the **Trash** icon to permanently delete a task from the database.
6.  **Switch Theme**: Use the floating sun/moon icon in the top-right corner to toggle between Light and Dark modes.

## Project Setup

This project now consists of a Frontend (Vite/React) and a Backend (Node/Express).

### Prerequisites
*   Node.js installed on your machine.

### Installation

1.  **Install Frontend Dependencies**:
    ```bash
    npm install
    ```

2.  **Install Backend Dependencies**:
    ```bash
    cd server
    npm install
    ```

### Running the App

You need to run both the backend and frontend servers.

1.  **Start Backend**:
    ```bash
    cd server
    npm start
    ```
    The server will run on `http://localhost:3000`.

2.  **Start Frontend** (in a new terminal):
    ```bash
    npm run dev
    ```
    The frontend will run on `http://localhost:5173`.

## Technical Details

This project is a full-stack application.

### Tech Stack
*   **Frontend**: [React](https://react.dev/), [Vite](https://vitejs.dev/)
*   **Backend**: Node.js, [Express](https://expressjs.com/)
*   **Database**: [SQLite](https://www.sqlite.org/)
*   **Styling**: Vanilla CSS with Semantic Classes (Glassmorphism, Animations, Responsive).
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Date Handling**: [date-fns](https://date-fns.org/)

### Key Features Implementation
*   **CRUD Operations**: Create, Read, Update, and Delete operations are fully supported via a RESTful API.
*   **SQL Database**: Data is persisted in a local SQLite database (`server/todos.db`), ensuring data integrity and persistence across sessions.
*   **History System**: Completed tasks are not lost; they are archived in the database with a `completed` flag and can be viewed or permanently deleted via the UI.
*   **Smart Sorting**: Tasks are intelligently categorized based on their due date (Overdue, Today, Tomorrow, etc.).

## Contact

If you are interested in this project or have any questions, please feel free to contact me:

**Email**: [ninis.dyah.yulianingsih@mail.ugm.ac.id](mailto:ninis.dyah.yulianingsih@mail.ugm.ac.id)
