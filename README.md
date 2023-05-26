
# KINARA CAPITAL ASSINGMENT (API)

This backend APIs responsible for loading student details with pagination, and implementing server-side filtering.

## Tech Stack

**Server:** Express.js, Node.js, MongoDB Atlas, Railway(for hosting).

**Tool:** Postman, VS Code.


## Features

- Filtering
- Sorting.
- Searching.
- Pagination.


## Installation

Clone the repository:

```bash
  git clone https://github.com/RayaBasu01/StudentApiRB_KinaraCapital.git

```
    
## Deployment

To deploy this project run

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI`


## Run Locally

Clone the project

```bash
  git clone https://github.com/RayaBasu01/StudentApiRB_KinaraCapital.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
    npm install
    npm i express
    npm i mongoose
    npm i nodemon
```

Start the server

```bash
  npm run dev
```


## FAQ

#### Where can I get MONGODB_URI?

To obtain the URL for database connectivity from MongoDB Atlas, follow these steps:

1. Go to the MongoDB Atlas website and log in to your account.
2. Navigate to the "Clusters" section and select the desired cluster.
3. Click on the "Connect" button for the cluster.
4. Choose "Connect Your Application" to get the connection string.
5. Select your driver version and copy the provided connection string.
6. Replace the `<password>` placeholder in the connection string with your MongoDB user's password.
7. Optionally, customize the connection string with additional parameters like database name or SSL options.
8. Use the modified connection string as the URL for connecting to your MongoDB Atlas database.

Ensure that you follow the appropriate security measures, such as using environment variables to store sensitive information like passwords, to protect your database credentials.

#### Is Railway free for hosting?

Yes, its free for 500 Hours only, after that you have to pay $5.

#### What will happen after 500 Hours?
After 500 Hours, to use the API you have to run it localy in your machine.
