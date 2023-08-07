import React from 'react';
import brunoPic from '../../assets/small/portraits/brunopic.jpg'

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
      <div className="profile-img my-5">
        <img
            style={{
              width: "135px",
              height: "135px",
              borderRadius: "50%",
            }}
            src={brunoPic}
            alt="Official headshot of Bruno Rosarini"
          />
        </div>
        <p>
      Hi my name is Bruno Rosarini and I am 33 year old Italian man.
        </p>
        <p>
  I have worked as a chef
                     most of my younger years having an intense love for food. I have also worked in construction, 
                     snow removal and Logo/Clothing design. Logo design being my most recent field of work has broguht 
                     me to really love computers more than I thought it ever could and is the biggest reason I am very 
                     interested in coding and web development. I plan on excelling and breaking through my ceiling as a
                     coder/developer with every project I take upon myslef so i can be the best.
        </p>
      </div>
    </section>
  );
}

export default About;
