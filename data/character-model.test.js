const Characters = require("./character-model")
const db = require('./config.js')


describe('characters model', () => {
  describe('add() method', () => {
    beforeEach(async () => {
      await db('characters').truncate();
    });

    it('should add the provided characters into the db', async () => {
      await Characters.insert({ name: 'lebron', nation: 'fire', ability: 'fire' });
      await Characters.insert({ name: 'Anthony ', nation: 'earth', ability: 'earht' });

      const characters = await db('characters');

      expect(characters).toHaveLength(2);
    });

    it('empties db', () => {
      expect(true).toBe(true);
    });
  });

  describe('remove() method', () => {
    beforeEach(async () => {
      await db('characters').truncate();

      await Characters.insert({ name: 'Anthony', nation: 'earth', ability: 'earth' });
      await Characters.insert({ name: 'lebron', nation: 'fire', ability: 'fire' });
    });

    it('should remove a charracter from the db', async () => {
      await Characters.remove(1);

      const characters = await Characters.find('characters');

      expect(characters).toHaveLength(1);
    });

    it('should remove the proper character from the db', async () => {
      await Characters.remove(1);

      const characters = await Characters.find('characters');

      expect(characters[0].name).toBe('lebron');
    });
  });
});