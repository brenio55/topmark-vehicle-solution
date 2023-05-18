function Banner(){
    return (
        <>
            <section className="blackFrame">
                <div className="titles">
                    <h1>WELCOME TO TOPMARK.</h1>
                    <span className="welcomeLine"></span>
                    <div className="marks">
                        <img src='img/marks/mercedes.png' alt="" className="mercedes mark" />
                        <img src='img/marks/audi.png' alt="" className="audi mark" />
                        <img src='img/marks/bmw.png' alt="" className="bmw mark" />
                        <img src='img/marks/porsche.png' alt="" className="porsche mark" />
                        <img src='img/marks/landRover.png' alt="" className="landRover mark" />
                    </div>
                </div>
            </section>
            <a href="/showroom"><button className="buttonDefault viewShowroom">VIEW SHOWROOM</button></a>
            <img alt="" src="/src/img/sfx/setaWelcomeShowroom.png" className="setaWelcomeShowroom" />
        </>
    )
}

export default Banner