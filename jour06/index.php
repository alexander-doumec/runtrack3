<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LaPlateforme</title>
    <!-- Lien Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>

    <?php include("./navbar.php"); ?>

    <div class="container mt-5">
        <div class="row">
            <!-- Colonne de gauche avec la carte du papillon -->
            <div class="col-lg-3">
                <div class="card">
                    <img src="image/papillon.jpeg" class="card-img-top" alt="Papillon">
                    <div class="card-body">
                        <h5 class="card-title">Un Papillon</h5>
                        <p class="card-text">Un papillon, c'est un peu comme une chenille, mais avec des ailes. Ne pas ingérer.</p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Commander votre propre papillon
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        Achat confirmer!!
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Colonne principale avec le Jumbotron -->
            <div class="col-lg-6">
                <div class="jumbotron p-5 bg-light rounded-3">
                    <h1 class="display-5">Bonjour, monde!</h1>
                    <p class="lead">Il existe plusieurs visions du terme :</p>
                    <p>Le monde est la matière, l'espace et les phénomènes qui nous sont accessibles par les sens, l'expérience ou la raison.</p>
                    <p>Le sens le plus courant désigne notre planète, la Terre, avec ses habitants, et son environnement plus ou moins naturel.</p>
                    <hr class="my-4">
                    <p>Le sens étendu désigne l'univers dans son ensemble.</p>
                    <a class="btn btn-danger btn-lg" href="#" role="button">Rebooter le Monde</a>
                </div>
                <nav aria-label="Pagination">
                    <ul class="pagination justify-content-center">
                        <li class="page-item"><a class="page-link" href="#">«</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">»</a></li>
                    </ul>
                </nav>
            </div>

            <!-- Colonne de droite avec la liste groupée -->
            <div class="col-lg-3">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active">Limbes</a>
                    <a href="#" class="list-group-item list-group-item-action">Luxure</a>
                    <a href="#" class="list-group-item list-group-item-action">Gourmandise</a>
                    <a href="#" class="list-group-item list-group-item-action">Avarice</a>
                    <a href="#" class="list-group-item list-group-item-action">Colère</a>
                    <a href="#" class="list-group-item list-group-item-action">Hérésie</a>
                    <a href="#" class="list-group-item list-group-item-action">Violence</a>
                    <a href="#" class="list-group-item list-group-item-action">Ruse et Tromperie</a>
                    <a href="#" class="list-group-item list-group-item-action">Trahison</a>
                    <a href="#" class="list-group-item list-group-item-action">Internet Explorer</a>
                </div>
            </div>
        </div>

        <!-- Barre de progression -->
        <div class="row mt-5">
            <div class="col-lg-12">
                <h4>Installation de AI 9000</h4>
                <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 45%;" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>

        <!-- Formulaire de connexion -->
        <div class="row mt-5">
            <div class="col-lg-6">
                <h4>Recevez votre copie gratuite d'internet 2!</h4>
                <form>
                    <div class="mb-3">
                        <label for="login" class="form-label">Login</label>
                        <input type="text" class="form-control" id="login" placeholder="Login">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <div class="mb-3">
                        <label for="select" class="form-label">URL des Internets 2 et 2.1 Beta</label>
                        <select class="form-select" id="select">
                            <option>DogeCoin</option>
                            <option>BitCoin</option>
                            <option>Ethereum</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Envoyer</button>
                </form>
            </div>
        </div>
    </div>

    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        <label for="inputPassword5" class="form-label">Password</label>
        <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
        <div id="passwordHelpBlock" class="form-text">
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
</body>

</html>