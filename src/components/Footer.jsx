import logo from "/img/logo/logoNoBackground.png";

function Footer(onLandingPage) {
  let whereSymbol = onLandingPage ? "#" : "/";
  function verifyLogin() {
    let login = false;

    if (login) {
    } else {
      let loginImg = "img/sfx/login.png";

      return (
        <>
          <a href="/admin">
            <img src={loginImg} alt="" />
            <h4>Login</h4>
          </a>
        </>
      );
    }
  }

  return (
    <>
      <footer id="#">
        <a href={whereSymbol}>
          <div className="logo">
            <img src={logo} alt="logo" className="logo" />
            <h1>TOPMARK VEHICLE SOLUTIONS</h1>
          </div>
        </a>
        <nav>
          <ul>
            <li>
              <a href={whereSymbol}>WELCOME</a>
            </li>
            <li>
              <a href="/showroom">SHOWROOM</a>
            </li>
            <li>
              <a href={whereSymbol + "aboutUs"}>ABOUT US</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
