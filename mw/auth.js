const jwt = require('jsonwebtoken');
const User = require('../models/User'); 

const authenticateUser = async (req, res, next) => {
  // ....................................Get the token from the request headers..........//
  const token = req.headers.authorization;

  try {
   
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized access' });
    }

    // ...........Verify the token ..........//
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    
    const user = await User.findById(decoded.userId);

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized access' });
    }

    // Attach the user information to the request object
    req.user = user;

    // Call the next middleware or route handler
    next();
  } catch (error) {
    // Invalid token
    return res.status(401).json({ error: 'Unauthorized access' });
  }
};

module.exports = authenticateUser;
