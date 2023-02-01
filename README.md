# "The Bigger Picture" is a SPA Website with a frontend and backend side both made by me!

    * Frontend - React.js, HTML & CSS
    * Backend - Express.js, MongoDB
    
# Website has the following pages: 

    * Home - Welcoming page available for both Users and Guests and 
      it has interactive image sliding deck where the most wanted NFT's are displayed.
    
    * Catalog - The main part of the website from where both Users and Guest can see
      the list of every NFT uploaded to the website.
    
    * Details -  Shows the most important info about selected NFT. Guests can see
      how much likes and owns it has as well as the price and the name of the person
      who uploaded it which leads to his personal Profile page, Users can see this
      info too and gain the power to Own and Like. Liking NFT is adds it to your 
      "Liked List' and owning NFT does the same as well as giving you the option 
      to pick it as your profile picture to add a unique self expression customization.
    
    * Profile - Every User his own personal profile page, here Guest can see the User's name, 
      description and picture as well as how much NFT's they own and like, as a User you can 
      change your picture, description, email, username and password as long as they remain unique.
    
    * Upload - Available only for Users after either Login or Register. This is from 
      where you can upload your own NFT. After uploading you are redirected to your 
      newly created details page of the NFT from where you can always edit it or delete it. 
      Every NFT you upload is automatically added your own list.
    
    * Edit - This is where you can edit the uploaded NFT's to your liking.
    
    * Register - sends the data  to the server if the form is filled correctly.
      Checks if the username and email are unique, and hashes your password,
      after that creates the user profile and stores the data in the MongoDB database.
      After successful register it redirects you to your newly created user profile. 
    
    * Login - sends the data to the backend server where it checks for the email 
      in the database, if there is match takes the passwords and compares them. 
      If the password match a JWT Cookie token is created and send to the Client for 
      authorization this gives access to the interactive part of the social media website.
    
    * Select Profile Picture - this is where Users can select their profile picture 
      from list of all the uploaded and owned NFT's by them.
    
    * Most Wanted - Variation of the Catalog page accessible for both Users and Guests.
      The NFT's are dispalyed in different order starting from the most expensive and popular.
    
# The website has two parts:

    * User part - After either Login or Register in the website you will be granted with access to:
       - your personal profile where you can customize your profile picture, description,
         username and email to your liking.
       - the ability like and own NFT's uploaded by other users and create and edit your own NFT's.
       - cookie used for authorization.

    * Guest part - As a guest you are given a lot of freedom, you can visit the 
      homepage, catalog , the most wanted list, detail pages and users profiles
      but you can't interact in any way.
    
# Basic Architecture Explanation

    * public - for static images and css + index.html

    * server - contains the REST server 
             * routes - handles route redirecting to the corresponding request addres based on first parameter
             * utils - containes JsonWebToken functionality
             * models - keeps the Mongoose Schemas 
             * controllers - find the specific fetched route and handles the REST request
  

    * src - handles the react-app + cleint side rendering
            * components - exports all components need for client side rendering also handles evets and requests data to the server
                        * components.css - keeps all css for specific page
            * guards - guards user to acces parts based on condition
            * App.js - handles client side routing and uses routeGuards

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
