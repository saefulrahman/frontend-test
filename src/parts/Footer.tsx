import React from "react";
import BrandIcon from "parts/BrandIcon";
export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <BrandIcon />
              <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 text-md-start">
              <h4>Contact Us</h4>
              <p>
                Pipamas Building, Jl. Soekarno-Hatta No.409, Karasak, Kec. Astanaanyar <br />
                Kota Bandung, Jawa Barat 40243
                <br />
                Indonesia <br />
                <br />
                <strong>Phone:</strong> +6281312998488
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Eigen News</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Created by <a href="https://saefulrahman.my.id/">Saeful Rahman</a>
        </div>
      </div>
    </footer>
  );
}
