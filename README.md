# Todo App

A premium, responsive Todo List application designed to help you organize your daily activities efficiently.

<img width="1920" height="931" alt="Screenshot 2025-11-29 233635" src="https://github.com/user-attachments/assets/dedb8226-44a7-436a-8c97-c1baee10f28a" />

## How to Use

1.  **Add Activity**: Click the floating **+** button at the bottom of the screen. Enter the activity name, select a date, and set a time.
2.  **View Activities**: Your activities are automatically sorted into "Today", "Tomorrow", and "Next 7 Days". Scroll through the list to see what's coming up.
3.  **Complete Activity**: Click the **Done** button on any activity card to mark it as complete and remove it from the list.
4.  **Switch Theme**: Use the floating sun/moon icon in the top-right corner to toggle between Light and Dark modes.
5.  **Notifications**: Allow browser notifications to receive alerts for your scheduled activities.

## Technical Details

This project is a Single Page Application (SPA) built with modern web technologies.

### Tech Stack
*   **Framework**: [React](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: Vanilla CSS with Semantic Classes (No external CSS frameworks like Tailwind). Features include:
    *   Glassmorphism effects
    *   CSS Variables for theming (Light/Dark mode)
    *   Smooth CSS animations and transitions
    *   Responsive design
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Date Handling**: [date-fns](https://date-fns.org/)

### Key Features Implementation
*   **Persistence**: Data is saved to the browser's `localStorage` as a JSON string, ensuring your todo list survives page reloads.
*   **State Management**: React `useState` and `useEffect` hooks manage the application state and side effects.
*   **Custom Hooks**: A `useTodos` hook encapsulates the logic for adding, removing, and persisting todos.

## Contact

If you are interested in this project or have any questions, please feel free to contact me:

**Email**: [ninis.dyah.yulianingsih@mail.ugm.ac.id](mailto:ninis.dyah.yulianingsih@mail.ugm.ac.id)
