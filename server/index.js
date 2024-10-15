const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3001;

app.use(cors());  // Enable CORS
app.use(express.json()); // Middleware for JSON parsing

// Import Routes
const issuesRoutes = require('./routes/issues');
app.use('/api/issues', issuesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});