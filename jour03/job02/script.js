$(document).ready(function() {
    const images = [
        'arc1.png',
        'arc2.png',
        'arc3.png',
        'arc4.png',
        'arc5.png',
        'arc6.png'
    ];

    function loadImages() {
        $('#container').empty();
        images.forEach(image => {
            $('#container').append(`<img src="${image}" data-id="${image}" width="100" height="100">`);
        });
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function enableDragAndDrop() {
        $('#container img').draggable({
            revert: "invalid"
        });

        $('#container').droppable({
            accept: "#container img",
            drop: function(event, ui) {
                $(ui.draggable).appendTo(this);
                $(ui.draggable).css({top: 0, left: 0});
            }
        });
    }

    $('#melangerBouton').click(function() {
        shuffle(images);
        loadImages();
        enableDragAndDrop();
        $('#message').text('').css('color', '');
    });

    $('#verifierBouton').click(function() {
        let correctOrder = true;
        $('#container img').each(function(index) {
            if ($(this).data('id') !== images[index]) {
                correctOrder = false;
            }
        });
        if (correctOrder) {
            $('#message').text('Vous avez gagné').css('color', 'green');
        } else {
            $('#message').text('Vous avez perdu').css('color', 'red');
        }
    });

    loadImages();
    enableDragAndDrop();
});