import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(){
    const navigate = useNavigate(); // <-- get history from hook
    let Acesso

    function requestLoginAPI(event){
        event.preventDefault()

        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('http://localhost/1A_%20freelancers/chrissyboy/api/iniciarSessionAPI.php', {user: user, password: password})
        .then(response => {
            console.log(response.data)

            if(response.data["acesso"]=='concedido'){
                Acesso = 1
                navigate("/dashboard");                
            }else{
                Acesso = 0
            }

        })
        .catch(response => {
            console.log(response.error);
        });
    }

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    

    return (
        <>
            <div className="telaCompleta">
                <div className="quadradoLogin">
                    <div className="L">
                        <h1><b>Login</b></h1>
                        <p>Login to your account to enter on this page</p>
                    </div>
                    <div className="R">
                        <form onSubmit={requestLoginAPI} method="POST">
                            <label htmlFor="user">User</label><br></br>
                            <input type="text"  name="user" autoComplete="off" value={user} onChange={(e)=>{setUser(e.target.value) }}/>
                            <br></br>
                            <label htmlFor="password">Password</label><br></br>
                            <input type="password"  name="password" value={password} onChange={(e)=>{setPassword(e.target.value) }} />
                            <br />
                            <button type="submit">Enviar</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login