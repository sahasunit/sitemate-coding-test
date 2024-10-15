const BASE_URL = 'http://localhost:3001/api/issues';

export const getIssues = async () => {
    const response = await fetch(BASE_URL);
    return await response.json();
};

export const createIssue = async (issue) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(issue),
    });
    return await response.json();
};
  
export const updateIssue = async (id, issue) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(issue),
    });
    return await response.json();
};
  
export const deleteIssue = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    });
    return await response.json();
};