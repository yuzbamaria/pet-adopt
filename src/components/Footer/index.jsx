import React from "react";

// function Footer(props) {
//     return(<footer>
//         Footer
//     </footer>)
// }

// export default Footer


const currentYear = new Date().getFullYear();

function Footer() {
  return (
    
    <footer className="footer text-center d-flex justify-content-center align-items-center pb-2">
      <p><span id="current-year">©</span>
      {currentYear} Maria Yuzba & Saif Uddin. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;