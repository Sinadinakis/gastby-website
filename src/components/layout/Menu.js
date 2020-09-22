import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl, Link, navigate } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import tw from 'tailwind.macro';

// Messages
import menuMessages from '../../messages/menuMessages';

// Images
import logo from '../../assets/icons/logo.png';
import Language from '../Language';

const Menu = ({ className }) => {
  const { formatMessage } = useIntl();
  const [isExpanded, toggleExpansion] = useState(false);

  function toggleMenu() {
    toggleExpansion(!isExpanded);
  }

  return (
    <div className={`menu ${className}`}>
      <nav className="w-full md:w-auto md:mx-auto md:max-w-6xl">
        <div className="lg:relative lg:bg-transparent flex flex-col lg:flex-row">
          <div className="py-2 flex flex-row lg:flex-none justify-between text-white pr-2">
            {/* Logo button */}
            <button
              // eslint-disable-next-line
              onClick={() => navigate('/')}
              className="text-xl left-0 flex items-center flex-sh rink-0 ml-6"
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

            {/* Toggle mobile button */}
            <button
              onClick={toggleMenu}
              className="hamburger block lg:hidden focus:outline-none px-3 py-2 text-white  hover:text-black mr-6"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          {/* Menu */}
          <div
            className={`${isExpanded ? `block` : `hidden`} 
              py-4 w-full flex-row lg:flex items-center bg-gray-800 lg:bg-transparent`}
          >
            <ul className="lg:flex uppercase text-white mx-4">
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
        </div>
      </nav>
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
};

export default styled(Menu)`
  ${tw`z-10 flex flex-wrap`}
`;
