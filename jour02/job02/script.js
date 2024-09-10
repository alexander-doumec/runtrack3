// On trouve notre bouton magique et notre boîte magique
let boutonMagique = document.getElementById('button');
let boiteMagique = document.querySelector('article');

// On cache d'abord la boîte magique
boiteMagique.style.display = 'none';

// On prépare notre tour de magie
boutonMagique.addEventListener('click', function() {
    // Si la boîte est cachée, on la fait apparaître
    if (boiteMagique.style.display === 'none') {
        boiteMagique.style.display = 'block';
    } 
    // Sinon, si elle est visible, on la fait disparaître
    else {
        boiteMagique.style.display = 'none';
    }
});