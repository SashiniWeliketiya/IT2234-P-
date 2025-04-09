const express = require('express');
const router = express.Router();

const users = require('./users');
const posts = require('./posts');
const comments = require('./comments');

//get by id
router.get('/summary/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find(u => u.id === userId);

  if (!user) return res.status(404).json({ error: 'User not found' });

  const postCount = posts.filter(p => p.authorId === userId).length;
  const commentCount = comments.filter(c => c.userId === userId).length;

  res.json({
    id: user.id,
    username: user.username,
    email: user.email,
    fullName: user.fullName,
    'Number of Post': postCount,
    'Number of Comment': commentCount
  });
});

//Optional filter: /user?name=emma
router.get('/', (req, res) => {
  const { name } = req.query;
  const filtered = users.filter(u =>
    u.fullName.toLowerCase().includes(name?.toLowerCase() || '')
  );
  res.json(filtered);
});

module.exports = router;