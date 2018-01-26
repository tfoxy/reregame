import Vector from './Vector';

export function sum(v1: Vector, v2: Vector) {
  return { x: v1.x + v2.x, y: v1.y + v2.y };
}

export function equals(v1: Vector, v2: Vector) {
  return v1.x === v2.x && v1.y === v2.y;
}
