# Sitemate-Full-Stack-Engineer

This is a simple Issue Tracker app built using Node.js with Express on the backend and React on the frontend. 
The app allows you to create, read, update, and delete issues. 
The backend handles API requests, and the frontend communicates with the backend using fetch().

Technology Choices
- Node.js: For building the backend server.
- Express.js: For handling RESTful API routes.
- React: For creating the frontend UI.
- Jest: For unit testing.
- Supertest: For testing HTTP requests.

Features:
Create: Add new issues by providing a title and description.
Read: Fetch and display a list of existing issues.
Update: Update the title or description of existing issues.
Delete: Delete issues by ID.

Setup Instructions:
Backend Setup (Node.js + Express)

Clone the repository:
git clone https://github.com/sahasunit/sitemate-coding-test.git

Navigate to the backend directory:
cd server

Install backend dependencies:
npm install

Start the backend server:
node server/index.js

The server will run at http://localhost:3001


Frontend Setup (React)
Navigate to the frontend directory:
cd client

Install frontend dependencies:
npm install

Start the React development server:
npm start


Running Unit Tests
To run the unit tests for the backend, use:
npm test
NOTE: This will run the tests using Jest and Supertest to verify the API functionality (CRUD operations).

API Endpoints:
POST /api/issues: Create a new issue.
GET /api/issues: Get a list of all issues.
PUT /api/issues/
: Update an issue by ID.
DELETE /api/issues/
: Delete an issue by ID.

Improvements:
- Add persistent storage (e.g., a database) to prevent data loss on server restarts.
- Improve input validation and error handling for API requests.




