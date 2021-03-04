
<?php



    $accion = $_POST['accion'];
    $nombre = $_POST['nombre'];
    $password = $_POST['password'];

    if($accion === 'login'){

        $conn = new mysqli('localhost', 'root', 'root', 'ejemplo_admin', 8889);

        if($conn->connect_error){
            echo $conn->connect_error;
        }



        $conn->set_charset('utf8');

        try{
            $stmt = $conn->prepare("SELECT nombre, password FROM usuarios WHERE nombre = ? ");
            $stmt->bind_param('s', $nombre);
            $stmt->execute();
            //logear usuario
            //bind result inserta los resultados obtenidos en las siguientes variables
            $stmt->bind_result($nombre_usuario, $password_usuario);
            //fetch trae los resultados que se insertaron
            $stmt->fetch();
            //insertar el contenido de fetch en un array de respuesta
        if($nombre_usuario){


            //verificar password
            if(password_verify($password, $password_usuario)){

            

                //login correct
                $respuesta = array(
                    'respuesta' => 'correcto',
                    'nombre' => $nombre_usuario,
                    'accion' => $accion //al poner tipo accion, en este caso sera login, y como eso se manda al js podra ejecutarse el codigo para redireccionarlo
                );
            }
            
        }else{
            $respuesta = array(
                'error' => 'El Usuario no existe'
            );
        }

            $stmt->close();
            $conn->close();

        }catch(Exceptio $e){
            $respuesta = array(
                'pass' => $e->getMessage()
            );
        }
        echo json_encode($respuesta);
    }
?>