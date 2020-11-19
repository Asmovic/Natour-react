/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import vid1 from '../assets/videos/video.mp4';
import vid2 from '../assets/videos/video.webm';

export default () => (
  <section className="section-stories">
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={vid1} type="video/mp4" />
        <source src={vid2} type="video/webm" />
        Your browser is not supported!
      </video>
    </div>
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">
        We make people genuinely happy
      </h2>
    </div>
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img src="https://i.ibb.co/VqRFbTQ/nat-8.jpg" alt="tour image" className="story__image" />
          <figcaption className="story__caption">Adenuga Hellen</figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            I had the best week ever with my family
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae architecto
            libero laboriosam repellat ipsum.
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img src="https://i.ibb.co/DfHWcjw/nat-9.jpg" alt="tour image" className="story__image" />
          <figcaption className="story__caption">Olajuwon Eric</figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Wow! my life is complety different now
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae architecto
            libero laboriosam repellat ipsum.
          </p>
        </div>
      </div>
    </div>
    <div className="u-center-text u-margin-top-huge">
      <a href="#" className="btn-text">Read all stories →</a>
    </div>
  </section>
);
