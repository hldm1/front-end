# front-end-test

- To run the app, you will need, yarn or npm.
* To start the app, execute the following command
<br/>
With npm: npm run server-prod-npm
<br/>
or
<br/>
With yarn: yarn server-prod-yarn

- Then follow the link: http://localhost:8009/

- To use the tests, run the following command: yarn tester (Make sure the server is running)

********************************************************
Libraries:

React: For getting high performance, easy of development and reusability.

React-redux: For managing the state of the app. Being able to handle the gnomes data, the sorting and pagination systems with more ease. This is just a wrapper of redux for being use in react.

webpack: Enables the optimization of the app by making a production ready bundle, it also made the development easier by allowing the adition of sass and aliases that allow to make easier imports without going through the whole path to the desired component. And also allows to make use of babel with more ease.

Babel: Allow the usage of es6+ features, by transpiling them to code that is compatible with older browsers.

Express: Make a web server for serving the production bundle that is built.

Jest: Make unitary testing of the components of the app.

