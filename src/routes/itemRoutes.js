const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// CRUD routes
router.get('/', itemController.getAllItems);              // Get all items
router.get('/:id', itemController.getItemById);           // Get a single item by ID
router.post('/', itemController.createItem);              // Create a new item
router.put('/:id', itemController.updateItem);            // Update an existing item
router.delete('/:id', itemController.deleteItem);         // Delete an item

module.exports = router;
