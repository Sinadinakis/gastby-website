import React from 'react';
import { useIntl, Link, navigate } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import tw from 'tailwind.macro';

// Messages
import menuMessages from '../messages/menuMessages';

// Images
import logo from '../assets/icons/logo.png';
import Language from './Language';

const Menu = () => {
  const { formatMessage } = useIntl();

  return (
    <nav className="z-10 menu pl-2 md:pl-0 md:ml-0">
      <div className="container relative mx-auto max-w-6xl pr-5 flex justify-between items-center">
        <button
          // eslint-disable-next-line
          onClick={() => navigate('/')}
          className="text-xl left-0"
          style={{ outline: 'none' }}
          aria-label="Sinadinakis home page link"
        >
          <span
            className="fill-current bg-no-repeat inline-block w-40 h-12 shadow-2xl"
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: 'contain',
              filter: 'drop-shadow( 2px 1px 2px rgba(0, 0, 0, 1))',
            }}
          />
        </button>

        <ul className="hidden md:flex uppercase tracking-wider text-white">
          <li className="mx-8">
            <Link
              to="/story"
              activeStyle={{ color: 'white', borderBottom: '1px solid white' }}
              className=" hover:text-yellow-400"
              partiallyActive={true}
            >
              {formatMessage(menuMessages.menuStory)}
            </Link>
          </li>
          <li className="mx-8">
            <Link
              to="/wines"
              activeStyle={{ color: 'white', borderBottom: '1px solid white' }}
              className="hover:text-yellow-400"
              partiallyActive={true}
            >
              {formatMessage(menuMessages.menuWines)}
            </Link>
          </li>
          <li className="mx-8">
            <Link
              to="/contact"
              activeStyle={{ color: 'white', borderBottom: '1px solid white' }}
              className="hover:text-yellow-400"
              partiallyActive={true}
            >
              {formatMessage(menuMessages.menuContact)}
            </Link>
          </li>
        </ul>
        <Language />
      </div>
    </nav>
  );
};

export default styled(Menu)`
  ${tw`flex items-center justify-between flex-wrap bg-teal-500 p-6`}
`;
