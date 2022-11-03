<h1 align="center">Happy Landing game</h1>
<h3 align="center">
    <a href="https://slice312.github.io/happy-landing/">Visit the live app</a>
</h3>

# About
Landing page
+ Page adapted to the minimum screen width 320 pixels
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

### Config
+ After launch, a folder with the build will be created and it will contain the file `build/config.json` with a config.
+ It contains some settings for the site, such as the end date of the timer.
+ In order for the changes in the config to take effect, you just need to refresh the page in the browser, **you do not need to rebuild**.

