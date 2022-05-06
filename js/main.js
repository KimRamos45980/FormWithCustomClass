var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    console.log("Add video game was called");
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = getById("title");
    game.title = titleInput.value;
    var priceInput = getById("price");
    game.price = parseFloat(priceInput.value);
    var ratingInput = getById("rating");
    game.rating = ratingInput.value;
    var digitalOnly = getById("online");
    game.isDigitalOnly = digitalOnly.checked;
    console.log(game);
    return game;
}
function getById(id) {
    return document.getElementById(id);
}
function displayGame(myGame) {
    var displayDiv = getById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var gameMediaDisplay = "";
    if (!myGame.isDigitalOnly) {
        gameMediaDisplay = "This is a digital only game.";
    }
    else {
        gameMediaDisplay = "You can buy a physical copy.";
    }
    gameInfo.innerText = "".concat(myGame.title, " has a rating of ") +
        "".concat(myGame.rating, ". It costs $") +
        "".concat(myGame.price.toFixed(2), ". ").concat(gameMediaDisplay);
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function isAllDataValid() {
    if (isTextPresent()) {
        return false;
    }
    return true;
}
function isTextPresent() {
    var textPresent = true;
    var titleInput = getById("title");
    var titleValue = titleInput.value;
    var priceInput = getById("price");
    var priceValue = priceInput.value;
    var ratingInput = getById("rating");
    var ratingValue = ratingInput.value;
    var errorList = getById("errors");
    if (titleValue == "") {
        var titleMissing = document.createTextNode("Please enter a title");
        errorList.appendChild(titleMissing);
        errorList.appendChild(addBreak());
        textPresent = false;
    }
    if (priceValue == "") {
        var priceMissing = document.createTextNode("Please enter a price");
        errorList.appendChild(priceMissing);
        errorList.appendChild(addBreak());
        textPresent = false;
    }
    if (ratingValue == "Please choose a rating") {
        var ratingMissing = document.createTextNode("Please select a rating");
        errorList.appendChild(ratingMissing);
        errorList.appendChild(addBreak());
        textPresent = false;
    }
    return textPresent;
}
function addBreak() {
    var br = document.createElement("br");
    return br;
}
