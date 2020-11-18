function objectHasProperty(object, property) {
  if (Object.keys(object).includes(property)) {
    return true;
  } else {
    return false;
  }
}

let obj = { enabled: false, foo: undefined };
console.log(objectHasProperty(obj, 'active'));   // returns false
console.log(objectHasProperty(obj, 'enabled'));  // returns true
console.log(objectHasProperty(obj, 'foo'));      // returns false, should be true