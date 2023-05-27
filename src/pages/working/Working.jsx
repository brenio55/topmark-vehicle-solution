function Working(){
    return (
        <>
        <style>
        {
            `@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');   

            img{
                width: 250px;
            }

            *{
                font-family: 'Poppins';
                box-sizing: border-box;
                
            }

            body{
                margin: 0;
                padding: 0px 0px;
                height: 100vh;
            }

            .imgFlex{
                display: flex;
                justify-content: center;
            }

            .botaoFlex, .textosFlex{
                display: flex;
                justify-content: center;
            }

            button{
                padding: 16px;
                background-color: blue;
                color: white;
                border: 2px solid rgb(255, 217, 0);
                border-radius: 10px;
                font-size: 25px;
                transition: all 0.2s;
                padding: 10px 40px 10px 40px;
            }

            button:hover{
                transition: all 0.2s;
                border: 2px solid rgb(255, 217, 0);
                border-radius: 12px;
                transform: scale(1.01);
                cursor: pointer;
            }

            .textosFlex{
                text-align: center;
            }
            h3{
                padding: 0px 20px 0px 20px;
                width: 300px;
                text-align: center;
            }`
        }
    </style>

            <div className="textosFlex">
                <h1 style={{marginBottom: 0}}>We're developing this section!</h1>
            </div>
            <div className="textosFlex">
                <p>We're currently developing this section and it'll be available soon! Click the button to come back to the home page.</p>
            </div>

            <div className="imgFlex"><img src="img/sfx/crane.gif" alt="" /></div>
            <div className="botaoFlex">
                <a href="../index.html" style={{textDecoration: null}}>
                    <a href="/"><button>Homepage</button></a>
                </a>
            </div>
        </>
    )
}

export default Working