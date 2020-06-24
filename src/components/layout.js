import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { Helmet } from 'react-helmet';

// Translations
import messages_en from '../intl/en.json';
import messages_el from '../intl/el.json';

import { useGlobalState } from '../services/GlobalStore/GlobalStore';
import { Global, css } from '@emotion/core';

const messages = {
  en: messages_en,
  el: messages_el,
};

export const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return 'en';
  }

  const lang =
    navigator && navigator.language && navigator.language.split('-')[0];
  if (!lang) return 'en';
  switch (lang) {
    case 'el':
      return 'el';
    default:
      return 'en';
  }
};

let language;

const Layout = ({ children, name }) => {
  const [lang, dispatch] = useGlobalState('lang');

  useEffect(() => {
    if (name !== '404') {
      dispatch({
        type: 'LANGUAGE_UPDATE',
        payload: { lang: getRedirectLanguage() },
      });
    }
    // eslint-disable-next-line
  }, [name]);

  if (!language) {
    language = getRedirectLanguage();
  } else {
    language = lang;
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <div className={'mx-0'}>
        <IntlProvider
          locale={language}
          key={language}
          messages={messages[language]}
        >
          <div>{children}</div>
        </IntlProvider>
      </div>
      <Global
        styles={css`
          .text-shadow {
            text-shadow: 1px 1px 4px rgba(0, 0, 0, 1);
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
        `}
      />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
};

export default Layout;
