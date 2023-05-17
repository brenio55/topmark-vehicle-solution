

function Header(){
    const logo = "./src/img/logo/logoNoBackground.png";
    return (
        <>
            <header>
                <a href="/">
                <div className="logo">
                    <img src={logo} alt="logo" className="logo"/>
                    <h1>TOPMARK VEHICLE SOLUTIONS</h1>
                </div>    
                </a>
                <nav>
                    <ul>
                        <li>WELCOME</li>
                        <li>SHOWROOM</li>
                        <li>ABOUT US</li>
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