//Lint error
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

console.log("heeeeee");

// FILTER POGING 1

/*var legend = document.querySelector('form legend.non');
console.log(legend);

var button = document.querySelector('fieldset > button:nth-of-type(1)');
console.log(button);

var open = function() {
    legend.classList.toggle("on");
};

 button.addEventListener('click', open);

console.log(open);



// FILTER POGING 2

var filterButton = document.getElementById('checkbox');
console.log(filterButton);
var opties = document.getElementsByClassName('hidden');
console.log(opties);

var toggleMenu = function () {
    opties.classList.toggle('tonen');
};

filterButton.addEventListener('click', toggleMenu);

*/

//FAVORIET
/*
var hartButton = document.getElementById('heart');
var hart1 = ('../images/microhart1.png');
var hart2 = ('../images/microhart2.png');
var hart3 = ('../images/microhart3.png');
var hart4 = ('../images/microhart4.png');

function vullendHart() {
  hartButton.innerHTML = hart1;
  setTimeout(function () {
    hartButton.innerHTML = hart2;
  }, 1000);
  setTimeout(function () {
    hartButton.innerHTML = hart3;
  }, 2000);
  setTimeout(function () {
    hartButton.innerHTML = hart4;
  }, 3000);
}

hartButton.addEventListener('click', vullendHart);
*/


var vulHart = document.getElementsByClassName('hidden');
var vulHartje = vulHart;
console.log(vulHart);

/*
var favoriet = function() {
    vulHart.classList.remove("hidden");
    vulHart.classList.add("active");
};
*/

function favoriet () {
    vulHartje.classList.toggle('active');
    vulHartje.addEventListener('click', favoriet);
}

console.log(vulHartje);



