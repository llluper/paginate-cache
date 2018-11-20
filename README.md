### Run app locally 

In the project directory, run:

##### `npm install`

Installs the packages the app is dependent on.

##### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Time taken to build the app 
6 hours ~

### Caching and fetching algorithm
My algorithm begins by fetching 4 pages of data in its first request (48 objects). On the click of each NEXT page, a check is done to see if the current page is within 4 pages of the end of the card list, and if it is, another 4 pages are retrieved from the API, so max 8 pages are cached ahead. 48 objects are retrieved at a time to minimise the amount of calls to the API. Calls to the API are only made if needed. 


## Bonus Tasks
### Run the Docker file to create an image of the compiled front end code 

In the project directory, run:

`docker build . -t llluper/cra-docker`<br>
`docker run -p 8080:80 llluper/cra-docker`<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.<br>

NOTE: Replace `llluper` with your Docker username.

### Run the bash script that compiles the React code and builds a Dockerfile

In the project directory, run:

`./build.sh`


### Additional scripts

In the project directory, run:

##### `npm test`

Launches the test runner in the interactive watch mode.

##### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app is ready to be deployed.
