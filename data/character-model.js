const db = require('./config.js')

module.exports = {
    find,
    findById,
    remove,
    insert
}

function find() {
    return db("characters");
}

function findById(id) {
    return db("characters")
    .where({ id })
    .first()
}

// function remove(id) {
//     return db('characters').where('id', id).del();
//   }

function remove(id) {
    return db('characters').where({ id }).del();	
  }	
  async function insert(characters) {
    return db("characters").insert(characters, "id");
  }
