# Stekjesruil App backend :seedling:

More explanation about the project is available in the [frontend repository](https://github.com/rickhekman/stekjesruil-frontend)

### Installation

Download or clone the repository:
```sh
$ git clone git@github.com:rickhekman/stekjesruil-backend.git
```

Create and start a (Docker) container to run the database locally: 
```sh
$ docker start nameofyourcontainer
```

Install the dependencies and devDependencies and start the server and connect to the database:
```sh
cd into the backend directory
$ npm install
$ node index.js
or when you use nodemon:
$ nodemon
```

### Getting Started
Download or clone the [frontend repository](https://github.com/rickhekman/stekjesruil-frontend) and follow the enclosed instructions in the readme.

## Built With

* [Express](https://expressjs.com/) - Node.js web application framework
* [Sequelize](https://sequelize.org/) - Sequelize ORM is a promise-based Node.js ORM for Postgres
* [PostgreSQL](https://www.postgresql.org/) - PostgreSQL is a powerful, open source object-relational database system.
* [Bcrypt](https://www.npmjs.com/package/bcrypt) - A library to help you hash passwords.
* [JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519) - A compact, URL-safe means of representing
   claims to be transferred between two parties.
* [Cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
* [Body parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware.
* [Docker](https://www.docker.com/) - Service for finding and sharing container images with your team and the Docker community

#### This is version 0.1.0  

License
----
[Beerware](https://en.wikipedia.org/wiki/Beerware)

## Acknowledgements

* Hat tip to anyone whose code was used.
* And to all the teachers from [Codaisseur Code Academy](https://codaisseur.com/) who guided me to become a better developer. :heart: