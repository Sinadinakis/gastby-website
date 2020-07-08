import React, { useState } from 'react';
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
  const [isExpanded, toggleExpansion] = useState(false);

  function toggleMenu() {
    toggleExpansion(!isExpanded);
  }

  return (
    <div className="z-10 menu flex items-center justify-between flex-wrap">
      <div className="w-full md:w-auto md:mx-auto md:max-w-6xl flex justify-between items-center">
        <div className="flex text-white pr-2 md:px-0">
          <button
            // eslint-disable-next-line
            onClick={() => navigate('/')}
            className="text-xl left-0 flex items-center flex-shrink-0"
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
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <nav className="absolute bg-gray-800 md:bg-transparent md:relative w-full md:w-screen md:max-w-6xl top-100 md:top-auto md:mx-auto flex items-center justify-between flex-wrap">
          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } mt-2 bg-bottomw-full block flex-grow lg:flex items-center lg:w-auto`}
          >
            <ul className="md:w-auto md:mx-auto md:max-w-6xl md:flex uppercase tracking-wider text-white mx-0">
              <li className="mx-8 my-2 md:my-0">
                <Link
                  to="/story"
                  activeStyle={{
                    color: 'white',
                    borderBottom: '1px solid white',
                  }}
                  className=" hover:text-yellow-400"
                  partiallyActive={true}
                >
                  {formatMessage(menuMessages.menuStory)}
                </Link>
              </li>
              <li className="mx-8 my-2 md:my-0">
                <Link
                  to="/wines"
                  activeStyle={{
                    color: 'white',
                    borderBottom: '1px solid white',
                  }}
                  className="hover:text-yellow-400"
                  partiallyActive={true}
                >
                  {formatMessage(menuMessages.menuWines)}
                </Link>
              </li>
              <li className="mx-8 my-2 md:my-0">
                <Link
                  to="/archanes"
                  activeStyle={{
                    color: 'white',
                    borderBottom: '1px solid white',
                  }}
                  className=" hover:text-yellow-400"
                  partiallyActive={true}
                >
                  {formatMessage(menuMessages.menuLocation)}
                </Link>
              </li>
              <li className="mx-8 my-2 md:my-0">
                <Link
                  to="/contact"
                  activeStyle={{
                    color: 'white',
                    borderBottom: '1px solid white',
                  }}
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
      </div>
    </div>
  );
};

export default styled(Menu)`
  ${tw`flex items-center justify-between flex-wrap bg-teal-500 p-6`}
`;
