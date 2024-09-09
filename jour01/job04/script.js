function bisextile(année) {
    return (((année % 4) === 0) && ((année % 100 !== 0) || (année % 400 === 0)));
}

for (let I = 2000; I <= 2026; I++) {
    if (bisextile(I)) {
        document.write(I + " est une année bissextile<br>");
    } else {
        document.write(I + " n'est pas une année bissextile<br>");
    }
}