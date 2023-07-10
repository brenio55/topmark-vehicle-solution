<?php
// Database connection parameters
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "topmarks";

try {
    // Create a PDO connection
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Set PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create the "sessions" table
    $sql = "CREATE TABLE IF NOT EXISTS sessions (
      id INT(11) PRIMARY KEY,
      userId INT(11),
      sessionToken VARCHAR(255),
      startDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      endDate TIMESTAMP DEFAULT NULL
    )";
    $conn->exec($sql);
    echo "Table 'sessions' created successfully\n";

    // Create the "users" table
    $sql = "CREATE TABLE IF NOT EXISTS users (
      id INT(9) PRIMARY KEY,
      usuario VARCHAR(50),
      tipoUsuario VARCHAR(15),
      senha VARCHAR(120),
      dataRegistro TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6),
      sessionToken VARCHAR(255)
    )";
    $conn->exec($sql);
    echo "Table 'users' created successfully\n";

    // Create the "postbank" table with foreign key constraints
    $sql = "CREATE TABLE IF NOT EXISTS postbank (
      id INT(11) PRIMARY KEY,
      imgSrc TEXT,
      orderPosition INT(11),
      postDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      postBy VARCHAR(255),
      idPostBy INT(11),
      nameCar VARCHAR(255),
      price INT(11),
      FOREIGN KEY (postBy) REFERENCES users(usuario),
      FOREIGN KEY (idPostBy) REFERENCES users(id)
    )";
    $conn->exec($sql);
    echo "Table 'postbank' created successfully\n";
} catch(PDOException $e) {
    echo "Error creating table: " . $e->getMessage();
}

// Close the database connection
$conn = null;
?>

