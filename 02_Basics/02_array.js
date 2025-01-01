const marvel_heros=["thor","Ironman","Spinderman"]
const dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //to extarct single value from second values


// const newarr=marvel_heros.concat(dc_heros)
// console.log(newarr);

const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);


