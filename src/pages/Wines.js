import React from 'react';
import Seo from '../components/seo';
import { useIntl } from "gatsby-plugin-intl";

// Messages
import winesMessages from '../messages/winesMessages';

// Components
import Menu from '../components/Menu';
import Image from '../components/Image';
import Footer from '../components/layout/Footer';
import Icon from '../components/Icon';
import checkIcon from '../assets/icons/check-icon.svg';
import goldAwardIcon from '../assets/icons/award-icon.svg';
import silverAwardIcon from '../assets/icons/silver-award-icon.svg';

const Wines = () => {
  const { formatMessage } = useIntl();

  const wineInfo = [
    formatMessage({id: "wines.wine.info.protected.region"}),
    formatMessage({id: "wines.wine.info.aged"}),
    formatMessage({id: "'wines.wine.info.Bio'"}),
    formatMessage({id: "wines.wine.info.vinification"}),
  ];

  const whiteWineInfo = [
    formatMessage({id: "wines.wine.info.protected.region"}),
    formatMessage({id: "wines.wine.info.controlled"}),
    formatMessage({id: "wines.wine.info.Bio"}),
  ];

  return (
    <>
      <Seo title={formatMessage(winesMessages.seoTitle)} />
      <Menu />
      <div className="w-full bg-blue-600">
        <div className="w-full h-full relative flex items-center justify-center pt-24 pb-20">
          <img
            src="https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?w=1200"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="py-10 px-6">
        <div className="max-w-6xl mx-auto mb-8">
          <p className="mb-6 text-gray-800 mx-auto max-w-lg text-center leading-relaxed">
            {formatMessage(winesMessages.content)}
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-wrap items-start">
          <div className="w-full  md:w-2/6 p-2 mb-2">
            <Image name="bottle2" alt="Kotsifali cretan organic wine"/>
          </div>
          <div className="w-full md:w-2/6 p-2 mb-2">
            <Image name="bottle1" alt="Dry red organic wine"/>
          </div>
          <div className="w-full md:w-2/6 p-2 mb-2">
            <Image name="bottle3" alt="Dry white organic wine"/>
          </div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-wrap items-start">
          <div className="w-full md:w-1/2 p-4 mb-4">
            <h3 className="ml-2 block text-2xl text-red-800 text-left mb-6">
              {formatMessage(winesMessages.kostifaliTitle)}
            </h3>
            <p className="ml-2 text-gray-800 text-left h-20 mb-6 italic">
              {formatMessage(winesMessages.kostifaliContent)}
            </p>
            <Image name="kotsifaliLabel" alt="Label of Kotsifali and Cabernet Sauvignon"/>
            <div className="ml-2 text-gray-800 text-left leading-relaxed text-sm">
              {wineInfo.map(item => (
                <div key={`icon-${item}`}>
                  <Icon
                    src={checkIcon}
                    className="cursor-pointer absolute p-15"
                    title={`Check icon`}
                  />
                  <span className="ml-10">{item}</span>
                </div>
              ))}
              <hr className="my-2" />
              <div>
                <Icon
                  src={goldAwardIcon}
                  className="cursor-pointer absolute p-15 fill-current text-teal-500"
                  title={`Check icon`}
                />
                <span className="ml-10">
                  Gold, International WeinGrandPrix Dusseldorf, Germany
                </span>
              </div>
              <div>
                <Icon
                  src={goldAwardIcon}
                  className="cursor-pointer absolute p-15 fill-current text-teal-500"
                  title={`Gold award`}
                />
                <a
                  href="http://www.wsag.de/shop/pflege/bewertungsboegen/pdf_en/23027_232_5206.pdf"
                  className="ml-10 hover:text-gray-600"
                >
                  Gold, International PARsytem.de for Organic Wines, Germany
                </a>
              </div>
              <div>
                <Icon
                  src={silverAwardIcon}
                  className="cursor-pointer absolute p-15 fill-current text-teal-500"
                  title={`Check icon`}
                />
                <span className="ml-10">
                  Silver, International Wine Competition in Thessaloniki, Greece
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4 mb-12">
            <h3 className="ml-2 block text-2xl text-yellow-600 text-left mb-6">
              {formatMessage(winesMessages.chardonnayTitle)}
            </h3>
            <p className="ml-2 text-gray-800 text-left leading-relaxed h-20 mb-6 italic">
              {formatMessage(winesMessages.chardonnayContent)}
            </p>
            <Image name="chardonnayLabel" alt="Label Chardonnay and Sauvignon blanc" />
            <div className="ml-2 text-gray-800 text-left text-sm">
              <div>
                {whiteWineInfo.map(item => (
                  <div>
                    <Icon
                      src={checkIcon}
                      className="cursor-pointer absolute p-15 "
                      title={`Check icon`}
                    />
                    <span className="ml-10">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4 mb-12">
            <h3 className="ml-2 block text-2xl text-red-800 text-left mb-6">
              {formatMessage(winesMessages.merloTitle)}
            </h3>
            <p className="ml-2 text-gray-800 text-left h-20 mb-6 italic">
              {formatMessage(winesMessages.merloContent)}
            </p>
            <Image name="merloLabel" alt="Label Merlo and Kotsifali"/>
            <div className="ml-2 text-gray-800 text-left leading-relaxed text-sm">
              <div>
                {wineInfo.map(item => (
                  <div>
                    <Icon
                      src={checkIcon}
                      className="cursor-pointer absolute p-15 "
                      title={`Check icon`}
                    />
                    <span className="ml-10">
                      {item.replace('3000', '1500')}
                    </span>
                  </div>
                ))}
              </div>
              <hr className="my-2" />
              <div>
                <Icon
                  src={goldAwardIcon}
                  className="cursor-pointer absolute p-15 fill-current text-teal-500"
                  title={`Check icon`}
                />
                <span className="ml-10">
                  Gold, International Wine Competition Thessaloniki, Greece
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4 mb-12">
            <h3 className="ml-2 block text-2xl text-yellow-600 text-left mb-6">
              {formatMessage(winesMessages.loumataTitle)}
            </h3>
            <p className="ml-2 text-gray-800 text-left h-20 min-h-full mb-6 italic">
              {formatMessage(winesMessages.loumataContent)}
            </p>
            <Image name="loumataLabel" alt="Label Assyrtiko and Vidiano"/>
            <div className="ml-2 text-gray-800 text-left leading-relaxed text-sm">
              <div>
                {whiteWineInfo.map(item => (
                  <div>
                    <Icon
                      src={checkIcon}
                      className="cursor-pointer absolute p-15 "
                      title={`Check icon`}
                    />
                    <span className="ml-10">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wines;
