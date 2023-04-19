<?php 
    session_start();
    if (!isset($_SESSION["page"])){
        $_SESSION["page"] = "dashboard";
    }

   
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/style.css">
    <?php 
        $logo = '../img/logoNoBackground.png';
        
    ?>
</head>
<body>
    <?php include '../commonPages/header.php'; ?>
    <nav class="admin">
        <ul>
            <li id="dashboard">DASHBOARD</li>
            <li id="posts">POSTS</li>
            <li id="comments">COMMENTS</li>
            <li id="users">USERS</li>
        </ul>
    </nav>
    <main>
        
    </main>
    <footer>
        <div class="logo">
                <img src="" alt="logo" class="logo">
            </div>    
            <nav>
                <ul>
                    <li>WELCOME</li>
                    <li>SERVICES</li>
                    <li>SHOWROOM</li>
                    <li>ABOUT US</li>
                </ul>
            </nav>
    </footer>
</body>
</html>
<script
  src="https://code.jquery.com/jquery-3.6.4.slim.min.js"
  integrity="sha256-a2yjHM4jnF9f54xUQakjZGaqYs/V1CYvWpoqZzC2/Bw="
  crossorigin="anonymous"></script>
<script>
   
</script>