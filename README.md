

# Library API

This is an API for a library application. It's built with [Express.js](https://expressjs.com/) and uses [Knex.js](http://knexjs.org/) as a query builder to access a PostgreSQL database.

## Features

The API provides comprehensive functionality for managing libraries, shelves, and books. You can create, read, update, and delete each of these resources, and you can get all books in a specific library or on a specific shelf.

- Each **Library** has a `name`.
- Each **Shelf** belongs to a Library and has a `genre`.
- Each **Book** belongs to a Shelf and has a `title`, an `author`, a `summary`, and a `coverImageUrl`.

## Running the App Locally

To run the app locally, you'll need Node.js, npm, and PostgreSQL installed on your machine.

- Clone the repository:

```bash
git clone https://github.com/quarterlylearnings/book-library-api.git
cd book-library-api
```

- Install the dependencies:

```bash
npm install
```

- Set up the database:

First, create a new PostgreSQL database. Then, update the `knexfile.js` file with your database configuration (the name of your database, your username, and your password).

Then, use the `knex` command line interfact to:

1. create the necessary tables and 


```bash
npx knex migrate:latest
```
2. seed them with some initial data [optional]

```bash
npx knex seed:run
```

- Start the server:

```bash
npm start
```

The app should now be running on [http://localhost:3000](http://localhost:3000).

## API Documentation

The API can be accessed at the following endpoints:

- `GET /libraries`: Get all libraries.
- `POST /libraries`: Create a new library. Requires a JSON body with `name`.

- `GET /libraries/:id`: Get a specific library by ID.
- `PUT /libraries/:id`: Update a specific library by ID. Requires a JSON body with `name`.
- `DELETE /libraries/:id`: Delete a specific library by ID.

- `GET /libraries/:id/books`: Get all books in a specific library.

- `GET /shelves`: Get all shelves.
- `POST /shelves`: Create a new shelf. Requires a JSON body with `libraryId` and `genre`.

- `GET /shelves/:id`: Get a specific shelf by ID.
- `PUT /shelves/:id`: Update a specific shelf by ID. Requires a JSON body with `libraryId` and `genre`.
- `DELETE /shelves/:id`: Delete a specific shelf by ID.

- `GET /shelves/:id/books`: Get all books on a specific shelf.

- `GET /books`: Get all books.
- `POST /books`: Create a new book. Requires a JSON body with `shelfId`, `title`, `author`, `summary`, and `coverImageUrl`.

- `GET /books/:id`: Get a specific book by ID.
- `PUT /books/:id`: Update a specific book by ID. Requires a JSON body with `shelfId`, `title`, `author`, `summary`, and `coverImageUrl`.
- `DELETE /books/:id`: Delete a specific book by ID.

All `POST` and `PUT` requests must include a `Content-Type: application/json` header.

## Error Handling

In case of an error, the API will return a JSON response with a `message` property describing the error. For example:

```json
{
  "message": "There was an error"
}
```

