import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const images = ["/image1.png", "/image2.png", "/image3.png"];

const MyApp = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <div className="app-container">
      <div className="section section-1">
        <Slider {...carouselSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="background-image"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="section section-2">
        <div className="map-container">
          <div className="check-in-button">Check In</div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.748258186381!2d72.87172257525367!3d19.206194682025313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b738c9e09369%3A0x4be91c068af00f54!2sThakur%20College%20of%20Science%20and%20Commerce!5e0!3m2!1sen!2sin!4v1733640446882!5m2!1sen!2sin"
            width="100%"
            height="200px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Thakur College Location"
          ></iframe>
        </div>
        <div className="location-details">
          <h2>Mumbai, Maharashtra, India</h2>
          <p>
            Thakur College, 01, near Kandivali East, Kandivali, Singh Agri
            Estate, Kandivali East, Mumbai, Maharashtra 400101, India
          </p>
          <p>
            <strong>Lat:</strong> 19.20578° <strong>Long:</strong> 72.873526°
          </p>
          <p>21/09/24 09:39 AM GMT +05:30</p>
        </div>
      </div>
    </div>
  );
};

export default MyApp;
