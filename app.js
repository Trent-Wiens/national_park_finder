const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// API routes (to add later)
app.use('/api/parks', require('./routes/parks'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
