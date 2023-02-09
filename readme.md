# Job Search Website Application
This is the final project of the course CSC13002 (Introduction to Software Engineering) at VNUHCM - Univeristy of Science.

## Contributors
* Backend Developer: [trislee02](https://github.com/trislee02), [theanhbr01](https://github.com/theanhbr01), [leanhuynh](https://github.com/leanhuynh)
* Frontend Developer: [tranbaoanhh27](https://github.com/tranbaoanhh27), [thehoangcn511](https://github.com/thehoangcn511)

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
- [Bootstrap](https://getbootstrap.com/)  - HTML, CSS Framework
## Installation

* The project requires [Node.js](https://nodejs.org/) v10+ to run. Follow instructions on [NodeJS official website](https://nodejs.org/en/).
* Clone the project:
  ```bash
  git clone https://github.com/tranbaoanhh27/genz-job.git
  ```
* Configure Database connection in ./server/config/config.json
* Install dependencies and run:
  ```bash
  cd genz-job && npm install && cd client && npm install && cd .. && npm start
  ```
## WorkFlow
### _Back-end_
Back-end builds APIs that supports Front-end display UI
![N|Solid](https://i.ibb.co/xLh4Rtf/Backend.png)

## Project Structure

### _/client/src (Front-end)_
- /api: Contains api calling method
    * _AuthHeader.js_ - config file for authenticated request. 
- /common: Including wrapper (HOC) that can use hooks
- /components: Components
- /pages: Specify Page
- /contexts: Contexts
- /hooks: Custom Hooks

### _/server (Back-end)_
- /config: Including server configuration
- /controllers: Controller Layer
    * _controller_name.controller.js_ - controller file name must be followed by the principle
- /middlewares: Global Middleware Layer
    * _middleware_name.middleware.js_ - middleware file name must be followed by the principle
- /models: Model Layer
    * _model_name.model.js_ - model file name must be followed by the principle
- /ultis: Including middleware function for specify controller

## Screenshots
![image](https://user-images.githubusercontent.com/108526097/217748868-c81c44bf-59a2-412b-bc63-91aa7c897dff.png)
![image](https://user-images.githubusercontent.com/108526097/217748972-32bf634e-e0a7-4a7f-b8ba-7b88096236c5.png)
![image](https://user-images.githubusercontent.com/108526097/217826785-69094573-ee90-4c00-8274-7f8ceec07712.png)
