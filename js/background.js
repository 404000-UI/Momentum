const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
];

function randomInt(min, max){ 
    var randomNum = Math.floor(Math.random()*(max-min+1)) + min; 
    return randomNum;
}

const chosenIamge = images[randomInt(0,6)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenIamge}`;

document.body.appendChild(bgImage);