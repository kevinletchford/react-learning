// checks if the value is a plain object we check the prototype to string is equal to object object

import type { GenericObject } from "./isShallowEqual";

export function isPlainObject(value:GenericObject) {
  return Object.prototype.toString.call(value) === "[object Object]";
}