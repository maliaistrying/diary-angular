# Diary-Angular

An intuitive, feature-rich diary application built with **Angular**, designed to help users seamlessly record, manage, and reflect on their daily activities and thoughts.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setting Up MongoDB](#setting-up-mongodb)
  - [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
  - [Backend Folder Structure](#backend-folder-structure)
  - [Frontend App Folder Structure](#frontend-app-folder-structure)
- [Authentication System](#authentication-system)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About the Project

The **Diary-Angular** project is a personal diary application that allows users to:

- Securely log in and manage their personalized diary entries.
- Record daily entries with timestamps.
- Organize entries by categories or tags.
- Protect entries with robust authentication features.
- Store entries securely using MongoDB as the backend database.

---

## Features

- **Secure Authentication System**: 
  - Register and log in using email and password.
  - Token-based authentication using JWT (JSON Web Tokens) for session security.
  - Encrypted password storage using bcrypt.

- **CRUD Operations for Diary Entries**:
  - Create, update, and delete diary entries.
  - View entries by date, tag, or category.

- **Responsive Design**: Mobile and desktop-friendly.

- **Data Storage with MongoDB**:
  - Entries are stored in MongoDB for fast and scalable data handling.
  - Secure user data with collections for authentication and diary entries.

---

## Technologies Used

- **Frontend**:
  - **Angular**: For building the dynamic user interface.
  - **RxJS**: For managing reactive data streams.
  - **CSS**: For advanced styling.
  
- **Backend**:
  - **Node.js**: Backend server for handling API requests.
  - **Express.js**: RESTful API framework.
  - **MongoDB**: Database for securely storing user and diary data.
  - **JWT**: Authentication token for secure user sessions.
  - **bcrypt**: For password hashing.

---

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following tools installed on your system:

- **Node.js** (v14 or higher)
- **Angular CLI** (v12 or higher)
- **MongoDB** (local or cloud setup)
- A code editor like [Visual Studio Code](https://code.visualstudio.com/)

---

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/maliaistrying/diary-angular.git
   cd diary-angular
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

### Setting Up MongoDB

1. **Install MongoDB**  
   If you don't already have MongoDB installed, download it [here](https://www.mongodb.com/try/download/community) and follow the installation instructions.

2. **Start MongoDB**  
   For a local MongoDB setup, start the MongoDB service by running:

   ```bash
   mongod
   ```

3. **Database Configuration**  
   The application uses MongoDB to store user and diary data. Configure the database URI and secret key for JWT in the backend.

   - Create a `.env` file in the **backend** folder and add the following:

     ```plaintext
     MONGO_URI=mongodb://localhost:27017/diary-angular
     JWT_SECRET=your_jwt_secret_key
     ```

4. **Initialize Collections**  
   The backend will automatically create the required `users` and `entries` collections in MongoDB when the application starts and actions are performed.

---

### Running the Application

1. Start the backend server:
   - Navigate to the backend directory and run:

   ```bash
   npm run start
   ```

   The backend API server will start at `http://localhost:5000`.

2. Start the Angular frontend:
   - Navigate to the frontend directory and run:

   ```bash
   ng serve
   ```

   The Angular application will be available at [http://localhost:4200](http://localhost:4200).

---

## Folder Structure

### Backend Folder Structure

```
backend/
├── entry-schema.js         # MongoDB schema for diary entries.
├── rest.js                 # API routes for handling diary-related requests.
├── server.js               # Main server file to initialize the backend.
├── user-model.js           # MongoDB schema for user authentication and details.
```

### Frontend App Folder Structure

```
frontend/src/app/
├── diary-form/             # Component for creating or editing diary entries.
├── diary/                  # Component for displaying the list of diary entries.
├── header/                 # Header navigation component.
├── login/                  # Component for user login functionality.
├── shared/                 # Shared modules, services, and utilities.
├── sign-up/                # Component for user registration.
├── app-routing.module.ts   # Defines application routes.
├── app.component.*         # Main application component files (HTML, CSS, TS).
├── app.module.ts           # Angular module containing component declarations and imports.
```

---

## Authentication System

The authentication system is designed to ensure secure user access:

1. **User Registration**:
   - Passwords are hashed using **bcrypt** before being stored in the database.
   - User details are saved in the `users` collection in MongoDB.

2. **User Login**:
   - Credentials are verified against the database.
   - On successful authentication, a **JWT** is generated and sent to the user.

3. **Session Validation**:
   - Protected routes in the backend validate the user's token.
   - Angular guards are used to prevent unauthorized access to frontend routes.

4. **Logout**:
   - Tokens are invalidated on the client-side by removing them from local storage.

---

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add your feature description"
   ```

4. Push the changes:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request on GitHub.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Contact

**Author**: Maleeha Farooqui  
- GitHub: [@maliaistrying](https://github.com/maliaistrying)  
- Email: [maliawaris1456@gmail.com](mailto:YourEmail@example.com)

Feel free to reach out for feedback, questions, or collaborations!
