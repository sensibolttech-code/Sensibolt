const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Secret key for JWT (change this in production)
const JWT_SECRET = "your-secret-key-change-this-in-production";

// In-memory user database (replace with real database in production)
const users = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@sensibolt.com",
    password: "Admin@123", // In production, store hashed passwords
    role: "admin"
  },
  {
    id: 2,
    name: "Test User",
    email: "user@sensibolt.com",
    password: "User@123",
    role: "user"
  },
  {
    id: 3,
    name: "Support Agent",
    email: "support@sensibolt.com",
    password: "Support@123",
    role: "agent"
  }
];

// Health check endpoint
app.get("/", (req, res) => {
  res.send("Sensibolt IT Services Backend Running 🚀");
});

// Sign-in endpoint
app.post("/api/auth/signin", (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required"
    });
  }

  // Find user by email
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password"
    });
  }

  // Check password (in production, use bcrypt)
  if (user.password !== password) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password"
    });
  }

  // Generate JWT token
  const token = jwt.sign(
    { id: user.id, email: user.email, name: user.name, role: user.role },
    JWT_SECRET,
    { expiresIn: "24h" }
  );

  res.json({
    success: true,
    message: "Sign in successful",
    data: {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    }
  });
});

// Register endpoint
app.post("/api/auth/register", (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Validate input
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Passwords do not match"
    });
  }

  // Check if email already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "Email already registered"
    });
  }

  // Create new user
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password, // In production, hash this with bcrypt
    role: "user"
  };

  users.push(newUser);

  // Generate JWT token
  const token = jwt.sign(
    { id: newUser.id, email: newUser.email, name: newUser.name, role: newUser.role },
    JWT_SECRET,
    { expiresIn: "24h" }
  );

  res.status(201).json({
    success: true,
    message: "Registration successful",
    data: {
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }
    }
  });
});

// Protected route example (verify token middleware)
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided"
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Invalid token"
    });
  }
};

// Example protected endpoint
app.get("/api/user/profile", verifyToken, (req, res) => {
  res.json({
    success: true,
    user: req.user
  });
});

// Validate token endpoint
app.post("/api/auth/validate", (req, res) => {
  const token = req.body.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided"
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({
      success: true,
      message: "Token is valid",
      data: { user: decoded }
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Invalid or expired token"
    });
  }
});

// Refresh token endpoint
app.post("/api/auth/refresh", (req, res) => {
  const token = req.body.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided"
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Generate new token
    const newToken = jwt.sign(
      { id: decoded.id, email: decoded.email, name: decoded.name, role: decoded.role },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({
      success: true,
      message: "Token refreshed",
      data: { token: newToken }
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Invalid or expired token"
    });
  }
});

// Get auth profile endpoint
app.get("/api/auth/profile", verifyToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.json({
    success: true,
    message: "Profile retrieved",
    data: {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    }
  });
});

// Logout endpoint
app.post("/api/auth/logout", verifyToken, (req, res) => {
  res.json({
    success: true,
    message: "Logged out successfully"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sensibolt IT Services Backend running on port ${PORT} 🚀`);
});