import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.png';
import Scroll from '../components/Scroll';
import Gallery from '../components/Gallery';

const ROW1_IMAGES = [
  {
    src: require('../assets/images/fulls/01.jpg'),
    thumbnail: require('../assets/images/thumbs/01.jpg'),
    caption: 'Ad infinitum',
  },
  {
    src: require('../assets/images/fulls/02.jpg'),
    thumbnail: require('../assets/images/thumbs/02.jpg'),
    caption: 'Dressed in Clarity',
  },
  {
    src: require('../assets/images/fulls/03.jpg'),
    thumbnail: require('../assets/images/thumbs/03.jpg'),
    caption: 'Raven',
  },
  {
    src: require('../assets/images/fulls/04.jpg'),
    thumbnail: require('../assets/images/thumbs/04.jpg'),
    caption: "I'll have a cup of Disneyland, please",
  },
];

const ROW2_IMAGES = [
  {
    src: require('../assets/images/fulls/05.jpg'),
    thumbnail: require('../assets/images/thumbs/05.jpg'),
    caption: 'Cherish',
  },
  {
    src: require('../assets/images/fulls/06.jpg'),
    thumbnail: require('../assets/images/thumbs/06.jpg'),
    caption: 'Different.',
  },
  {
    src: require('../assets/images/fulls/07.jpg'),
    thumbnail: require('../assets/images/thumbs/07.jpg'),
    caption: 'History was made here',
  },
  {
    src: require('../assets/images/fulls/08.jpg'),
    thumbnail: require('../assets/images/thumbs/08.jpg'),
    caption: 'People come and go and walk away',
  },
];
const IndexPage = () => (
  <Layout>
    <Header />

    <section id="banner">
      <header>
        <h2>About Us</h2>
      </header>
      <p>
       Radical tech ed//installations//do nothing without intention
      </p>
      <footer>
        <Scroll type="id" element="first">
          <a href="#first" className="button style2 scrolly">
            CRBN FTPRNT Action Items
          </a>
        </Scroll>
      </footer>
    </section>

    <article id="first" className="container box style1 right">
      <a href="/#" className="image fit">
        <img src={pic1} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            RE: 
            <br />
            Recycling
          </h2>
        </header>
        <p>
          This is an action item
        </p>
      </div>
    </article>

    <article className="container box style1 left">
      <a href="/#" className="image fit">
        <img src={pic2} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            RE: 
            <br />
            Driving
          </h2>
        </header>
        <p>
          This is an action item 
        </p>
      </div>
    </article>

    <article className="container box style1 right">
      <a href="/#" className="image fit">
        <img src={pic2} alt="" />
      </a>
      <header>
        <h2>RE:
          <br />
          Eating Meat
        </h2>
        <p>
          This is an action item
        </p>
      </header>

      <div className="inner gallery">
        <Gallery
          images={ROW1_IMAGES.map(({ src, thumbnail, caption }) => ({
            src,
            thumbnail,
            caption,
          }))}
        />
        <Gallery
          images={ROW2_IMAGES.map(({ src, thumbnail, caption }) => ({
            src,
            thumbnail,
            caption,
          }))}
        />
      </div>
    </article>

    <article className="container box style3">
      <header>
        <h2>Nisl sed ultricies</h2>
        <p>Diam dignissim lectus eu ornare volutpat orci.</p>
      </header>
      <form method="post" action="#">
        <div className="row gtr-50">
          <div className="col-6 col-12-mobile">
            <input
              type="text"
              className="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="col-6 col-12-mobile">
            <input
              type="text"
              className="text"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="col-12">
            <textarea name="message" placeholder="Message" />
          </div>
          <div className="col-12">
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </article>
    <Footer />
  </Layout>
);

export default IndexPage;
