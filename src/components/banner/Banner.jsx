import React from "react";
import "./banner.css";
import CarImg from "../../assets/img_car.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Banner = () => {
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

        <Navbar expand="lg">
          <Container className="navbarContainer">
            <div className="logoHeader">
              <Navbar.Brand href="#home">
                Binar <span>Academy</span>
              </Navbar.Brand>
            </div>

            <div className="navLink">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto menuContainer ">
                  <Nav.Link href="#Service">Our Services</Nav.Link>
                  <Nav.Link href="#Whyus">Why Us</Nav.Link>
                  <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                  <Nav.Link href="#faq">FAQ</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>

      <div className="hero__section">
        <div className="hero__detail">
          <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <button>
            <Link to="/detail"> Mulai Sewa Mobil2</Link>
          </button>
        </div>
        <div className="hero__image">
          <img src={CarImg} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Banner;
