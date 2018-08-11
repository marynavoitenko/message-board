import React from 'react';
import homepageImg from '../assets/images/homepage-light.jpg';

const Home = () => {

  return (
    <div className="homepage">
      <div className="image-container">
        <img src={homepageImg} alt="homepage"/>
      </div>
    </div>
  );
};

export default Home;