var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 350;
document.body.appendChild(canvas);









var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() {
    bgReady = true;
};

bgImage.src = "images/bg.gif";


var heroReady = false;
var heroImage = new Image();
heroImage.onload = function() {
    heroReady = true;
};

heroImage.src = "images/black.gif";



var beerReady = false;
var beerImage = new Image();
beerImage.onload = function() {
    beerReady = true;
};




beerImage.src = "images/coin.gif";
var hero = {
    speed: 256,
    x: 0,
    y: 0
};





var beer = {
    x: 0,
    y: 0
}

var beersCaught = 0;

var keysDown = {};

addEventListener("keydown", function(e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
}, false);

var reset = function() {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;


    beer.x = 32 + (Math.random() * (canvas.width - 64));
    beer.y = 32 + (Math.random() * (canvas.height - 64));
};

var update = function(modifier) {
    if (38 in keysDown) { // Player holding up
        hero.y -= hero.speed * modifier;

    }
    if (40 in keysDown) { // Player holding down
        hero.y += hero.speed * modifier;

    }
    if (37 in keysDown) { // Player holding left
        hero.x -= hero.speed * modifier;

    }
    if (39 in keysDown) { // Player holding right
        hero.x += hero.speed * modifier;

    }
    if (
        hero.x <= (beer.x + 32) &&
        beer.x <= (hero.x + 32) &&
        hero.y <= (beer.y + 32) &&
        beer.y <= (hero.y + 32)
    ) {
        ++beersCaught;
        reset();
    }



};




var render = function() {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }

    if (beerReady) {
        ctx.drawImage(beerImage, beer.x, beer.y);
    }



    // Score
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Coins caught: " + beersCaught, 32, 32);
};



var main = function() {
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);
    render();

    then = now;

    // Request to do this again ASAP
    requestAnimationFrame(main);
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;



function countdown() {
    var seconds = 60;

    function tick() {
        var counter = document.createElement("counter");
        var persons = window.person;
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            setTimeout(tick, 250);
        } else {
            alert("Game over, " + persons + "s score was " + " " + beersCaught);

        }
    }
    tick();
}

// start the countdown
countdown();



// Let's play this game!
var then = Date.now();
reset();
main();