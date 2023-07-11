class Hamster{
    constructor(name,owner = ' ',price = 15){

        this.name = name;
        this.owner = owner
        this.price = price

    }
    wheelRun(){
        console.log('squeak squeak')

    }
    eatFood(){
        console.log('nibble nibble')
    }
    getPrice(){
        return this.price
    }

}


const hamster = new Hamster('clarence','jordan')
const guss = new Hamster('guss','Timmy')
hamster.wheelRun()
hamster.eatFood()
console.log(hamster.getPrice())
console.table(hamster)


// Person ====================


class Person{
    constructor(name , age = 0,height = 0,weight= 0,mood = 0 , hamsters= [],bankAccount=0){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamsters;
        this.bankAccount = bankAccount;
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight
    }
    greet(){
        console.log(`${this.name} is realy cool`)
    }
    eat(inc){
        this.weight = this.weight + inc
    }
    exercise(inc){
        this.weight =this.weight - inc
    }
    ageUp(inc){
        this.age = this.age + inc
        this.bankAccount = this.bankAccount + 10
    }
    buyHamster(ham){
        this.hamsters.push(ham)
        this.mood +=10
        this.bankAccount=this.bankAccount-hamster.price

    }
}

const person = new Person('Clarence')
person.buyHamster(hamster)
person.ageUp()
person.exercise()
person.eat()
person.greet()
console.log(person.getWeight())
console.log(person.getAge())
console.log(person.getName())
console.log(person.hamsters)

const timmy = new Person('Timmy', 5)
timmy.buyHamster(guss)
console.table(timmy)
timmy.eat(5)
timmy.exercise(5)
timmy.ageUp(9)
timmy.ageUp(15)
timmy.eat(2)
timmy.exercise(2)
console.table(timmy)



console.log('==============================================')


class Dinner{

    constructor(appetizer, entree,dessert){
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }

}

class Chef{

    getDinner(appetizer,entree,dessert){
        return new Dinner(appetizer,entree,dessert)
    }

}

const chefFactory = new Chef()
console.log(chefFactory.getDinner('food1','food2','food3'))