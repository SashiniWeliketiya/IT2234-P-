const express = require('express');
const app = express();
const port = 8080;

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

app.use(express.json());

// Route registration
app.use('/user', userRoutes);
app.use('/post', postRoutes);

// Optional: Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});