$(document).ready(function () {
    const images = [
        'arc1.png',
        'arc2.png',
        'arc3.png',
        'arc4.png',
        'arc5.png',
        'arc-.png'
    ];

    //fonction pour afficher les images
    function afficherImages() {
        $('container').empty(); //Vider le conteneur avant d'ajouter une image
        images.forEach((src, index) => {
            const img = $('<img>').attr('src', src).addClass('image').attr('data-index', index);
            $('#container').append(img);

        });

    }
    $('#melanger').click(function () {
        images.sort(() => Math.random() - 0.5); //Mélanger les images
        afficherImages();//Afficher les images mélanger
        $('#message').text('')
    });

    //Vérifier l'ordre des images
    $('container').on('click', 'image', function () {
        const index = $(this).data('index');
        const currentImg = images[index];
        const nextIndex = (index + 1) % images.length //obtenir l'index de l'image suivante

        //Echanger l'image actuelle avec l'image actuelle avec l'image suivante 
        images[index] = images[nextIndex];
        images[nextIndex] = currentImg;

        afficherImages(); // Afficher les images mises à jour
        verifierOrdre(); // Vérifier si les images sont dans le bon ordre
    });

    // Vérifier si les images sont dans le bon ordre
    function verifierOrdre() {
        const estCorrect = images.every((img, index) => img === `arc${index + 1}.png`);
        if (estCorrect) {
            $('#message').text('Vous avez gagné !').css('color', 'green');
        } else {
            $('#message').text('Vous avez perdu !').css('color', 'red');
        }
    }

    // Afficher les images initialement
    afficherImages();
});
