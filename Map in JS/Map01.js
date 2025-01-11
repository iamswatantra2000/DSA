let map = new Map();

map.set("name", "swatantra gupta");
map.set("age", 23);
map.set("isMarried", false);
map.set("contact", 9084440850);

console.log(map.get("name"));
console.log(map.has("contact"));


map.delete('isMarried');
console.log(map);


for(let [key, value] of map){
    console.log(`key: ${key} and value: ${value}`);
}

