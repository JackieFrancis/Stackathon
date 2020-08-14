# Gatekeeper

Gatekeeper is a personal food tracking app that notifies you on what foods you can/cannot eat based on your daily macro/micro intake.

## Stack

Gatekeeper is built with NodeJS, Express, Postgres, Sequelize, React, Redux, and the Nutritionix API.

## Setup

Use the package manager to install dependencies:
``npm install``

If sample data is necessary, seed the database:
``npm run seed``

## Start

You can run the site locally using `npm run start-dev`.

If you want to run the server and/or `webpack` separately, you can also
`npm run start-server` and `npm run build-client`.

## Status

This project is still in progress.

At the moment you can sign in, select your macro/micro to track, search foods and receive a message notifying you if you can/cannot eat that food based on your daily intake.

Upcoming feature integrations include:
1) Adding a daily log so you can see what foods you have eaten (including the ability to add, edit and remove food details)
2) Adding a reset button so users can reset their daily logs
2) Stying changes to make the app responsive
3) Adding a manifest file and service workers to make the app a Progressive Web Application
