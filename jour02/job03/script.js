// Initialiser le compteur à 0
let count = 0;

// Fonction pour incrémenter le compteur
function addone() {
    // Incrémenter la variable count
    count++;
    
    // Mettre à jour le contenu de la balise <p> avec le nouveau compteur
    document.getElementById('compteur').textContent = count;
}

// Associer la fonction 'addone()' à l'événement 'click' du bouton
document.getElementById('button').addEventListener('click', addone);
