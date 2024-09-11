document.addEventListener('DOMContentLoaded', function () {
    //Le code konami
    const konamiCode = [38, 38, 40, 37, 39, 37, 39, 66, 65];

    //Variable pour stocker la progression de l'utilisateur dans la séquence
    let konamiIndex = 0;

    //2coute les événements touche
    document.addEventListener('keydown', function (event) {
        if (event.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;

            //Si la séquence est complète, déclenche l'action
            if (konamiIndex === konamiCode.length) {
                triggerKonamiAction();
                konamiIndex = 0; //Réinitiase l'index pour permmetre des séquences multiples
            }
        } else {
            konamiIndex = 0; //Reinitialise l'inde si la séquence est incorrect
        }
    });
    function triggerKonamiAction() {
        alert('Code Konami activé!');
        document.getElementById('konami').style.display = 'block'; // affiche l'image 
    }
});
