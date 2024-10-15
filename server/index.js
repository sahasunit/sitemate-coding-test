const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

// Import Routes
const issuesRoutes = require('./routes/issues');
app.use('/api/issues', issuesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});