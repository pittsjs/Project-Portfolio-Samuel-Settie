// sjs249, [CS 1520] Midterm Project .js File

// Section 3.1, create car class
class Car {
    constructor(type, colors, description, basePrice, images) {
        this.type = type;
        this.colors = colors;
        this.description = description;
        this.basePrice = basePrice;
        this.images = images;
    }
}

// Section 3.2, create 3 cars
function createCars() {
    // Ferrari
    const ferrari = new Car(
        "Ferrari",
        ["Red", "White", "Yellow"],
        "The Ferrari is a legendary Italian sports car, combining luxury, speed, and cutting-edge engineering. It is a symbol of high performance and exclusivity.",
        250000,
        {
            Red: "images/ferrari-red.jpg",
            White: "images/ferrari-white.jpg",
            Yellow: "images/ferrari-yellow.jpg"
        }
    );

    // Lamborghini
    const lamborghini = new Car(
        "Lamborghini",
        ["Blue", "Green", "Yellow"],
        "The Lamborghini is a luxurious and iconic Italian supercar, recognized worldwide for its aggressive design and unparalleled performance.",
        300000,
        {
            Blue: "images/lamborghini-blue.jpg",
            Green: "images/lamborghini-green.jpg",
            Yellow: "images/lamborghini-yellow.jpg"
        }
    );

    // Mustang
    const mustang = new Car(
        "Mustang",
        ["Black", "Silver", "White"],
        "The Ford Mustang is an American classic, a powerful muscle car with a timeless design and exceptional performance on the road.",
        55000,
        {
            Black: "images/mustang-black.jpg",
            Silver: "images/mustang-silver.jpg",
            White: "images/mustang-white.jpg" // I actually own a white mustang!!! It looks just like this picture :)
        }
    );

    // return the cars in an object for easy access and switching
    return { ferrari, lamborghini, mustang };
}

// helper method for car color dropdown
function updateCarColorDropdown(colors) {
    const carColorDropdown = document.getElementById("carColorList");
    carColorDropdown.innerHTML = ""; // Clear cuurent colors

    // Populate dropdown with current car colors
    colors.forEach(color => {
        const option = document.createElement("option");
        option.value = color.toLowerCase();
        option.textContent = color;
        carColorDropdown.appendChild(option);
    });

    // Select first color listed
    carColorDropdown.value = colors[0].toLowerCase();
}

// helper method for updating car description
function updateCarDescription(car, selectedColor, insuranceType) {
    const carDescription = document.querySelector("#rightSection textarea");

    // Calculate the insurance cost if the 3-year insurance is selected
    const insuranceCost = insuranceType === "3yearInsurance" ? car.basePrice * 0.3 : 0;

    // Update the description text (sorry about the weird formatting here, it was the only way I could get it to look correct on the site)
    carDescription.value = `
  Car: ${car.type}
  
  Description: ${car.description}
  
  Selected Color: ${selectedColor}
  
  Basic Price: $${car.basePrice.toLocaleString()}
  
  Insurance: $${insuranceCost.toLocaleString()} (${insuranceType === "3yearInsurance" ? "3-Year" : "No Insurance"})
    `.trim();
}

// Section 3.4.1, Event listener for Car Type drop-down menu
document.getElementById("carTypeList").addEventListener("change", function () {
    const cars = createCars();

    const selectedCarType = this.value;
    let selectedCar;

    switch (selectedCarType) {
        case "ferrari":
            selectedCar = cars.ferrari;
            break;
        case "lamborghini":
            selectedCar = cars.lamborghini;
            break;
        case "mustang":
            selectedCar = cars.mustang;
            break;
        default:
            console.error("Unknown car type selected");
            return;
    }

    // 1. Reset the car color dropdown menu
    updateCarColorDropdown(selectedCar.colors);

    // 2. Update the car image (this was prettys simple so I did not make a method for it)
    const defaultColor = selectedCar.colors[0];
    const carImage = document.querySelector("#rightSection img");
    carImage.src = selectedCar.images[defaultColor];
    carImage.alt = `${defaultColor} ${selectedCar.type}`;

    // 3. Update the purchase description
    const insuranceType = document.querySelector("input[name='insurancePlan']:checked").value; // Get the SELECTED insurance type 
    updateCarDescription(selectedCar, defaultColor, insuranceType);
});

