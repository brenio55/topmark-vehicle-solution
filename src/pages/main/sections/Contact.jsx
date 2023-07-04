import { useEffect, useState } from "react";

function Contact() {
  const [iconPhone, setIconPhone] = useState();
  const [iconMap, setIconMap] = useState();
  const [iconEmail, setIconEmail] = useState();

  // useEffect(() => {
  //     const updateWindowDimensions = () => {
  //       const newWidth = window.innerWidth;
  //       setWidth(newWidth);
  //       console.log('updating width');
  //     };

  //     window.addEventListener("resize", updateWindowDimensions);
  //     return () => {
  //       window.removeEventListener("resize", updateWindowDimensions);
  //     };
  //   }, []);

  //   useEffect(() => {
  //     if ((width >= 320) && (width < 600)) {
  //       setCarPerPage(1);
  //     } else if ((width >= 600) && (width < 1150)) {
  //       setCarPerPage(3);
  //     } else if ((width >= 1150) && (width < 1368)) {
  //       setCarPerPage(4);
  //     }
  //   }, [width]);

  return (
    <>
      <section className="contactUs">
        <h2 className="titleDefault">Contact Information</h2>

        <div className="contactInfo">
          <div className="flex">
            <img
              className="phoneIcon"
              src="img/contactUs/phone.webp"
              alt="telephone icon"
            />
            <h3>07871514493</h3>
          </div>
          <div className="flex">
            <img
              className="emailIcon"
              src="img/contactUs/email.webp"
              alt="email icon"
            />
            <h3>chris@topmarkvehiclesolutions.co.uk</h3>
          </div>
          <div className="flex">
            <img
              className="addressIcon"
              src="img/contactUs/address.webp"
              alt="address icon"
            />
            <h3>178 Harvest Fields Way, Sutton Coldfield B75 5TJ</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
