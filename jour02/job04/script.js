let textarea = document.getElementById('keylogger');

//Fonction pour gérer les frappes sur le clavier 

document.addEventListener('keydown', function(event) {
    //Vérifier si la touche est présse entre (a-z)
    if (event.key.length === 1 && event.key.match (/[a-z]/i)){
        //Si le focus est dans le textarea ajouter la lettre 2 fois
        if(document.activeElement === textarea) {
            textarea.value += event + event.key;
        }else{
            textarea.value += event.key;
        }
        //Sinon ajouter une seule fois la lettre 
    }
});