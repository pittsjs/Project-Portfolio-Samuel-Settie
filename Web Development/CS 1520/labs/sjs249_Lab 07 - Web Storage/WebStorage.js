window.addEventListener("load", setup);

function setup() {
    createDOMReferences();
    addDOMEventListeners();
}

// one way to define a JavaScript function
function createDOMReferences() {
    // reference for the view contents of the local storage
    viewContentsButton = document.getElementById("viewContentsOfLocalStorageButton");

    // references for the Input fieldset
    insertKeyTextInputField = document.getElementById("insertKeyTextInputField");
    inserValueTextInputField = document.getElementById("insertValueTextInputField");
    insertItemIntoLocalStorageButton = document.getElementById("insertItemIntoLocalStorageButton");

    // references for the Delete fieldset
    deleteKeyTextInputField = document.getElementById("deleteKeyTextInputField");
    deleteItemButton = document.getElementById("deleteItemButton");
    clearStorageButton = document.getElementById("clearStorageButton");

    // reference for the Web Storage display fieldset
    outputListArea = document.getElementById("outputListArea");
}

// another way to define a JavaScript function: using fat arrow
function addDOMEventListeners() {
    viewContentsButton.addEventListener("click", viewAllEntriesFunction);
    insertItemIntoLocalStorageButton.addEventListener("click", insertItemFunction);
    deleteItemButton.addEventListener("click", deleteItemFunction);
    clearStorageButton.addEventListener("click", clearStorageFunction);
}

// 2nd step, listing the data saved in local storage
function viewAllEntriesFunction() {
    
    // loop through all the items in local storage
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i); // Get the key
        let value = localStorage.getItem(key); // Get the value for the key
    
        // Append the key-value pair to the output area
        outputListArea.innerHTML += `Key: ${key} - Value: ${value}<br>`;
    }

}

function insertItemFunction() {
    // 1st thing to do, adding data into local storage
    localStorage.setItem(insertKeyTextInputField.value, inserValueTextInputField.value);

    insertKeyTextInputField.value = ""; // Clear the key input field
    inserValueTextInputField.value = ""; // Clear the value input field
}

function deleteItemFunction() {
    // step 3, delete an item from local storage
    localStorage.removeItem(deleteKeyTextInputField.value);
    
    deleteKeyTextInputField.value = ""; // Clear the delete key input field
}

function clearStorageFunction() {
    localStorage.clear();
}