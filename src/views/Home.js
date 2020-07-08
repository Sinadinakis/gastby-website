import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, Link } from 'gatsby-plugin-intl';
import clsx from 'clsx';

// Messages
import homeMessages from '../messages/homeMessages';

// Components
import Menu from '../components/Menu';
import Footer from '../components/layout/Footer';
import BackgroundSection from '../components/layout/BackgroundImage';
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
      <BackgroundSection>
        <header className={'container mx-auto'}>
          <div className="absolute top-0 h-full flex items-center mt-8 px-2 md:px-16">
            <div className="shadow-2xl">
              <h1
                className={`text-2xl text-shadow leading-tight ${clsx({
                  'font-garamond md:text-6xl': lang === 'el',
                  'font-nunito md:text-5xl': lang === 'en',
                })}`}
              >
                {formatMessage({ id: 'home.title' })}
                <Link
                  to={'/story'}
                  className="text-yellow-100 hover:text-yellow-300 cursor-pointer inline"
                >
                  {formatMessage({ id: 'home.winery' })}
                </Link>
                <br />
                <small>{formatMessage({ id: 'home.subtitle' })}</small>
              </h1>
            </div>
          </div>
        </header>
      </BackgroundSection>

      <main>
        <section className="d-flex justify-cntent-center align-items-center ">
          <div className="pt-16 pb-6 px-6">
            <div className="max-w-6xl mx-auto mb-12">
              <h2 className="mx-auto text-center text-xl md:text-4xl max-w-3xl leading-tight text-gray-800 mb-12">
                {formatMessage(
                  { id: 'home.header' },
                  { breakpoint: <br className="hidden md:block" /> }
                )}
              </h2>
              <p className="mb-6 text-gray-700 text-lg mx-auto max-w-lg text-center leading-relaxed">
                {formatMessage({ id: 'home.content' })}
              </p>
            </div>

            <div className="max-w-5xl mx-auto flex flex-wrap items-start">
              <div className="w-full md:w-1/2 p-2 mb-12">
                <Link
                  to="/story"
                  className="block text-2xl text-black text-center mb-4 hover:bg-white filter-grayscale hover:filter-none cursor-pointer"
                >
                  <Image name="producer" alt="Winery story page" style={{}} />
                  {formatMessage({ id: 'home.aboutUs' })}
                </Link>
              </div>

              <div className="w-full md:w-1/2 p-2 mb-12">
                <Link
                  to="/wines"
                  className="block text-2xl text-black text-center mb-4 hover:bg-white filter-grayscale hover:filter-none cursor-pointer"
                >
                  <Image
                    name="wines"
                    alt="Organic Wines Sinadinakis Information"
                  />
                  {formatMessage({ id: 'home.wine' })}
                </Link>
              </div>
            </div>
          </div>
          <article className="bg-green-800 px-12 py-4">
            <h1 className="text-xl font-semibold text-green-300 mb-5 text-center">
              {formatMessage({ id: 'home.process' })}
            </h1>
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="p-3 w-20 h-20 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <Image
                    name="farming"
                    alt="Organic farming"
                    className="w-24  bg-white"
                  />
                </div>
                <h5 className="text-lg mt-4 font-semibold text-white">
                  {formatMessage({ id: 'home.step1.header' })}
                </h5>
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
                <h5 className="text-lg mt-4 font-semibold text-white">
                  {formatMessage({ id: 'home.step2.header' })}
                </h5>
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
                <h5 className="text-lg mt-4 font-semibold text-white">
                  {formatMessage({ id: 'home.step3.header' })}
                </h5>
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

export default Home;
