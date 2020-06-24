import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    // eslint-disable-next-line
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="header"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {children}
        </BackgroundImage>
      );
    }}
  />
);

BackgroundSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default styled(BackgroundSection)`
  ${tw`w-full h-screen relative text-white`}
`;
