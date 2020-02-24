"use strict";


function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<p>' + coffee.id + '</p>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffeesByRoast(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];

    coffees.forEach(function (coffee) {
        if (selectedRoast === 'all') {
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffeesByInput(e) {
    e.preventDefault();
    var userInput = searchCoffee.value.toLowerCase();
    // var selectedRoast = roastSelection.value;
    var filteredCoffees = [];

    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase().includes(userInput)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// function addToCoffees(e) {
//     e.preventDefault();
//     var addCoffeeName = document.querySelector('#add-coffee-name').value;
//     var addCoffeeRoast = document.querySelector('#add-coffee-roast').value;
//
//     coffees.push({
//         id: coffees.length + 1,
//         name: addCoffeeName,
//         roast: addCoffeeRoast
//     });
//
//     localStorage.setItem('coffees', JSON.stringify(coffees));
//     var coffeesArray = localStorage.getItem('coffees') ? tbody.innerHTML = renderCoffees(JSON.parse(localStorage.getItem('coffees'))) : tbody.innerHTML = renderCoffees(coffees);
//
//     tbody.innerHTML = renderCoffees(coffeesArray);
//
// }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');
var searchCoffee = document.querySelector('#searchCoffee');
// var addCoffee = document.querySelector('#addCoffee');

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffeesByRoast);
searchCoffee.addEventListener('keyup', updateCoffeesByInput);
// addCoffee.addEventListener('click', addToCoffees);

var options = {
    duration: 2000,
    dist: 0,
    numVisible: 1,
    fullWidth: true
};


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
});