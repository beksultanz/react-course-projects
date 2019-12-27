var nameVar = "Beksultan";
var nameVar = "Ali";
console.log("nameVar", nameVar);



let nameLet = "Jet"
nameLet = "Julie"
console.log("nameLet", nameLet) 

const nameConst = "Frank" 
console.log('nameConst', nameConst)

function getPetName() {
    var petName = "Hal"; 
    return petName
}

const petName = getPetName()
console.log(petName) 


// Block scoping 

const fullName = "Ali Sultan"; 
let firstName
if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName)
}

console.log(firstName)