# 🧠 Brain Drain
## Clear your mind and make space for yourself.

**Brain Drain** is a simple, personal thought journal that providers users a space a place to let it all out. Whether you're reflecting on your day, processing emotions, or simply trying to organize your thoughts, **Brain Drain** has the space for you.

## Features 
- **Thought Journaling:** Create and save personal journal entries
- **Mood Tracking:** Document how you're feeling alongside your thoughts
- **Date Tracking:** Associate entries with dates to keep your thoughts organized
- **View Entries:** Display previously saved thoughts in one place
- **Edit Entries:** Update existing journal entries
- **Delete Entries:** Remove entries you no longer want to keep
- **Database Storage:** Stores jounrnal entries using MongoDB

## Tech Stack 
- **Node.js** – JavaScript runtime environment
- **Express.js** – Backend web application framework
- **MongoDB** – NoSQL database for storing journal entries
- **EJS** – Embedded JavaScript templating engine
- **Body-parser**  Middleware for parsing incoming request bodies
- **BSON** – MongoDB Object ID handling

## Getting Started
**Prerequisites**

Make sure you have the following installed:

- Node.js
- MongoDB
- npm (included with Node.js)

## Installation
1. Clone the repository:
```bash
git clone https://github.com/CarlyJovon/brain-drain-express-app.git
```
2. Navigate into the project directory:
```bash
cd brain-drain-express-app
```
3. Install dependencies:
```bash
npm install
```
4.Create a `.env` file in the root directory and add your MongoDB connection string:
```env
MONGODB_URI=your_mongodb_connection_string
```
5. Start the application:
```bash
npm start
```
6. Open your browser and navigate to:
```text
http://localhost:3000
```

## Application Preview
<img width="1057" height="1072" alt="Screenshot 2026-11-10 at 12 34 31 AM" src="https://github.com/user-attachments/assets/cd546040-e91a-4514-8197-728eb046fbc9" />

## Project Structure
```text
brain-drain-express-app/
│
├── public/             # Static assets (CSS, JavaScript, images)
│
├── views/              # EJS templates
│
├── server.js           # Express server and application routes
│
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Dependency lockfile
├── .env                # Environment variables (not committed)
└── README.md           # Project documentation
```
## Application Routes

```text
Method	Endpoint	Description
GET	/ 
POST	/thoughts	Create a new thought
PUT	/thoughts	Update an existing thought
DELETE	/thoughts	Delete a thought
```

# Project Purpose
**Brain Drain** was created to build something centered around personal reflection and emotional awareness.
The project implements complete **CRUD (Create, Read, Update, Delete)** operations, integrating Express.js routes with MongoDB for persistent data management. 
EJS templates dynamically render application content, creating an interactive experience between the frontend and backend.

# Future Improvements
Potential features for future development include:

- User authentication and individual journal accounts
- Improved mood tracking and visualizations.
- Search and filtering for journal entries.
- A calendar view of journal activity.
- Responsive design improvements.
- Enhanced privacy and security features.

# 👩🏽‍💻 Author
Carly Johnson

*🧠💭 If Brain Drain helps you clear your mind, one thought at a time, it's doing its job.*
