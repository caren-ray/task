import Glide from "@glidejs/glide";
import React, { useEffect } from "react";
import "../Assets/css/glideslider.css";
import "../Assets/css/glideslider.theme.css";

const Glider = ({ children }) => {
  useEffect(() => {
    new Glide(".glide").mount();
  }, []);
  return (
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">{children}</ul>
        <div class="glide__bullets" data-glide-el="controls[nav]">
          <button class="glide__bullet" data-glide-dir="=0"></button>
          <button class="glide__bullet" data-glide-dir="=1"></button>
          <button class="glide__bullet" data-glide-dir="=2"></button>
        </div>
      </div>
    </div>
  );
};

export default Glider;
