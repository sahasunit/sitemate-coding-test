const express = require('express');
const router = express.Router();
let issues = require('../issues');

// CREATE
router.post('/', (req, res) => {
  const newIssue = req.body;
  issues.push(newIssue);
  console.log('Created Issue:', newIssue);
  res.status(201).send(newIssue);
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