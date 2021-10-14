// Game Variables

 var game = "x";
var game1 = "o";
var one = document.getElementById("container1");
var two = document.getElementById("container2");
var three = document.getElementById("container3");
var four = document.getElementById("container4")
var five = document.getElementById("container5")
var six = document.getElementById("container6")
var seven = document.getElementById("container7")
var eight = document.getElementById("container8")
var nine = document.getElementById("container9")


// Player name
var playername1 = document.getElementById("playerName1");
var playername2 = document.getElementById("playerName2");
var player1 = prompt("Player One");
var player2 = prompt("Player Two");
playername1.innerHTML = player1;
playername2.innerHTML = player2;

// Winner 
var win = document.getElementById("winner1")
var win1 = document.getElementById("winner2")
var winstr = "Winner!"

// when X wins
function winnerX() {


    if (((one.innerHTML == game) && (two.innerHTML == game) && (three.innerHTML == game)) ||
    ((four.innerHTML == game) && (five.innerHTML == game) && (six.innerHTML == game)) || 
    ((seven.innerHTML == game) && (eight.innerHTML == game) && (nine.innerHTML == game)) ||
    ((one.innerHTML == game) && (four.innerHTML == game) && (seven.innerHTML == game)) ||
    ((two.innerHTML == game) && (five.innerHTML == game) && (eight.innerHTML == game)) ||
    ((three.innerHTML == game) && (six.innerHTML == game) && (nine.innerHTML == game)) ||
    ((one.innerHTML == game) && (five.innerHTML == game) && (nine.innerHTML == game)) ||
    ((three.innerHTML == game) && (five.innerHTML == game) && (seven.innerHTML == game))
     ) {
         win.innerHTML = winstr;
         setTimeout(() => {
             window.alert('Player X won')
            }, 70);
             
        console.log("winner")
    }}

// When O wins-
function winnerO() {
    if (((one.innerHTML == game1) && (two.innerHTML == game1) && (three.innerHTML == game1)) ||
    ((four.innerHTML == game1) && (five.innerHTML == game1) && (six.innerHTML == game1)) || 
    ((seven.innerHTML == game1) && (eight.innerHTML == game1) && (nine.innerHTML == game1)) ||
    ((one.innerHTML == game1) && (four.innerHTML == game1) && (seven.innerHTML == game1)) ||
    ((two.innerHTML == game1) && (five.innerHTML == game1) && (eight.innerHTML == game1)) ||
    ((three.innerHTML == game1) && (six.innerHTML == game1) && (nine.innerHTML == game1)) ||
    ((one.innerHTML == game1) && (five.innerHTML == game1) && (nine.innerHTML == game1)) ||
    ((three.innerHTML == game1) && (five.innerHTML == game1) && (seven.innerHTML == game1))
     ) {
         win1.innerHTML = winstr;
         setTimeout(() => {
             window.alert('Player 0 won')
            }, 70);
             
        console.log("winner")
    }}


function a() {
    one.style.color = "red";
    one.innerHTML = game;
}
function b() {
    two.style.color = "red";
    two.innerHTML = game;
}
function c() {
    three.style.color = "red";
    three.innerHTML = game;
}
function d() {
    four.style.color = "red";
    four.innerHTML = game;
}
function e() {
    five.style.color = "red";
    five.innerHTML = game;
}
function f() {
    six.style.color = "red";
    six.innerHTML = game;
}
function g() {
    seven.style.color = "red";
    seven.innerHTML = game;
}
function h() {
    eight.style.color = "red";
    eight.innerHTML = game;
}
function i() {
    nine.style.color = "red";
    nine.innerHTML = game;
}

// for o
function a1() {
    one.style.color = "green";
    one.innerHTML = game1;
}
function b1() {
    two.style.color = "green";
    two.innerHTML = game1;

}
function c1() {
    three.style.color = "green";
    three.innerHTML = game1;
}
function d1() {
    four.style.color = "green";
    four.innerHTML = game1;

}
function e1() {
    five.style.color = "green";
    five.innerHTML = game1;

}
function f1() {
    six.style.color = "green";
    six.innerHTML = game1;

}
function g1() {
    seven.style.color = "green";
    seven.innerHTML = game1;

}
function h1() {
    eight.style.color = "green";
    eight.innerHTML = game1;

}
function i1() {
    nine.style.color = "green";
    nine.innerHTML = game1;
}

function removed() {
    one.innerHTML = "";
    two.innerHTML = "";
    three.innerHTML = "";
    four.innerHTML = "";
    five.innerHTML = "";
    six.innerHTML = "";
    seven.innerHTML = "";
    eight.innerHTML = "";
    nine.innerHTML = "";
    win.innerHTML = "";
    win1.innerHTML = "";
    
}



