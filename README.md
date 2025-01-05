**Node CRUD Operation**

This project is a simple REST API built using Node.js, Express, and MongoDB for managing a collection of items. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on items, each with a name, description, and price 💡.

Key Components:
  1. Controllers (itemController.js): Handles the core logic for CRUD operations. It communicates with the database using the Item model to fetch, create, update, and delete items 🔄.

  2. Models (itemModel.js): Defines the MongoDB schema for the Item resource, specifying fields like name, description, and price along with validation rules ⚙️.

  3. Routes (itemRoutes.js): Defines the routes (HTTP endpoints) for interacting with the Item resource. Each route maps to a corresponding controller function. For example, the POST route /api/items creates a new item, and the GET route /api/items/:id retrieves a specific item by its ID 🛠️.

  4. Database Configuration (db.js): Establishes a connection to the MongoDB database using Mongoose, an Object Data Modeling (ODM) library for MongoDB 📚.

  5. App and Server (app.js, server.js): Initializes the Express application, configures routes and middleware (like body-parser to handle JSON request bodies), and starts the server to listen on a specified port (default: 3000) 🚀.

The project also uses environment variables via the .env file to store the MongoDB URI and port number, promoting flexibility and security 🔐.

This project provides a clean, modular structure for handling items in a database using standard RESTful practices, making it easy to extend for additional resources or features 🔧.
