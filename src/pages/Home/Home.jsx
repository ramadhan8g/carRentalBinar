// import './App.css';

import Header from "../../components/header/Header";
// import Banner from '../../components/';
import BannerSewa from "../../components/banner/Banner_sewa";
import Service from "../../components/services/Service";
import WhyUs from "../../components/why_us/Whyus";
import Testimonials from "../../components/testimonials/Testimonial";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";
import Search from "../../components/search/Search";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Header />
      {/* <Banner/> */}
      <Service />
      <WhyUs />
      <Testimonials />
      <BannerSewa />
      <Faq />
      <Footer />
      {/* <Search/> */}
    </>
  );
};

export default App;
