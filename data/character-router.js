const express = require('express')
const knex = require('knex')
const db = require("./config")
const Characters = require('./character-model')

const router = express.Router()




  router.get('/characters/:id', (req, res) => {
    const { id } = req.params;
  
    Characters.findById(id)
    .then(characters => {
      if (characters) {
        res.json(characters);
      } else {
        res.status(404).json({ message: 'Could not find characters with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });


  router.post("/characters", (req, res) => {
    const characterData = req.body

    db("characters")
    .insert(characterData)
    .returning("id")
    .then(ids => {
        res.status(200).json({data: ids})
    })
    .catch(error => {
        res.status(500).json({message: error.message})
    })
})

router.delete("/characters/:id", async (req, res, next) => {
    const {id} = req.params
    const character = await db("characters").where({id}).del()
    res.json(character)
})

  module.exports = router

  