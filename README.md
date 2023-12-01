# Registration and Login System

A simple fullstack web application for user registration and login using Node.js and MongoDB.

## Table of Contents

- [Required Material](#required-material)
- [Specifications](#specifications)
- [Key Functions](#key-functions)
  - [Register](#register)
  - [Login](#login)
- [MongoDB](#mongodb)
- [Detailed Guideline/Client Requirements](#detailed-guidelineclient-requirements)

## Required Material and Installation

To run this project, you will need the following:

- [Node.js](https://nodejs.org/) {:target="_blank"}
- [MongoDB](https://www.mongodb.com/try/download/community) {:target="_blank"}
- [MongoDB Compass](https://www.mongodb.com/try/download/compass) {:target="_blank"}

## Recommended Code Editors

While you can use any code editor of your choice, the following editors are commonly used and supported for this project:
- [Visual Studio Code](https://code.visualstudio.com/){:target="_blank"}
- [Sublime Text](https://www.sublimetext.com/){:target="_blank"}
- [Atom](https://atom.io/){:target="_blank"}

## Specifications

This application allows users to register and login to a website. It is implemented using Node.js and MongoDB.

## Key Functions

### Register

- Allow the user to register on the website.
- Display a form to capture the user's information.
- The user enters a username and password.
- The login credentials will be saved to the MongoDB Database.

### Login

- Allow the user to log in to the website.
- Display a form for the user to enter their credentials.
- The user enters their username and password.
- The login credentials will be matched with the ones saved in MongoDB.
- The user will receive a message indicating whether the login was successful or not.

## MongoDB

The project uses MongoDB as the database to store user data.

## Detailed Guideline/Client Requirements

- The user can choose either to register or login on the main page.
- On the register page, the user enters their username and password and clicks the submit button to save their information to the database.
- Registration information is saved to the database.
- On the login page, the user enters their username and password and clicks submit to log in.
- If the login credentials are correct, the user receives a login successful message.
- If the login credentials are incorrect, the user receives a login failure message.
- Links to the main page, login page, and register page are available on different pages.

Follow these steps to set up and run the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/centaurmontano/register-login-system.git

   ```

2. Install dependencies:
   ```bash
   cd your-repository
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



