
# Student Database (API)

This backend APIs responsible for loading student details with pagination, and implementing server-side filtering.

### [Link to the API](https://fine-blue-sawfish-yoke.cyclic.app/api/students)

## Tech Stack

**Server:** Express.js, Node.js, MongoDB Atlas, Cyclic(for hosting).

**Tool:** Postman, VS Code.


## Features

- Filtering
- Sorting.
- Searching.
- Pagination.


## Installation

Clone the repository:

```bash
  git clone https://github.com/RayaBasu01/StudentApi_RayaBasu.git

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
  git clone https://github.com/RayaBasu01/StudentApi_RayaBasu.git
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

#### Is Cyclic free for hosting?

Yes, it has both free and paid version. 

#### What are the steps of hosting?
At first signup to Cyclic and then connect your GitHub account to it. Then select the repo and enter the Environment variables required. After that start deploying and it will be live if the folder structure and the product is fine. Click on the link and enjoy your API. 


## Feedback

If you have any feedback, please reach out to us at raya.basu.01@gmail.com
