import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, Link } from 'gatsby-plugin-intl';

import pageWrapper from '../hoc/pageWrapper';

// Messages
import homeMessages from '../messages/homeMessages';

// Components
import Menu from '../components/layout/Menu';
import Hero from '../components/layout/Hero';
import Footer from '../components/layout/Footer';
import Image from '../components/Image';
import Seo from '../components/seo';

const Home = ({ lang }) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Seo
        title={formatMessage(homeMessages.seoTitle)}
        description={formatMessage(homeMessages.seoDescription)}
      />
      <Menu />
      <Hero lang={lang} />

      <main style={{ backgroundColor: '#f0efd1', color: '#191919' }}>
        <section className="d-flex justify-cntent-center align-items-center ">
          <div className="pt-16 pb-6 px-6">
            <div className="max-w-6xl mx-auto mb-12">
              <h2 className="mx-auto text-center text-xl md:text-4xl max-w-2xl leading-tight tracking-wide text-gray-800 mb-12">
                {formatMessage(
                  { id: 'home.header' },
                  { breakpoint: <br className="hidden md:block" /> }
                )}
              </h2>
              <p className="mb-6 text-gray-900 text-xl mx-auto max-w-3xl text-center leading-relaxed">
                {formatMessage({ id: 'home.content' })}
              </p>
            </div>

            <div className="max-w-5xl mx-auto flex flex-wrap items-start">
              <div className="w-full md:w-1/2 p-4 mb-12">
                <Link
                  to="/story"
                  className="block text-2xl text-red-500 font-semibold text-center mb-4  filter-grayscale hover:filter-none cursor-pointer"
                >
                  {formatMessage({ id: 'home.aboutUs' })}
                  <Image name="producer" alt="Winery story page" />
                </Link>
              </div>

              <div className="w-full md:w-1/2 p-4 mb-12">
                <Link
                  to="/wines"
                  className="block text-2xl text-red-500 font-semibold text-center mb-4 filter-grayscale hover:filter-none cursor-pointer"
                >
                  {formatMessage({ id: 'home.wine' })}
                  <Image
                    name="wines"
                    alt="Organic Wines Sinadinakis Information"
                  />
                </Link>
              </div>
            </div>
          </div>
          <article
            className="px-12 py-4"
            style={{ backgroundColor: '#21180d' }}
          >
            <h3
              className="text-xl font-semibold mb-5 text-center"
              style={{ color: '#cfba58' }}
            >
              {formatMessage({ id: 'home.process' })}
            </h3>
            <div className="flex justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="p-3 w-20 h-20 rounded-full bg-white inline-flex items-center">
                  <Image
                    name="farming"
                    alt="Organic farming"
                    className="w-24  bg-white"
                  />
                </div>
                <h4
                  className="text-lg mt-4 font-semibold"
                  style={{ color: '#cfba58' }}
                >
                  {formatMessage({ id: 'home.step1.header' })}
                </h4>
                <p className="mt-2 mb-4 text-sm text-gray-400">
                  {formatMessage({ id: 'home.step1.content' })}
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-20 h-20 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <Image
                    name="harvest"
                    alt="Harvest in the vineyards"
                    className="w-24  bg-white"
                  />
                </div>
                <h4
                  className="text-lg mt-4 font-semibold"
                  style={{ color: '#cfba58' }}
                >
                  {formatMessage({ id: 'home.step2.header' })}
                </h4>
                <p className="mt-2 mb-4 text-sm text-gray-400">
                  {formatMessage({ id: 'home.step2.content' })}
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-20 h-20 rounded-full bg-white inline-flex items-center justify-center">
                  <Image
                    name="grapes"
                    alt="Worker in the vineyards"
                    className="w-8 bg-white"
                  />
                </div>
                <h4
                  className="text-lg mt-4 font-semibold"
                  style={{ color: '#cfba58' }}
                >
                  {formatMessage({ id: 'home.step3.header' })}
                </h4>
                <p className="mt-2 mb-4 text-sm text-gray-400">
                  {formatMessage({ id: 'home.step3.content' })}
                </p>
              </div>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

Home.propTypes = {
  lang: PropTypes.string,
};

export default pageWrapper(Home);
