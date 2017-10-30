console.log("heeeeee");

/*var legend = document.querySelector('form legend.non');
console.log(legend);

var button = document.querySelector('fieldset > button:nth-of-type(1)');
console.log(button);

var open = function() {
    legend.classList.toggle("on");
};

 button.addEventListener('click', open);

console.log(open);
*/


// Favorieten 

var filterButton = document.getElementById('checkbox');
console.log(filterButton);
var opties = document.getElementsByClassName('hidden');
console.log(opties);

var toggleMenu = function () {
    opties.classList.toggle('tonen');
};

filterButton.addEventListener('click', toggleMenu);



