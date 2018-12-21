var animalPopulation = 0;
var allAnimals = [];

function run(){
    var tigger = new Tyrannosaurus("Tigger");

    var pooh = new Triceratops("Pooh");

    var piglet = new Stegosaurus("Piglet");

    var pterry = new Pteradactyl("Pterry");

    var eeyore = new Brontosauras("Eeyore");

    listAnimal(tigger);
    listAnimal(pooh);
    listAnimal(piglet);
    listAnimal(pterry);
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
    });
    $("#change").click(function(){
        changeName($("#oldName").val(),$("#newName").val());
    });
});

function createAnimal(name){
    var animal = "";
    switch($("#ani").val()){
        case "Tyrannosaurus":
            animal = new Tyrannosaurus(name);
            break;
        case "Triceratops":
            animal = new Triceratops(name);
            console.log("triceratops");
            break;
        case "Stegosaurus":
            animal = new Stegosaurus(name);
            console.log("stegosaurus");
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
    $("#actions").html("<div>" + name + " the " + animal.constructor.name + " was created</div>");
}

function feedAnimal(food){
    $("#actions").html("");
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
            $("#list").append("<div class=" + name + ">" + name + " the " + ani + "</div>");
        }
    }
}

function deleteAnimal(name){
    for(var i = 0; i < allAnimals.length; i++){
        if(allAnimals[i].name === name){
            $("#actions").html("<div>" + name + " the " + allAnimals[i].constructor.name  + " was deleted</div>");
            allAnimals.splice(i, 1);
        }
    }
    $("." + name).hide();

}

function changeName(oldName, newName){
    for(var i = 0; i < allAnimals.length; i++){
        if(oldName === allAnimals[i].name){
            allAnimals[i].name = newName;
            $("." + oldName).html("<div class=" + newName + ">" + newName + " the " + allAnimals[i].constructor.name + "</div>");
        }
    }
    //listAnimal(newName);
    $("#actions").html("<div>" + oldName + "'s name is now " + newName);

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
}

class Tyrannosaurus extends Animal{
    constructor(name) {
        super(name, "Cheese");
    }
}

class Triceratops extends Animal{
    constructor(name) {
        super(name, "Squash");
    }

    sleep() {
        $("#actions").append("<div>" + this.name + " hibernates for 4 months</div>");
    }
}

class Stegosaurus extends Animal{
    constructor(name){
        super(name, "Pasta");
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
        super(name, "Figs");
    }

    sleep(){
        console.log(this.name + " never sleeps");
    }

    eat(food){

        (food === this.favoriteFood) ? super.eat("thistles") + this.sleep() : $("#actions").append("<div>" + this.name + " eats " +
            food + "</div>") + $("#actions").append("<div>YUCK!!! " + this.name + " will not eat " + food + "</div>");
    }
}