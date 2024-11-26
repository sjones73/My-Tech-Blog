# My-Tech-Blog

### Description
Tech Blog is a CMS-style blog platform where developers can create posts, share thoughts on technology, and interact by commenting on posts. The app is built with the Model-View-Controller (MVC) architecture and deployed on Render. It leverages Handlebars.js for templating, Sequelize as the ORM, and express-session for authentication.

### Table of Contents
Installation
Usage
Features
Screenshots
Technologies Used
Deployment
License
Contact

### Installation
To set up the application locally:

Clone the repository:

bash
Copy code
git clone <repository-url>
cd tech-blog
Install dependencies:

bash
Copy code
npm install
Set up the database:

Create a .env file in the root directory with the following:

env
Copy code
DB_NAME=tech_blog_db
DB_USER=<your_mysql_username>
DB_PASSWORD=<your_mysql_password>
DB_HOST=127.0.0.1
DB_DIALECT=mysql
SESSION_SECRET=<your_secret_key>
Log in to MySQL and create the database:

sql
Copy code
CREATE DATABASE tech_blog_db;
Seed the database (optional):

bash
Copy code
npm run seed
Start the server:

bash
Copy code
npm start
The application will run at http://localhost:3001.

### Usage
Homepage
View existing blog posts.
Navigate to login or signup if not authenticated.
Dashboard
Create, update, and delete blog posts.
View all posts authored by the logged-in user.
Post Details
View individual blog posts with comments.
Add comments (requires login).
Authentication
Sign up with a username and password.
Log in to access the dashboard and comment on posts.
Log out to end the session.

### Features
Model-View-Controller (MVC) Architecture: Clean separation of concerns.
User Authentication: Login, signup, and session management with express-session.
Dynamic Content Rendering: Handlebars.js templates for creating responsive views.
CRUD Functionality: Create, read, update, and delete blog posts and comments.
Validation: Protect user input with form validation.
Responsive Design: Mobile-friendly layout with CSS.
### Screenshots
Homepage:
(Add a screenshot of the homepage)

Dashboard:
(Add a screenshot of the dashboard)

Post View:
(Add a screenshot showing a post with comments)

### Technologies Used
Backend: Node.js, Express.js
Frontend: Handlebars.js, CSS
Database: MySQL, Sequelize ORM
Authentication: express-session, bcrypt
Deployment: Render

### Deployment
The app is live and hosted on Render:
Tech Blog Live Demo (Add the Render deployment link here)

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Contact
Feel free to reach out with questions or feedback:

GitHub: sjones73
Email: sjones7733@gmail.com