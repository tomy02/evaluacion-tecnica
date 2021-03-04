if (document.querySelector('#form')) {
    document.querySelector('#form').addEventListener('submit', formSubmit);
}


function formSubmit(e) {
    e.preventDefault();
    let nombre = document.querySelector('#nombre').value;
    let password = document.querySelector('#password').value;
    let accion = document.querySelector('#accion').value;

    if (nombre == "" || password == "") {
        swal({
            title: 'Error',
            text: 'Por favor ingrese todos los datos',
            type: 'error'
        });
    }

    let datos = new FormData();

    datos.append('nombre', nombre);
    datos.append('password', password);
    datos.append('accion', accion);

    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'modelo-login.php', true);

    xhr.onload = function () {
        if (this.status === 200) {
            let respuesta = JSON.parse(xhr.responseText);
            console.log(respuesta);
            if (respuesta.respuesta === "correcto") {
                    
                swal({
                    title: 'Bienvenido',
                    text: 'Se ha logeado con exito',
                    type: 'success'
                    }).then(result => {
                    if (result.value) {
                         window.location.href = 'http://localhost:4200/inicio/respuesta';
                    }
                });
                    
                }    
        }
                                
    }

    xhr.send(datos);

}