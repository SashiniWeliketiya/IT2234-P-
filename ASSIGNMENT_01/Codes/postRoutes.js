const express = require('express');
const router = express.Router();

const users = require('./users');
const posts = require('./posts');
const comments = require('./comments');

// get by id
router.get('/:id', (req, res) => {
  const postId = req.params.id;
  const post = posts.find(p => p.id === postId);

  if (!post) return res.status(404).json({ error: 'Post not found' });

  const postComments = comments
    .filter(c => c.postId === postId)
    .map(c => {
      const user = users.find(u => u.id === c.userId);
      return {
        commentator: user ? user.fullName : 'Unknown',
        comment: c.content
      };
    });

  res.json(postComments);
});

// Optional filter: /post?title=Yoga
router.get('/', (req, res) => {
  const { title } = req.query;
  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(title?.toLowerCase() || '')
  );
  res.json(filtered);
});

module.exports = router;