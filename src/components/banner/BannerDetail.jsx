import React from "react";
import "./BannerDetail.css";
import CarImg from "../../assets/img_car.png";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
// import { searchApi } from "../../api";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

const API_URL = "https://bootcamp-rent-cars.herokuapp.com/customer/car";


const BannerDetail = () => {
  //untuk menamung query inputan, value dari inputan untuk hitting api
  // const searchApi =(q)=>{
  //   console.log({q})
  // }
 


  const [detailData, setDetailData] = useState({});
  const {id} = useParams();
  

  useEffect(()=>{
    const fetchData= async()=>{
      const response= await axios.get(`${API_URL}/${id}`);
      setDetailData(response.data);
    }
    fetchData();
  },[]
  );

  return (
    <>
    <div className="bannersearch__section">
      <div className="detail__section">
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
                    <Nav
                      className="justify-content-end flex-grow-1 pe-3 "
                      
                    >
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
        </div>
        
      </div>
    </div>  

      <Card className="search__section">
        <Form className="search__Container">
        <Form.Group className="" controlId="exampleForm.ControlInput1">
              <Form.Label>Nama Mobil</Form.Label>
     
              <Form.Control
                
                id="nama"
                placeholder="ketik nama/tipe mobil"
              />
            </Form.Group>

            <Form.Group className="form__Input">
              <Form.Label>Kategori</Form.Label>
              <Form.Select
              
                id=""
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
                
                id=""
                placeholder="Disewa"
              >
                <option hidden label="Disewa" value="" />
                <option value={true}>Disewakan</option>
                <option value={false}>Tidak Disewakan</option>
              </Form.Select>
            </Form.Group>
          <a href="">
            <Link to="/detail">Cari Mobil</Link>
          </a>
          {/* <button classname="">Cari Mobil
              </button> */}
        </Form>
      </Card>

      <div className="container about__section">
        <div className="about__detail">
          <h5>Tentang Paket</h5>
          <h5>Include</h5>
          <ul>
            <li> Apa saja yang termasuk dalam paket misal durasi max 12 jam<br/></li>
            <li>Sudah termasuk bensin selama 12 jam<br/></li>
            <li>Sudah termasuk Tiket Wisata<br/></li>
            <li>Sudah termasuk pajak<br/></li>
          </ul>    
          <h5>Exclude</h5>
          <ul>        
            <li>  Tidak termasuk biaya makan sopir Rp 75.000/hari<br/></li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam<br/></li>
            <li>Tidak termasuk akomodasi penginapan<br/></li>           
          </ul> 
          <h5>Refund, Reschedule, Overtime</h5>
          <ul>
            <li> Tidak termasuk biaya makan sopir Rp 75.000/hari<br/></li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam<br/></li>
            <li>Tidak termasuk akomodasi penginapan<br/></li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari<br/></li>
            <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam<br/></li>
            <li>Tidak termasuk akomodasi penginapan<br/></li>
            <li>TTidak termasuk biaya makan sopir Rp 75.000/hari<br/></li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam<br/></li>
            <li>Tidak termasuk akomodasi penginapan<br/></li>
          </ul> 
        </div>

        <div className="about__Result">
        {/* key={detailData.id} */}
          <div className="car__Wrapper" >
            <img className="carImg" src={detailData.image} alt={detailData.name} />
            <div>{detailData.name}</div>
            <div className="detailPrice">{detailData.price}</div>
          </div>

        
        
      </div>
    </div>
  </>
  );
};

export default BannerDetail;
