x =0;
y =0;

draw_circle ="";
draw_rect ="";

var SpeechRecognition = window.webkitSpeechRecognition;

var recongition = new SpeechRecognition(); 

function start(){
    document.getElementById("status").innerHTML = "The system is listening, please speak 🙂"; 
    recongition.start(); 
}

recongition.onresult = function(event){
console.log(event);
var content = event.results[0][0].transcript; 
console.log(content);

document.getElementById("status").innerHTML = "The speech has been recognized as "+ content; 

if(content =="circle"){
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "Started drawing a circle!";
    draw_rect ="set";
}

if(content == "rectangle"){
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "Started drawing a rectangle!";
    draw_rect ="set";
}

}

function setup(){
    canvas = createCanvas(900, 600);
    canvas.center; 
}

function draw(){

    if(draw_circle == "set"){
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "The circle has been drawn!";
        draw_circle = "";
    }

    if(draw_rect == "set"){
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML = "The rectangle has been drawn!";
        draw_rect = "";
    }
}