// Section 3.4.2, Event listener for Car Color drop-down menu
document.getElementById("carColorList").addEventListener("change", function () {
    const cars = createCars();

    const selectedCarType = document.getElementById("carTypeList").value;
    const selectedColor = this.value;

    let selectedCar;
    switch (selectedCarType) {
        case "ferrari":
            selectedCar = cars.ferrari;
            break;
        case "lamborghini":
            selectedCar = cars.lamborghini;
            break;
        case "mustang":
            selectedCar = cars.mustang;
            break;
        default:
            console.error("Unknown car type selected");
            return;
    }

    // 1. Update the car image (once again, this was pretty simple so I did not make a method for it)
    const carImage = document.querySelector("#rightSection img");
    carImage.src = selectedCar.images[selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)];
    carImage.alt = `${selectedColor} ${selectedCar.type}`;

    // 2. Update the purchase description
    const insuranceType = document.querySelector("input[name='insurancePlan']:checked").value; // Get the SELECTED insurance type
    updateCarDescription(selectedCar, selectedColor, insuranceType);
});

// Section 3.4.3, Event listener for No Insurance option
document.getElementById("noInsurance").addEventListener("change", function () {
    if (this.checked) {
        const cars = createCars();

        const selectedCarType = document.getElementById("carTypeList").value;
        const selectedColor = document.getElementById("carColorList").value;

        let selectedCar;
        switch (selectedCarType) {
            case "ferrari":
                selectedCar = cars.ferrari;
                break;
            case "lamborghini":
                selectedCar = cars.lamborghini;
                break;
            case "mustang":
                selectedCar = cars.mustang;
                break;
            default:
                console.error("Unknown car type selected");
                return;
        }

        updateCarDescription(selectedCar, selectedColor, "noInsurance");
    }
});

// Section 3.4.3, Event listener for 3-Year Insurance option
document.getElementById("3yearInsurance").addEventListener("change", function () {
    if (this.checked) {
        const cars = createCars();

        const selectedCarType = document.getElementById("carTypeList").value;
        const selectedColor = document.getElementById("carColorList").value;

        let selectedCar;
        switch (selectedCarType) {
            case "ferrari":
                selectedCar = cars.ferrari;
                break;
            case "lamborghini":
                selectedCar = cars.lamborghini;
                break;
            case "mustang":
                selectedCar = cars.mustang;
                break;
            default:
                console.error("Unknown car type selected");
                return;
        }

        updateCarDescription(selectedCar, selectedColor, "3yearInsurance");
    }
});

// Section 3.3 : set ferrari as the initial car to be displayed
function initializePage() {
    const cars = createCars();

    // get DOM elements
    const carTypeDropdown = document.getElementById("carTypeList");
    const carColorDropdown = document.getElementById("carColorList");
    const carImage = document.querySelector("#rightSection img"); // Image element
    const insurance3Year = document.getElementById("3yearInsurance");

    const ferrari = cars.ferrari;

    // 1. The car type drop-down menu shall be set to Ferrari
    carTypeDropdown.value = "ferrari";

    // 2. The car color drop-down menu shall be set to the Ferrari available colors
    updateCarColorDropdown(ferrari.colors);

    // 3. Set the insurance to the 3-year type
    insurance3Year.checked = true;

    // 4. Update the car image to Red Ferrari
    const defaultColor = ferrari.colors[0]; 
    carImage.src = ferrari.images[defaultColor];
    carImage.alt = `${defaultColor} Ferrari`;

    // 5. Update the purchase description accordingly
    updateCarDescription(ferrari, defaultColor, "3yearInsurance");
}

// when everything is loaded in, itnitalze the page with the red ferrari
document.addEventListener("DOMContentLoaded", initializePage);