let joursFeries2020 = [
    new Date(2020, 0, 1),  // 1er Janvier
    new Date(2020, 3, 13), // Lundi de Pâques (13 Avril)
    new Date(2020, 4, 1),  // Fête du Travail (1er Mai)
    new Date(2020, 4, 8),  // 8 Mai 1945
    new Date(2020, 6, 14), // Fête Nationale (14 Juillet)
    new Date(2020, 7, 15), // Assomption (15 Août)
    new Date(2020, 10, 1), // Toussaint (1er Novembre)
    new Date(2020, 10, 11),// Armistice (11 Novembre)
    new Date(2020, 11, 25) // Noël (25 Décembre)
];

function jourtravaille(date) {
    // Vérifier si c'est un jour férié
    for (let i = 0; i < joursFeries2020.length; i++) {
        if (date.getTime() === joursFeries2020[i].getTime()) {
            return `Le ${date.getDate()} ${date.toLocaleString('fr-FR', { month: 'long' })} ${date.getFullYear()} est un jour férié.`;
        }
    }

    // Vérifier si c'est un week-end (samedi ou dimanche)
    if (date.getDay() === 0 || date.getDay() === 6) {
        return `Non, le ${date.getDate()} ${date.toLocaleString('fr-FR', { month: 'long' })} ${date.getFullYear()} est un week-end.`;
    }

    // Sinon, c'est un jour travaillé
    return `Oui, le ${date.getDate()} ${date.toLocaleString('fr-FR', { month: 'long' })} ${date.getFullYear()} est un jour travaillé.`;
}

function genererTableauAnnee2020() {
    let tableau = [];
    for (let mois = 0; mois < 12; mois++) {
        for (let jour = 1; jour <= 31; jour++) {
            let date = new Date(2020, mois, jour);
            if (date.getMonth() === mois) { // Vérifier si le jour existe dans ce mois
                tableau.push({
                    date: date.toLocaleDateString('fr-FR'),
                    statut: jourtravaille(date)
                });
            }
        }
    }
    return tableau;
}

// Générer et afficher le tableau
console.table(genererTableauAnnee2020());