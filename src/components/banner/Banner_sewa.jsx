import React from "react";
import "./banner_sewa.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Banner_sewa = () => {
  return (
    <Card className="section__banner-sewa">
      <Card.Body className="banner-sewa__items">
        <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          ipsam veniam porro magni odio quod dolor corrupti libero. Eaque,
          facilis?
        </p>
        <a>
          <Link to="/search"> Mulai Sewa Mobil</Link>
        </a>
      </Card.Body>
    </Card>
  );
};

export default Banner_sewa;
