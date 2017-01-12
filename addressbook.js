function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = [];
    }

function Email(adress, type) {
    this.adress = adress;
    
    if(type == "work" || type == "home") {
        this.type = type;
    }
    else {
        this.type = "other";
        }
}

Person.prototype.addEmail = function(adress, type) {
    var newEmail = new Email(adress, type);
    this.emails.push(newEmail);
};

var me = new Person("Ani", "Blahblah");
me.addEmail("ani_mal@yoohoo.com", "home");
me.addEmail("ani_mal@booboo.com", "work");

console.log(me);
  