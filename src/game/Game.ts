import Soldier from './Soldier';
import * as Vectors from './Vectors';
import Wall from './Wall';

export default class Game {
  soldiers: Soldier[] = [];
  walls: Wall[] = [];

  advanceTurn() {
    this.soldiers.forEach((soldier) => {
      const newPosition = Vectors.sum(soldier.position, soldier.direction);
      const collision = this.walls.some((wall) => {
        return Vectors.equals(wall.position, newPosition);
      });
      if (!collision) {
        soldier.setPosition(newPosition);
      }
    });
  }

  addSoldier(soldier: Soldier) {
    this.soldiers.push(soldier);
  }

  addWall(wall: Wall) {
    this.walls.push(wall);
  }
}
