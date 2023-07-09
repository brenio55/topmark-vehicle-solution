<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "root";

// Create a connection to MySQL
$conn = new mysqli($servername, $username, $password);

// Check the connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Create the "topmarks" database
$sql = "CREATE DATABASE IF NOT EXISTS topmarks";
if ($conn->query($sql) === TRUE) {
  echo "Database 'topmarks' created successfully\n";
} else {
  echo "Error creating database: " . $conn->error;
}

// Select the "topmarks" database
$conn->select_db("topmarks");

// Create the "sessions" table
$sql = "CREATE TABLE sessions (
  id INT(11) PRIMARY KEY,
  userId INT(11),
  sessionToken VARCHAR(255),
  startDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  endDate TIMESTAMP DEFAULT NULL
)";
if ($conn->query($sql) === TRUE) {
  echo "Table 'sessions' created successfully\n";
} else {
  echo "Error creating table 'sessions': " . $conn->error;
}

// Create the "users" table
$sql = "CREATE TABLE users (
  id INT(9) PRIMARY KEY,
  usuario VARCHAR(50),
  tipoUsuario VARCHAR(15),
  senha VARCHAR(120),
  dataRegistro TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6),
  sessionToken VARCHAR(255)
)";
if ($conn->query($sql) === TRUE) {
  echo "Table 'users' created successfully\n";
} else {
  echo "Error creating table 'users': " . $conn->error;
}

// Create the "postbank" table with foreign key constraints
$sql = "CREATE TABLE postbank (
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
if ($conn->query($sql) === TRUE) {
  echo "Table 'postbank' created successfully\n";
} else {
  echo "Error creating table 'postbank': " . $conn->error;
}

// Close the database connection
$conn->close();
?>

