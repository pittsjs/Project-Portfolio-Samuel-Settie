window.addEventListener("load", main_driver);
// ^^^ when window is FULLY LOADED, run the main driver
// video 11, event listeners

function block1() {
    console.log("Block #1: Retrieving the whole DOM tree");
    const dom = document;
    console.log(dom);
}

function block2() {
    console.log("Block #2: getting the DOM children in an array format");
    const body_children = document.body.children;
    console.log(body_children);

    var arr = Array.from(body_children);
    console.log(arr);
    arr.map( child => console.log(child));
}

function block3() {
    console.log("Block #3: getting all the H3 elements");
    let h3Elements = document.getElementsByTagName("h3");
    for (item of h3Elements) {
        console.log(item);
    }
}

function block4() {
    console.log("Block #4: getting a given element by its ID");
    let elementByItsID = document.getElementById("page_title");
    console.log(elementByItsID);
}

function block5() {
    console.log("Block #5: getting html elements by their classes");
    let uls_from_navbar = document.getElementsByClassName("ul_navigation_bar");
    for (item of uls_from_navbar) {
        console.log(item);
    }
}

function block6() {
    console.log("Block #6: playing with inner text of a given HTML tag");
    // getting all the H3 elements
    let h3Elements = document.getElementsByTagName("h3");
    for (item of h3Elements) {
        console.log("original text: " + item.innerText);
        item.innerText = "banana";
    }
}

function block7() {
    console.log("Block #7: adding html tags in the item text");
    let elementByItsID = document.getElementById("pasta_id");
    elementByItsID.innerText = "<h1> Apple </h1>";
    // elementByItsID.innerHTML = "<h1> Apple </h1>";
}


function block8() {
    console.log("Block #8: changing attributes or creating new ones");
    let elementByItsID = document.getElementById("pasta_id");
    elementByItsID.setAttribute("id", "pastatoni_Id");
    elementByItsID.setAttribute("class", "whatever");
    console.log(elementByItsID.getAttribute("class"));
}

function block9() {
    console.log("Block #9: changing styles");
    let elementByItsID = document.getElementById("pasta_id");
    elementByItsID.style = "color:red";  // it does not work like this
    elementByItsID.style.color = "cyan";
    elementByItsID.style.border = "1px solid black";
}

function block10() {
    console.log("Block #10: checking if a checkbox has been checked");
    let checkBoxElements = document.getElementsByClassName("fruits");
    for (let item of checkBoxElements) {
        let name = item.getAttribute("name");
        if (item.checked) {
            console.log(`checkbox for ${name} has been checked!`);
        } else {
            console.log(`checkbox for ${name} has not been checked!`);
        }
    }
}

function block11() {
    console.log("Block #11: checking Select chosen option");
    let cars = document.getElementById("cars");
    console.log(cars.value);
}

function block12() {
    console.log("Block #12: creating new DOM elements");

    // creating an HTML element in the memory (not DOM yet)
    let h1Element = document.createElement("h1");

    // adding a text to go with this H1 tag
    h1Element.innerText = "This is a newly created H1 element!";

    // finding a position at the DOM tree to place this new element
    let position = document.getElementById("new_element");
    position.appendChild(h1Element);
}

function block13() {
    console.log("Block #13: adding a new list item in the first unordered list");

    // creating a new list item
    let liElement = document.createElement("li");
    liElement.innerText = "new list item here";
    liElement.setAttribute("id", "new_list_item");

    // getting a location to add this list item into the DOM
    let ulElement = document.getElementById("things_to_buy");
    ulElement.appendChild(liElement);
}

function block14() {
    console.log("Block #14: deleting an element from the dom");
    var item = document.getElementById("pasta_id");
    item.remove();
}

// watched videos 1-10 and lost code along. he finally posted the 
// starter code so the stuff above is just that copy and pasted

// part 11: event listeners 

function block15() {
    console.log("Block #15: adding event listeners");
    let buttonElement = document.getElementById("button_id");
    buttonElement.addEventListener("click", myFunction); // when button is clicked, my Function is called

    // adding event listener only after the whole tree has been created
    window.addEventListener("load", main_driver);
    // remove the main_driver() call from the HTML body section
}

function myFunction() { // handleMouseClick
    alert("button has been clicked");
    // getting form data
    alert(document.getElementById("username").value);
    alert(document.getElementById("email").value);
}

// part 12: Text Ipnut Keyup Event

function block16() {
    console.log("Block #16: adding event listener to an input text");
    let userNameElement = document.getElementById("username");
    userNameElement.addEventListener("keyup", () => console.log(userNameElement.value));
}

// part 13: check box Listeners

function block17() {
    console.log("Block #17: adding event listener to a series of checkboxes");
    let checkBoxElements = document.getElementsByClassName("fruits");
    for (let item of checkBoxElements) {
        item.addEventListener("change", () => {
            let name = item.getAttribute("name");
            console.log(`Checkbox for ${name} has been updated`);
        });
    }
}

// part 14: select Listeners

function block18() {
    console.log("Block #18: adding event listener for the dropdown selection");
    let carsDropdownElement = document.getElementById("cars");
    carsDropdownElement.addEventListener("change", () => {
        console.log("new car selection: " + carsDropdownElement.value);
    });
}

// part 15: Mouse Hovering Listener
function block19() {
    console.log("Block #19: adding event listener for hovering something");
    let nav_bar_elements = document.getElementsByClassName("ul_navigation_bar");
    console.log(nav_bar_elements[0]);
    for (let item of nav_bar_elements[0].children) {
        item.addEventListener("mouseover", ()=>{
            item.style.border = "1px solit black";
            item.style.backgroundColor = "yellow"
            item.style.padding = "5px"});
        item.addEventListener("mouseleave", ()=>{
            item.style.backgroundColor = "white";
            item.style.border = "0px"});
    }
}

// MAIN DRIVER: adjust block number and add more blocks as needed
function main_driver() {
    block19();
}
