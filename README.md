# Daily Records

## Description

This project is a simple GraphQL server that connects to a MongoDB instance in Atlas using Mongoose. It allows users to track their daily food intake and general wealth.

## Features

- CRUD operations for daily records
- GraphQL API for querying and mutating data
- Integration with MongoDB Atlas for data storage

## Installation

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Set up a MongoDB instance in Atlas and obtain the connection string.
4. Create a `.env` file in the root directory and add the following environment variables:
    - `MONGODB_URI`: MongoDB connection string
5. Start the server using `npm start`.

## Usage

1. Open your preferred GraphQL client (e.g., GraphQL Playground, Insomnia).
2. Set the endpoint to `http://localhost:4000/graphql` (or the specified port).
3. Use the provided GraphQL schema to query and mutate data.

## License

This project is licensed under the [MIT License](LICENSE).
