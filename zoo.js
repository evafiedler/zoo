var animalPopulation = 0;
var allAnimals = [];

function run(){
    var tigger = new Tiger("Tigger");

    var pooh = new Bear("Pooh");

    var piglet = new Pig("Piglet");

    var owl = new Owl("Owl");

    var eeyore = new Donkey("Eeyore");

    listAnimal(tigger);
    listAnimal(pooh);
    listAnimal(piglet);
    listAnimal(owl);
    listAnimal(eeyore);
    console.log(allAnimals);
}

$(document).ready(function(){
    $("#create").click(function (){
        createAnimal($("#name").val());
    });
    $("#feed").click(function(){
        feedAnimal($("#food").val());
    });
    $("#del").click(function(){
        deleteAnimal($("#nameDel").val());
    })
});

function createAnimal(name){
    var animal = "";
    switch($("#ani").val()){
        case "Tiger":
            animal = new Tiger(name);
            console.log("tiger");
            break;
        case "Bear":
            animal = new Bear(name);
            console.log("bear");
            break;
        case "Pig":
            animal = new Pig(name);
            console.log("pig");
            break;
        case "Owl":
            animal = new Owl(name);
            console.log("owl");
            break;
        case "Donkey":
            animal = new Donkey(name);
            console.log("donkey");
    }

    listAnimal(animal);
}

function feedAnimal(food){
    for(var i = 0; i <  allAnimals.length; i++){
        allAnimals[i].eat(food);
    }
}

function listAnimal(animal){
    allAnimals.push(animal);
    console.log(allAnimals);

    $("#listHead").text("Your Animals");
    var name = "";
    var ani = "";
    for(var i = 0; i < allAnimals.length; i++){
        if(allAnimals[i] === animal){
            name = allAnimals[i].name;
            ani = allAnimals[i].constructor.name;
            $("#list").append("<li>" + name + " the " + ani + "</li>");
        }
    }
}

function deleteAnimal(name){
    for(var i = 0; i < allAnimals.length; i++){
        if(allAnimals[i].name === name){
            allAnimals.splice(i, 1);
        }
    }
}

class Animal {
    constructor(name,favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    sleep() {
        $("#actions").append("<div>" + this.name + " sleeps for 8 hours</div>");

    }

    eat(food) {
        $("#actions").append("<div>" + this.name + " eats " + food + "</div>");
        (food === this.favoriteFood) ? $("#actions").append("<div>YUM!!! " + this.name + " wants more " + food + "</div>") : this.sleep();

    }

    static getPopulation(){
        return animalPopulation;
    }
}

class Tiger extends Animal{
    constructor(name) {
        super(name, "Extract of Malt");
    }
}

class Bear extends Animal{
    constructor(name) {
        super(name, "Honey");
    }

    sleep() {
        $("#actions").append("<div>" + this.name + " hibernates for 4 months</div>");
    }
}

class Pig extends Animal{
    constructor(name){
        super(name, "Acorns");
    }

    sleep(){
        $("#actions").append("<div>" + this.name + " sleeps in a beech tree</div>");
    }
}

class Owl extends Animal{
    constructor(name){
        super(name, "Knowledge");
    }

    eat(food){

        (food === this.favoriteFood) ? super.eat("knowledge") : $("#actions").append("<div>" + this.name + " eats " + food + "</div>") +
            $("#actions").append("<div>YUCK!!! " + this.name + " will not eat " + food + "</div>");
    }
}

class Donkey extends Animal{
    constructor(name){
        super(name, "Thistles");
    }

    sleep(){
        console.log(this.name + " never sleeps");
    }

    eat(food){

        (food === this.favoriteFood) ? super.eat("thistles") + this.sleep() : $("#actions").append("<div>" + this.name + " eats " +
            food + "</div>") + $("#actions").append("<div>YUCK!!! " + this.name + " will not eat " + food + "</div>");
    }
}

// class Zookeeper{
//     constructor(name){
//         this.name = name;
//     }
//
//     feedAnimals(food, animals){
//         console.log(this.name + " is feeding " + food + " to " + animals.length + " animals " + animalPopulation + " total animals");
//         for(var i = 0; i < animals.length; i++){
//             animals[i].eat(food);
//         }
//     }
// }