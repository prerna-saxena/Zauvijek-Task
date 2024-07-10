# Zauvijek-Task
Zauvijek Task

Objective:
Create a full-featured To-Do application using Electron, React, and SQLite, ensuring seamless updates and
proper installation/uninstallation on Windows systems.
Requirements:
1. Application Development:
1. Frontend:
 Use React for building the user interface.
 Utilize the Vite boilerplate for project setup and development.
 Implement features such as adding, editing, deleting, and marking tasks as completed.
 Incorporate state management (e.g., using Redux or Context API) for efficient data
handling.
2. Backend:
 Use SQLite for data storage.
 Implement CRUD operations (Create, Read, Update, Delete) for managing tasks.
 Ensure data persistence across application restarts.

2. Electron Integration:
1. Integrate the React frontend with Electron to create a desktop application.
2. Ensure smooth communication between the Electron main process and the React renderer process.
3. Auto-Updater:
1. Implement an auto-update feature using Electron's auto Updater module.
2. Configure the auto-updater to fetch updates from a GitHub repository.
3. Use a GitHub token to authenticate and fetch updates securely.
4. Ensure the application checks for updates on startup and applies them seamlessly.
4. Installer and Uninstaller:
1. Create a proper installer for the Windows operating system.
2. Ensure the installer includes all necessary dependencies and files for running the application.
3. Develop an uninstaller that removes all application files and data cleanly.
4. Utilize tools like electron-builder to streamline the packaging and installation process.
5. Version Management:
1. Implement a versioning system to manage application updates.
2. Ensure the build process assigns proper version numbers to each release.
3. Document the update process, including how versioning is handled and how updates are applied.
6. Documentation and Code Quality:
1. Provide clear and concise documentation for setting up, building, and running the application.
2. Ensure code quality by following best practices and maintaining a clean, readable codebase.
3. Include comments and documentation within the code where necessary.
7. GitHub Repository:
1. Maintain a GitHub repository for the project.
2. Regularly commit code with meaningful messages.
3. Ensure the repository includes a README.md with setup instructions, features, and any relevant
information.

8. Testing:
1. Implement unit and integration tests to ensure application stability.
2. Use testing frameworks suitable for React and Electron (e.g., Jest, Mocha, Spectron).
3. Ensure tests cover critical functionality and edge cases.

