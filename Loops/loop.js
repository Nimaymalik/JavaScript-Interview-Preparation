//forof

const arr=[1,2,3,4,5]

for (const i of arr) {
    console.log(i);
}

const greetings="hello"
for (const element of greetings) {
    console.log(element);
}

const map=new Map();
map.set("a",1);
map.set("b",2)

console.log(map);

const map1 = new Map();//not iterable in javascript
map.set("a", 1);
map.set("b", 2);
for (const key in map) {
  console.log(key);
}
