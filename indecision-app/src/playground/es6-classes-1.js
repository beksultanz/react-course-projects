    class Person {
        constructor(name = "Anonymous", age = 0) {
            this.name = name 
            this.age = age 
        }
        getGreeting() {
            return `Hi. I am ${this.name}`
        }
        getDescription() {
            return `${this.name} is ${this.age} years old.` 
        }
    }

    class Student extends Person {
        constructor(name, age, major) {
            super(name, age)
            this.major = major
        }
        hasMajor() {
            return !!this.major
        }
        getDescription() {
            let description = super.getDescription()

if (this.hasMajor()) {
    description += ` Their major is ${this.major}.`
}
            return description
        }
    }

    class Traveler extends Person {
        constructor(name, age, location) {
            super(name, age)
            this.location = location
        }
        homeLocation() {
            return !!this.location
        }
       getGreeting() {
           let greeting = super.getGreeting()
           if (this.homeLocation()) {
               greeting += ` from ${this.location}`
           }
           return greeting
       }
    }

    const me = new Traveler("Bek Sultan", 25, "Bishkek"); 
    console.log(me.getGreeting())

    const otherStudent = new Traveler("Ali Ramazon", 29)
    console.log(otherStudent.getGreeting())


 