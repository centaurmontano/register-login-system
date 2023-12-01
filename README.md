# register-login-system

A simple web application for user registration and login using Node.js and MongoDB.

## Table of Contents

- [Required Material](#required-material)
- [Specifications](#specifications)
- [Key Functions](#key-functions)
  - [Register](#register)
  - [Login](#login)
- [MongoDB](#mongodb)
- [Detailed Guideline/Client Requirements](#detailed-guidelineclient-requirements)

## Required Material

To run this project, you will need the following:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

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

