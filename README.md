## Task Management System

### Overview

The Task Management System is an application designed to facilitate task creation and assignment. It is built using the Laravel framework for the backend and Next.js for the frontend. The system utilizes MySQL as the database to store task-related information.

### Design Choices

1. **Programming Language**: JavaScript was chosen for the frontend, and PHP was selected for the backend to take advantage of their respective strengths.
2. **Framework**: Laravel was selected as the backend framework due to its robust features, security, and developer-friendly environment. Next.js, a React framework, was chosen for the frontend to build efficient and interactive user interfaces.
3. **Database**: MySQL was chosen as the database management system for its reliability, performance, and widespread community support.

### Instructions

1. **Prerequisites**
   - PHP 8.1 or higher.
   - Node.js and npm.

2. **Installation**
   1. Clone the project repository from [https://github.com/wddyousuf/task-management-with-laravel-and-nextJs](https://github.com/wddyousuf/task-management-with-laravel-and-nextJs).
   2. For the backend:
      - Navigate to the backend directory.
      - Run database migrations or import the provided database.
      - Create a `.env` file with necessary configurations, including database and email credentials.
      - Install the PHP dependencies using Composer: `composer install`.

   3. For the frontend:
      - Navigate to the frontend directory.
      - Install the JavaScript dependencies: `npm install`.
      - Start the Next.js development server: `npm run dev`.

3. **Running the Project**
   - Backend:
     - Run the Laravel development server: `php artisan serve`.
     - Run the Laravel queue worker: `php artisan queue:work`.
   - Frontend:
     - Start the Next.js development server: `npm run dev`.

4. **Usage**
   - After setting up and running the project, access the frontend in a web browser.
   - Register as a user, and then you can easily create and assign tasks using the task module.
