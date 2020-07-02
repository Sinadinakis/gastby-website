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

  // const updateLanguage = (language) => {
  //   changeLocale(language)
  // }

  return (
    <div className="my-4 mx-4 md:mx-0 md:my-0">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => {
          return languages.map(language => (
            <a
              key={language}
              // eslint-disable-next-line
              onClick={() => changeLocale(language)}
              className={`mx-4 cursor-pointer ${
                currentLocale === language ? `text-orange-300` : ` text-white`
              }  hover:text-yellow-600`}
            >
              {languageName[language]}
            </a>
          ));
        }}
      </IntlContextConsumer>
    </div>
  );
};

export default Language;
