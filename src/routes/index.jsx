/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/* import { GlobalStyle } from '../global.styles';
import Header from '../components/header/header.component';
import NavBar from '../components/nav-bar/nav-bar.component';
import Footer from '../components/footer/footer.component'; */
import HomePage from '../components/HomePage';

function Routes() {
  return (
    <BrowserRouter>

      {/*         <GlobalStyle />
        <Header />
        <NavBar /> */}

      <Switch>
        <Route path="/" exact component={HomePage} />

      </Switch>
      {/* <Footer /> */}

    </BrowserRouter>
  );
}

export default Routes;
