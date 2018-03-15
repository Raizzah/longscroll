var canvas = document.getElementById("canvas");
var counter = document.getElementById("counter");

window.onscroll = function(){


  var x = window.pageXOffset;

  console.log(x);

};
document.getElementById("towninfo").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("towninfo").innerHTML = "As villages begin to build and turn into towns, the population increases, with the development of stores, increasing waste";
};

function mouseDown() {
    document.getElementById("message2").innerHTML = "Towns start developing into small cities with population overgrowth, new economy brings more buidings and less land area.";
}

function mouseUp() {
    document.getElementById("message2").innerHTML = "Click";
};

document.getElementById("newcity").onmouseover = function() {mouseOver()};
document.getElementById("newcity").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("newcity").style.color = "white";
}

function mouseOut() {
    document.getElementById("newcity").style.color = "black";
};

test.onclick = function() {
  let start = Date.now();

  let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    test.style.left = timePassed / 5 + 'px';

    if (timePassed > 100000) clearInterval(timer);

  }, 50);
};

$(document).ready(function() {
                // Notice the .on instead of .click, it's the new style for events
                // in jQuery and the e argument
                $("#counter").on('click', function (e) {
                    e.preventDefault();
                    $(".target").effect( "bounce", { times : 3 }, 300);
                });
            });
