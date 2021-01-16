# IAW_Project3_TeamNumber1

|            Main information        ||
| :---        |    :----:   | 
| Authors     | Raúl Adamuz   |
|             | Jordi Álvarez |
|             | Carlos Aguilar |
| Email       | <radamuz@cifpfbmoll.eu> |
|             | <jalvarez@cifpfbmoll.eu>|
|             | <caguilar@cifpfbmoll.eu>|
| Title       | Restaurants guide |
| Project num. |    3         |
| Sprint num. |      1        |
| Date        | 16/01/2021    |
| Professional family | Computers and Communications |
| Training Cycle |       CFGS     |
| Course      | 2nd ASIX      |
| Subject     | Web Applications Implementation |
| Teacher     | Miquel Àngel Cabot  |


## Description
We must create a web application of a restaurants guide, with a search engine and restaurants ratings, with Node.js, Express.js and MongoDB technologies, deployed using Docker.

## Requirements
* We need to install docker and docker-compose
```bash
sudo apt install docker docker-compose
```

* We need to install node.js
```bash
sudo apt install node
```

* We need to install NPM (Node Package Manager)
```bash
sudo apt install npm
```

* EASY MODE (install all dependencies automatically)
```js
npm install
```

* To start server.js it is necessary to have installed the express.js module of node.js.
```js
npm install express
```

* To develop the application we will need the nodemon module so that we do not have to restart the server every time we make a change to it
```js
npm install nodemon
```

## Init
* Run the containers in detached mode
```bash
docker-compose up -d
```

* Then we will start the server in normal mode:
```js
npm run start
```

* Or we can choose to start it in developer mode so that it updates with each change we make to the code:
```js
npm run dev
```

* Stop the containers 
```bash
docker-compose down
```