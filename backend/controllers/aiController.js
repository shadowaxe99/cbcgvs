```javascript
const AI = require('../models/AI');
const errorHandler = require('../utils/errorHandler');

exports.getAIAgents = async (req, res) => {
    try {
        const aiAgents = await AI.find();
        res.status(200).json(aiAgents);
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.getAIAgent = async (req, res) => {
    try {
        const aiAgent = await AI.findById(req.params.id);
        if (!aiAgent) {
            return res.status(404).json({ message: 'AI Agent not found' });
        }
        res.status(200).json(aiAgent);
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.createAIAgent = async (req, res) => {
    try {
        const aiAgent = new AI(req.body);
        await aiAgent.save();
        res.status(201).json(aiAgent);
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.updateAIAgent = async (req, res) => {
    try {
        const aiAgent = await AI.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!aiAgent) {
            return res.status(404).json({ message: 'AI Agent not found' });
        }
        res.status(200).json(aiAgent);
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.deleteAIAgent = async (req, res) => {
    try {
        const aiAgent = await AI.findByIdAndRemove(req.params.id);
        if (!aiAgent) {
            return res.status(404).json({ message: 'AI Agent not found' });
        }
        res.status(200).json({ message: 'AI Agent deleted' });
    } catch (error) {
        errorHandler(res, error);
    }
};
```