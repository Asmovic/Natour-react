/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export default () => (
  <section className="section-about">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">
        Exciting tours for adventurous people
      </h2>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae architecto
          libero laboriosam repellat ipsum, molestiae consequatur amet perspiciatis aliquid repudiandae
          mollitia ipsam quisquam iste voluptatum at optio accusamus reiciendis!
        </p>
        <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex, porro
          vero corporis tempore magnam ut facilis sunt cumque nostrum ducimus iusto maxime provident cum?
          Qui doloribus aut amet expedita.
        </p>
        <a href="#" className="btn-text">Learn more →</a>
      </div>
      <div className="col-1-of-2">
        <div className="composition">
          <img srcSet="https://i.ibb.co/tL8md3t/nat-1.jpg 300w, https://i.ibb.co/xfHTGsp/nat-1-large.jpg 1000w" sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="photo 1" src="https://i.ibb.co/xfHTGsp/nat-1-large.jpg" className="composition__photo composition__photo--p1" />
          <img srcSet="https://i.ibb.co/kHhkZ6w/nat-2.jpg 300w, https://i.ibb.co/Zd1QcLT/nat-2-large.jpg 1000w" sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="photo 2" src="https://i.ibb.co/Zd1QcLT/nat-2-large.jpg" className="composition__photo composition__photo--p2" />
          <img srcSet="https://i.ibb.co/Wy2x5NX/nat-3.jpg 300w, https://i.ibb.co/PNmCGqm/nat-3-large.jpg 1000w" sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="photo 3" src="https://i.ibb.co/PNmCGqm/nat-3-large.jpg" className="composition__photo composition__photo--p3" />
          {/*                         <img src="img/nat-1-large.jpg" alt="photo 1" class="composition__photo composition__photo--p1">
        <img src="img/nat-2-large.jpg" alt="photo 2" class="composition__photo composition__photo--p2">
        <img src="img/nat-3-large.jpg" alt="photo 3" class="composition__photo composition__photo--p3"> */}
        </div>
      </div>
    </div>
  </section>
);
