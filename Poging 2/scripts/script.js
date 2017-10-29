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

var favorietButton = document.getElementsByClassName("heart");
console.log(favorietButton);

favorietButton.addEventListener('click', function(){
    favorietButton.classList.toggle('faved', true);
});



