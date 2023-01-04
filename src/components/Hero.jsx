import React from 'react';

import './styles/Hero.css';

const Hero = ({ title }) => {
  return (
    <section className="hero hero-slide-1">
      <div className="hero-container">
        <article className="hero-container__text-box">
          <h1>{title}</h1>
          <p>
            Aun no tengo definido mi E-C
          </p>
        </article>
      </div>
    </section>
  );
};

export default Hero;