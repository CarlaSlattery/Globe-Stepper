<p align="center"><img height="200" src="https://github.com/CarlaSlattery/Globe-Stepper/blob/main/src/assets/GlobeStepper.png"> </p>

# Globe-Stepper API

## Introduction
This is part of a full stack CRUD Api, built in partnership with [Deryn Rushworth](https://github.com/derynruah) for our final project for our [CommandShift](https://www.commandshift.co/) bootcamp. It has been designed to build upon the everyday use of distance trackers but allows users to challenge themselves and track their progress against the distances of famous walks around the globe. Users are required to register so that they have their own account where they can visit their dashboard to update their progress and view their dashboard with stats and achievements.
Currently the stats information is working but further development is required to ensure achievements are fully working.

## Technologies used
The front-end of the project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and this was my first attempt at using a component library for styling, for which I chose [Chakra UI](https://chakra-ui.com/).

[Express](https://expressjs.com/) and [Sequelize ORM](https://sequelize.org/docs/v6/getting-started/) were used in a [NodeJS](https://nodejs.org/en) environment to connect with a postgresSQL database containing all user data and they were authenticated in the app using [JSONwebtokens](https://jwt.io/).

The backend repository can be found [here](https://github.com/derynruah/globe-stepper-backend).

## Dependencies

- React-Router-Dom v6.8
- React proptypes
- React testing library
- Axios
- ChakraUI
- json-loader

## Installation

1. In your chosen directory you can clone the repository using `git clone <repoURL>`
2. Install all dependencies using `npm i`
3. Run in your browser with `npm start`

## Future improvements

With further time further additions I would like to make include
- Include a range of working user achievement badges that are synced with their progress and appear in their user dashboard. 
- Additional UX improvements 
- Allowing users to share challenges together and compare their progress
- Updating user dashboards with pictures and information of their route along particular milestones.
- Explore the ability to sync with existing exercise trackers eg, Strava, apple, garmin etc.

## Acknowledgements

A big thank you to my project partner Deryn and the support of all the CommandShift tutors and fellow students, who have helped me get to a stage in my learning where I'm now building these kind of projects. It was good to know they always had my back and I will be forever grateful.

## Authors

- [Carla Slattery](https::/github.com/CarlaSlattery)
- [Deryn Rushworth](https://github.com/derynruah)

