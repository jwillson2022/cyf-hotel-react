import React from "react";
import logo from ".imageshotel-icon3.png";
function header() {
  return (
    <div className="page-header">
      <h4 className="text-left">Search Bookings</h4>
      <img src={logo} alt="hotel-icon" />
    </div>
  );
}

export default header;
