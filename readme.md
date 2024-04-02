# Starting an Express API with Node.js

## Introduction
This guide will walk you through the process of setting up and running an Express API with Node.js. We'll cover how to manage dependencies using `package.json`, configure environment variables using `.env` files, and containerize the application using Docker Compose.

## Prerequisites
Make sure you have the following installed on your machine:
- Node.js >= 20.0.0
- Docker
- Docker Compose

## Steps

### 1. Set up the project

create a `.env` file in the root of the project based in .env.example and fill in the required environment variables.

#### Environments variables
## Environment Variables

Before running the application, you need to set up the following environment variables. These variables can be configured using a `.env` file in the root directory of your project.

- **NODE_ENV**: Specifies the environment in which the application is running. Use `"development"` for development mode.

- **SERVER_PORT**: Specifies the port on which the Express server will listen for incoming requests.

- **MONGO_DB_URI**: Specifies the connection URI for your MongoDB database. It should include the username, password, host, and port of your MongoDB server.

- **COBRE_FACIL_APP_ID** and **COBRE_FACIL_APP_SECRET**: Provide the application ID and secret for the Cobre Fácil API, if applicable.

- **CIRCLE_API_TOKEN**: Provides the authentication token for accessing the Circle API, if applicable.

Here's an example `.env` file:

```plaintext
NODE_ENV=development
SERVER_PORT=3000
MONGO_DB_URI=mongodb://cobre_facil_username:cobre_facil_password@localhost:27017
COBRE_FACIL_APP_ID=ABC
COBRE_FACIL_APP_SECRET=ABC
CIRCLE_API_TOKEN=ABC
```

### 2. Build and run the project with docker
start execution of the following command:
```bash
docker compose up -d --build
```

### 3. Run the project locally
-  install dependencies
    ```bash
    npm install
    ```

- setup mongodb to this project using docker or production instance of mongodb
    - using docker
        ```bash
        docker compose up mongodb -d
        ```    
    - using production instance of mongodb
        - replace the environment variable `MONGO_DB_URI` to your production instance

- run the project
    ```bash
    npm start
    ```

### About Scripts
## Scripts

The `scripts` section in the `package.json` file contains various commands that can be executed using npm. Here's an explanation of each script:

- **start**: Starts the server using `ts-node-dev`, which provides automatic restarts on file changes. It transpiles TypeScript code to JavaScript and runs `server.ts`.

- **exec**: Similar to `start`, but without automatic restarts. It transpiles TypeScript code to JavaScript and runs `server.ts`.

- **test**: Executes the test suite using Jest. Jest is a popular testing framework for JavaScript applications.

- **lint**: Runs ESLint to lint TypeScript files in the project directory. ESLint helps enforce coding standards and identify potential issues in the codebase.

- **checkUpdates**: Checks for updates to npm dependencies using `npm-check-updates` package. This script is useful for keeping dependencies up-to-date.

- **update**: Updates npm dependencies to their latest versions using `npm-check-updates -u`. Use this script after running `checkUpdates` to update dependencies.

- **build**: Transpiles TypeScript files to JavaScript using the TypeScript compiler (`tsc`). This script is useful for preparing the project for deployment by converting TypeScript code to JavaScript.

You can execute these scripts using the `npm run` command followed by the script name. For example:
```bash
npm run start
npm run test
npm run lint
npm run build
```