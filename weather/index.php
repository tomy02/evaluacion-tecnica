<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="sweetalert2.min.css">
    <link rel="stylesheet" href="fontawesome-all.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
</head>
<body>
    <div class="container">
    <div class="m-5" >
        <h2 class="text-center">Bienvenido</h2>
    </div>
        <div class="m-4">
            <div class="card col-6" style="margin: 0 auto; background-color:lightgrey">
                <form action="" id="form" method="post">
                    <div class="m-3 text-center">
                    <i class="fas fa-user" style="font-size: 2.6rem; padding: 10px; color:green"></i>
                        <h3>Login</h3>
                    </div>
                    <div class="m-3">
                        <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre">
                    </div>
                    <div class="m-3">
                        <input type="password" class="form-control" name="password" id="password" placeholder="Password">
                    </div>
                    <div class="m-3 text-center">
                        <input type="submit" class="btn btn-success" value="Acceder">
                        <input type="hidden" name="accion" id="accion" value="login">
                    </div>
                </form>
            </div>
        </div>
    
    </div>

<script src="sweetalert2.all.min.js"></script>
    <script src="app.js"></script>
    
</body>
</html>
