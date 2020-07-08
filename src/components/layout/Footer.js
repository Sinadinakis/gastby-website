import React from 'react';
import { useIntl, Link } from 'gatsby-plugin-intl';

// Components
import Icon from '../Icon';
import facebookIcon from '../../assets/icons/facebook.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
// Messages
import menuMessages from '../../messages/menuMessages';

const Footer = () => {
  const { formatMessage } = useIntl();
  return (
    <footer className="bg-gray-900 text-gray-100 px-6 py-12">
      <div className="w-full md:w-auto md:mx-auto md:max-w-6xl flex flex-col md:flex-row justify-between">
        <a
          href="https://g.page/cretanwinery?share"
          rel="noreferrer"
          target="_blank"
          className="hover:text-gray-600 "
        >
          {formatMessage(menuMessages.footerGoogleMap)} <br />
          Ioannou Pastrikaki (Vathipetrou 12) - (Ano)Archanes <br />
          70100 - Heraklion, Crete (Greece)
        </a>
        <hr className="block md:hidden mt-4" />
        <div className="mx-0 md:mx-6 mt-4 md:mt-0">
          {formatMessage(menuMessages.footerContactInformation)} <br />
          Home: (+30) 2810-751315
          <br />
          Mobile: (+30) 6974399508
        </div>
        <hr className="block md:hidden mt-4" />
        <div className="mx-6 mt-4 md:mt-0">
          <ul className="flex flex-col text-center  md:text-left tracking-wider text-gray-500">
            <li className="ml-0 md:ml-6 mb-2">
              <Link
                to="/story"
                activeStyle={{ color: 'white' }}
                className=" hover:text-white"
                partiallyActive={true}
              >
                {formatMessage(menuMessages.menuStory)}
              </Link>
            </li>
            <li className="ml-0 md:ml-6 mb-2">
              <Link
                to="/wines"
                activeStyle={{ color: 'white' }}
                className=" hover:text-white"
                partiallyActive={true}
              >
                {formatMessage(menuMessages.menuWines)}
              </Link>
            </li>
            <li className="ml-0 md:ml-6">
              <Link
                to="/contact"
                activeStyle={{ color: 'white' }}
                className=" hover:text-white"
                partiallyActive={true}
              >
                {formatMessage(menuMessages.menuContact)}
              </Link>
            </li>
          </ul>
        </div>
        <hr className="block md:hidden mt-4" />
        <div className="flex flex-col mx-6 md:mt-0 text-center">
          <div className="flex items-center mt-2 justify-center">
            <a
              href="https://www.facebook.com/pages/Eltina-Wines/163641884195?ref=br_tf"
              title="Facebook"
              className="w-10 h-10 mr-2 rounded-full hover:opacity-25 border-1 border-solid border-white text-center flex items-center justify-center"
              rel="noreferrer"
              target="_blank"
            >
              <Icon
                src={facebookIcon}
                title="facebook Icon"
                className="inline w-5"
              />
            </a>
            <a
              href="https://twitter.com/SinadinakisWine"
              title="Twitter"
              className="w-10 h-10  mr-2 rounded-full hover:opacity-25 border-1 border-solid border-white text-center flex items-center justify-center"
              rel="noreferrer"
              target="_blank"
            >
              <Icon
                src={twitterIcon}
                title="Twitter Icon"
                className="inline w-5"
              />
            </a>
            <a
              href="https://www.instagram.com/sinadinakiswinery/"
              title="Instagram"
              className="w-10 h-10 rounded-full hover:opacity-25 border-1 border-solid border-white text-center flex items-center justify-center"
              rel="noreferrer"
              target="_blank"
            >
              <Icon
                src={instagramIcon}
                title="Instagram Icon"
                className="inline w-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
