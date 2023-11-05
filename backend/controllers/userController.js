```javascript
const User = require('../models/User');
const jwt = require('../utils/jwt');
const aes = require('../utils/aes');
const errorHandler = require('../utils/errorHandler');

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        const token = jwt.sign({ userId: user._id });
        res.status(201).json({ token });
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const validPassword = await user.comparePassword(req.body.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        const token = jwt.sign({ userId: user._id });
        res.status(200).json({ token });
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.encryptData = (req, res) => {
    try {
        const encryptedData = aes.encrypt(req.body.data);
        res.status(200).json({ encryptedData });
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.decryptData = (req, res) => {
    try {
        const decryptedData = aes.decrypt(req.body.data);
        res.status(200).json({ decryptedData });
    } catch (error) {
        errorHandler(res, error);
    }
};
```