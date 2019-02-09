class Person {
  constructor(name = 'Anonymous',age = 0 ) {
    this.name = name;
    this.age = age;
  }
  getGreetting() {
    return `hi. i am ${this.name} !`;
  }

  getDescription(){
    return `${this.name} is ${this.age} year(s) old.`
  }

}

class Student extends Person {
  constructor(name, age, major){
    super(name,age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()){
      description += `Their major is ${this.major}`;
    }
    return description;
  }


}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name,age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreetting() {
    let description = super.getGreetting();

    if (this.hasHomeLocation()){
      description += `I am visiting my home ${this.homeLocation}`;
    }
    return description;
  }


}

const me = new Traveler('Pantelis Tamtakos', 31,'Thessaloniki');

console.log(me.getGreetting());

const other = new Traveler();

console.log(other.getGreetting());