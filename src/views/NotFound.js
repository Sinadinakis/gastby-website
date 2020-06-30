import React from 'react';
import Seo from '../components/seo';
import { useIntl } from 'gatsby-plugin-intl';

// Messages
import notFoundMessages from '../messages/notFoundMessages';

// Components
import Menu from '../components/Menu';
import Footer from '../components/layout/Footer';

const NotFound = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <Seo
        title={formatMessage(notFoundMessages.seoTitle)}
        description={formatMessage(notFoundMessages.seoDescription)}
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
        <div className="max-w-6xl mx-auto mb-4 px-20">
          <h1 className="mb-6 text-red-800 text-5xl mx-auto max-w-lg text-center leading-relaxed">
            {formatMessage(notFoundMessages.header)}
          </h1>
          <p className="mb-6 text-gray-800 mx-auto max-w-lg text-center leading-relaxed">
            {formatMessage(notFoundMessages.content)}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
