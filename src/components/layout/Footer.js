import React from 'react';
import { useIntl, Link } from "gatsby-plugin-intl";

// Components
import Icon from '../Icon';
import bioIcon from '../../assets/icons/BIO.png';
import facebookIcon from '../../assets/icons/facebook.svg';
import twitterIcon from '../../assets/icons/twitter.svg';

// Messages
import menuMessages from '../../messages/menuMessages';
const Footer = () => {
  const { formatMessage } = useIntl();
  return (
    <footer
      id="footer"
      className="bg-gray-900 text-gray-100 text-center flex flex-col md:flex-row justify-center px-6 py-12"
    >
      <a
        href="https://g.page/cretanwinery?share"
        rel="noopener"
        className="mx-6 hover:text-gray-600"
      >

        Google Map Location <br />
        Ioannou Pastrikaki (Vathipetrou 12) - (Ano)Archanes <br />
        70100 - Heraklion, Crete (Greece)
      </a>
      <hr className="block md:hidden mt-4" />
      <div className="mx-6 mt-4 md:mt-0">
        Home: (+30) 2810-751315
        <br />
        Mobile: (+30) 6974399508
      </div>
      <hr className="block md:hidden mt-4" />
      <div className="mx-6 mt-4 md:mt-0">
        <ul
          className="flex flex-col text-center  md:text-left tracking-wider text-sm text-gray-500"
        >
          <li className="ml-0 md:ml-6 mb-1">
            <Link to="/story" activeStyle={{ color: "white" }} className=" hover:text-white" partiallyActive={true}>
              {formatMessage(menuMessages.menuStory)}
            </Link>
          </li>
          <li className="ml-0 md:ml-6 mb-1">
            <Link to="/wines" activeStyle={{ color: "white" }} className=" hover:text-white" partiallyActive={true}>
              {formatMessage(menuMessages.menuWines)}
            </Link>
          </li>
          <li className="ml-0 md:ml-6">
            <Link to="/contact" activeStyle={{ color: "white" }} className=" hover:text-white" partiallyActive={true}>
              {formatMessage(menuMessages.menuContact)}
            </Link>
          </li>
        </ul>
      </div>
      <hr className="block md:hidden mt-4" />
      <div className="flex flex-col mx-6 mt-4 md:mt-0 text-center">
        <a href="http://www.bio-hellas.gr/en/AboutBioHellas/tabid/61/Default.aspx" rel="noopener" target="_blank">
          <Icon
            src={bioIcon}
            className="inline w-20"
            title="Bio Hellas"
          />
        </a>
        <div class="socials">
          <a href="https://www.facebook.com/pages/Eltina-Wines/163641884195?ref=br_tf" title="Facebook" className="w-16 h-16 rounded-full hover:opacity-25" rel="noopener" target="_blank"><Icon src={facebookIcon}  title="facebook Icon" className="inline w-4 mr-2"/></a>
          <a href="https://twitter.com/SinadinakisWine" title="Twitter"  className="w-16 h-16 rounded-full hover:opacity-25" rel="noopener" target="_blank"><Icon src={twitterIcon}  title="Twitter Icon" className="inline w-4 mr-2"/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
