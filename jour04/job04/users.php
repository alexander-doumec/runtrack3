<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "utilisateurs";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $data = json_decode(file_get_contents("php://input"));

    $stmt = $conn->prepare("UPDATE utilisateurs SET nom = :nom, prenom = :prenom, email = :email WHERE id = :id");
    $stmt->bindParam(':id', $data->id);
    $stmt->bindParam(':nom', $data->nom);
    $stmt->bindParam(':prenom', $data->prenom);
    $stmt->bindParam(':email', $data->email);

    $stmt->execute();

    echo json_encode(["message" => "Utilisateur mis à jour avec succès"]);
} catch (PDOException $e) {
    echo json_encode(["message" => "Erreur lors de la mise à jour : " . $e->getMessage()]);
}

$conn = null;
?>