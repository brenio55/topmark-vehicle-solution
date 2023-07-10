<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
header('Content-Type: application/json; charset=UTF-8');

require_once('global.php');

class Car
{
    public $name;
    public $price;
    public $image;

    function setName($name)
    {
        $this->name = $name;
    }
    function setPrice($price)
    {
        $this->price = $price;
    }
    function setImage($image)
    {
        $this->image = $image;
    }

    function getName()
    {
        return $this->name;
    }
    function getPrice()
    {
        return $this->price;
    }
    function getImage()
    {
        return $this->image;
    }
}

$data = json_decode(file_get_contents("php://input"), true);

function testLogin()
{
    global $data;

    $user = $data["user"];
    $password = $data["password"];

    $dbhost = $_ENV["dbhost"];
    $dbname = $_ENV["dbname"];

    $conn = new PDO('mysql:dbname=' . $dbname . ';host=' . $dbhost, $_ENV["dbuser"], $_ENV["dbpassword"]);
    //    $conn = new PDO("mysql:dbname=topmarkvs;host=localhost", "root", "");

    $query = $conn->prepare("SELECT * FROM users WHERE usuario=:usuario AND senha=:senha");
    $query->bindParam(':usuario', $user);
    $query->bindParam(':senha', $password);
    $query->execute();

    $result = $query->fetchAll(PDO::FETCH_ASSOC);

    return $result;
}

// function saveCar()
// {
//     global $data;

//     // $car = new Car();
//     // $car->setName($data['carsName']);
//     // $car->setPrice($data['carsPrice']);
//     // $car->setImage($data['carsImage']);

//     $targetDir = '..' . DIRECTORY_SEPARATOR . 'img'
//         . DIRECTORY_SEPARATOR . $car->getName()
//         . DIRECTORY_SEPARATOR;

//     $targetFile = $targetDir . basename($_FILES['image']['name']);

//     return $targetFile;
// }

if (testLogin()) {
    // saveCar();
    $car = new Car();
    $car->setName($data['carsName']);
    $car->setPrice($data['carsPrice']);
    $car->setImage($data['carsImage']);

    echo json_encode(
        array(
            'acesso' => 'concedido',
            'carsName' => $car->getName(),
            'carsPrice' => $car->getPrice(),
            'carsImage' => $car->getImage()
            // 'path'=>saveCar()
        )
    );
} else {
    echo json_encode(
        array(
            'acesso' => 'negado'
        )
    );
}
http_response_code(200);
?>
