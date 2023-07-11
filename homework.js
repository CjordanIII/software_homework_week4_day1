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


const hamster = new Hamster('clarence')
hamster.wheelRun()
hamster.eatFood()
console.log(hamster.getPrice())
console.table(hamster)