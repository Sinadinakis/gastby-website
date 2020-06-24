import React from 'react';
import Seo from '../components/seo';
import { useIntl, Link } from 'gatsby-plugin-intl';

// Components
import Menu from '../components/Menu';
import Footer from '../components/layout/Footer';
import BackgroundSection from '../components/layout/BackgroundImage';
import Image from '../components/Image';

const Home = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <Seo
        title={formatMessage({ id: 'home.seoTitle' })}
        description={formatMessage({ id: 'home.seoDescription' })}
      />
      <Menu />
      <BackgroundSection>
        <section id="hero" className={'container mx-auto'}>
          <div className="absolute top-0 h-full flex items-center mt-8 px-2 md:px-12">
            <div className="shadow-2xl">
              <h1 className="text-2xl md:text-5xl text-shadow leading-tight font-nunito">
                {formatMessage({ id: 'home.title' })}
                <Link
                  to={'/story'}
                  className="text-yellow-500 hover:text-yellow-300 cursor-pointer inline"
                >
                  {formatMessage({ id: 'home.winery' })}
                </Link>
                <br />
                <small>{formatMessage({ id: 'home.subtitle' })}</small>
              </h1>
            </div>
          </div>
        </section>
      </BackgroundSection>

      <section
        id="content"
        className="d-flex justify-cntent-center align-items-center "
      >
        <div className="pt-24 pb-6 px-6">
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
                to={'/story'}
                className="block text-2xl text-black text-center mb-4 hover:bg-white hover:opacity-75 cursor-pointer"
              >
                <Image
                  name="producer"
                  alt="Producer Sinadinakis"
                  style={{ filter: 'sepia(0.5) contrast(0.9) saturate(2)' }}
                />
                {formatMessage({ id: 'home.aboutUs' })}
              </Link>
            </div>

            <div className="w-full md:w-1/2 p-2 mb-12">
              <Link
                to={'/wines'}
                className="block text-2xl text-black text-center mb-4 hover:bg-white hover:opacity-75 cursor-pointer"
              >
                <Image
                  name="wines"
                  alt="Sinadinakis Organic Wines"
                  style={{ filter: 'sepia(0.5) contrast(0.9) saturate(2)' }}
                />
                {formatMessage({ id: 'home.wine' })}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
