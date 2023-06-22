# PWA-Text-Editor

Week-19 Challenge (Progressive Web Applications)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Table of Contents

- [Description](#description)

- [Live-URL](#live-url)

- [Screenshots](#screenshots)

- [Technologies-Used](#technologies-used)

- [Installation](#installation)

- [Credits](#credits)

- [Features](#features)

- [Usage-Information](#usage-information)

- [Suggested-Future-Development](#suggested-future-development)

- [Contribution-Guidelines](#contribution-guidelines)

- [Test-Instructions](#test-instructions)

- [License](#license)

- [Questions](#questions)

## Description

This application was built for the purpose of demonstrating and honing skills of progressive web application. Its purpose was to gather a greater understanding of what React JavaScript library is really doing behind the scenes. There are four main concepts this application focuses on. One, configuring the webpack.config.js file with the necessary workbox plugins for service worker and manifest files, and adding CSS and babel loader (enabling the CSS and JavaScript to compile on devices running on older legacy code i.e. ES5). Two, implementing asset caching within the src-sw.js file giving the application offline  functionality. Three, configuring the database, so that data can be added, updated and retrieved from the IndexedDB. And four, adding the addition of event handlers to our install button, so that the application can be installed to each users personal application stack and be used offline.

Although much of this application functions on a boilerplate code structure, building it out helped me to a greater understanding of the functionality of libraries and frameworks like React, Angular, and Vue. As of now I have no plans for future development, however this application can function as a benchmark boilerplate code base for the development of future progressive web applications.

## Live URL

https://jate-text-editor15-e077c2d0ee63.herokuapp.com/

## Screenshots

![Screenshot1-week-19-challenge](https://github.com/rmessett15/PWA-Text-Editor/assets/120127903/8df796e3-a8d4-4d76-ac74-e8445f418250)

![Screenshot2-week-19-challenge](https://github.com/rmessett15/PWA-Text-Editor/assets/120127903/b91bd734-b061-43e6-9338-65a9a7e209e2)

![Screenshot3-week-19-challenge](https://github.com/rmessett15/PWA-Text-Editor/assets/120127903/ce40a18c-e56a-4b92-af5d-d371f9b93f7a)

![Screenshot4-week-19-challenge](https://github.com/rmessett15/PWA-Text-Editor/assets/120127903/1ece2de1-d784-4f52-b779-5d5c09381885)

![Screenshot5-week-19-challenge](https://github.com/rmessett15/PWA-Text-Editor/assets/120127903/380f3362-b729-42f3-9fc0-01c090df4fa2)

![Screenshot6-week-19-challenge](https://github.com/rmessett15/PWA-Text-Editor/assets/120127903/361790ac-6633-4211-89d3-9b82fa850955)

## Technologies Used

This application is powered by Webpack (HTML-Webpack-Plugin, Babel, and CSS Loader), Node.js (v16.19.1), Express.js (v.14.17.1), and JavaScript. Nodemon (v2.0.4) and Concurrently (v5.2.0) were utilized as a devDependencies allowing the server to refresh when edits were made to application, and allowing both the front end and back end to be ran on a single command (npm run start:dev).

![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)

## Installation

Users can view and utilize the application through the use of the browser by visiting the deployed application at https://jate-text-editor15-e077c2d0ee63.herokuapp.com/.

Viewing the application in the browser will also give users the ability to download the application allowing it to be used offline.

To make any further additions, start by cloning the repo in the command line git clone https://github.com/rmessett15/PWA-Text-Editor.git, or forking the repo.

## Credits

As mentioned above much of this application code is boilerplate. Much of the necessary adds were inherited from week-19 mini challenge. Also worked directly with a tutor Joem Casusi, who helped aid me in my understanding of Progressive Web Applications, and IndexedDB's.

(Starter code) was provided by Xander Rapstine (Xandromus) and UT Austin Boot Camps.

## Features

Once the application is opened, the IndexedDB will persist any notes added to the site. There is no need to save any information as the application automatically updates the IndexedDB -> the only thing required for this feature to occur is that the user click out of the window. When returning to the site, they will find all of their notes and other information persisted to the page.

## Usage Information

Usage of this application is very intuitive, just visit the live URL (https://jate-text-editor15-e077c2d0ee63.herokuapp.com/) and start adding notes right away! Users will also notice an install button in the nav bar allowing for the application to be downloaded and used offline. Saving of notes occurs automatically through the IndexedDB; the only thing required is for the user to click out of the window and notes will be persisted whether using the application online or offline.

## Suggested Future Development

As of now I have no plans to develop this application any further. However, this code base can be used as a starting point for future of development of any Progressive Web Application.

## Contribution Guidelines

Open to collaboration, if you choose to do so open an issue and modify any changes you would like to see on a feature branch and wait for approval before merging to the main branch.

NOTICE: Contributor Covenant is released under the Creative Commons Attribution 4.0 International Public License, which requires that attribution be included.

## Test Instructions

There is currently no unit testing written yet for this application.

## License

NOTICE: This application is covered under the MIT License

## Questions

Have additional questions? Click the links below to reach me through my GitHub account or Email address.

[Link to Github](https://github.com/rmessett15)

<a href="mailto:rmessett15@gmail.com">rmessett15@gmail.com</a>

