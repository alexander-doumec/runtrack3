document.addEventListener('DOMContentLoaded', function() {
    const bouton = document.getElementById('bouton');
    const fileContent = document.getElementById('contenu');
   
       bouton.addEventListener('click', function() {
           // L'URL de votre fichier texte
           const fileUrl ='expression.txt';
   
           fetch(fileUrl)
               .then(response => {
                   if (!response.ok) {
                       throw new Error(`HTTP error! status: ${response.status}`);
                   }
                   return response.text();
               })
               .then(data => {
                   // Affiche le contenu dans la div fileContent
                   contenu.textContent = data;
               })
               .catch(error => {
                console.error ('Erreur lors de la récupération du fichier:', error);              
                fileContent.textContent = 'Erreur lors de la récupération du fichier.';
               });
       });
   });