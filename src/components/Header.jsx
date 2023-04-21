

function Header(){
    const logo = "./src/img/logo/logoNoBackground.png";
    return (
        <div>
            <header>
                <div className="logo">
                    <img src={logo} alt="logo" className="logo"/>
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
                <div className="conta">
                    <h4><a href="/admin">Login</a></h4>
                </div>
        </header>
        </div>
    )
}

export default Header