class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.quality = quality;           
    }
    
    turnOn() {
        this.quality--;
        this.isOn = true;
        this.price = 800 - (Object.values(this.info)[1] * 2) + (this.quality * 0.5);
    }
    
    turnOff() {
        this.quality--;
        this.isOn = false;
        this.price = 800 - (Object.values(this.info)[1] * 2) + (this.quality * 0.5);
    }
    
    showInfo() {
        return JSON.stringify(this.info);
    }
    
}

let info = {producer: "Dell", age: 2, brand: "XPS"};
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);