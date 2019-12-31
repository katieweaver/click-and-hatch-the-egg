let eggName = 'Yampur Egg';

document.getElementById('pokemon-name').innerHTML = eggName.toUpperCase();

let clicks = 0;
function holdEgg() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;

    if (clicks > 10) {
        document.getElementById("clicks").innerHTML = "Congulations, your egg has hatched into a Yampur!";
    }
};