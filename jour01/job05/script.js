function afficherJoursSemaines(){
 //Création du tableaux avec les jours de la smeaines
 const jourssemaines = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimance'];
 
 //Boucle pour afficher chaque jour

 for(let i=0; i < jourssemaines.length; i++){
    console.log(jourssemaines[i]);
 }
}

//Appel de la fonction
afficherJoursSemaines();