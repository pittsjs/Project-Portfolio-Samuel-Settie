// sjs249, lab 5 javaScript
// Car objects project

// required functions 

function createCar(carInfo) {
    // split carInfo string into array
    carInfoArr = carInfo.split(", ");

    let car = {
        brand: carInfoArr[0],
        price: carInfoArr[1],
        engine: createEngine(carInfoArr[2], carInfoArr[3], carInfoArr[4]),
        printInfo: function () {
            console.log(`==== Car Info ====`);
            console.log(`Brand: ${this.brand}`);
            console.log(`Price: ${this.price}`);
            console.log(`Engine Features: Horse Power: ${this.engine.horsePower}, Gears: ${this.engine.numberOfGears}, cc: ${this.engine.cC}`);
        }
    }
    return car;
}

// function that will print the car object features
function displayInfo(car) {
    car.printInfo();
}

function createEngine(horsePower, gears, cc) {
    return {
        horsePower: horsePower + " HP",
        numberOfGears: gears,
        cC: cc + " cc"
    };
}

function createInventory() {
    let carInfoStrings = [
        "Ford, 33000, 35, 6, 2000",
        "Toyota, 23000, 40, 6, 2100",
        "Mitsubishi, 44000, 45, 6, 2200",
        "Nissan, 21000, 37, 6, 2300",
        "GM, 25000, 39, 6, 2400",
        "VW, 42000, 25, 6, 2500"
    ]

    let carList = [];
    for (let currString of carInfoStrings) {
        let newCar = createCar(currString);
        carList.push(newCar);
    }

    return carList;
}

function printInventory(listOfCars) {
    for (let currCar of listOfCars) {
        displayInfo(currCar);
    }
}

function main() {
    let listOfCars = createInventory();
    printInventory(listOfCars);
}