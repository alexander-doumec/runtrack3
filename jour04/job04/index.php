<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Liste des utilisateurs</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

</head>

<body>
  <h1>Liste des utilisateurs</h1>
  <table id="userTable" border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Email</th>
      </tr>
    </thead>

    <tbody>
      <!-- Les utilisateurs seront insérés ici via AJAX -->
    </tbody>
  </table>

  <script src="script.js"></script>
  
  <button id="updateButton">Update</button>
</body>

</html>