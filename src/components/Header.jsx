

function Header(){
    const logo = "./src/img/logo/logoNoBackground.png";
    return (
        <>
            <header id="#">
                <a href="/">
                <div className="logo">
                    <img src={logo} alt="logo" className="logo"/>
                    <h1>TOPMARK VEHICLE SOLUTIONS</h1>
                </div>    
                </a>
                <nav>
                    <ul>
                        <li><a href="#">WELCOME</a></li>
                        <li><a href="/showroom">SHOWROOM</a></li>
                        <li><a href="#aboutUs">ABOUT US</a></li>
                    </ul>
                </nav>
                <div className="conta">
                    <h4><a href="/admin">Login</a></h4>
                </div>
        </header>
        </>
    )
}

export default Header