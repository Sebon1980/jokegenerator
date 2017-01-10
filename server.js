'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});


server.route({
    method: 'GET',
    path: '/',
    handler: require('./handler/WelcomeHandler')
});

server.route({
    method: 'GET',
    path: '/joke',
    handler: require('./handler/getCategoriesHandler')
});


server.route({
    method: 'GET',
    path: '/joke/{category}',
    handler: require('./handler/getJokesByCat')
});


server.route({
    method: 'GET',
    path: '/joke/random',
    handler: require('./handler/getRandomJoke')
});