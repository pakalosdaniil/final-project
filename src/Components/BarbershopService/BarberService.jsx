import { Box, Container, Paper } from "@mui/material";
import React from "react";

const BarberService = () => {
  return (
    <div id="body">
      <h1 className="label">
        <span>service</span>
      </h1>
      <Container style={{ margin: "0 auto" }} maxWidth="md">
        <Box className="service">
          <Box className="service-image">
            <img src="images/haircuts.jpg" alt="" />
          </Box>
          <Box className="service__type">
            <h3>haircuts</h3>
            <p>
              Regular Haircut
              <hr />
              Kids Haircut
            </p>
            <a
              href="https://ru.fresha.com/book-now/mustachios-ggh3gzko/all-offer?id=709729&pId=666547"
              className="bookNow">
              book now
            </a>
          </Box>
        </Box>

        <Box className="service">
          <Box className="service-image">
            <img src="images/shaves.jpeg" alt="" />
          </Box>
          <Box className="service__type">
            <h3>shaves</h3>
            <p>
              Hot Towel Shave
              <hr />
              Cut and Shave
            </p>
            <a
              href="https://ru.fresha.com/book-now/mustachios-ggh3gzko/all-offer?id=709729&pId=666547"
              className="bookNow">
              book now
            </a>
          </Box>
        </Box>

        <Box className="service">
          <Box className="service-image">
            <img src="images/beard-trim.jpg" alt="" />
          </Box>
          <Box className="service__type">
            <h3>beard trim</h3>
            <p>
              Beard Trim
              <hr />
              Haircut + Beard Trim
            </p>
            <a
              href="https://ru.fresha.com/book-now/mustachios-ggh3gzko/all-offer?id=709729&pId=666547"
              className="bookNow">
              book now
            </a>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default BarberService;

{
  /* <div id="body">
  <h1>
    <span>service</span>
  </h1>
  <Box display={"flex"}>
    <Box>
      <a className="figure">
        <img src="images/haircuts.jpg" alt="" />
      </a>
      <div>
        <h3>haircuts</h3>
        <p>
          Regular Haircut
          <hr />
          Kids Haircut
        </p>
        <a
          href="https://ru.fresha.com/book-now/mustachios-ggh3gzko/all-offer?id=709729&pId=666547"
          className="bookNow">
          book now
        </a>
      </div>
    </Box> */
}
//     <Box>
//       <a className="figure">
//         <img src="images/shaves.jpeg" alt="" />
//       </a>
//       <div>
//         <h3>shaves</h3>
//         <p>
//           Hot Towel Shave
//           <hr />
//           Cut and Shave
//         </p>
//         <a
//           href="https://ru.fresha.com/book-now/mustachios-ggh3gzko/all-offer?id=709729&pId=666547"
//           className="bookNow">
//           book now
//         </a>
//       </div>
//     </Box>

//     <Box>
//       <a className="figure">
// <img src="images/beard-trim.jpg" alt="" />
//       </a>
//       <div>
// <h3>beard trim</h3>
// <p>
//   Beard Trim
//   <hr />
//   Haircut + Beard Trim
// </p>
//         <a
//           href="https://ru.fresha.com/book-now/mustachios-ggh3gzko/all-offer?id=709729&pId=666547"
//           className="bookNow">
//           book now
//         </a>
//       </div>
//     </Box>
//   </Box>
// </div>;
