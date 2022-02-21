const character = {name: "Goku", species: "Saiyan", age: 44, color: "Orange"}

const map1 = new Map();

map1.set('a', 1)
map1.set('b', 2)
map1.set('c', 3)
map1.set(34, 44)
map1.set(true, "Allo")
map1.set(character, "whoa")
map1.set("test", character)

console.log(map1.get('a'))

console.log(character)
console.log(map1.get(character))
map1.set('a', 97);
console.log(map1.get("test"))

console.log(map1.get('a'))

console.log(map1.size)

map1.delete("test")

console.log(map1.size)

console.log(map1.get("test"))
/* 

maps are better for: 

keep order of insertions of key/values pairs
frequent additional and removal
key which is not a string/symbol like a function or object

*/