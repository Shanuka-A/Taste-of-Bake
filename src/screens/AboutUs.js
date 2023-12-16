import React from 'react';
import CakeImage1 from '../Pic/bake1.jpg';
import CakeImage2 from '../Pic/bake2.jpg';
import BannerBackground from "../Pic/home-banner-background.png";


const AboutUs = () => {
  return (
    <div className="about-us-container" style={{ display: 'flex', padding: '20px', alignItems: 'center' }}>

      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
      </div>

      <div style={{ flex: 1, textAlign: 'left', marginRight: '20px' }}>
        <h2 style={{ fontSize: '40px', color: '#333', marginBottom: '20px' }}>About Our Bakery</h2>
        <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
          Step into the enchanting realm of delectable delights at Taste of Bakes! We boast in
          creating exquisite cakes that not only tantalize your taste buds with heavenly flavors
          but also captivate your eyes with their stunning designs. Our commitment to culinary
          excellence ensures each bite is a symphony of flavors and textures, making your
          experience truly delightful.
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          Our talented team of bakers is dedicated to creating not just cakes but edible
          masterpieces. We use only the finest ingredients to ensure that each bite is a delightful
          experience. Suspendisse potenti. Curabitur nec turpis at nunc auctor facilisis vel vel
          ligula.
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          Whether you're celebrating a birthday, wedding, or any special occasion, our cakes will
          add a touch of sweetness to your moments. Explore our gallery for a sneak peek into the
          world of our delectable creations!
        </p>
        {/* Add more content or details about your team, mission, etc. */}
      </div>

      <div style={{ flex: 1, textAlign: 'center' }}>
        <img src={CakeImage1} alt="Cake 1" style={{ width: '300px', height: '200px', margin: '0 10px' }} />
        <img src={CakeImage2} alt="Cake 2" style={{ width: '300px', height: '200px', margin: '0 10px' }} />
      </div>

     

    </div>
  );
};

export default AboutUs;
