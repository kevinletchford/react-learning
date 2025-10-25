// checks 2 objects length, loop through all the keys and check if the string values match 

export type GenericObject = Record<string, unknown>;

export function isShallowEqual(object1:GenericObject, object2:GenericObject): boolean{
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}