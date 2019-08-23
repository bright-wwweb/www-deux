import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import pic1 from '../assets/images/pic01.jpg';
import compost from '../assets/images/compost.jpeg';
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
        <img src={compost} />
      </a>
      <div className="inner">
        <header>
          <h2>
            RE: 
            <br />
            I Don't Compost
          </h2>
        </header>
        <h4>
          Where Are We Now?
        </h4>
        <p><a href="https://archive.epa.gov/epawaste/nonhaz/municipal/web/html/">Compostable waste (food scraps & yard waste) make up about 30% of what we throw away.</a>When recyclable/compostable materials aren't disposed of properly, they produce millions of metric tons of carbon dioxide and expedite the global warming. 🥵</p>
        <h4>
          Where Do We Need To Be?
        </h4>
        <p>
          <a href="https://www.epa.gov/sustainable-management-food/reducing-impact-wasted-food-feeding-soil-and-composting">Recycling and composting keeps our air clean!🥰🌳</a> According to the Composting Council, if everyone in the United States composted all of their food waste, the impact would be equivalent to removing 7.8 million cars from the road.
        </p>
        <h4>
          Daily Action Item: 
        </h4>
        <p>
          Opt in to Denver’s <a href="https://www.denvergov.org/content/denvergov/en/trash-and-recycling/composting/compost-collection-program.html">Compost Collection Program ($10 per month)</a>
          <br />
          OR 
          <br />
          DIY IT: <a href="https://learn.eartheasy.com/guides/composting/">Composting for Beginners</a>
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
        <h4>
          Where Are We Now?
        </h4>
        <p><a href="https://www.epa.gov/transportation-air-pollution-and-climate-change/carbon-pollution-transportation">Greenhouse gas (GHG) emissions from transportation account for about 29 percent of total U.S. greenhouse gas emissions</a>, making it the largest contributor of U.S. GHG emissions. Burning one gallon of gasoline creates about 20 pounds of CO2—which means the average vehicle creates roughly 6 to 9 tons of CO2 each year. 🚙🤕</p>
        <h4>
          Where Do We Need To Be?
        </h4>
        <p>
          <a href="https://www.c2es.org/content/reducing-your-transportation-footprint/">Public and Analogue Transpo keeps our air breathable!🚲🥰</a> Communities with strong public transportation can reduce the nation’s carbon emissions by 37 million metric tons yearly. To achieve a similar reduction in carbon emissions, every household in New York City, Washington, D.C., Atlanta, Denver and Los Angeles combined would have to completely stop using electricity.🕯 Over the average lifetime of an American car, a 30-mpg car will save roughly $3,000 in fuel costs compared with a 20-mpg car.🤑 Just switching from a vehicle that gets 20-mpg to a vehicle that gets 25-mpg car reduces your greenhouse gas emissions by 1.7 tons annually. 🌎🙌🏽
        </p>
        <h4>
          Daily Action Item:
        </h4>
        <ol>
          Opt in to Denver’s <a href="https://www.denvergov.org/content/denvergov/en/trash-and-recycling/composting/compost-collection-program.html">
            <li>Walk or bike when you can. </li>
          </a>
          <li>Take public transit when possible. </li>
          <li>Carpool with friends instead of driving alone. </li>
          <li>Drive efficiently – go easy on the gas pedal and brakes AND get regular tune-ups.</li>
          <li><a href="https://www.fueleconomy.gov/">Choose efficient cars</a></li>
          <li>When getting home deliveries or shopping online, consider asking to have all your packages sent in one shipment and with minimal packaging.📦</li>
          <li>Use a manual (reel) mower for small lawns.</li>
        </ol>
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
