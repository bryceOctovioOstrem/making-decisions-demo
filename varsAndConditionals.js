/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
let konobiAttack = 20;
let anakinAttack = 30;

if(anakinAttack > konobiAttack){
    console.log("Anakin has a better attack than kenobi");
}else if(konobiAttack > anakinAttack){
    console.log("Kenobi has a better attack than Anakin");
}else{
    console.log('Anakin and kenobi have thw same attack');
}
let kenobiHealth = 100;
let kenobiDefence =0;

if(kenobiHealth > anakinAttack){
   kenobiHealth -= anakinAttack;
    console.log(`kenobi's health is now ${kenobiHealth}`);

}else {
    console.log('kenobi was slain');
}