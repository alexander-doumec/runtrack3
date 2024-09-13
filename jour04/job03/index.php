<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js"></script>
    <title>Jour04/job03</title>
</head>
<body>
    <!-- Création du formulaire -->
    <form id="filterForm">
        <label for="id">ID : </label>
        <input type="text" id="id" name="id">

        <label for="name">Nom : </label>
        <input type="text" id="name" name="name">

        <label for="type">Type : </label>
        <select name="" id="type">
            <option value="">--Choisissez un type --</option>
            <option value="Feu">Feu</option>
            <option value="Eau">Eau</option>
            <option value="Plante">Plante</option>
        </select>

        <input type="button" value="Filter" onclick="filterPokemon()">
    </form>
    <div id="result"></div>
</body>
</html>