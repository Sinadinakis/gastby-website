import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Global, css } from '@emotion/core';

const Layout = ({ lang, children }) => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
      >
        <meta charSet="utf-8" />
      </Helmet>
      <div className={'mx-0'}>{children}</div>
      <Global
        styles={css`
          .text-shadow {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
          }

          .text-shadow-md {
            text-shadow: 0 4px 8px rgba(0, 0, 0, 0.12),
              0 2px 4px rgba(0, 0, 0, 0.5);
          }

          .text-shadow-lg {
            text-shadow: 0 15px 30px rgba(0, 0, 0, 0.11),
              0 5px 15px rgba(0, 0, 0, 0.08);
          }

          .text-shadow-none {
            text-shadow: none;
          }
          .fade-enter .page {
            opacity: 0;
            z-index: 1;
          }

          .fade-enter.fade-enter-active .page {
            opacity: 1;
            transition: opacity 450ms ease-in;
          }
        `}
      />
    </>
  );
};

Layout.defaultProps = {
  lang: 'en',
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string,
};

export default Layout;
