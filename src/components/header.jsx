/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export default () => (
  <header className="header">
    <div className="header__logo-box">
      <img className="logo" src="https://i.ibb.co/SyWzYTp/logo-white.png" alt="header__logo" />
    </div>
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">
          OUTDOORS
        </span>
        <span className="heading-primary--sub">
          is where life happens
        </span>
      </h1>
      <a href="#section-tours" className="btn btn--white btn--animated">Discover our tours</a>
    </div>
  </header>
);
