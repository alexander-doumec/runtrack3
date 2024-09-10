//fonction our vérifier si un nombre est entier 

function estPremier(n) {
    if (n <= 1) return false;
    for (let i = 2; i <=Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

//fonction principale

function sommenombrepremiers(a,b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    }
    return false;
}

//Fonction pour générerle tableau de résultats 

function genererTableauResultats() {
    let resultats = [];
    for (let i = 1; i <= 20; i++) {
        for (let j = 1; j <=20; j++) {
            resultats.push({
                nombre1 : i,
                nombre2: j,
                resultats: sommenombrepremiers(i, j)
            });
        }
    }

    return resultats;
}

console.log(genererTableauResultats());