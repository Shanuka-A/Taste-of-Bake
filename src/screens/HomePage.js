import React from 'react';
import { Link } from 'react-router-dom';
import BannerBackground from "../Pic/home-banner-background.png";
import BannerImage from "../Pic/logo.png";

import { FiArrowRight } from "react-icons/fi";

const HomePage = () => {
  return (
    <div>
      <div className="home-container">
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
          
          <div className="home-text-section">
            <div className='primary-text1'>
              Your Favorite Cakes In Here ! ! !
            </div>
            <p className="primary-text">
              Our skilled bakers handle all the meticulous details, from baking to decorating, ensuring every slice is a delightful experience. Indulge in our heavenly creations!
            </p>
            {/* Link the button to the '/' route */}
            <Link to="/" className="secondary-button">
              Explore Now <FiArrowRight />
            </Link>
          </div>
          
          <div className="home-image-section">
            <img src={BannerImage} alt="" style={{ width: '45%', height: '300px', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
