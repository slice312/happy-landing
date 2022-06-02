
# About
+ Page adapted to the minimum screen width 355 pixels
+ The project uses ES6 modules, so you can't just open the `index.html` file through the file system, you need to get the page from the local server.


# How to run
## Run server for development
```sh
npm install
npm start
```
This script run `webpack-dev-server` and auto open browser with `https://localhost:5007`.  
If no browser is opened, you must manually open this URL in the browser.  
Port `5007` specified in `webpack.config.json` in devConfig.



## Run server for production
```sh
npm install
npm run start-prod  
```
By default, starting on `http://localhost:3007`.  
After starting, you should manually open this URL in browser.

if the port is busy, then change port in the npm script `start-prod` next command `serve -l 3007` on other port.