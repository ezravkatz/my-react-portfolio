import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-pic" style={{ width: "30%" }} alt="cover" />
      <div className="my-2">
        <p>
          Welcome! My name is Ezra Katz. I am a full stack developer from Miami, Florida. 
        </p>
      </div>
    </section>
  );
}

export default About;