function rafraichirListe() {
    fetch('users.php')
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur HTTP: " + response.status);
            }
            return response.json(); //analyse la réponse comme JSON
        })
        .then(data => {
            const userList = document.getElementById('userList'); //Selectionne l'element 

            userList.innerHTML = ''; //Vide le contenu existant
            data.forEach(user => {
                const row = document.createElement('tr'); //Crée la nouvelle ligne tr pour chaque utilisateur 

                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                    <td><button onclick="updateUser(${user.id})">Mettre à jour</button></td>
                `;
                userList.appendChild(row); // Ajoute la nouvelle ligne au tableau
            });
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des donées', error);
        });
}

function updateUser(id) {
    const nom = document.getElementById(`nom-${id}`).value;
    const prenom = document.getElementById(`prenom-${id}`).value;
    const email = document.getElementById(`email-${id}`).value;

    const userData = {
        id: id,
        nom: nom,
        prenom: prenom,
        email: emailfetch('updateUser.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                rafraichirListe(); // Rafraîchir la liste après la mise à jour
            })
            .catch(error => console.error('Erreur lors de la mise à jour:', error));
    }

    // Appel initial pour rafraîchir la liste
    rafraichirListe();

}

//Fonction pour mettre à jour un utilisateur 