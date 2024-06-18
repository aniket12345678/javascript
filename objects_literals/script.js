let car = {};


const carWork = () => {
    console.log("this is a car function");
}
console.log(car);
// car['Name'] = "Nissan";
// car['Topspeed'] = 140;
// car['Driver'] = "Anonymous";
// car['work'] = carWork




function generalCar(givenName, givenTopspeed, givenDriver) {
    this.name = givenName;
    this.Topspeed = givenTopspeed;
    this.Driver = givenDriver;
    this.work = function () {
        console.log(`${givenName} is running perfectly fine`);
    }
}

let output = new generalCar("TATA",89,"Aniket");

console.log(output);