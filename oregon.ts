(function(){
    
        /*
        * Interfaces
        */
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
        }
    
        //interface describing what attributes and methods a traveler should have
        interface ITraveler {
            food: number;
            name: string;
            isHealthy: boolean;
    
            //when implemented, There should be 50% chance to increase the traveler's food by 100.
            //return the travelers new food value
            hunt(): number;
    
            //when implemented, we should check to see if the traveler has a food supply of 20
            //If they do then we should consume 20 of the available food supply
            //If they don't have 20 food then we should change isHealthy to false
            //return the travelers health after attempting to eat
            eat(): boolean;
    
    
        }
    
        //interface describing what the passenger array should look like

    
        //interface describing attributes and methods a wagon should have
        interface IWagon{
            capacity: number;
            passengerArray: Traveler[];
    
            //when implemented, we should add the traveler to the wagon if the capacity permits
            //this function should return the string "added" on success and "sorry" on failure
            addPassenger(traveler: Traveler): string;
    
            //this should return true if there is at least one unhealthy person in the wagon
            //if everyone is healthy false should be returned
            isQuarantined(): boolean;
    
            //Return the total amount of food among all passengers of the wagon.
            getFood(): number;
    
        }
    
        /*
        * Classes
        */
    
        //The traveler class that implements the ITraveler interface
        //This is currently in violation of its contract with the interface. 
        //Create the code required to satisfy the contract with the interface
        class Traveler implements ITraveler {
            food: number;
            name: string;
            isHealthy: boolean;

            constructor(name: string, food: number = getRandomIntInclusive(1,100), isHealthy: boolean = true){
                this.food = food;
                this.name = name;
                this.isHealthy = isHealthy;
            }

            hunt(){
                let chance = getRandomIntInclusive(1,100);
                if (chance > 50){
                  this.food = this.food + 100;
                }
                return this.food;

            }

            eat(){

                if (this.food < 20){
                    return this.isHealthy = false;
                  } else if (this.food > 0){
                  this.food = this.food - 20;
                  return this.isHealthy = true;
                  }
                  return this.isHealthy;
            }
    
        }
    
        //The wagon class that implements the IWagon interface
        //This is currently in violation of its contract with the interface.
        //Create the code required to satisfy the contract with the interface 
        class Wagon implements IWagon {
            capacity: number;
            passengerArray: Traveler[];

            constructor(capacity: number, passengerArray=[]){
                this.capacity = capacity;
                this.passengerArray = [];
            }

            addPassenger(traveler: Traveler){
                let addMessage = "Added " + traveler + " to wagon.";
                let failMessage = "Not enough room";
                if (this.passengerArray.length < this.capacity){
                    this.passengerArray.push(traveler);
                    return addMessage;
                  } else {
                    return failMessage;
                  }

            }

            isQuarantined(){
                for(let i = 0; i < this.passengerArray.length; i++){
                    if(this.passengerArray[i].isHealthy === false){
                      return true;
                    }
                  } return false;

            }

            getFood(){

                let totalFood = 0;
                for(let i = 0; i < this.passengerArray.length; i++){
                  totalFood = totalFood + this.passengerArray[i].food;
                }
                return totalFood;

            }
    
        }

        console.log("\n");
        console.log("\n");

        console.log("Here are the five travelers: \n");
        //creating 5 travelers
        let Traveler1 = new Traveler("Juan");
        let Traveler2 = new Traveler("Jourdan");
        let Traveler3 = new Traveler("Rudy");
        let Traveler4 = new Traveler("AJ");
        let Traveler5 = new Traveler("Lyndsay");

        console.log(Traveler1);
        console.log(Traveler2);
        console.log(Traveler3);
        console.log(Traveler4);
        console.log(Traveler5);

        console.log("\n");
        console.log("Here's the wagon: \n");

        //creating wagon
        let Wagon1 = new Wagon(4);

        console.log(Wagon1);

        console.log("\n");
        //3 travelers eating and setting health
        console.log(Traveler2.name + " ate and their isHealthy status is: " + Traveler2.eat());
        console.log(Traveler4.name + " ate and their isHealthy status is: " + Traveler2.eat());
        console.log(Traveler5.name + " ate and their isHealthy status is: " + Traveler2.eat());

        // console.log("Here's everyone after eating: \n");

        // console.log(Traveler2);
        // console.log(Traveler4);
        // console.log(Traveler5);

        console.log("Here's everyone after hunting: \n");
        //2 travelers hunting
        console.log(Traveler2.name + " started with " + Traveler2.food + " food. Now has " + Traveler2.hunt() + " food after hunting");
        console.log(Traveler4.name + " started with " + Traveler4.food + " food. Now has " + Traveler4.hunt() + " food after hunting");

        console.log("\n");
        //passenger array
        let wagonPassengers = [Traveler1, Traveler2, Traveler3, Traveler4, Traveler5];
        //lottery to see who gets on the wagon
        wagonPassengers.forEach(traveler => {
            if (getRandomIntInclusive(1,100) > 50){
                Wagon1.addPassenger(traveler)
            }
        });

        console.log("Everyone who got on the wagon: \n");

        console.log(Wagon1);

        console.log("\n");
        //checking quarantined status
        console.log("Is the wagon quarantined? " + Wagon1.isQuarantined());
        //getting total food on wagon
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