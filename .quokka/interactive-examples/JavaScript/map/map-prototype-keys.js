var map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

var iterator1 = map1.keys();

console.log(iterator1.next().value);
// expected output: "0"

console.log(iterator1.next().value);
// expected output: 1