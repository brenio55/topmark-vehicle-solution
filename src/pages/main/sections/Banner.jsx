function Banner(){
    return (
        <div>
            <div className="blackFrame">
                <div className="titles">
                    <div className="flex column">
                        <div className="L">
                            <h1 className="theTop">THE TOPMARK</h1>
                            <h1 className="theTop">THE TOP VEHICLES</h1>
                        </div>
                    </div>
                </div>                
                <video className="bmwVideo" loop muted autoPlay>
                    <source src="src\assets\videos\bmwBanner.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}

export default Banner