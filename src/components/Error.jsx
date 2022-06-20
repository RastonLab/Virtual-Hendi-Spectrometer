import React from "react";
import "../style/VirtualHendiInterface.css";

export function Error(props) {
  return (
    <div className="spinner-container">
      <img src="Virtual-HeNDI-Spectrometer/images/error.png" className="error" alt="error" />
      <label>Error fetching spectrum!</label>
    </div>
  );
}

