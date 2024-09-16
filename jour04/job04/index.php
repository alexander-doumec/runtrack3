<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Liste des utilisateurs</title>
</head>

<body>
  <h1>Liste des utilisateurs</h1>
  <table id="userTable">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Email</th>
        <th>Mettre à jour</th>
      </tr>
    </thead>
    <tbody id="'userList">
      <!-- Les données seront insérés ici -->
    </tbody>
  </table>

  <!-- Bouton pour rafraichir la Liste -->
   <button onclick="rafraîchirListe">Mettre à jour </button>


  <script src="script.js"></script>
</body>

</html>