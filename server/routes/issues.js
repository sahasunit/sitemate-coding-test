const express = require('express');
const router = express.Router();
let issues = require('../issues');

// CREATE
router.post('/', (req, res) => {
  const newIssue = req.body;
  // Generate new ID based on existing issues
  const newId = issues.length > 0 ? Math.max(...issues.map(issue => issue.id)) + 1 : 1;
  const issueWithId = { id: newId, ...newIssue };
  issues.push(issueWithId);
  console.log('Created Issue:', issueWithId);
  res.status(201).send(issueWithId);
});

// READ
router.get('/', (req, res) => {
  res.json(issues);
});

// UPDATE
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedIssue = req.body;
  issues = issues.map(issue => issue.id === id ? updatedIssue : issue);
  console.log('Updated Issue:', updatedIssue);
  res.status(200).send(updatedIssue);
});

// DELETE
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  issues = issues.filter(issue => issue.id !== id);
  console.log('Deleted Issue ID:', id);
  res.status(200).send({ message: `Issue ${id} deleted` });
});

module.exports = router;