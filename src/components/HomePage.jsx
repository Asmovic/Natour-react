/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */

/* eslint-disable import/prefer-default-export */

import React from 'react';

import vid1 from '../assets/videos/video.mp4';
import vid2 from '../assets/videos/video.webm';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
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
          <main>
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
            <section className="section-features">
              <div className="row">
                <div className="col-1-of-4">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-world" />
                    <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                    <p className="feature-box__text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae architecto
                      libero laboriosam repellat ipsum,
                      mollitia ipsam quisquam iste voluptatum at optio accusamus reiciendis!
                    </p>
                  </div>
                </div>
                <div className="col-1-of-4">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-compass" />
                    <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                    <p className="feature-box__text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae architecto
                      libero laboriosam repellat ipsum,
                      mollitia ipsam quisquam iste voluptatum at optio accusamus reiciendis!
                    </p>
                  </div>
                </div>
                <div className="col-1-of-4">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-map" />
                    <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                    <p className="feature-box__text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae architecto
                      libero laboriosam repellat ipsum,
                      mollitia ipsam quisquam iste voluptatum at optio accusamus reiciendis!
                    </p>
                  </div>
                </div>
                <div className="col-1-of-4">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-heart" />
                    <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                    <p className="feature-box__text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae architecto
                      libero laboriosam repellat ipsum,
                      mollitia ipsam quisquam iste voluptatum at optio accusamus reiciendis!
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="section-tours" id="section-tours">
              <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                  Most popular tours
                </h2>
              </div>
              <div className="row">
                <div className="col-1-of-3">
                  <div className="card">
                    <div className="card__side card__side--front">
                      <div className="card__picture card__picture--1">
                        &nbsp;
                      </div>
                      <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--1">The Sea Explorer</span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          <li>3 day tours</li>
                          <li>Up to 30 people</li>
                          <li>2 tour guides</li>
                          <li>Sleep in awesome hotels</li>
                          <li>Difficulty: easy</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-1">
                      <div className="card__cta">
                        <div className="card__price-box">
                          <p className="card__price-only">Only</p>
                          <p className="card__price-value">
                            ₦
                            <b>75,000</b>
                          </p>
                        </div>
                        <a href="#popup" className="btn btn--white">Book now!</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-of-3">
                  <div className="card">
                    <div className="card__side card__side--front">
                      <div className="card__picture card__picture--2">
                        &nbsp;
                      </div>
                      <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--2">The Forest Hiker</span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          <li>7 day tours</li>
                          <li>Up to 40 people</li>
                          <li>6 tour guides</li>
                          <li>Sleep in provided tents</li>
                          <li>Difficulty: medium</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-2">
                      <div className="card__cta">
                        <div className="card__price-box">
                          <p className="card__price-only">Only</p>
                          <p className="card__price-value">
                            ₦
                            <b>69,000</b>
                          </p>
                        </div>
                        <a href="#popup" className="btn btn--white">Book now!</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-of-3">
                  <div className="card">
                    <div className="card__side card__side--front">
                      <div className="card__picture card__picture--3">
                        &nbsp;
                      </div>
                      <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--3">The Snow Adventurer</span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          <li>5 day tours</li>
                          <li>Up to 15 people</li>
                          <li>3 tour guides</li>
                          <li>Sleep in provided tents</li>
                          <li>Difficulty: hard</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-3">
                      <div className="card__cta">
                        <div className="card__price-box">
                          <p className="card__price-only">Only</p>
                          <p className="card__price-value">
                            ₦
                            <b>98,000</b>
                          </p>
                        </div>
                        <a href="#popup" className="btn btn--white">Book now!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-center-text u-margin-top-huge">
                <a href="#" className="btn btn--green">Discover all tours</a>
              </div>
            </section>
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
            <section className="section-book">
              <div className="row">
                <div className="book">
                  <div className="book__form">
                    <form action="#" className="form">
                      <div className="u-margin-bottom-medium">
                        <h2 className="heading-secondary">
                          Start booking now
                        </h2>
                      </div>
                      <div className="form__group">
                        <input type="text" className="form__input" placeholder="Full Name" id="name" />
                        <label htmlFor="name" className="form__label">Full Name</label>
                      </div>
                      <div className="form__group">
                        <input type="email" className="form__input" placeholder="Email Address" id="email" />
                        <label htmlFor="email" className="form__label">Email Address</label>
                      </div>
                      <div className="form__group u-margin-bottom-medium">
                        <div className="form__radio-group">
                          <input type="radio" className="form__radio-input" id="small" name="size" />
                          <label htmlFor="small" className="form__radio-label">
                            <span className="form__radio-button" />
                            Small tour group
                          </label>
                        </div>
                        <div className="form__radio-group">
                          <input type="radio" className="form__radio-input" id="large" name="size" />
                          <label htmlFor="large" className="form__radio-label">
                            <span className="form__radio-button" />
                            Large tour group
                          </label>
                        </div>
                      </div>
                      <div className="form__group">
                        <button className="btn btn--green">Next step →</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </main>
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
          <div className="popup" id="popup">
            <div className="popup__content">
              <div className="popup__left">
                <img src="https://i.ibb.co/VqRFbTQ/nat-8.jpg" alt="Tour photo" className="popup__image" />
                <img src="https://i.ibb.co/DfHWcjw/nat-9.jpg" alt="Tour photo" className="popup__image" />
              </div>
              <div className="popup__right">
                <a href="#section-tours" className="popup__close">×</a>
                <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Important ‐ please read this terms before
                  booking
                </h3>
                <p className="popup__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat pretium nibh ipsum
                  consequat nisl vel pretium lectus quam. Id ornare arcu odio ut sem. Malesuada proin libero nunc
                  consequat interdum varius sit. Urna id volutpat lacus laoreet non curabitur gravida. Tellus orci ac
                  auctor augue mauris. Id aliquet risus feugiat in ante metus dictum. Nibh cras pulvinar mattis nunc
                  sed blandit libero volutpat. Semper feugiat nibh sed pulvinar proin. Nibh tellus molestie nunc non.
                  Tellus at urna condimentum mattis pellentesque. Consectetur adipiscing elit duis tristique
                  sollicitudin nibh sit amet commodo. Elit eget gravida cum sociis natoque penatibus.
                </p>
                <a href="#" className="btn btn--green">Book now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
