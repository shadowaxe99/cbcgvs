```javascript
const express = require('express');
const aiController = require('../controllers/aiController');

const router = express.Router();

// Route to get all AI agents
router.get('/', aiController.getAllAgents);

// Route to get a specific AI agent by ID
router.get('/:id', aiController.getAgentById);

// Route to create a new AI agent
router.post('/', aiController.createAgent);

// Route to update an AI agent by ID
router.put('/:id', aiController.updateAgent);

// Route to delete an AI agent by ID
router.delete('/:id', aiController.deleteAgent);

module.exports = router;
```