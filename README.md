![alt text](https://i.imgur.com/iVW7BBr.png)

**MyPortfolio**
=====================================

Portfolio site that showcases my skills and information about myself.
https://dhkportfolio.dev/

**Purpose**
---------------

I developed this project to showcase my front and back end skills in both React and Express. The libraries used here are some of the more popular libraries that I've come across in my experiences.

This project also includes libraries that I have picked up through the years, including Redux-Saga, Styled-Components, and Reselect. This site is also hosted on Render.

**Features**
---------------
- Loading page that is swapped out once Redux makes a successful call to the back end.
- Redux stores data fetched from the back end for use in various components.
- Reselect is used to fetch data from the Redux store. 
- Instead of frontloading data from backend when a user visits site, Redux-Saga will only make requests when the data is needed.

**Installation Steps**
---------------
1. Ensure Node v18.14.0 is installed
2. Clone this repo using `git clone https://github.com/denyosaur/MyPortfolio.git`
3. In the cloned repo folder move to backend folder: `cd backend`
  1. install dependencies with `npm install`
  2. run `npm ruun db:build` to seed the Postgresql server
  3. run `npm run start` to start the server
3. In the cloned repo folder move to frontend folder: `cd frontend`
  1. install dependencies with `npm install`
  2. run `npm start`
            
**Tech Stack**
---------------
##### Backend
- Colors - v1.4.0
- cors - 2.8.5
- dotenv - v13.0.1
- Express - v4.17.2
- Jsonschema - v1.4.0
- Jsonwebtoken - v8.5.1
- Node - v18.14.0
- PostgreSQL - v14.5
##### Frontend
- axios - v1.2.3
- react - v17.0.2
- rect-dom - v17.0.2
- react-Redux - 7.2.6
- react-router-dom - v6.2.1
- redux-saga - 1.1.3
- reselect - 4.1.5
- styled-components - 5.3.6
