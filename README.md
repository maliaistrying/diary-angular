# **Diary-Angular**

An intuitive, feature-rich diary application built with **Angular**, designed to help users seamlessly record, manage, and reflect on their daily activities and thoughts.

---

## **Table of Contents**

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

## **About the Project**

The **Diary-Angular** project is a personal diary application that allows users to:
- Securely log in and manage their personalized diary entries.
- Record daily entries with timestamps.
- Organize entries by categories or tags.
- Protect entries with robust authentication features.
- Store entries securely using MongoDB as the backend database.

---

## **Features**

- **Secure Authentication System**: 
  - Register and log in using email and password.
  - Token-based authentication using **JWT (JSON Web Tokens)** for session security.
  - Encrypted password storage using **bcrypt**.
  
- **CRUD Operations** for Diary Entries:
  - Create, update, and delete diary entries.
  - View entries by date, tag, or category.

- **Responsive Design**: Mobile and desktop-friendly.

- **Data Storage with MongoDB**:
  - Entries are stored in MongoDB for fast and scalable data handling.
  - Secure user data with collections for authentication and diary entries.

---

## **Technologies Used**

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

## **Getting Started**

Follow these steps to set up the project locally.

### **Prerequisites**

Ensure you have the following tools installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [Angular CLI](https://angular.io/cli) (v12 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud setup)
- A code editor like [Visual Studio Code](https://code.visualstudio.com/)

---

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/maliaistrying/diary-angular.git
   cd diary-angular
Install dependencies:
bash
Copy
Edit
npm install
Setting Up MongoDB
Install MongoDB
If you don't already have MongoDB installed, download it here and follow the installation instructions.

Start MongoDB
For a local MongoDB setup, start the MongoDB service by running:

bash
Copy
Edit
mongod
Database Configuration
The application uses MongoDB to store user and diary data. Configure the database URI and secret key for JWT in the backend.

Create a .env file in the backend folder and add the following:
plaintext
Copy
Edit
MONGO_URI=mongodb://localhost:27017/diary-angular
JWT_SECRET=your_jwt_secret_key
Initialize Collections
The backend will automatically create the required users and entries collections in MongoDB when the application starts and actions are performed.

Running the Application
Start the backend server:

Navigate to the backend directory and run:
bash
Copy
Edit
npm run start
The backend API server will start at http://localhost:5000.
Start the Angular frontend:

Navigate to the frontend directory and run:
bash
Copy
Edit
ng serve
The Angular application will be available at http://localhost:4200.
Folder Structure
Backend Folder Structure
graphql
Copy
Edit
backend/
├── entry-schema.js         # MongoDB schema for diary entries.
├── rest.js                 # API routes for handling diary-related requests.
├── server.js               # Main server file to initialize the backend.
├── user-model.js           # MongoDB schema for user authentication and details.
Frontend App Folder Structure
ruby
Copy
Edit
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
Authentication System
The authentication system is designed to ensure secure user access:

User Registration:

Passwords are hashed using bcrypt before being stored in the database.
User details are saved in the users collection in MongoDB.
User Login:

Credentials are verified against the database.
On successful authentication, a JWT is generated and sent to the user.
Session Validation:

Protected routes in the backend validate the user's token.
Angular guards are used to prevent unauthorized access to frontend routes.
Logout:

Tokens are invalidated on the client-side by removing them from local storage.
Contributing
We welcome contributions from the community! To contribute:

Fork the repository.
Create a new branch:
bash
Copy
Edit
git checkout -b feature/your-feature-name
Make your changes and commit them:
bash
Copy
Edit
git commit -m "Add your feature description"
Push the changes:
bash
Copy
Edit
git push origin feature/your-feature-name
Open a pull request on GitHub.
License
This project is licensed under the MIT License. See the LICENSE file for details
