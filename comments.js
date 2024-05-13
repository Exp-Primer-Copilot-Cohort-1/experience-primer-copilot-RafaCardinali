// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comment
app.post('/comment', (req, res) => {
  console.log('Create a comment');
  res.send('Create a comment');
});

// Read a comment
app.get('/comment', (req, res) => {
  console.log('Read a comment');
  res.send('Read a comment');
});

// Update a comment
app.put('/comment', (req, res) => {
  console.log('Update a comment');
  res.send('Update a comment');
});

// Delete a comment
app.delete('/comment', (req, res) => {
  console.log('Delete a comment');
  res.send('Delete a comment');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
