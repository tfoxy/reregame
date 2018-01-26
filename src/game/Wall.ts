import Vector from './Vector';

export default class Wall {
  position: Vector = { x: NaN, y: NaN };

  setPosition(position: Vector) {
    this.position = position;
  }
}
