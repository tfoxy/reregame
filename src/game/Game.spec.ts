import { expect } from 'chai';
import Game from './Game';
import Soldier from './Soldier';
import Wall from './Wall';

describe('Game', () => {
  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  describe('#advanceTurn', () => {
    it('should move a soldier that is moving', () => {
      const game = new Game();
      const soldier = new Soldier();
      soldier.setPosition({ x: 0, y: 0 });
      soldier.setDirection({ x: 1, y: 0 });
      game.addSoldier(soldier);
      game.advanceTurn();
      expect(soldier.position.x).to.be.greaterThan(0);
    });

    it('should not move soldier where there is a wall', () => {
      const game = new Game();
      const soldier = new Soldier();
      const wall = new Wall();
      soldier.setPosition({ x: 0, y: 0 });
      soldier.setDirection({ x: 1, y: 0 });
      wall.setPosition({ x: 1, y: 0 });
      game.addSoldier(soldier);
      game.addWall(wall);
      game.advanceTurn();
      expect(soldier.position.x).to.be.equal(0);
    });
  });
});
