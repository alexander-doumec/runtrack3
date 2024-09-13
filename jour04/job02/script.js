function jsonValueKey(jsonString, key) {
    try {
        // Transforme le JSON objet JavaScript
        const jsonObject = JSON.parse(jsonString);

        // Cherche le mot dans le JSON
        if (jsonObject.hasOwnProperty(key)) {
            return jsonObject[key];
        } else {
            return `La clé "${key}" n'a pas été trouvée dans le JSON.`;
        }
    } catch (error) {
        return 'Erreur lors du chargement du JSON :' + error.message;
    }
}

const jsonString = '{"name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille"}';
const key = 'city';
console.log(jsonValueKey(jsonString, key)); 