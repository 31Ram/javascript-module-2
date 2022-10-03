
let dog = {
    name: 'Billy',
    wantsToPlay: false
};

dog['name']= "Rex";
dog['wantsToPlay']= true;

console.log(dog.name);
console.log(dog.wantsToPlay);

// it should output:
// Rex
// true