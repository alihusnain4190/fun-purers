function getLastItem(array) {
  const newArr = [...array];
  return newArr.pop();
}

function removeItem(array, index) {
  // array.slice(index, 1);
  // return array;
  const newArr = array.filter((letter, ind) => {
    if (ind !== index) return letter;
  });
  return newArr;
}

function switchKey(obj, oldKey, newKey) {
  let newObj = { ...obj };
  newObj[newKey] = newObj[oldKey];
  delete newObj[oldKey];
  return newObj;
  // return {};
}

function joinArrays(arr1 = [], arr2 = []) {
  if (!arr2) return arr1;
  // arr1.push(...arr2);
  // return arr1;

  const newArr = [...arr1, ...arr2];
  return newArr;
}

function addItem(array, item) {
  if (!item) return array;

  let newArr = [...array,item];
  // newArr.push(item);
  return newArr;
}

function removeAges(people) {
  let newArr = people.map(person => {
    let newArrs = {...person};
    delete newArrs.age;
    return newArrs;
 })
  return newArr;
}

module.exports = {
  getLastItem,
  removeItem,
  switchKey,
  joinArrays,
  addItem,
  removeAges,
};
