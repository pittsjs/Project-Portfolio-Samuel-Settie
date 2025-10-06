window.addEventListener("load", addEventListeners);

var smartphoneURL = new URL("http://localhost:8000/smartphones");

function addEventListeners() {
    let viewAllSmartphonesButton = document.getElementById("viewAllSmartphonesButton");
    viewAllSmartphonesButton.addEventListener("click", retrieveAndDisplayAllSmartphones);

    let viewSmartphoneButton = document.getElementById("viewSmartphoneButton");
    viewSmartphoneButton.addEventListener("click", retrieveAndDisplayOneSmartphone);

    let addSmartphoneButton = document.getElementById("addSmartphoneButton");
    addSmartphoneButton.addEventListener("click", addSmartphone);

    let updateSmartphoneButton = document.getElementById("updateSmartphoneButton");
    updateSmartphoneButton.addEventListener("click", updateSmartphone);

    let deleteSmartphoneButton = document.getElementById("deleteSmartphoneButton");
    deleteSmartphoneButton.addEventListener("click", deleteSmartphone);
}

async function retrieveAndDisplayAllSmartphones() {
    // issuing an HTTP Get request to get all smartphones
    let smartphones = await httpGetRequest(smartphoneURL);

    // cleaning up the output display for the new data
    let outputWindow = document.getElementById("responseDisplay");
    outputWindow.innerHTML = "";

    // looping over all the smartphones and creating the necessary HTML elements
    for (let phone of smartphones) {
        let divElement = document.createElement("div");

        let titleElement = document.createElement("h2");
        titleElement.innerText = `${phone.id} - ${phone.brand}`;

        let priceElement = document.createElement("h3");
        priceElement.innerText = `$${phone.price}`;

        divElement.append(titleElement, priceElement);
        outputWindow.append(divElement);
    }
}

async function retrieveAndDisplayOneSmartphone() {
    // issuing an HTTP Get request to get one smartphone
    let smartphoneIdElement = document.getElementById("smartphoneIdTextInput");
    let smartphoneId = smartphoneIdElement.value;

    let phone = await httpGetRequest(`${smartphoneURL}/${smartphoneId}`);

    // cleaning up the output display for the new data
    let outputWindow = document.getElementById("responseDisplay");
    outputWindow.innerHTML = "";

    let divElement = document.createElement("div");

    let titleElement = document.createElement("h2");
    titleElement.innerText = `${phone.id} - ${phone.brand}`;

    let detailsElement = document.createElement("p");
    detailsElement.innerText = `
        Price: $${phone.price}
        Screen Size: ${phone.screenSize}
        Pixels: ${phone.pixels}
        Resolution: ${phone.resolution}
        Storage: ${phone.storage} GB
        RAM: ${phone.ram} GB
        Battery: ${phone.battery} mAh
        Weight: ${phone.weight} oz
    `;

    divElement.append(titleElement, detailsElement);
    outputWindow.append(divElement);

    smartphoneIdElement.value = "";
}

async function addSmartphone() {
    // getting a hold on the smartphone elements from the page
    // condensed this into one step since there are so many fields
    let brand = document.getElementById("addSmartphoneBrand").value;
    let price = document.getElementById("addSmartphonePrice").value;
    let screenSize = document.getElementById("addSmartphoneScreenSize").value;
    let pixels = document.getElementById("addSmartphonePixels").value;
    let resolution = document.getElementById("addSmartphoneResolution").value;
    let storage = document.getElementById("addSmartphoneStorage").value;
    let ram = document.getElementById("addSmartphoneRam").value;
    let battery = document.getElementById("addSmartphoneBattery").value;
    let weight = document.getElementById("addSmartphoneWeight").value;

    // creating a smartphone object
    let newSmartphone = {
        brand,
        price,
        screenSize,
        pixels,
        resolution,
        storage,
        ram,
        battery,
        weight,
    };

    // issuing an HTTP Post Request
    await httpPostRequest(smartphoneURL, newSmartphone);

    // emptying the display area
    document.getElementById("addSmartphoneBrand").value = "";
    document.getElementById("addSmartphonePrice").value = "";
    document.getElementById("addSmartphoneScreenSize").value = "";
    document.getElementById("addSmartphonePixels").value = "";
    document.getElementById("addSmartphoneResolution").value = "";
    document.getElementById("addSmartphoneStorage").value = "";
    document.getElementById("addSmartphoneRam").value = "";
    document.getElementById("addSmartphoneBattery").value = "";
    document.getElementById("addSmartphoneWeight").value = "";
    document.getElementById("responseDisplay").innerHTML = "";
}

