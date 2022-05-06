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
    // Display video game below the form
}

// Add Validation Code
function isAllDataValid() {
    return true;
}