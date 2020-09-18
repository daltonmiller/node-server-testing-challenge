
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {name: 'sokka', nation: 'water', ability: 'boomarang'},
        {name: 'aang', nation: 'air', ability: 'air-bending'},
        {name: 'zuko', nation: 'fire', ability: 'fire-bending'}
      ]);
    });
};
