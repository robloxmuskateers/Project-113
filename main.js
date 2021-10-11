function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110,250);
    capture = createCapture(VIDEO);
    capture.hide();
}

function draw() {
    image(capture, 30, 30, 580, 420);
    rect(23, 40, 15, 400);
    rect(603, 40, 15, 400);
    rect(23, 23, 580, 15);
    rect(23, 443, 580, 15);
    circle(30, 30, 50);
    circle(610, 30, 50);
    circle(30, 450, 50);
    circle(610, 450, 50);
    //ellipse(56, 46, 55, 65);
}

function takeSnapshot() {
    save('BirthdayPartyImage.png');
}