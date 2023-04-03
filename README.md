# surreal-dashboard

<div style="display: flex; justify-content: space-between;">
  <div style="width: 33%;">
    <img src="https://user-images.githubusercontent.com/58491622/229386615-ac2cb4f8-221d-489a-8fe7-6676fede837c.png" alt="Dashboard" />
  </div>
  <div style="width: 33%;">
    <img src="https://user-images.githubusercontent.com/58491622/229386763-c86eafb4-52dd-4825-b0ff-1e14c0aaddfd.png" alt="Geography" />
  </div>
  <div style="width: 33%;">
    <img src="https://user-images.githubusercontent.com/58491622/229386872-39b48239-3d3d-42e1-84d5-8c4ea498c567.png" alt="Products" />
  </div>
</div>


Live code here: [surreal-dashboard](https://surreal-dashboard-frontend.onrender.com/dashboard)

Surreal Dashboard is a feature-rich web application built using Node.js that provides a seamless experience for managing data and analytics for businesses. The dashboard offers a comprehensive suite of tools for visualizing data, analyzing trends, and making data-driven decisions.

- [Axios](https://axios-http.com/ptbr/docs/intro): Promise-based HTTP client for the browser and Node.js
- [React.semantic-ui](https://react.semantic-ui.com): UI component library for React
- [Formik](https://formik.org/): Form library for React
- [Node.js](https://nodejs.org/en/download/): JavaScript runtime built on Chrome's V8 JavaScript engine
- [NPX](https://www.npmjs.com/package/npx): Command-line tool for executing Node packages
- [VSCode](https://code.visualstudio.com/download): Lightweight, cross-platform code editor
- [Nodemon](https://github.com/remy/nodemon): Utility that monitors changes in a Node.js application and restarts the server automatically
- [Nivo](https://nivo.rocks/): Reusable charting library for React
- [Material UI](https://mui.com/material-ui/getting-started/): Component library for React based on Google's Material Design
- [Material UI Data Grid](https://mui.com/x/react-data-grid/): Powerful and customizable data grid component for React
- [React Router](https://reactrouter.com/en/v6.3.0/getting-started): Declarative routing library for React
- [React Date Picker](https://reactdatepicker.com/#example-basic): Flexible and customizable date picker component for React
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started): Officially recommended toolset for Redux development
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview): Powerful data fetching and caching library for Redux Toolkit
- [Dotenv](https://github.com/motdotla/dotenv): Zero-dependency module that loads environment variables from a .env file into process.env
- [Google Fonts](https://fonts.google.com/): Library of free and open-source fonts provided by Google
- [Render](https://render.com/): Cloud platform for deploying and scaling web apps and APIs
- [MongoDB](https://www.mongodb.com/): NoSQL document-oriented database
- [Mongoose](https://github.com/Automattic/mongoose): Object modeling tool for MongoDB
- [MongoDB Aggregate](https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/): Framework for data aggregation and analysis operations on MongoDB

## Running the Project

### Prerequisites
- Node.js
- MongoDB

### Backend Setup
1. Navigate to the `backend` directory of the project: `cd server`.
2. Install dependencies: `npm install`.
3. Create a `.env` file in the `backend` directory and set the following environment variables:
   - `PORT`: The port number to run the server on (default is 5001).
   - `MONGO_URI`: The URI for connecting to your MongoDB instance (e.g. mongodb://localhost:27017/surreal-dashboard).
4. Start the server: `npm run start`.

### Frontend Setup
1. Navigate to the `frontend` directory of the project: `cd client`.
2. Install dependencies: `npm install`.
3. Create a `.env` file in the `frontend` directory and set the following environment variable:
   - `REACT_APP_API_URL`: The base URL for the backend API (e.g. http://localhost:5001).
4. Start the development server: `npm start`.

To populate the database, it will be automatically done once the backend is run for the first time and MongoDB is properly configured (you need).

Once the backend and frontend are running, you can access the app by visiting http://localhost:3000 in your web browser.

To populate the database, you need to uncomment lines 59 to 64 in the index file located in the server folder (backend). These lines contain the code to insert initial data into the database. After running the server for the first time with these lines uncommented and ensuring that MongoDB is properly configured, the data will be automatically inserted into the database. Once the data has been populated, remember to comment out these lines again to avoid inserting the same data multiple times.
