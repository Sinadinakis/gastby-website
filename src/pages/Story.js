import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from "gatsby-plugin-intl";

// Messages
import storyMessages from '../messages/storyMessages';

// Components
import Seo from '../components/seo';
import Menu from '../components/Menu';
import Footer from '../components/layout/Footer';
import Image from '../components/Image';

const Story = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <Seo 
        title={formatMessage(storyMessages.seoTitle)} 
        description={formatMessage(storyMessages.seoDescription)}
      />
      <Menu />
      <div className="w-full bg-blue-600">
        <div className="w-full h-full relative flex items-center justify-center py-24">
          <img
            src="https://images.unsplash.com/photo-1573062337052-54ad1468bb5e?w=1200"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="py-10 px-6">
        <div className="max-w-6xl mx-auto mb-4 px-2 md:px-20">
          <h1 className="text-left text-2xl md:text-5xl max-w-3xl leading-tight text-gray-800 mb-10">
            {formatMessage(storyMessages.headerSectionTitle)}
          </h1>
          <p className="italic">
            {formatMessage(storyMessages.headerSectionContent)}
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-8 px-2 md:px-20 leading-relaxed">
          <p>{formatMessage(storyMessages.firstParagraphContent)}</p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-wrap items-start">
          <div className="w-full p-2">
            <Image name="slide1" alt="Sinadinakis in the vineyards"/>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-8 px-2 md:px-20">
          <p>{formatMessage(storyMessages.secondParagraphContent)}</p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-wrap items-start">
          <div className="w-full  md:w-1/2 p-2">
            <Image name="mountain" alt="Yuchtas mountain in Archanes"/>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <Image name="location" alt="Archanes village in Heraklion, crete"/>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-8 px-2 md:px-20">
          <p>{formatMessage(storyMessages.thirdParagraphContent)}</p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-wrap items-start">
          <div className="w-full  md:w-1/2 p-2">
            <Image name="slide5" alt="Sinadinakis family working in the wineyard"/>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <Image name="slide6" alt="Load organic grapes durin harvest"/>
          </div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-wrap items-start">
          <div className="w-full  md:w-1/2 p-2">
            <Image name="slide2" alt="Producer sinadinakis working in the harvest" />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <Image name="slide10" alt="Friend helping in the harvest "/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Story;
