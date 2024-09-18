document.getElementById('inscriptionForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');

    let isValid = true;

    let nom = document.getElementById('nom').value;
    if (nom.length < 2) {
        document.getElementById('nomError').textContent = 'Le nom doit contenir au moins 2 lettres.';
        isValid = false;
    }

    let prenom = document.getElementById('Prenom').value; // Notez le P majuscule
    if (prenom.length < 2) {
        document.getElementById('prenomError').textContent = 'Le prénom doit contenir au moins 2 lettres.';
        isValid = false;
    }

    let password = document.getElementById('password').value;
    let passwordError = [];
    const regexMajuscule = /[A-Z]/g;
    const regexSpecialChars = /[^a-zA-Z0-9]/g;

    if (password.length < 8) {
        passwordError.push('Le mot de passe doit contenir au moins 8 caractères');
    }

    if ((password.match(regexMajuscule) || []).length < 2) {
        passwordError.push('Le mot de passe doit contenir au moins 2 majuscules');
    }

    if ((password.match(regexSpecialChars) || []).length < 2) {
        passwordError.push('Le mot de passe doit contenir au moins 2 caractères spéciaux');
    }

    if (passwordError.length > 0) {
        document.getElementById('passwordError').textContent = passwordError.join('. ');
        isValid = false;
    }

    if (isValid) {
        this.submit();
    }
});