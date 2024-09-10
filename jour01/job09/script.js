function tri(numbers, order) {
    // Vérifier si numbers est un tableau valide
    if (!Array.isArray(numbers)) {
        console.error("L'argument 'numbers' doit être un tableau");
        return [];
    }

    // Créer une copie du tableau pour éviter de modifier l'original
    let sortedArray = [...numbers];

    return sortedArray.sort((a, b) => {
        if (order === "asc") {
            return a - b;
        } else if (order === "desc") {
            return b - a;
        }
        // Si order n'est ni "asc" ni "desc", ne pas trier
        return 0;
    });
}

// Fonction de test
function testTri() {
    const testCases = [
        { input: [5, 2, 9, 1, 7], order: "asc", expected: [1, 2, 5, 7, 9] },
        { input: [5, 2, 9, 1, 7], order: "desc", expected: [9, 7, 5, 2, 1] },
        { input: [3, 3, 3], order: "asc", expected: [3, 3, 3] },
        { input: [], order: "asc", expected: [] },
        { input: "not an array", order: "asc", expected: [] } // Test avec une entrée invalide
    ];

    testCases.forEach((testCase, index) => {
        const result = tri(testCase.input, testCase.order);
        const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
        console.log(`Test ${index + 1}: ${passed ? 'PASSED' : 'FAILED'}`);
        if (!passed) {
            console.log(`  Input: ${JSON.stringify(testCase.input)}`);
            console.log(`  Order: ${testCase.order}`);
            console.log(`  Expected: ${JSON.stringify(testCase.expected)}`);
            console.log(`  Got: ${JSON.stringify(result)}`);
        }
    });
}

// Exécuter le test
testTri();