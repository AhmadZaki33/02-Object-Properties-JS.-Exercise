/* eslint-disable no-unused-vars */

const name = 'Cody';
const loud = 'loud';

let dog = {
    bark () { 
        return 'ruff ruff!'; 
    },
    name,
    [`${loud}Bark`] () {
        return this.bark().toUpperCase();
    },


};


const {bark} = dog;
