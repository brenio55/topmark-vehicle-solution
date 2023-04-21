

function Login(){
    return (
        <div>
            <div className="telaCompleta">
                <div className="quadradoLogin">
                    <div className="L">
                        <h1><b>Login</b></h1>
                        <p>Login to your account to enter on this page</p>
                    </div>
                    <div className="R">
                        <form action="" method="POST">
                            <label htmlFor="user">User</label><br></br>
                            <input type="text"  name="user" autoComplete="off"/>
                            <br></br>
                            <label htmlFor="password">Password</label><br></br>
                            <input type="password"  name="password" />
                            <br />
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login