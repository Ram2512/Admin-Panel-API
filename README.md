# Admin Panel API

## Overview
This repository contains the backend implementation for the Admin Panel, which provides multi-level role-based access control (RBAC) for managing users, roles, and projects. The backend is built using **Node.js** with **JavaScript**, utilizing **PostgreSQL** as the database and **Sequelize ORM** for data modeling. JWT-based authentication is used for secure access to resources, and soft deletion is implemented for certain models. Audit logs keep track of user actions.

## API Documentation

You can test the APIs using Postman by clicking the button below: 

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/38226728-993fee4f-e73c-42cd-9ed1-8c27dee4ecec?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D38226728-993fee4f-e73c-42cd-9ed1-8c27dee4ecec%26entityType%3Dcollection%26workspaceId%3Dddaadba0-ad89-4649-9c3d-d0175593f83d)

## Features
- **Multi-level Role-based Access Control (RBAC)**
  - Different roles with specific permissions for users, admins, and super admins.
- **User Management**
  - Create, read, update, and soft delete users.
- **Role Management**
  - Assign roles to users with specific permissions.
- **Project Management**
  - Manage projects with role-based access for creation, updates, and soft deletion.
- **JWT Authentication**
  - Secure access to the application with JSON Web Tokens.
- **Audit Logs**
  - Track and record user actions and changes in the system.

## Technologies Used
- **Node.js**: Server-side JavaScript runtime.
- **JavaScript**: Programming language used for the backend.
- **PostgreSQL**: SQL database for storing application data.
- **Sequelize ORM**: Object-Relational Mapping tool for database interaction.
- **JWT**: JSON Web Token for authentication and authorization.
- **Express.js**: Web framework for building RESTful APIs.

## Project Structure
The project is organized as follows:

  ![image](https://github.com/user-attachments/assets/dcf2400f-e190-40aa-acbc-94438cf0301b)



## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ram2512/Admin-Panel-API.git
   ```
2. Install dependencies:
   ```bash
   cd Admin-Panel-API
   npm install
   ```
3. Set up environment variables: 
   Create a .env file in the root directory with the following values:
   ```bash
   PORT=3000
   DB_URL=postgres://<your_username>:<your_password>@localhost:5432/<your_databaseName>
   JWT_SECRET=your_jwt_secret
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   Access the API at: http://localhost:3000.
   


## API Endpoints

### Auth Routes
- **POST /auth/signup** - Sign up a new user.
- **POST /auth/login** - Log in a user.
- **POST /auth/logout** - Log out a user.

### Audit Logs
- **GET /audit-logs** - Retrieve audit logs.

### Project Management
- **POST /projects/create** - Create a new project.
- **GET /projects/getAllproject** - Get all projects.
- **GET /projects/getproject/:id** - Get project details by ID.
- **PUT /projects/updateProject/:id** - Update project details.
- **DELETE /projects/softdelete/:id** - Soft delete a project.
- **PATCH /projects/restore/:id** - Restore a soft-deleted project.
- **DELETE /projects/permanent/:id** - Permanently delete a project.

### User Management
- **POST /auth/users/register** - Register a new user.
- **POST /auth/users/login** - Log in a user.
- **GET /auth/users/getAllUsers** - Get all users.
- **GET /auth/users/getUser/:id** - Get user details by ID.
- **PUT /auth/users/updateUser/:id** - Update user details.
- **DELETE /auth/users/soft/:id** - Soft delete a user.
- **DELETE /auth/users/permanent/:id** - Permanently delete a user.
- **PATCH /auth/users/restore/:id** - Restore a soft-deleted user.
- **POST /auth/users/:id/assign-role** - Assign a role to a user.
- **POST /auth/users/:id/revoke-role** - Revoke a role from a user.

  
## Middleware
   - **Authentication Middleware**: Ensures that the user is authenticated via JWT.
  - **Role-Based Authorization**: Checks if the user has the required permissions for certain actions.


## Contributing
 -  **Feel free to fork this repository and make contributions. Submit a pull request with your proposed changes, and I'll be happy to review them.**
