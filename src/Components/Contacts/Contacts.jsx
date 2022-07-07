import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contacts.css";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { Box } from "@mui/material";

const Contacts = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [reverseCard, setReverseCard] = React.useState(false);
  return (
    <>
      <div id="body">
        <h1 className="label">
          <span>let's keep in touch</span>
        </h1>
      </div>

      <Box id="contacts">
        <div
          className="contacts__info"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <h4>phone</h4>
          <p>
            <a href="tel:+996550632211">
              <FaPhone /> +996550632211
            </a>
          </p>
        </div>

        <Box
          className="contacts__info"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <h4>what's App</h4>
          <p>
            <a href="https://wa.me/996550632211" target="blank">
              <FaWhatsapp /> +996550632211
            </a>
          </p>
        </Box>

        <div
          className="contacts__info"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <div>
            <h4>working hours</h4>
            <h3>mon - sun</h3>
            <p>9:00 am - 9:00 pm</p>
          </div>
        </div>
      </Box>

      <Box id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.8538222314514!2d74.59564019999999!3d42.8759294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dfa8593437%3A0x5c297e489f5d64e5!2z0KbQuNC60LvQvtC9!5e0!3m2!1sru!2skg!4v1654372061303!5m2!1sru!2skg"
          frameBorder="0"
          style={{
            width: "1400px",
            height: "400px",
            marginBottom: "30px",
            marginLeft: "5px",
          }}></iframe>
      </Box>
    </>
  );
};

export default Contacts;
