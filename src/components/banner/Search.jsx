import React from "react";
import "./Search.css";
import CarImg from "../../assets/img_car.png";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { getCarList } from "../../api";
import { useEffect, useState } from "react";
import axios from "axios";

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

const BannerSearch = () => {
  //untuk menamung query inputan, value dari inputan untuk hitting api
  // const searchApi =(q)=>{
  //   console.log({q})
  // }

  // const [carTampil, setCarTampil] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState({});
  const [isRented, setIsRented] = useState("");
  const [resultData, setResultData] = useState([]);

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
  };

  // untuk menampung query inputan
  // useEffect(() => {
  //   getCarList().then((result) => {
  //     setCarTampil(result);
  //   });
  // }, []);

  // console.log({ carTampil: carTampil });

  // const CarTampilList = () => {
  //   return carTampil.map((car, i) => {
  //     return (
  //       <>
  //         <div className="car__Wrapper" key={i}>
  //           <img className="carImg" src={car.image} />
  //           <div className="carTitle">{car.name}</div>
  //           <div className="carCategory">{car.category}</div>
  //           <div className="carPrice">{car.price}</div>
  //           <div className="carStatus">{car.status}</div>
  //           <div className="carDetail">
  //             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
  //             dolorum!
  //           </div>
  //           <div className="carBtn">
  //             <button href="">
  //               <Link to="/detail">Pilih Mobil</Link>
  //             </button>
  //           </div>
  //         </div>
  //       </>
  //     );
  //   });
  // };

  return (
    <>
      <div className="search__sections">
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

        <div className="searchhero__section">
          <div className="hero__detail">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
          </div>
          <div className="hero__image">
            <img src={CarImg} alt="" />
          </div>
        </div>
      </div>

      <Card className="search__section">
        <Form className="search__Container">
          <Form.Group
            className="form__Input"
          >
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
          {/* <a >
            <Link to="/searchresult" >Cari Mobil</Link>
          </a> */}
          <Button  color="">
          <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/searchresult"
          state={{ name, category, price, isRented }}
        >
          Cari Mobil
        </Link>
          </Button>
        </Form>
      </Card>

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
            
          </div>
        ))}
      </div>
    </>
  );
};

export default BannerSearch;
