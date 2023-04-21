<?php 
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    header('Content-Type: application/json; charset=UTF-8');

    require_once('global.php');

    $data = json_decode(file_get_contents("php://input"), true);

    $user = $data["user"];
    $password = $data["password"];
    // var_dump($_POST);

    // var_dump($_ENV);
    $dbhost = $_ENV["dbhost"];
    $dbname = $_ENV["dbname"];

    $conn = new PDO('mysql:dbname='.$dbname.';host='.$dbhost, $_ENV["dbuser"], $_ENV["dbpassword"]);
    //    $conn = new PDO("mysql:dbname=topmarkvs;host=localhost", "root", "");

    $query = $conn->prepare("SELECT * FROM users WHERE usuario=:usuario AND senha=:senha");
    $query->bindParam(':usuario', $user);
    $query->bindParam(':senha', $password);

    $result = $query->fetch(PDO::FETCH_ASSOC);

    http_response_code(200);
        
    if ($result){
        echo json_encode(array(
            'acesso'=>'concedido'
        ));
    }else{
        echo json_encode(array(
            'acesso'=>'negado'
        ));
    }


?>