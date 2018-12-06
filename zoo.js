var animalPopulation = 0;

function run(){
    var tigger = new Tiger("Tigger");
    // tigger.eat("extract of malt");
    // tigger.eat("kibble");
    //
    var pooh = new Bear("Pooh");
    // pooh.eat("honey");
    // pooh.eat("meat");
    //
    var piglet = new Pig("Piglet");
    // piglet.eat("acorns");
    // piglet.eat("slop");
    //
    var owl = new Owl("Owl");
    // owl.eat("knowledge");
    // owl.eat("apple");
    //
    var eeyore = new Donkey("Eeyore");
    // eeyore.eat("thistles");
    // eeyore.eat("carrot");

    var chrisRobin = new Zookeeper("Christopher Robin");
    var animalsToFeed = [tigger,pooh,piglet,owl,eeyore];
    chrisRobin.feedAnimals("sushi",animalsToFeed);

    console.log(Animal.getPopulation());

}

class Animal {
    constructor(name,favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");

    }

    eat(food) {
        console.log(this.name + " eats " + food);
        (food === this.favoriteFood) ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();

    }

    static getPopulation(){
        return animalPopulation;
    }
}

class Tiger extends Animal{
    constructor(name) {
        super(name, "extract of malt");
    }
}

class Bear extends Animal{
    constructor(name) {
        super(name, "honey");
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }
}

class Pig extends Animal{
    constructor(name){
        super(name, "acorns");
    }

    sleep(){
        console.log(this.name + " sleeps in a beech tree");
    }
}

class Owl extends Animal{
    constructor(name){
        super(name, "knowledge");
    }

    eat(food){

        (food === this.favoriteFood) ? super.eat("knowledge") : console.log(this.name + " eats " + food) + console.log("YUCK!!! " + this.name + " will not eat " + food);
    }
}

class Donkey extends Animal{
    constructor(name){
        super(name, "thistles");
    }

    sleep(){
        console.log(this.name + " never sleeps");
    }

    eat(food){

        (food === this.favoriteFood) ? super.eat("thistles") + this.sleep() : console.log(this.name + " eats " + food) + console.log("YUCK!!! " + this.name + " will not eat " + food);
    }
}

class Zookeeper{
    constructor(name){
        this.name = name;
    }

    feedAnimals(food, animals){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " animals " + animalPopulation + " total animals");
        for(var i = 0; i < animals.length; i++){
            animals[i].eat(food);
        }
    }
}
/*class Shape {

    constructor(name) {
        this.name = name;
        this.special = true;
    }

    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }

    sayHistory() {
        console.log("Shapes have a wonderful history.");
    }
}


class Polygon extends Shape{

    constructor(height, width) {
        super('Polygon');
        this.height = height;
        this.width = width;
    }

    //method #2
    sayHistory() {
        console.log('"Polygon" is derived from the Greek polus (many) and gonia (angle).');
    }

}*/