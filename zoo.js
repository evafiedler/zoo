var animalPopulation = 0;
var allAnimals = [];

function run(){
    var tigger = new Trex("Tigger");

    var pooh = new Triceratops("Pooh");

    var piglet = new Velociraptor("Piglet");

    var owl = new Pteradactyl("Pteradactyl");

    var eeyore = new Brontosauras("Eeyore");

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
        case "Trex":
            animal = new Trex(name);
            console.log("trex");
            break;
        case "Triceratops":
            animal = new Triceratops(name);
            console.log("triceratops");
            break;
        case "Velociraptor":
            animal = new Velociraptor(name);
            console.log("velociraptor");
            break;
        case "Pteradactyl":
            animal = new Pteradactyl(name);
            console.log("pteradactyl");
            break;
        case "Brontosauras":
            animal = new Brontosauras(name);
            console.log("brontosauras");
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

    $("#listHead").text("Your Dinosaurs:");
    var name = "";
    var ani = "";
    for(var i = 0; i < allAnimals.length; i++){
        if(allAnimals[i] === animal){
            name = allAnimals[i].name;
            ani = allAnimals[i].constructor.name;
            $("#list").append("<div>" + name + " the " + ani + "</div>");
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

class Trex extends Animal{
    constructor(name) {
        super(name, "Extract of Malt");
    }
}

class Triceratops extends Animal{
    constructor(name) {
        super(name, "Honey");
    }

    sleep() {
        $("#actions").append("<div>" + this.name + " hibernates for 4 months</div>");
    }
}

class Velociraptor extends Animal{
    constructor(name){
        super(name, "Acorns");
    }

    sleep(){
        $("#actions").append("<div>" + this.name + " sleeps in a beech tree</div>");
    }
}

class Pteradactyl extends Animal{
    constructor(name){
        super(name, "Knowledge");
    }

    eat(food){

        (food === this.favoriteFood) ? super.eat("knowledge") : $("#actions").append("<div>" + this.name + " eats " + food + "</div>") +
            $("#actions").append("<div>YUCK!!! " + this.name + " will not eat " + food + "</div>");
    }
}

class Brontosauras extends Animal{
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