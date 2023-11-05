```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const jwt = require('../utils/jwt');

// User onboarding route
router.post('/onboarding', jwt.verifyToken, userController.onboardUser);

// User login route
router.post('/login', userController.loginUser);

// User logout route
router.post('/logout', jwt.verifyToken, userController.logoutUser);

// User profile update route
router.put('/profile', jwt.verifyToken, userController.updateProfile);

// User password update route
router.put('/password', jwt.verifyToken, userController.updatePassword);

module.exports = router;
```