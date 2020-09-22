import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useIntl, Link } from 'gatsby-plugin-intl';

import BackgroundSection from '../UI/BackgroundImage';

const Hero = ({ lang }) => {
  const { formatMessage } = useIntl();

  return (
    <BackgroundSection>
      <section className="justify-center h-full flex items-center px-8 md:px-16">
        <div
          className="bg-gray-800 bg-opacity-75 p-5"
          style={{
            clipPath:
              'polygon(3% 13%,13% 3%,55% 0,98% 12%,100% 85%,84% 100%,54% 94%,24% 100%,14% 97%,0 77%)',
          }}
        >
          <h1
            className={`text-4xl p-10 text-shadow leading-tight ${clsx({
              'font-garamond md:text-4.5xl tracking-wide': lang === 'el',
              'font-nunito md:text-4xl tracking-wider': lang === 'en',
            })}`}
          >
            {formatMessage({ id: 'home.title' })}
            <Link
              to={'/story'}
              className={`text-yellow-100 font-garamond tracking-wider text-5xl leading-3 hover:text-yellow-300 cursor-pointer inline`}
            >
              {formatMessage({ id: 'home.winery' })}
            </Link>
            <br />
            <small>{formatMessage({ id: 'home.subtitle' })}</small>
          </h1>
        </div>
      </section>
    </BackgroundSection>
  );
};

Hero.propTypes = {
  lang: PropTypes.string,
};

export default Hero;
