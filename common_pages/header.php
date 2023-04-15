<header>
        <div class="logo">
            <img src=<?=$logo?> alt="logo" class="logo">
            <h1>TOPMARK VEHICLE SOLUTIONS</h1>
            
        </div>    
        <nav>
            <ul>
                <li>WELCOME</li>
                <li>SERVICES</li>
                <li>SHOWROOM</li>
                <li>ABOUT US</li>
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