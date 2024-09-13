document.addEventListener('DOMContentLoaded', function() {
    loadData();
});

async function loadData() {
    try {
        const response = await fetch('pokemon.json'); // Assurez-vous que le fichier est au bon
        if (!response.ok) {
            throw new Error('Erreur de chargement du fichier JSON');
        }
        const pokemons = await response.json();
        populateTypes(pokemons);
    } catch (error) {
        console.error('Erreur:', error);
    }
}

function populateTypes(pokemons) {
    const types = new Set();
    
    // Récupérer tous les types de Pokémon
    pokemons.forEach(pokemon => {
        pokemon.type.forEach(type => types.add(type));
    });

    const typeSelect = document.getElementById('type');
    
    // Ajouter chaque type à la liste déroulante
    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        typeSelect.appendChild(option);
    });
}

function filterPokemon() {
    const id = document.getElementById('id').value;
    const name = document.getElementById('namevalueLowerCase()');
    const selectedType = document.getElementById('type').value;

    fetch('pokemon.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier JSON');
            }
            return response.json();
        })
        .then(pokemons => {
            const filteredPokemons = pokemons.filter(pokemon => {
                return (!id || pokemon.id.toString() === id) &&
                       (!name || pokemon.name.toLowerCase().includes(name)) &&
                       (!selectedType || pokemon.type.includes(selectedType));
            });
            displayResults(filteredPokemons);
        })
        .catch(error => console.error('Erreur:', error)) ;
}
function displayResults(pokemons) {
    const results = document.getElementById('results');
    results.innerHTML = ''; // Effacer les résultats précédents

    if (pokemons.length === 0) {
        results.textContent = 'Aucun Pokémon trouvé.';
        return;
    }

    // Afficher les résultats filtrés
    pokemons.forEach(pokemon => {
        const div = document.createElement('div');
        div.textContent = `ID: ${pokemon.id}, Nom: ${pokemon.name}, Type: ${pokemon.type.join(', ')}`;
        results.appendChild(div);
    });
}