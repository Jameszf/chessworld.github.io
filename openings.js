
var allOpenings = document.querySelectorAll(".opening");
var allOpeningImages = document.querySelectorAll(".openingSlide");
var allOpeningInfoText = document.querySelectorAll(".openingTextInfo");
var allOpeningTitles = document.querySelectorAll(".openingTitle");

function loadListeners() {
    for (var i = 0; i < 8; i++) {
    allOpenings[i].addEventListener("click", displayInfo);
    }
    console.log("listeners loaded");
}

function displayInfo() {
    
    for (var i = 0; i < allOpeningInfoText.length; i++) {
        allOpeningInfoText[i].className = "hidden";    
        allOpeningImages[i].className = "hidden";
        allOpeningTitles[i].className = "hidden";
    }
    
    var imageID = this.attributes["data-openingImage"].value;
    var textID = this.attributes["data-openingInfo"].value;
    var titleID = this.attributes["data-openingTitle"].value;
    var openingImage = document.getElementById(imageID);
    var openingInfo = document.getElementById(textID);
    var openingTitle = document.getElementById(titleID);
    if (openingImage.className && openingInfo.className && openingTitle.className === "hidden") {
        openingImage.className = "";
        openingInfo.className = "";
        openingTitle.className = "";
    } else {
        openingImage.className = "hidden";
        openingInfo.className = "hidden";
        openingTitle.className = "hidden";
    }
}

window.onload = loadListeners;
