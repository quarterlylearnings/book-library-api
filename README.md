# COR Library API

This is an API for a library application. It's built with [Express.js](https://expressjs.com/) and uses [Knex.js](http://knexjs.org/) as a query builder to access a PostgreSQL database.

## Features

The API provides comprehensive functionality for managing libraries, shelves, and books. You can create, read, update, and delete each of these resources, and you can get all books in a specific library or on a specific shelf.

- Each **Library** has a `name`.
- Each **Shelf** belongs to a Library and has a `genre`.
- Each **Book** belongs to a Shelf and has a `title`, an `author`, a `summary`, and a `coverImageUrl`.

## Running the App Locally

To run the app locally, you'll need Node.js, npm, and PostgreSQL installed on your machine.

### Clone the repository:

```bash
git clone https://github.com/quarterlylearnings/book-library-api.git
cd book-library-api
```

### Install the dependencies:

```bash
npm install
```

### Set up the database:

First, create a new PostgreSQL database. Then, update the `knexfile.js` file with your database configuration (the name of your database, your username, and your password).

Then, use the `knex` command line interface to:

1. create the necessary tables and 


```bash
npx knex migrate:latest
```
2. seed them with some initial data [optional]

```bash
npx knex seed:run
```

### Start the server:

```bash
npm start
```

The app should now be running on [http://localhost:3000](http://localhost:3000).

----

## API Documentation

The API can be accessed at the following endpoints:


| HTTP Method | Endpoint                 | Description                                      | Required JSON Body                           |
|-------------|--------------------------|--------------------------------------------------|----------------------------------------------|
| GET         | /libraries               | Get all libraries                                | N/A                                          |
| POST        | /libraries               | Create a new library                             | name                                         |
| GET         | /libraries/:id           | Get a specific library by ID                     | N/A                                          |
| PUT         | /libraries/:id           | Update a specific library by ID                  | name                                         |
| DELETE      | /libraries/:id           | Delete a specific library by ID                  | N/A                                          |
| GET         | /libraries/:id/books     | Get all books in a specific library              | N/A                                          |
| GET         | /shelves                 | Get all shelves                                  | N/A                                          |
| POST        | /shelves                 | Create a new shelf                               | libraryId, genre                             |
| GET         | /shelves/:id             | Get a specific shelf by ID                       | N/A                                          |
| PUT         | /shelves/:id             | Update a specific shelf by ID                    | libraryId, genre                             |
| DELETE      | /shelves/:id             | Delete a specific shelf by ID                    | N/A                                          |
| GET         | /shelves/:id/books       | Get all books on a specific shelf                | N/A                                          |
| GET         | /books                   | Get all books                                    | N/A                                          |
| POST        | /books                   | Create a new book                                | shelfId, title, author, summary, coverImageUrl |
| GET         | /books/:id               | Get a specific book by ID                        | N/A                                          |
| PUT         | /books/:id               | Update a specific book by ID                     | shelfId, title, author, summary, coverImageUrl |
| DELETE      | /books/:id               | Delete a specific book by ID                     | N/A                                          |


All `POST` and `PUT` requests must include a `Content-Type: application/json` header.

## Error Handling

In case of an error, the API will return a JSON response with a `message` property describing the error. For example:

```json
{
  "message": "There was an error"
}
```

