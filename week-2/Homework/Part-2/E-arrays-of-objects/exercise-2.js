/*

3) Print in the console all the destination names more than 300 kms far away and reachable by train.
*/


let destination1 = {
    destinationName: "Edinburgh",
    distanceKms: 80,
    transportations: ["car", "bus", "train"],
};

let destination2 = {
    destinationName: "London",
    distanceKms: 650,
    transportations: ["car", "bus", "train"],
};

let destination3 = {
    destinationName: "Paris",
    distanceKms: 900,
    transportations: ["train", "plane"],
};

let destination4 = {
    destinationName: "Dublin",
    distanceKms: 350,
    transportations: ["plane", "ferry"],
};

let travelDestinations = [destination1, destination2, destination3, destination4];
let destinationNamesWithin500Kms = travelDestinations.filter((objeto)=>objeto.distanceKms<500).map((objeto)=>objeto.destinationName);
let destinationNameReachableByFerry = travelDestinations.find((objeto)=> objeto.transportations.some((transporte)=>transporte==="ferry")).destinationName;

let destinationNamesMoreThan300KmsAwayByTrain = travelDestinations.filter((objeto)=>objeto.distanceKms>300 && objeto.transportations.some((transporte)=>transporte==="train")).map((objeto)=>objeto.destinationName); 

console.log(`Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`);
console.log(`Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`);
console.log(`Question 3) Expected result: London,Paris, actual result: ${destinationNamesMoreThan300KmsAwayByTrain}`);
 