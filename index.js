'use strict';

function deepSet(obj, property, value) {
  const visited = new Map();
  return iterate(obj, property, value, visited)
}

function iterate(obj, property, value, visited) {
  if (obj == null) {
    return obj;
  }

  if (visited.get(obj) != null) {
    return visited.get(obj);
  }

  const result = { ...obj };

  if (property in result) {
    result[property] = value;
  }

  visited.set(obj, result);

  iterateNested(result, property, value, visited);

  return result;
}

function iterateNested(obj, property, value, visited) {
  const objKeys = Object.keys(obj).filter(k => k != property)
  objKeys.forEach( key => {
    const current = obj[key];
    if (typeof current === 'object') {
      obj[key] = iterate(current, property, value, visited);
    }
    if (Array.isArray(current)) {
      obj[key] = current.map(otherObj => {
        if (typeof otherObj === 'object') {
          return iterate(otherObj, property, value, visited);
        }
        return otherObj;
      });
    }
  });
}

module.exports.deepSet = deepSet
