

### Time taken to build the app: 
6 hours ~
### Caching and fetching algorithm: 
My algorithm begins by fetching 4 pages of data in its first request (48 items). On the click of each NEXT page, a check is done to see if the current page is within 4 pages of the end of the card list, and if it is, another 4 pages are retrieved from the api. 

### Run app locally: 

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app is ready to be deployed.

To learn React, check out the [React documentation](https://reactjs.org/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
