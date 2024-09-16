fetch('users.php')
    .then(response => response.json())
    .then(data => {
        const userList = document.getElementById('user-list');
        data.forEach(user => {
            const li = document.createElement('li');
            // Utilisation de backticks pour l'interpolation des variables
            li.textContent = `ID: ${user.id}, Nom: ${user.nom}, Prénom: ${user.prenom}, Email: ${user.email}`;
            userList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Erreur de chargement:', error);
    });
