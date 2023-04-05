import React from "react";
import "./header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import CarImg from "../../assets/img_car.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => setIsOpen(!isOpen);

  return (
    <header>
      <div className="container header__container">
        {/* <div className="logo__container">
      <a href="#">Binar <span>Academy</span></a>
      </div>
     <div className="menu__container">
      <a href="#Service">Our Services</a>
      <a href="#Whyus">Why Us</a>
      <a href="#Testimonial">Testimonial</a>
      <a href="#Faq">FAQ</a>
     </div> */}

  
        {/* navbar  */}
        {[false, ].map((expand) => (
          <Navbar key={expand} bg="" expand="lg" className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#">
                Binar <span>Academy</span>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                style={{width:"50%"}}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    bcr
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#service">Our Services</Nav.Link>
                    <Nav.Link href="#whyus">Why Us</Nav.Link>
                    <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>

      <div className="hero__section">
        <div className="hero__detail">
          <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <a>
            <Link to="/search"> Mulai Sewa Mobil</Link>
          </a>
        </div>
        <div className="hero__image">
          <img src={CarImg} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
