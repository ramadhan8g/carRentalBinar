import React from "react";
import "./BannerSearchResult.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { getCarList } from "../../api";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

const API_URL = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car";
const PRICE_OPTION = {
  small: {
    maxPrice: 400000,
  },
  medium: {
    minPrice: 400000,
    maxPrice: 600000,
  },
  large: {
    minPrice: 600000,
  },
};

const BannerSearchResult = () => {
  const [resultData, setResultData] = useState([]);

  const location = useLocation();
  const { name, category, price, isRented } = location.state || {};

  const handleClick = async () => {
    console.log("Nama: ", name);
    console.log("Category: ", category);
    console.log("Price: ", price);
    console.log("Is Rented: ", isRented);
    const getPrice = PRICE_OPTION[price];

    const response = await axios.get(API_URL, {
      params: {
        name,
        category,
        ...getPrice,
        isRented,
      },
    });

    setResultData(response.data.cars);
  }

  useEffect(() => {
    const fetchData = async () => {
      const getPrice = PRICE_OPTION[price];

      const response = await axios.get(API_URL, {
        params: {
          name,
          category,
          ...getPrice,
          isRented,
        },
      });
      setResultData(response.data.cars);
    };
    fetchData();
  });

  return (
    <>
      <div className="banner__section">
        <div className="navbar__section">
          {[false].map((expand) => (
            <Navbar key={expand} bg="" expand="lg" className="mb-3">
              <Container>
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
                  style={{ width: "50%" }}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      bcr
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3 ">
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

        <div className="bannersearch__section">
          <div className="hero__section">
            {/* <div className="hero__detail">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
          </div> */}
            {/* <div className="hero__image">
            <img src={CarImg} alt="" />
          </div> */}
          </div>
        </div>

        <Card className="searchresult__section">
          <Form className="search__Container">
            <Form.Group className="" controlId="exampleForm.ControlInput1">
              <Form.Label>Nama Mobil</Form.Label>
              {/* onChange={({target})=> searchApi(target.value)} */}
              <Form.Control
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="nama"
                placeholder="ketik nama/tipe mobil"
              />
            </Form.Group>

            <Form.Group className="form__Input">
              <Form.Label>Kategori</Form.Label>
              <Form.Select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                id="kategori"
                placeholder="Masukan Kapasitas Mobil"
                type="select"
              >
                <option hidden label="Masukan Kapasitas Mobil" value="" />
                <option label="2 - 4 orang" value="small" />
                <option label="4 - 6 orang" value="medium" />
                <option label="6 - 8 orang" value="large" />
              </Form.Select>
            </Form.Group>

            <Form.Group className="form__Input">
              <Form.Label>Harga</Form.Label>
              <Form.Select
                value={price}
                id="harga"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                placeholder="Masukan Harga Sewa per Hari"
              >
                <option hidden label="Masukan Harga Sewa per Hari" value="" />
                <option value="small">{"<"} Rp. 400.000</option>
                <option value="medium">Rp. 400.000 - Rp. 600.000</option>
                <option value="large">{">"} Rp. 600.000</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="form__Input">
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={isRented}
                onChange={(e) => {
                  setIsRented(e.target.value);
                }}
                id="status"
                placeholder="Disewa"
              >
                <option hidden label="Disewa" value="" />
                <option value={true}>Disewakan</option>
                <option value={false}>Tidak Disewakan</option>
              </Form.Select>
            </Form.Group>



            <button onClick={handleClick}>
              <Link to="/searchresult" 
              state={{ name, category, price, isRented }}
              >Edit
              </Link>
            </button>
            {/* <button classname="">Cari Mobil
              </button> */}
          </Form>
        </Card>
      </div>

      <div className="car__Container">
        {/* <CarTampilList /> */}
        {resultData.map((car) => (
          <div className="car__Wrapper" key={car.id}>
          <img className="carImg" src={car.image} alt={car.name} />
          <div>{car.name}</div>
          <div className="carCategory">{car.category}</div>
          <div className="carPrice">{car.price}</div>
          <div className="carStatus">{car.status}</div>
          <div className="carDetail">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
            dolorum!
          </div>
          <button >
          <Link style={{ color: "white", textDecoration: "none" }} 
          to={`/detail/${car.id}`}
          
          >Pilih Mobil</Link>
          </button>
          
        </div>
        ))}
      </div>
    </>
  );
};

export default BannerSearchResult;
