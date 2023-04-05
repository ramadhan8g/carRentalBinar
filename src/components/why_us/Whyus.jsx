import React from 'react'
import './whyus.css'
import IconComplete from '../../assets/icon_complete.png'
import IconPrice from '../../assets/icon_price.png'
import IconTime from '../../assets/icon_24hrs.png'
import IconBadge from '../../assets/icon_professional.png'

const Whyus = () => {
  return (
    <section id='whyus'>
      <div className="whyus__header">
      <h2>Why Us?</h2>
      <p>Mengapa harus pilih Binar Car Rental?</p>
      </div>
      <div className="whyus__details">
        <div className="container whyus__detail">
          <img src={IconComplete} alt="" />
          <h5>Mobil Lengkap</h5>
          <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
        </div>
        <div className="container whyus__detail">
          <img src={IconPrice} alt="" />
          <h5>Harga murah</h5>
          <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
        </div>
        <div className="container whyus__detail">
          <img src={IconTime} alt="" />
          <h5>Layanan 24jam</h5>
          <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
        </div>
        <div className="container whyus__detail">
          <img src={IconBadge} alt="" />
          <h5>Supir profesional</h5>
          <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
        </div>
      </div>
    </section>
  )
}

export default Whyus