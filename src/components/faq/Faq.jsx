import React from 'react'
import './faq.css'
import Form from 'react-bootstrap/Form';

const Faq = () => {
  return (
    <section id="faq">
      <div className="faqLeft">
      <h2>Frequently Asked Question</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>

      <div className="faqRight">
      <Form.Group className="mb-3 ">
      <Form.Select className="py-3 px-3">
          <option>Apa saja syarat yang dibutuhkan?</option>
      </Form.Select>

      </Form.Group>

      <Form.Group className="mb-3 ">
      <Form.Select className="py-3 px-3">
          <option>Berapa hari minimal sewa mobil lepas kunci?</option>
      </Form.Select>

      </Form.Group>

      <Form.Group className="mb-3 ">
      <Form.Select className="py-3 px-3">
          <option>Berapa hari sebelumnya sabaiknya booking sewa mobil?</option>
      </Form.Select>

      </Form.Group>

      <Form.Group className="mb-3 ">
      <Form.Select className="py-3 px-3">
          <option>Apakah Ada biaya antar-jemput??</option>
      </Form.Select>

      </Form.Group>
      <Form.Group className="mb-3 ">
      <Form.Select className="py-3 px-3">
          <option>Bagaimana jika terjadi kecelakaan?</option>
      </Form.Select>

      </Form.Group>
      </div>
      
    </section>
  )
}

export default Faq