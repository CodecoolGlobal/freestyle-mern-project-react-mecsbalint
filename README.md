# Car Wars - Browser Card Game

## About the Project

![Car Card Game screenshot][screenshot]

Car Wars is a digital card game where players can enjoy a classic-style card battle experience against an AI opponent. Built using the MERN stack, the app features a clean and user-friendly design, as well as a login/sign-up system.


### Core Features

* **User Authentication:** The application includes user registration and login functionalities to personalize the experience.
* **30 Unique Cards** The application has a pool of 30 unique cards stored in a Mongo Database
* **AI Opponent**
* **Clean Design**
* **Dockerization:** The application is fully containerized using Docker.

### Built with

* [![MongoDB][MongoDB-ico]][MongoDB-url]
* [![Express.js][Expressjs-ico]][Expressjs-url]
* [![React][React-ico]][React-url]
* [![Node.js][Node-ico]][Node-url]
* [![Bootstrap][Bootstrap-ico]][Bootstrap-url]


## Getting Started

#### Download app

You can download the application here: [Car Wars GitHub page](https://github.com/CodecoolGlobal/freestyle-mern-project-react-mecsbalint). Click on the Code button and choose the Download ZIP option. After downloading unzip it.
Or alternatively clone the repository: `git clone https://github.com/CodecoolGlobal/freestyle-mern-project-react-mecsbalint.git`

### With Docker

#### Prerequisites

* **Docker Desktop:** You can download from here: [Docker Desktop][Docker-Desktop]. You have to sign up to use the Docker Desktop app.

#### Set Up and Run
1. **Install and Run Docker Desktop:** Download and run the installation file and follow the steps. After installation run the Docker Desktop application.
2. **Start the Application:** Run the `docker-start.bat` batch file from the application's root folder.
3. **Access the Application:** Open a web browser and go to `http://localhost:517`to access the frontend.
4. **To Stop the application:** Run the `docker-stop.bat` batch file from the application's root folder.

### Manual Setup (Without Docker)
#### Prerequisites

* **Node.js** [Download](https://nodejs.org/en/download)
* **MongoDB Atlas Account** 

#### Installation

1. **Set Up MongoDB Atlas database**
    1. Create a MongoDB Atlas account: [guide](https://www.mongodb.com/docs/atlas/tutorial/create-atlas-account/)
    2. Deploy a free cluster: [guide](https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/)
    3. Configure database users: [guide](https://www.mongodb.com/docs/atlas/security-add-mongodb-users/)
    4. Get connection string: [guide](https://www.mongodb.com/docs/guides/atlas/connection-string/)
    5. Rename the `.env.example` file to `.env` in the `\server` folder
    6. Add the connection string to the `MONGO_URL` variable as value (for example `MONGO_URL=your_api_key_here`)
2. **Install dependencies and Run the Express.js Backend**
    1. Open a terminal and navigate to the `\server` folder
    2. Run the `npm install` command (install dependencies)
    3. Run the `npm run dev` command (populate database and run the backend application)
3. **Install dependencies and Run the React Frontend**
    1. Open a terminal and navigate to the `\client\carCard` folder
    2. Run the `npm install` command (install dependencies)
    3. Run the `npm run dev` command (run the frontend application)
4. **Access the Application**
    1. Open a web browser and go to `http://localhost:517`to access the frontend 


## Contribution
Thanks to all the contributors!  
See [contributors](https://github.com/CodecoolGlobal/freestyle-mern-project-react-mecsbalint/graphs/contributors)


## Contact

mecsbalint@gmail.com - https://github.com/mecsbalint
tothkrisz2000@gmail.com - https://github.com/TothKristof


<!-- Links -->

[Docker-Desktop]: https://www.docker.com/products/docker-desktop/

[screenshot]: readme_resources/screenshot_01.png

[Node-ico]: https://img.shields.io/badge/Node.js-35495E?style=for-the-badge&logo=node.js
[Node-url]: https://nodejs.org/

[React-ico]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react
[React-url]: https://reactjs.org/

[Bootstrap-ico]: https://img.shields.io/badge/Bootstrap-99282A?style=for-the-badge&logo=bootstrap
[Bootstrap-url]: https://getbootstrap.com/

[MongoDB-ico]: https://img.shields.io/badge/MongoDB-49272A?style=for-the-badge&logo=mongodb
[MongoDB-url]: https://www.mongodb.com/

[Expressjs-ico]: https://img.shields.io/badge/Express.js-20532A?style=for-the-badge&logo=express
[Expressjs-url]: https://expressjs.com/
