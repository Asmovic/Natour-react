/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */

import React from 'react';

export default () => (
  <div className="navigation">
    <input type="checkbox" className="navigation__checkbox" id="navigation-toggle" />
    <label htmlFor="navigation-toggle" className="navigation__button">
      <span className="navigation__icon">&nbsp;</span>
    </label>
    <div className="navigation__background">&nbsp;</div>
    <nav className="navigation__nav">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span>01</span>
            About Natours
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span>02</span>
            Your benefits
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span>03</span>
            Popular tours
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span>04</span>
            Stories
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span>05</span>
            Book now
          </a>
        </li>
      </ul>
    </nav>
  </div>
);
