/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export default () => (
  <footer className="footer">
    <div className="footer__logo-box">
      <picture className="footer__logo">
        <source srcSet="https://i.ibb.co/8BG2WNH/logo-green-small-1x.png 1x, https://i.ibb.co/Gvs0WcR/logo-green-small-2x.png 2x" media="(max-width: 37.5em)" />
        <img srcSet="https://i.ibb.co/h7bqDcc/logo-green-1x.png 1x, https://i.ibb.co/qYQq66v/logo-green-2x.png 2x" alt="Footer Logo" src="https://i.ibb.co/qYQq66v/logo-green-2x.png" />
      </picture>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="col-1-of-2">
        <p className="footer__copyright">
          Built by
          {' '}
          <a href="#" className="footer__link">Brain wavee</a>
        </p>
      </div>
    </div>
  </footer>
);
