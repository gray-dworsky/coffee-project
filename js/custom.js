"use strict";


function renderCoffee(coffee) {
    var html = '<div class="coffee col s6">';
    // html += '<p>' + coffee.id + '</p>';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p><em>' + coffee.roast + '</em></p>';
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

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffeesByRoast);
searchCoffee.addEventListener('keyup', updateCoffeesByInput);


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, roastSelection);
});




// $(document).ready(function(){
//     $('input.autocomplete').autocomplete({
//         data: {
//             'Light City': null,
//             'Half City': null,
//             'Cinnamon': null,
//             'City': null,
//             'American': null,
//             'Breakfast': null,
//             'High': null,
//             'Continental': null,
//             'New Orleans': null,
//             'European': null,
//             'Espresso': null,
//             'Viennese': null,
//             'Italian': null,
//             'French': null,
//             'Light Roast': null,
//             'Medium Roast': null,
//             'Dark Roast': null
//         }
//     });
//     $('select').formSelect();
// });