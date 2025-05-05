# Web Programming Final Project

This is the final project for my Spring 2025 Web Programming class taught by Dr. Bhaskar Ghosh.

## How to set up the Project:

To start, you will need to create a parent directory and add all the files from this GitHub Page. You can call the directory whatever you want. I called it 'my-personal-website'.

## Installations

You will need to install: 
### Node.js from [here](https://nodejs.org/en) 
### MongoDB either [locally](https://www.mongodb.com/products/self-managed/community-edition) or the cloud version [Mongo DB Atlas](https://www.mongodb.com/atlas).
### VS Code if you have not already [here](https://code.visualstudio.com)

## Project Structure

Your directory structure should look just like it does in this Respository. Inside of the parent directory (my-personal-webpage), you will need a 'backend' and a 'frontend'.

## Set up Backend and .gitignore

Next, you should open your terminal or command prompt and change directories to the backend by typing: `cd my-personal-webpage/backend`. Of course, if you called your project something else you will need to change the directory name.

Now you should be able to install all the required libraries by using the `npm instal` command.

If you have not already, you should create  a `.gitignore` from this [website](https://www.toptal.com/developers/gitignore). This project uses react, so look up that language and copy and paste the output into a `.gitignore` file.

Once you are in the backend, you should run `nodemon ./server.js` to get the server running. It should output `MongoDB Connected` and `Backend running on http://localhost:5000` to the terminal.

## Set up Frontend

You should now open up a new terminal tab or window and change to the frontend directory by sending a `cd my-personal-webpage/frontend` command. IT IS IMPORTANT YOU SET UP THE BACKEND FIRST.

Next, you will install the frontend dependencies using the `npm install` command.

After that you can run `npm run dev` to start the frontend which should output `Local: http://localhost:5173`

## Site is running

You can now CTRL + Click on `http://localhost:5173` and it will redirect you to the running website in your browser.\

## Images

All the images should come from the `frontend` directory and the `frontend/public` directory.


## For information about React and Vite, use the following information

This page was created using Vite with the React JS framework. The following information came by default.







# React + Vite


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
