import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'gatsby-plugin-intl';

const Icon = ({ src, alt, title, className, onClick }) => {
  const intl = useIntl();
  return (
    <img
      src={src}
      className={className}
      alt={alt?.id ? intl.formatMessage(alt) : title}
      title={title?.id ? intl.formatMessage(title) : title}
      onClick={onClick}
    />
  );
};

Icon.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Icon;
