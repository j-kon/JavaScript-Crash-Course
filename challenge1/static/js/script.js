// Chanllenge 1: Your Age In Days

function ageInDays() {
    var birthYear = prompt('What year were you born... Good friend');
    var ageInYear = (2018 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInYear + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer); 
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}