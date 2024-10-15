import React, { useState, useEffect } from 'react';
import { getIssues, createIssue, updateIssue, deleteIssue } from './Api';
import './App.css';


const App = () => {

  const [issues, setIssues] = useState([]);
  const [newIssue, setNewIssue] = useState({ title: '', description: '' });
  const [selectedIssueId, setSelectedIssueId] = useState(null); // Track issue being updated

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    const data = await getIssues();
    setIssues(data);
  };

  const handleCreate = async () => {
    await createIssue(newIssue);
    setNewIssue({ title: '', description: '' });  // Clear input after creation
    fetchIssues();  // Refresh list after creation
  };

  // Populate fields with current issue data for updating
  const handleUpdate = (id) => {
    const issueToUpdate = issues.find(issue => issue.id === id);
    setNewIssue({ title: issueToUpdate.title, description: issueToUpdate.description });
    setSelectedIssueId(id);  // Track which issue is being updated
  };

  // Confirm and send updated data
  const confirmUpdate = async () => {
    if (selectedIssueId !== null) {
      const updatedIssue = { ...newIssue, id: selectedIssueId };
      await updateIssue(selectedIssueId, updatedIssue);
      setNewIssue({ title: '', description: '' });  // Clear input after update
      setSelectedIssueId(null);  // Reset the selected issue id
      fetchIssues();  // Refresh list after update
    }
  };

  const handleDelete = async (id) => {
    await deleteIssue(id);
    fetchIssues(); // Refresh list after deletion
  };

  return (
    <div>
      <h1>Issue Tracker</h1>
      <ul>
        {issues.map(issue => (
          <li key={issue.id}>
            <strong>{issue.title}</strong>: {issue.description}
            <button onClick={() => handleUpdate(issue.id)}>Update</button>
            <button onClick={() => handleDelete(issue.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newIssue.title}
          onChange={(e) => setNewIssue({ ...newIssue, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newIssue.description}
          onChange={(e) => setNewIssue({ ...newIssue, description: e.target.value })}
        />
        <button onClick={selectedIssueId ? confirmUpdate : handleCreate}>
          {selectedIssueId ? 'Confirm Update' : 'Create Issue'}
        </button>
      </div>
    </div>
  );
}

export default App;
