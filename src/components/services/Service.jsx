import React from "react";
import "./service.css";
import ServiceImg from "../../assets/img_service.png";
import FiCheck from "../../assets/fi_check.png";

const Service = () => {
  return (
    <section id="service">
      <div className="container service__img">
        <img src={ServiceImg} alt="" />
      </div>
      <div className="container service__detail">
        <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
        <p>
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>
        <ul className="service__items">
          <div className="service__item">
            <img src={FiCheck} alt="" />
            <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
          </div>
          <div className="service__item">
            <img src={FiCheck} alt="" />
            <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
          </div>
          <div className="service__item">
            <img src={FiCheck} alt="" />
            <li>Sewa Mobil Jangka Panjang Bulanan</li>
          </div>
          <div className="service__item">
            <img src={FiCheck} alt="" />
            <li>Gratis Antar - Jemput Mobil di Bandara</li>
          </div>
          <div className="service__item">
            <img src={FiCheck} alt="" />
            <li>Layanan Airport Transfer / Drop In Out</li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Service;
