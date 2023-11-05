# Task Manager Web App

This GitHub repository contains the source code for a Task Manager web application. The application is designed to help users manage their tasks and shopping lists. It features a simple web interface built with HTML, CSS, and JavaScript and utilizes Firebase Realtime Database for data storage and synchronization.

## Features
- Add tasks/items to the list by entering text in the input field and clicking the "Añadir" (Add) button or pressing Enter.
- Remove tasks/items from the list by clicking on them.
- Real-time updates to the list using Firebase Realtime Database.
- Responsively designed for both desktop and mobile devices.

## Technologies Used
- HTML
- CSS
- JavaScript
- Firebase Realtime Database

## File Structure
- `index.html`: The main HTML file for the web application, including the structure and user interface elements.
- `index.css`: The CSS file for styling the web application.
- `index.js`: The JavaScript code responsible for handling user interactions and managing the shopping list.
- Firebase SDK: The Firebase JavaScript SDK is imported from the CDN to enable real-time data synchronization.

## Firebase Configuration
- The Firebase Realtime Database is configured to store the shopping list data. The database URL is provided in the code, and Firebase's SDK is initialized to establish a connection.

## How to Use
1. Clone or fork this repository.
2. Open `index.html` in a web browser to use the Task Manager web application.
3. Add tasks/items to the list, remove them by clicking, and watch for real-time updates.

Feel free to explore the code and contribute to the project to enhance its functionality or design. If you encounter any issues or have suggestions, please open an issue or submit a pull request.
