# Registration and Login System

A simple full-stack web application for user registration and login using Node.js and MongoDB.

![Node.js Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/256px-Node.js_logo.svg.png) ![MongoDB Logo](https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png)

## Table of Contents

- [Required Material and Installation](#required-material-and-installation)
- [Recommended Code Editors](#recommended-code-editors)
- [Specifications](#specifications)
- [Key Functions](#key-functions)
  - [Register](#register)
  - [Login](#login)
- [MongoDB](#mongodb)
- [Detailed Guideline/Client Requirements](#detailed-guidelineclient-requirements)
- [Setting Up and Running the Project](#setting-up-and-running-the-project)
- [License](#license)

## Required Material and Installation

To run this project, you will need the following:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [MongoDB Compass](https://www.mongodb.com/try/download/compass)

## Recommended Code Editors

While you can use any code editor of your choice, the following editors are commonly used and supported for this project:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Sublime Text](https://www.sublimetext.com/)
- [Atom](https://atom.io/)

## Specifications

This application allows users to register and login to a website. It is implemented using Node.js and MongoDB.

## Key Functions

### Register

- Allow users to register on the website.
- Display a form to capture users' information.
- Users enter a username and password.
- Login credentials are saved to the MongoDB Database.

### Login

- Allow users to log in to the website.
- Display a form for users to enter their credentials.
- Users enter their username and password.
- Login credentials are matched with the ones saved in MongoDB.
- Users will receive a message indicating whether the login was successful or not.

## MongoDB

The project uses MongoDB as the database to store user data.

## Detailed Guideline/Client Requirements

- Users can choose either to register or login on the main page.
- On the register page, users enter their username and password and click the submit button to save their information to the database.
- Registration information is saved to the database.
- On the login page, users enter their username and password and click submit to log in.
- If the login credentials are correct, users receive a login successful message.
- If the login credentials are incorrect, users receive a login failure message.
- Links to the main page, login page, and register page are available on different pages.

## Setting Up and Running the Project

Follow these steps to set up and run the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/centaurmontano/register-login-system.git

2. Install dependencies:
cd your-repository
npm install

3. Start the application
npm start 

