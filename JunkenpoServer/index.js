const crypto = require('crypto');
const {v4: uuidv4} = require('uuid');
const http = require('http');
const Junkenpo = require('../Junkenpo').default;

const hostname = '127.0.0.1';
const port = 3000;

// Games are stored in memory for now...
const games = {};

/**
 * @param {String} element
 * @returns {String}
 */
function createGame(element) {
    const uuid = uuidv4();
    const id = crypto.createHash('md5').update(uuid).digest('hex');
    games[id] = new Junkenpo(element);
    return id;
}

/**
 * @param {String} id
 * @param {String} element
 * @returns {String}
 */
function respondToGame(id, element) {
    const game = games[id];
    game.respond(element);
    return game.winner;
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
