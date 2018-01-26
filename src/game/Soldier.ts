import Vector from './Vector';

export default class Soldier {
  position: Vector = { x: NaN, y: NaN };
  direction: Vector = { x: 0, y: 0 };

  setPosition(position: Vector) {
    this.position = position;
  }

  setDirection(direction: Vector) {
    this.direction = direction;
  }
}
