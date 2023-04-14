<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header>
        <div class="logo">
            <img src="" alt="logo" class="logo">
        </div>    
        <nav>
            <ul>
                <li>WELCOME</li>
                <li>SERVICES</li>
                <li>Showroom</li>
                <li>About Us</li>
            </ul>
        </nav>
        <div class="conta">
            <?php 
                if (isset($_SESSION)){
                    echo "
                        sessão iniciada.
                    ";
                }else{
                    echo "<span>Login</span>";
                    echo "<span>Sign up</span>";
                }
            ?>
        </div>
    </header>
    <nav class="admin">
        <ul>
            <li>DASHBOARD</li>
            <li>POSTS</li>
            <li>COMMENTS</li>
            <li>USERS</li>
        </ul>
    </nav>
    <main></main>
    <footer>
        <div class="logo">
                <img src="" alt="logo" class="logo">
            </div>    
            <nav>
                <ul>
                    <li>WELCOME</li>
                    <li>SERVICES</li>
                    <li>Showroom</li>
                    <li>About Us</li>
                </ul>
            </nav>'
    </footer>
</body>
</html>