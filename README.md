# react-photolabs
The PhotoLabs project for the Web Development React course programming.

# Photolabs
PhotoLabs is a React-based single-page application (SPA) that allows users to view and interact with photos in various contexts. This project combines React, Express.js, and a PostgreSQL database to create a client-side application for users to explore and interact with photos.

## Features

- View a wide range of photos.
- Explore different photo categories (topics).
- Click on a photo to view it in full size with related images.
- Like and favorite photos.
- User-friendly navigation with a notification for liked photos.

## Screen Shots
#### 1. Index Page
!["index page"](https://github.com/yhuang82/photolabs/blob/main/docs/photo-index.png.png?raw=true)

#### 2. Modal View
!["modal view"](https://github.com/yhuang82/photolabs/blob/main/docs/photo-modal.png.png?raw=true)

#### 3. Select a Different Topic and Like an Image
!["topic page"](https://github.com/yhuang82/photolabs/blob/main/docs/photo-topic.png.png?raw=true)


## Technical Specifications

- Create React App (CRA) is used to develop the client application.
- Webpack and Babel are utilized for building and transpiling.
- Express.js forms the basis for the PhotoLabs API server application.


## Prerequisites

What you need to have installed:

- Node.js
- npm (Node Package Manager)
- PostgreSQL

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.
(Pay special attention to the setting of the.env file
)

```sh
cd backend
npm start
```
## Contributing
We welcome contributions to PhotoLabs. If you'd like to contribute, please follow these guidelines:

1. Fork the project on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Commit your changes and create a descriptive pull request.
5. Provide clear and detailed information about your changes.