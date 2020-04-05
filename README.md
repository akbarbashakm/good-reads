# GoodReads App
A simple GoodReads javascript client web app

## Features
* Should be able to search the books with name
* Interface to list the books with pagination

## Bonus
* Unit test with any framework

Please refer [GoodReads Developer](https://www.goodreads.com/api) for API References.

Don't worry too much about the aesthetics, should be legible that's it!

# Running the application locally

**Prerequisites:** You need to have Node + NPM installed.

**Required Environment Variables:**

`REACT_APP_API_KEY` : Goodreads API Key you can get from [here](https://www.goodreads.com/api/keys).

Save it in the `.env` file as described [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables)

Having done that, here is how to run the application locally in development mode.

**Clone the repo:**

    git clone https://github.com/niinpatel/goodreads-react.git

**Install dependencies:**

    npm install

**Starting the application in development mode:**

    npm start

# Building the application:

To build the production assets, run

    npm run build

# Testing the App:

Right now there is only one test suite. (renders without crashing)

    npm test

# Features In Current Version:

1. Search for books by title, author, or ISBN.
2. Displays upto 20 search results in bootstrap cards.
3. Displays only title, author, and link to goodreads page.
4. See the description and rating, and other details by clicking on individual result.

# Future Implementation:

Some of the things that I want to implement in the future version are:

1. Ability to see others' reviews.
2. Ability to sign in with github so users can add their own reviews and ratings.
