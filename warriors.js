/*
 Create a constructor function called `Warrior` that can create 
 new warriors. This function will take parameters `name`, and 
 `gender`. `name` can be any string, `gender` can be `M` or `F`. 
 It should create a warrior that has these properties:
 */
 
 function Warrior (name,gender) {
     this.name = name;
     this.gender = gender;
     this.level = 1;
     this.weapon = "wooden sword";
     this.power = Math.floor(Math.random() * 100);
     this.fight = function () {
         var sex = "her";
         if(this.gender === "M") {
             var sex = "his";
         }
        console.log(this.name + " rushes to the arena with " + sex + ' ' + this.weapon + ".");
     };
     this.faceoff = function(opponent) {
         if(this.power > opponent.power) {
         console.log (this.name + " destroys " + opponent.name + " with a " + 
         this.weapon + " and is the winner!");
     } else {
         console.log(opponent.name + " impales " + this.name + " with a " + 
         this.weapon + " and is the winner!");
     }
     };
     
 }
  //Finally, create a bunch of warriors and make them fight together
 var warrior1 = new Warrior("Ani", "F");
 var warrior2 = new Warrior("Dave", "M");
 var warrior3 = new Warrior("Steve", "M");
 
 warrior1.fight();
 warrior1.faceoff(warrior2);
 
 warrior2.fight();
 warrior2.faceoff(warrior3);
 