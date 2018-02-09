import { Character } from './../js/character.js';


describe('Character', function() {

  it('should test if a certain species returns the right stats', function() {
    var character = new Character(2, 2, 2, 2, 2, 2);
   expect(character.brawn).toEqual(2);
   expect(character.agility).toEqual(2);
   expect(character.intelligence).toEqual(2);
   expect(character.cunning).toEqual(2);
   expect(character.willpower).toEqual(2);
   expect(character.precense).toEqual(2);
  });
