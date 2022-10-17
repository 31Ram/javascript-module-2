
let writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  },
];

console.log('Lista de Escritores');
writers.forEach((object)=>console.log(`Hi, my name is ${object.firstName} ${object.lastName}. I am ${object.age} years old, and work as a ${object.occupation}.`))

console.log('Escritores Vivos');
writers.forEach((object)=>{ 
  if(object.alive){ 
    return(console.log(`Hi, my name is ${object.firstName} ${object.lastName}. I am ${object.age} years old, and work as a ${object.occupation}.`))
  }
})
