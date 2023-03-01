class Person{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
}
  
class Apartment{
    apartmentRoomer = [];
    addRoomer(roomer){
        this.apartmentRoomer.push(roomer);
    }
}
  
class Building{
    constructor(apartmentsMax){
        this.apartments = [];
        this.apartmentsMax = apartmentsMax;
    }
    addApartment(apartament){
        if (this.apartments.length < this.apartmentsMax){
            this.apartments.push(apartament);
        } else {
            console.log(`Максимальна кількість квартир!`);
        }
    }
}
  
const olena = new Person("Olena", "woman");
const veronika = new Person("Veronika", "woman");
const valeriy = new Person("Valeriy", "man");
  
const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();
  
apartment1.addRoomer(olena);
apartment2.addRoomer(veronika);
apartment3.addRoomer(valeriy);

const building = new Building(3);
  
building.addApartment(apartment1);
building.addApartment(apartment2);
building.addApartment(apartment3);
  
console.log(building);