async function updateSmartphone() {
    // getting a hold on the smartphone ID and fields to be updated
    let smartphoneIdElement = document.getElementById("updateSmartphoneId");
    let brandElement = document.getElementById("updateSmartphoneBrand");
    let priceElement = document.getElementById("updateSmartphonePrice");
    let screenSizeElement = document.getElementById("updateSmartphoneScreenSize");
    let pixelsElement = document.getElementById("updateSmartphonePixels");
    let resolutionElement = document.getElementById("updateSmartphoneResolution");
    let storageElement = document.getElementById("updateSmartphoneStorage");
    let ramElement = document.getElementById("updateSmartphoneRam");
    let batteryElement = document.getElementById("updateSmartphoneBattery");
    let weightElement = document.getElementById("updateSmartphoneWeight");

    // getting a hold in their values
    let smartphoneId = smartphoneIdElement.value;
    let brand = brandElement.value;
    let price = priceElement.value;
    let screenSize = screenSizeElement.value;
    let pixels = pixelsElement.value;
    let resolution = resolutionElement.value;
    let storage = storageElement.value;
    let ram = ramElement.value;
    let battery = batteryElement.value;
    let weight = weightElement.value;

    // getting a hold on all the fields in the page
    let updateFields = {};
    if (brand !== "") {
        updateFields["brand"] = brand;
    }
    if (price !== "") {
        updateFields["price"] = price;
    }
    if (screenSize !== "") {
        updateFields["screenSize"] = screenSize;
    }
    if (pixels !== "") {
        updateFields["pixels"] = pixels;
    }
    if (resolution !== "") {
        updateFields["resolution"] = resolution;
    }
    if (storage !== "") {
        updateFields["storage"] = storage;
    }
    if (ram !== "") {
        updateFields["ram"] = ram;
    }
    if (battery !== "") {
        updateFields["battery"] = battery;
    }
    if (weight !== "") {
        updateFields["weight"] = weight;
    }
    if (Object.keys(updateFields).length > 0) {
        await httpPatchRequest(`${smartphoneURL}/${smartphoneId}`, updateFields);
    }

    // cleaning up the input fields
    smartphoneIdElement.value = "";
    brandElement.value = "";
    priceElement.value = "";
    screenSizeElement.value = "";
    pixelsElement.value = "";
    resolutionElement.value = "";
    storageElement.value = "";
    ramElement.value = "";
    batteryElement.value = "";
    weightElement.value = "";
    document.getElementById("responseDisplay").innerHTML = "";
}

async function deleteSmartphone() {
    // getting a hold on the smartphone number to be updated
    let smartphoneId = document.getElementById("deleteSmartphoneId").value;

    // issuing a delete request for that given smartphone number
    await httpDeleteRequest(`${smartphoneURL}/${smartphoneId}`);

    // emptying the display area
    document.getElementById("deleteSmartphoneId").value = "";
    document.getElementById("responseDisplay").innerHTML = "";
}

async function httpGetRequest(theUrl) {
    return await fetch(theUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => console.error('Error:', error));
};

async function httpPostRequest(theUrl, newBlog) {
    return await fetch(theUrl, {
        method: 'POST',
        body: JSON.stringify(newBlog),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .catch(error => console.error('Error:', error));
}

async function httpPatchRequest(theUrl, updatedField) {
    return await fetch(theUrl, {
        method: 'PATCH',
        body: JSON.stringify(updatedField),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .catch(error => console.error('Error:', error));
}

async function httpDeleteRequest(theUrl) {
    return await fetch(theUrl, {
        method: 'DELETE'
    })
        .catch(error => console.error('Error:', error));
}
