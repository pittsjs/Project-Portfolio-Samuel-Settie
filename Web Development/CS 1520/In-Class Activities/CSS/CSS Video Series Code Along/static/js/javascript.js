// DOM Video Series code along

// video 2
function block1() {
    console.log("Block #1: Retrieving the whole DOM tree");
    const dom = document;
    console.log(dom);
}

// video 3
function block2() {
    console.log("Block #2: getting the DOM children in an array format");
    const body_children = document.body.children;
    console.log(body_children);

    var arr = Array.from(body_children);
    console.log(arr);
    arr.map(child => console.log(child));
}

// video 4
function block3() {
    console.log("Block #3: getting all the h3 elements");
    let h3Elements = document.getElementsByTagName("h3");
    for (item of h3Elements){
        console.log(item);
    }
}

// video 4
function block4() {
    console.log("Block #4: getting an element by its ID");
    let h1ByItsID = document.getElementById("pageTitle");
    console.log(h1ByItsID);
}

// video 4
function block5() {
    console.log("Block #5: getting html elements by their classes");
    let uls_from_navbar = document.getElementsByClassName("ul_navigation_bar");
    for (item of uls_from_navbar){
        console.log(item);
    }
}

// video 5
function block6() {
    console.log("Block #6: playing with inner text of a given HTML tag");
    let h3Elements = document.getElementsByTagName("h3");
    for (item of h3Elements){
        console.log("orignal text: " + item.innerText);
        item.innerText = "banana";
    }
}

// video 5
function block7() {
    console.log("Block #7: adding html tags in the item text");
    let liByItsID = document.getElementById("pasta_id");
    // liByItsID.innerText = "<h1> Apple <h1>";
    liByItsID.innerHTML = "<h1> Apple <h1>";

}

// video 6
function block8() {
    console.log("Block #8: changing attributes or creating new ones");
    let liByItsID = document.getElementById("pasta_id");
    liByItsID.setAttribute("id", "pastatoni_id");
    liByItsID.setAttribute("class", "whatever");
    console.log(liByItsID.getAttribute("class"));
}

// video 6
function block9() {
    console.log("Block #9: changing styles");
    let liByItsID = document.getElementById("pasta_id");
    liByItsID.style.color = "cyan";
    liByItsID.style.border = "1px solid black";
}

// video 7
function block10() {
    console.log("Block #10: checking if a checkbox has been checked");
    let checkBoxElements = document.getElementsByClassName("fruits");
    for(let item of checkBoxElements){
        let name = item.getAttribute("name");
        if(item.checked){
            console.log('checkbox for ${name} has been checked');
        }
        else{
            console.log(' checkbox for ${name} has not been checked');
        }
    }
}

// video 8
function block11() {
    console.log("Block #11: checking Select chosen option");
    let cars = document.getElementById("cars");
    console.log(cars.value);
}

// video 9
function block12() {
    console.log("Block #12: creating new DOM elements");

    // creating an element in the memory (not DOM yet)
    let h1Element = document.createElement("h1");

    // adding a text to go with the tag
    h1Element.innerText = " This is a newly created H1 element!";

    //finding a postiion in the DOM tree to place this new element 
    let position = document.getElementById("new_element");
    position.appendChild(h1Element);
    
}

// video 9
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

// video 9
function block14() {
    console.log("Block #14: deleting an element from the dom");
    var item = document.getElementById("pasta_id");
    item.remove();
}

function main_driver() {
    // block1();
    // block2();
    // block3();
    // block4();
    // block5();
    // block6();
    // block7();
    // block8();
    // block9();
    // block10();
    // block11();
    // block12();
    // block13();
    // block14();
}

