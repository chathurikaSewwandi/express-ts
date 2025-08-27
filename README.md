Express.js User Management API

A robust Express.js REST API built with TypeScript, MongoDB, and JWT authentication. This application provides user management functionality with a clean, modular architecture following the Repository pattern.
🚀 Features

    User Management: Create and retrieve users with role-based types
    MongoDB Integration: Mongoose ODM for database operations
    TypeScript: Full type safety and modern JavaScript features
    Modular Architecture: Clean separation with Controllers, Services, DAOs, and Routes
    Error Handling: Centralized error management with custom error types
    JWT Authentication: Secure authentication system (configured but not fully implemented)
    Environment Configuration: Configurable settings via environment variables

📋 Table of Contents

    Project Structure
    Installation
    Configuration
    API Endpoints
    Data Models
    Architecture
    Development
    Scripts
    Dependencies

🏗 Project Structure

src/
├── app.ts                    # Application entry point
├── config/
│   └── app.config.ts        # Environment configuration
├── common/
│   ├── constants/
│   │   ├── errors.constants.ts    # Error definitions
│   │   └── httpStatus.enum.ts     # HTTP status codes
│   └── responseHandler.ts         # Standardized response handlers
├── controller/
│   ├── customer.controller.ts     # Customer route handlers
│   └── user.controller.ts         # User route handlers
├── dao/
│   └── user.dao.ts               # Data Access Object for users
├── interface/
│   ├── error.interface.ts        # Error interface
│   ├── models/
│   │   └── user.interface.ts     # User model interface
│   └── util/
│       └── userTypes.enum.ts     # User types enumeration
├── loader/
│   └── mongo.loader.ts           # MongoDB connection handler
├── models/
│   └── user.model.ts             # Mongoose user schema
├── routes/
│   ├── customer.route.ts         # Customer routes
│   ├── greeting.route.ts         # Basic greeting routes
│   ├── routes.ts                 # Main router configuration
│   └── user.route.ts             # User routes
└── service/
    └── user.service.ts           # Business logic for users

🛠 Installation
Prerequisites

    Node.js (v14 or higher)
    npm or yarn
    MongoDB (local or remote instance)

Setup

    Clone the repository

    git clone <repository-url>
    cd app-1

Install dependencies

npm install

Environment Configuration Create a .env file in the root directory:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/your-database-name
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRATION=1h
PASSWORD=your-app-password

Build the project

npm run build

Start the application

# Development mode with auto-reload
npm run dev

# Production mode
npm start

⚙️ Configuration

The application uses environment variables for configuration. All settings are defined in src/config/app.config.ts:
Variable 	Default 	Description
PORT 	3000 	Server port
MONGODB_URI 	- 	MongoDB connection string
JWT_SECRET 	'your-secret-key' 	JWT signing secret
JWT_EXPIRATION 	'1h' 	JWT token expiration time
PASSWORD 	- 	Application password
🌐 API Endpoints
Base URL

http://localhost:3000/api

Greeting Routes

    GET /api/greeting/ - Returns "Hello World"
    POST /api/greeting/ - Returns personalized greeting

    {
      "name": "John"
    }

User Routes

    POST /api/user/ - Create a new user

    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "securepassword",
      "type": "cashier"
    }

GET /api/user/:email - Get user by email

GET /api/user/john@example.com

Customer Routes

    GET /api/customer/ - Get customer information (demo endpoint)

📊 Data Models
User Model

interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  type: UserTypes;
  createdAt?: Date;
  updatedAt?: Date;
}

User Types

    CASHIER - Cashier role
    KITCHEN_HELPER - Kitchen helper role

🏛 Architecture

This application follows a layered architecture pattern:
1. Route Layer (routes/)

    Handles HTTP requests and routing
    Uses singleton pattern for route instances
    Delegates to controllers

2. Controller Layer (controller/)

    Handles request/response logic
    Input validation and error handling
    Calls appropriate services

3. Service Layer (service/)

    Contains business logic
    Orchestrates data operations
    Handles complex business rules

4. DAO Layer (dao/)

    Data Access Objects
    Database operations
    Abstracts database implementation

5. Model Layer (models/)

    Mongoose schemas and models
    Data structure definitions

Key Design Patterns

    Singleton Pattern: Used for controllers, services, and routes
    Repository Pattern: DAO layer abstracts data access
    Dependency Injection: Loose coupling between layers

🚀 Development
Available Scripts
Command 	Description
npm run dev 	Start development server with auto-reload
npm run build 	Build TypeScript to JavaScript
npm run start 	Start production server
npm run watch:dev 	Watch mode for TypeScript compilation
Development Workflow

    Start development server

    npm run dev

The server will start on

http://localhost:3000

API base URL

http://localhost:3000/api

Testing API Endpoints

You can test the API using tools like:

    Postman
    curl
    Thunder Client (VS Code extension)

Example curl commands:

# Create a user
curl -X POST http://localhost:3000/api/user \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123","type":"cashier"}'

# Get user by email
curl http://localhost:3000/api/user/john@example.com

# Get greeting
curl http://localhost:3000/api/greeting

📦 Dependencies
Production Dependencies

    express: Web framework for Node.js
    mongoose: MongoDB object modeling tool
    jsonwebtoken: JWT implementation
    passport: Authentication middleware
    passport-jwt: Passport strategy for JWT
    dotenv: Environment variable loader
    nodemon: Development auto-reload utility

Development Dependencies

    typescript: TypeScript compiler
    ts-node: TypeScript execution engine
    @types/express: TypeScript definitions for Express
    @types/node: TypeScript definitions for Node.js

🔒 Security Features

    JWT token-based authentication (configured)
    Environment variable configuration
    Input validation through TypeScript interfaces
    Centralized error handling

🤝 Contributing

    Fork the repository
    Create a feature branch (git checkout -b feature/amazing-feature)
    Commit your changes (git commit -m 'Add some amazing feature')
    Push to the branch (git push origin feature/amazing-feature)
    Open a Pull Request

📝 License

This project is licensed under the ISC License.
🐛 Troubleshooting
Common Issues

    MongoDB Connection Error
        Ensure MongoDB is running
        Check MONGODB_URI in .env file
        Verify database name and credentials

    Port Already in Use
        Change PORT in .env file
        Kill process using the port: npx kill-port 3000

    TypeScript Compilation Errors
        Run npm run build to check for type errors
        Ensure all dependencies are installed

Need Help?

If you encounter any issues or have questions, please:

    Check the console logs for error messages
    Verify your environment configuration
    Ensure all dependencies are properly installed

Happy Coding! 🎉