let aboutUsImg = "img/aboutUs/aboutUs.webp";

function AboutUs(){
    return (
        <>
            <section className="AboutUs" id="aboutUs">
                <h2 className="titleDefault">About Us</h2>

                <div className="content flex">
                    <div className="L">
                        <img src={aboutUsImg} alt="" className="aboutUsImg" />
                        {/* <h4 className="">All of our services and vehicles are TOPMARK.</h4> */}
                        <h4>Topmark Vehicle Solutions are a family run business based in Sutton Coldfield, West Midlands. All of our vehicles are handpicked to ensure they are of the Topmark quality for us and our clients.</h4>
                        <p>All of our vehicles are carefully selected and have vigorous checks and inspections internally, externally and mechanically. We also carry out extensive checks into its history.</p>
                       
                        
                    </div>
                    <div className="R">
                        <h3 className="weAreTopmark">WE ARE TOPMARK.</h3>
                        
                        <p>We take pride in everything we do and pay close attention to the finer details to ensure that we meet your expectations so that you will return to us in the future for your next car.</p>

                        <p>Every vehicle is professionally prepared prior to sale with a full valet and detailing.</p>
                        
                        <p>We also offer a range of additional vehicle solutions tailored to your own design and specification. Our services include upgrades that range from external touches, such as privacy glass and automotive styling kits, internal upgrades such as Apple play in-car entertainment and cameras and security such as trackers and immobilisers. Ask for a no obligation quote today.</p>
                    </div>
                </div>
                <span className="setaDireita"></span>
            </section>
        </>
    )
}

export default AboutUs