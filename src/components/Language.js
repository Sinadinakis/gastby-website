import React from 'react';
import { useIntl, IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

// Messages
import menuMessages from '../messages/menuMessages';

const Language = () => {
  const { formatMessage } = useIntl();

  const languageName = {
    en: formatMessage(menuMessages.menuLanguageEnglish),
    el: formatMessage(menuMessages.menuLanguageGreek),
  };

  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              // eslint-disable-next-line
              onClick={() => changeLocale(language)}
              className={`ml-4 cursor-pointer ${
                currentLocale === language ? `text-yellow-500` : `text-white`
              }  hover:text-yellow-600`}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  );
};

export default Language;
