**Node CRUD Operation**

This project is a simple REST API built using Node.js, Express, and MongoDB for managing a collection of items. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on items, each with a name, description, and price.

Key Components:
Controllers: The itemController.js handles the core logic for CRUD operations. It communicates with the database using the Item model to fetch, create, update, and delete items.

Models: The itemModel.js defines the MongoDB schema for the Item resource, specifying the fields like name, description, and price along with their data types and validation rules.

Routes: The itemRoutes.js file defines the routes (HTTP endpoints) for interacting with the Item resource. It maps each route to the corresponding controller function. For example, the POST route /api/items creates a new item, and the GET route /api/items/:id retrieves a specific item by its ID.

Database Configuration: The db.js file establishes a connection to the MongoDB database using Mongoose, a popular Object Data Modeling (ODM) library for MongoDB.

App and Server: The app.js file initializes the Express application and configures the routes and middleware (e.g., body-parser to handle JSON request bodies). The server.js file starts the server and listens on a specified port (default: 3000).

The project also uses environment variables via the .env file to store the MongoDB URI and port number, promoting flexibility and security in configuration.

This project provides a clean and modular structure for handling items in a database using standard RESTful practices, making it easy to extend for additional resources or features.
