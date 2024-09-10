# BoardInfinity Backend

## Overview
This repository contains the backend implementation for the Admin Panel, which provides multi-level role-based access control (RBAC) for managing users, roles, and projects. The backend is built using **Node.js** with **TypeScript**, utilizing **PostgreSQL** as the database and **Sequelize ORM** for data modeling. JWT-based authentication is used for secure access to resources, and soft deletion is implemented for certain models. Audit logs keep track of user actions.

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

  ![image](https://github.com/user-attachments/assets/80cbb28a-e7b8-4aec-8a91-63d3fcb32a70)


## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ram2512/BoardInfinity_Backend.git
2. Install dependencies:
    -   cd BoardInfinity_Backend
    -   npm install
3. Set up environment variables: Create a .env file in the root directory with the following values:
   PORT=3000
     -  DB_URL=postgres://<your_username>:<your_password>@localhost:5432/<your_databaseName>
     -  JWT_SECRET=your_jwt_secret
4. Run database migrations:
      -   npx sequelize-cli db:migrate
5. Start the development server:
    -   m run dev
   -   Access the API at http://localhost:3000.


## API Endpoints
- **User Management**
   - **POST /users** - Create a new user.
   - **GET /users** - Get all users.
   - **GET /users/:id** - Get a specific user by ID.
   - **PUT /users/:id** - Update user information.
   - **DELETE /users/:id** - Soft delete a user.

       ![image](https://github.com/user-attachments/assets/7f0de3db-87e5-4011-9581-5eb00aaef8f4)

- **Role Management**
   - **POST /roles** - Create a new role.
   - **GET /roles** - Get all roles.
   - **PUT /roles/:id** - Update a role.
   - **DELETE /roles/:id** - Soft delete a role.
  
- **Project Management**
  - **POST /projects** - Create a new project.
  - **GET /projects** - Get all projects.
  - **PUT /projects/:id** - Update project details.
  - **DELETE /projects/:id** - Soft delete a project.
     
    ![image](https://github.com/user-attachments/assets/cff9c82f-a1d4-416e-ba37-dea479940491)


  
## Middleware
   - **Authentication Middleware**: Ensures that the user is authenticated via JWT.
  - **Role-Based Authorization**: Checks if the user has the required permissions for certain actions.


## Contributing
 -  **Feel free to fork this repository and make contributions. Submit a pull request with your proposed changes, and I'll be happy to review them.**
