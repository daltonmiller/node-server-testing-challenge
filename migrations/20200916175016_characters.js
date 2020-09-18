exports.up = function(knex) {
    return knex.schema 
    .createTable('characters', tbl => {
        tbl.increments();
        tbl.string("name", 128).notNullable().unique().index();
        tbl.string("nation", 256).notNullable();
        tbl.string("ability", 128).notNullable()
       
    })

};

exports.down = function(knex) {
    return knex.schema 
    .dropTableIfExists("characters");
};