class Animal {
  constructor(name) {
    this.name = name;
  }

  talk() {
    console.log(`hi, Im a ${this.name}`);
  }
}

const myAnimal = new Animal("rover");

class Sheep extends Animal {
    constructor(name) {
        super(name)
    }
    talk() {
        console.log(`I am a sheep baaa`)
    }

    fly() {
        console.log('i cannot fly')
    }
}

class Duck extends Animal {
    constructor(name) {
        super(name)
    }
    talk() {
        console.log(`I am a duck quack`);

    }
    fly() {
        console.log('I am flying')
    }
}

class RubberDucky extends Duck() {
    constructor(name) {
        super(name)
    }
    fly() {
        console.log('i cannot fly')
    }
}

const duckie = new Duck('Donald')
const sheepie= new Sheep('black sheep')
const RubberDucky = new Duck('rubber duckie')

duckie.talk()
sheepie.talk()
duckie.fly()
sheepie.fly()
RubberDucky.talk()
RubberDucky.fly()