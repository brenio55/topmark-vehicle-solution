function Contact(){
    return (
        <>
            <section className="contactUs">
                <h2 className="titleDefault">Contact Information</h2>

                <div className="contactInfo">
                    <div className="flex">
                        <img className="phoneIcon" src="src/img/contactUs/phone.png" alt="telephone icon" />
                        <h3>07871514493</h3>
                    </div>
                    <div className="flex">
                        <img className="emailIcon" src="src/img/contactUs/email.png" alt="email icon" />
                        <h3>chris@topmarkvehiclesolutions.co.uk</h3>
                    </div>
                    <div className="flex">
                        <img className="addressIcon" src="src/img/contactUs/address.png" alt="address icon" />
                        <h3>178 Harvest Fields Way, Sutton Coldfield B75 5TJ</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact