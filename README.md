# CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express.js, MongoDB for the backend, and React with Tailwind CSS for the frontend.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- MongoDB (Make sure MongoDB server is running)

## Getting Started

### Backend (Node.js with Express.js and MongoDB)

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shachi3/Crud-App-RedV.git
   cd server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `server` directory with the following content:

   ```dotenv
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

   Replace `your_mongodb_connection_string` with your MongoDB connection string.

4. **Run the server:**

   ```bash
   npm start
   ```

   This will start the backend server at `http://localhost:5000`.

### Frontend (React with Tailwind CSS)

1. **Navigate to the client directory:**

   ```bash
   cd ../client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm start
   ```

   This will start the frontend React development server at `http://localhost:3000`.

4. **Accessing the application:**

   Open your web browser and go to `http://localhost:3000` to view and interact with the CRUD application.

## Features

- **View items:** See a list of items stored in the database.
- **Add new item:** Add a new item with a title and description.
- **Edit item:** Update the title and description of an existing item.
- **Delete item:** Remove an item from the list.

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose ODM)
  - CORS middleware

- **Frontend:**
  - React
  - Axios (for API requests)
  - Tailwind CSS (for styling)

## Folder Structure

- **`server/`**: Backend server using Node.js and Express.js.
- **`client/`**: Frontend React application with Tailwind CSS for styling.
- **`server/routes/`**: Contains route definitions for CRUD operations.
- **`server/models/`**: Mongoose schema definitions for MongoDB.
- **`client/src/components/`**: React components for the frontend UI.
