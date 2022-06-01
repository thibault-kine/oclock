document.addEventListener('DOMContentLoaded', function() {

const clock = document.querySelector('#horloge');

// affiche l'heure actuelle dans le span prévu à cet effet
function afficheHeure() {
    let heure = new Date();
    let heureString = heure.toLocaleTimeString();
    clock.innerHTML = '<p class="hour-text">' + heureString + '</p>';
}

// appelle la fonction afficheHeure toutes les secondes
setInterval(afficheHeure, 1000);

});