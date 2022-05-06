class VideoGame {
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

// Test code
/*
let myGame = new VideoGame();
myGame.title = "mario";
myGame.rating = "E";
myGame.isDigitalOnly = true;
*/

window.onload = function() {
    let addBtn = <HTMLElement> document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame() {
    console.log("Add video game was called");
    clearErrorList();

    if(isAllDataValid()) {
        let game = getVideoGame();
        displayGame(game);
    }
}

/**
 * Gets all game data from the form
 * @returns a VideoGame object
 */
function getVideoGame():VideoGame {
    let game = new VideoGame();

    // Populate with data from the form
    let titleInput = <HTMLInputElement> getById("title");
    game.title = titleInput.value;

    let priceInput = <HTMLInputElement> getById("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLSelectElement> getById("rating");
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement> getById("online");
    game.isDigitalOnly = digitalOnly.checked;
    /*
    if(digitalOnly.checked) {
        game.isDigitalOnly = true;
    }
    else {
        game.isDigitalOnly = false;
    }
    */
    console.log(game);
    return game;
}

function getById(id:string) {
    return document.getElementById(id);
}

function displayGame(myGame:VideoGame):void {
    let displayDiv = getById("display");

    // Create <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    
    // Create paragraph with game details
    let gameInfo = document.createElement("p");
    let gameMediaDisplay = "";
    if(myGame.isDigitalOnly){
        gameMediaDisplay = "This is a digital only game.";
    }
    else {
        gameMediaDisplay = "You can buy a physical copy.";
    }

    gameInfo.innerText = `${myGame.title} has a rating of ` + 
                         `${myGame.rating}. It costs $` +
                         `${myGame.price.toFixed(2)}. ${gameMediaDisplay}`;

    // Add <h2> in the <div id="display">
    displayDiv.appendChild(gameHeading);
    // Add <p> of game into
    displayDiv.appendChild(gameInfo);
}

// Add Validation Code
function isAllDataValid(): boolean {
    
    if(!isInputPresent()) {
        return false;
    }
    if(!isNumber()) {
        return false;
    }

    return true;
}

/**
 * Checks if Title/Price have an inputed value
 * Checks if a Rating has been selected
 * @returns True if all text boxes are filled/rating is selected
 */
function isInputPresent(): boolean {
    let textPresent = true;

    let titleInput = <HTMLInputElement> getById("title");
    let titleValue = titleInput.value;

    let priceInput = <HTMLInputElement> getById("price");
    let priceValue = priceInput.value;

    let ratingInput = <HTMLSelectElement> getById("rating");
    let ratingValue = ratingInput.value;

    let errorList = getById("errors");
    if (titleValue == "") {
        let titleMissing = document.createTextNode("Please enter a title");
        errorList.appendChild(titleMissing);
        errorList.appendChild(addBreak());
        textPresent = false;
    }
    if (priceValue == "") {
        let priceMissing = document.createTextNode("Please enter a price");
        errorList.appendChild(priceMissing);
        errorList.appendChild(addBreak());
        textPresent = false;
    }
    if (ratingValue == "Please choose a rating") {
        let ratingMissing = document.createTextNode("Please select a rating");
        errorList.appendChild(ratingMissing);
        errorList.appendChild(addBreak());
        textPresent = false;
    }

    return textPresent;
}


function isNumber():boolean {
    let validNumber = true;

    let priceInput = <HTMLInputElement> getById("price");
    let priceValue = Number(priceInput.value);

    let errorList = getById("errors");
    if(isNaN(priceValue)){
        let priceNotVaild= document.createTextNode("Please enter a number value for price");
        errorList.appendChild(priceNotVaild);
        errorList.appendChild(addBreak());
        validNumber = false;
    }

    return validNumber;
}

function clearErrorList() {
    let errorList = getById("errors");
    errorList.innerText = "";
}

/**
 * Used to add a line break within mulitple functions
 * @returns a break html element
 */
function addBreak():HTMLElement{
    let br = document.createElement("br");
    return br;
}