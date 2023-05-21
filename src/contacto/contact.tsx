import "./contact.css";
function Contact() {
  return (
    <div className="ContactContainer">
        <div className="contact-side ocult">
          <div className="titleContact"><h2>Need more information? contact me now</h2></div>

            <div className="buttons">
                <div className="socialLinks">
                <a href="https://www.linkedin.com/in/allison-aguero-b25584277" target="_blank" rel="noopener noreferrer" className="social-button">
                  <img className="fb" src="https://res.cloudinary.com/deynsndm5/image/upload/v1684627659/Imagenes/c59b2807ea44f0d70f41ca73c61d281d-icono-de-linkedin-logo-by-vexels_u3vqv2.png" alt="" />
                </a>
                <a href="https://twitter.com/AgueroAll" target="_blank" rel="noopener noreferrer" className="social-button">
                  <img className="twt" src="https://res.cloudinary.com/deynsndm5/image/upload/v1684611315/Imagenes/twitter-logo-svg-1_mmwebd.png" alt="" />
                </a>
                <a href="https://www.instagram.com/agueroallison/" target="_blank" rel="noopener noreferrer" className="social-button">
                  <img className="Ins" src="https://res.cloudinary.com/deynsndm5/image/upload/v1684611186/Imagenes/md_5b37de3263964_xcy3e5.png" alt="" />
                </a>
                </div>
            </div>
    </div>
  </div>
  );
}

export default Contact;
