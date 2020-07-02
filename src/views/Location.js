import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

// Components
import Seo from '../components/seo';
import Menu from '../components/Menu';
import Footer from '../components/layout/Footer';
import Image from '../components/Image';

const Location = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <Seo
        title={formatMessage({ id: 'location.seoTitle' })}
        description={formatMessage({ id: 'location.seoDescription' })}
      />
      <Menu />
      <div className="w-full bg-yellow-400">
        <Image
          name="archanesPanorama"
          alt="Archanes village panorama"
          className="w-full h-56 object-cover"
        />
      </div>
      <main className="py-10 px-6">
        <div className="max-w-6xl mx-auto mb-4 px-2 md:px-20">
          <h1 className="text-left text-2xl md:text-5xl max-w-3xl leading-tight text-gray-800 mb-10">
            {formatMessage(
              { id: 'location.header' },
              { breakpoint: <br className="hidden md:block" /> }
            )}
          </h1>
          <p className="italic">{formatMessage({ id: 'location.content' })}</p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-wrap items-start">
          <div className="w-full  md:w-1/2 p-2">
            <Image name="archanesCafenion" alt="Yuchtas mountain in Archanes" />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <Image
              name="archanesStreetView"
              alt="Archanes street view of the village"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-8 px-2 md:px-20 leading-relaxed">
          <h2 className="text-gray-800 text-2xl mb-3">
            {formatMessage({ id: 'location.taste.section.header' })}
          </h2>
          <h3 className="font-bold">
            {formatMessage({ id: 'location.taste.subsection.header' })}
          </h3>
          <p>
            {formatMessage({ id: 'location.taste.subsection.content' })}
            <br />
            ⚐ Archanes Central Square, ✆ 0030 2810 751117 <br />
            Website:
            <a
              href="https://www.bakalikocrete.com/"
              className="text-gray-700 hover:text-gray-500"
              rel="noreferrer"
              target="_blank"
            >
              bakalikocrete.com
            </a>
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-8 px-2 md:px-20 leading-relaxed">
          <h3 className="font-bold">
            {formatMessage({ id: 'location.taste.subsection.header2' })}
          </h3>
          <p>
            {formatMessage({ id: 'location.taste.subsection.content2' })}
            <br />⚐ Archanes Central Square, ✆ 0030 2810 751591
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Location;
