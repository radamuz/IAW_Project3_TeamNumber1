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

* Install all dependencies automatically
```js
npm install
```

## Init
* Run the containers in detached mode
```bash
docker-compose up -d
```

* Stop the containers 
```bash
docker-compose down
```

* Then we will start the server in normal mode:
```js
npm run start
```

* To enter the MongoDB database shell with an interactive terminal:
```js
docker exec -it mongodb mongo -u root -p Alumne1234*
```

* To enter to node container with an interactive terminal:
```js
docker exec -it node bash
```

* To enter to other container with an interactive terminal:
```js
docker exec -it <containerID> bash
```