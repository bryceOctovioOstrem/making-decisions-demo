/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = []
backpack.push("lightsaber")
backpack.push("robe", "food")

//console.log(backpack)

let belt = backpack.shift()

backpack.splice(1,0, "coat")

let bag = []

bag.unshift("flint", "blankey", "tooth brush")

backpack.push(bag.slice(0,3))
console.log(bag)
console.log(backpack.length)
console.log(belt)

for (let i =0; i < bag.length; i++){
    console.log(bag[i])
}
for (let i =0; i < 3; i++){
    console.log(bag[i])
}
 