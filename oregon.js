(function () {
    /*
    * Interfaces
    */
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }
    /*
    * Classes
    */
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = /** @class */ (function () {
        function Traveler(name, food, isHealthy) {
            if (food === void 0) { food = getRandomIntInclusive(1, 100); }
            if (isHealthy === void 0) { isHealthy = true; }
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
        }
        Traveler.prototype.hunt = function () {
            var chance = getRandomIntInclusive(1, 100);
            if (chance > 50) {
                this.food = this.food + 100;
            }
            return this.food;
        };
        Traveler.prototype.eat = function () {
            if (this.food < 20) {
                return this.isHealthy = false;
            }
            else if (this.food > 0) {
                this.food = this.food - 20;
                return this.isHealthy = true;
            }
            return this.isHealthy;
        };
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = /** @class */ (function () {
        function Wagon(capacity, passengerArray) {
            if (passengerArray === void 0) { passengerArray = []; }
            this.capacity = capacity;
            this.passengerArray = [];
        }
        Wagon.prototype.addPassenger = function (traveler) {
            var addMessage = "Added " + traveler + " to wagon.";
            var failMessage = "Not enough room";
            if (this.passengerArray.length < this.capacity) {
                this.passengerArray.push(traveler);
                return addMessage;
            }
            else {
                return failMessage;
            }
        };
        Wagon.prototype.isQuarantined = function () {
            for (var i = 0; i < this.passengerArray.length; i++) {
                if (this.passengerArray[i].isHealthy === false) {
                    return true;
                }
            }
            return false;
        };
        Wagon.prototype.getFood = function () {
            var totalFood = 0;
            for (var i = 0; i < this.passengerArray.length; i++) {
                totalFood = totalFood + this.passengerArray[i].food;
            }
            return totalFood;
        };
        return Wagon;
    }());
    console.log("\n");
    console.log("\n");
    console.log("Here are the five travelers: \n");
    //creating 5 travelers
    var Traveler1 = new Traveler("Juan");
    var Traveler2 = new Traveler("Jourdan");
    var Traveler3 = new Traveler("Rudy");
    var Traveler4 = new Traveler("AJ");
    var Traveler5 = new Traveler("Lyndsay");
    console.log(Traveler1);
    console.log(Traveler2);
    console.log(Traveler3);
    console.log(Traveler4);
    console.log(Traveler5);
    console.log("\n");
    console.log("Here's the wagon: \n");
    //creating wagon
    var Wagon1 = new Wagon(4);
    console.log(Wagon1);
    console.log("\n");
    //3 travelers eating and setting health
    Traveler2.eat();
    Traveler4.eat();
    Traveler5.eat();
    console.log("Here's everyone after eating: \n");
    console.log(Traveler2);
    console.log(Traveler4);
    console.log(Traveler5);
    console.log("Here's everyone after hunting: \n");
    //2 travelers hunting
    Traveler2.hunt();
    Traveler4.hunt();
    console.log("\n");
    console.log(Traveler2);
    console.log(Traveler4);
    console.log("\n");
    //passenger array
    var wagonPassengers = [Traveler1, Traveler2, Traveler3, Traveler4, Traveler5];
    //lottery to see who gets on the wagon
    wagonPassengers.forEach(function (traveler) {
        if (getRandomIntInclusive(1, 100) > 50) {
            Wagon1.addPassenger(traveler);
        }
    });
    console.log("Everyone who got on the wagon: \n");
    console.log(Wagon1);
    console.log("\n");
    //checking quarantined status
    Wagon1.isQuarantined();
    console.log("Is the wagon quarantined? " + Wagon1.isQuarantined());
    //getting total food on wagon
    Wagon1.getFood();
    console.log("Total food from the wagon: " + Wagon1.getFood());
    console.log("\n");
    console.log("\n");
    /*
    * Play the game
    *
    * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    *
    * Create wagon with an empty passenger list and a capacity of 4.
    *
    * Make 3 of 5 the travelers eat by calling their eat methods
    *
    * Make the remaining 2 travelers hunt
    *
    * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    * of attempting to be being added to the wagon using the wagons addPassenger method.
    *
    * Run the isQuarantined method for the wagon
    *
    * Run the getFood method for the wagon
    *
    * the return values of all the methods should be displayed in the console using console.log()
    * the console.log statements should not live inside any methods on the objects
    *
    */
})();
