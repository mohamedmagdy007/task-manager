# Task Manager App

## Live Demo

Check out the live deployment: [Task Manager App](https://task-manager-steel-gamma.vercel.app/)

## Overview

This is a task management application built with React, Redux Toolkit, and React Hook Form. It allows users to create, update, delete, and manage tasks efficiently with state management powered by Redux Toolkit. The app also includes form validation using Yup and supports various task states.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete tasks.
- **Redux Toolkit**: Efficient state management for handling tasks.
- **React Hook Form**: Simplifies form handling.
- **Yup Validation**: Ensures input correctness.
- **Task State Management**: Change task statuses dynamically.
- **Kanban Board**: Drag-and-drop task management.

## Tech Stack

- **Frontend**: React.js
- **State Management**: Redux Toolkit
- **Form Handling**: React Hook Form
- **Validation**: Yup
- **Drag And Drop**: dnd-kit
- **UI Styling**: Tailwind CSS (or any preferred CSS framework)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedmagdy007/task-manager
   cd task-manager
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Add new tasks using the form.
- View tasks in a list or board view.
- Update task details and status.
- Delete tasks when no longer needed.

## Project Structure

```
├── src
│   ├── assets       # Static assets like images and icons
│   ├── components   # Reusable UI components
│   ├── hooks        # Custom hooks
│   ├── layout       # Layout components
│   ├── pages        # App pages
│   ├── routes       # Application routes
│   ├── store        # Redux store setup
│   ├── types        # TypeScript types
│   ├── utils        # Utility functions
│   ├── App.tsx      # Main application file
│   ├── main.tsx     # Entry point
│   ├── index.css    # Global styles
└── README.md        # Project documentation
```
