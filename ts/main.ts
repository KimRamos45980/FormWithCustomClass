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
    if(!myGame.isDigitalOnly){
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
function isAllDataValid() {
    return true;
}