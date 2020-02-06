const number = 3.14;

function calculate() {
    let nummer = document.getElementById('number').value;
    document.getElementById('antwoord').innerHTML = document.getElementById('number').value * number;
    document.getElementById('oppervlakte').innerHTML = nummer * nummer * number * 0.25;
}

var d = new Date();
document.getElementById("datum").innerHTML = d;