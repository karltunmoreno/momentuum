import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">MOMENTUUM</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
      THE PICTURE STUDIO THAT WORKS FOR YOU AROUND THE CLOCK.
      FOR FAST AND GREAT QUALITY PICTURES WE ARE HERE FOR YOU.
        </p>
      </div>
    </section>
  );
}

export default About;
