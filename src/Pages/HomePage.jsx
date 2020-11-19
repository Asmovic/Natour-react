/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */

/* eslint-disable import/prefer-default-export */

import React from 'react';

import Navigation from '../components/navigation';
import Header from '../components/header';
import Highlight from '../components/highlight';
import Feature from '../components/feature';
import Tour from '../components/tour';
import Stories from '../components/stories';
import Book from '../components/book';
import Footer from '../components/footer';
import Popup from '../components/popup';

class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <main>
          <Highlight />
          <Feature />
          <Tour />
          <Stories />
          <Book />
        </main>
        <Footer />
        <Popup />
      </div>
    );
  }
}

export default HomePage;
