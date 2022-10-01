# Job Search Website Application

## Tech
The project uses a number of open source projects to work properly:
- [NodeJs](https://nodejs.org/) - Evented I/O for the backend.
- [ExpressJs](https://expressjs.com/) - Fast node.js network app framework.
- [ReactJs](https://reactjs.org/) - Front-end Framework.
- [axios](https://axios-http.com/) - A simple promise based HTTP client for the browser and node.js.
- [cors](https://github.com/expressjs/cors) - Allow Cross-Origin requests.
- [helmet](https://helmetjs.github.io/) - Secure Express apps by setting various HTTP headers.
- [morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware for node.js.
- [sequelize](https://sequelize.org/) - A modern TypeScript and Node.js ORM
-
## Installation

The project requires [Node.js](https://nodejs.org/) v10+ to run.

```
npm start
```
## WorkFlow
### _Back-end_
Back-end builds APIs that supports Front-end display UI
![N|Solid](https://i.ibb.co/fYw6X6j/Backend.png)

## Project Structure

### _/server (Back-end)_
- /config: Including server configuration
- /controllers: Controller Layer
    * _controller_name.controller.js_ - controller file name must be followed by the principle
- /middlewares: Middleware Layer
    * _middleware_name.middleware.js_ - middleware file name must be followed by the principle
- /models: Model Layer
    * _model_name.model.js_ - model file name must be followed by the principle
- /ultis: Including function helper
