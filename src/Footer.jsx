import React from "react";

// Define a functional component named Footer
const Footer = () => {
  const year = new Date().getFullYear(); // Get the current year

  return (
    <>
      <footer>  {/* Changed from <Footer> to <footer> */}
        <p>copyright@{year}</p>
      </footer>
    </>
  );
};

export default Footer;
