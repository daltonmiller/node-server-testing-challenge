const express = require('express');
const CharacterRouter = require('../data/character-router');
const Characters = require('../data/character-model')
const db = require('../data/config');

const server = express();

server.use(express.json())

server.get("/", (req, res) => {
    res.status(200).json({api: "up"})
})

server.get('/characters', (req, res) => {
    Characters.find()
    .then(characters => {
      res.status(200).json(characters);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get characters' });
    });
  });

server.use(express.json());
server.use('/api', CharacterRouter)
module.exports = server;