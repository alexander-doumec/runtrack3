<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "utilisateurs";

try {
    // Connexion à la base de données
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Préparer et exécuter la requête SQL
    $stmt = $conn->prepare("SELECT * FROM utilisateurs");
    $stmt->execute();

    // Récupérer les résultats sous forme de tableau associatif
    $data = [];
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $data[] = $row;
    }

    // Envoyer les en-têtes avant toute autre sortie
    header("Content-Type: application/json");

    // Envoyer les données JSON au client
    echo json_encode($data);

} catch (PDOException $e) {
    // Gérer l'exception et envoyer une réponse JSON avec un message d'erreur
    header("Content-Type: application/json");
    echo json_encode([
        "error" => "Connexion non établie: " . $e->getMessage()
    ]);
    exit();
}

// Fermer la connexion
$conn = null;
