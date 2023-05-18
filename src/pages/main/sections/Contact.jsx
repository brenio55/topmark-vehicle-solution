function Contact(){
    return (
        <>
            <section className="contactUs">
                <h2 className="titleDefault">Contact Information</h2>

                <div className="contactInfo">
                    <div className="flex">
                        <img className="phoneIcon" src="img/contactUs/phone.webp" alt="telephone icon" />
                        <h3>07871514493</h3>
                    </div>
                    <div className="flex">
                        <img className="emailIcon" src="img/contactUs/email.webp" alt="email icon" />
                        <h3>chris@topmarkvehiclesolutions.co.uk</h3>
                    </div>
                    <div className="flex">
                        <img className="addressIcon" src="img/contactUs/address.webp" alt="address icon" />
                        <h3>178 Harvest Fields Way, Sutton Coldfield B75 5TJ</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact