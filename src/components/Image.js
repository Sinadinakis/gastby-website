import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import clsx from 'clsx';
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

const Image = ({ name, className, wrapperClassName, alt, style }) => {
  const data = useStaticQuery(graphql`
    query {
      producer: file(relativePath: { eq: "producer.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      location: file(relativePath: { eq: "archanes.jpg" }) {
        ...squareImage
      }
      mountain: file(relativePath: { eq: "yuchtas.jpg" }) {
        ...squareImage
      }
      wines: file(relativePath: { eq: "wines.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      kotsifaliLabel: file(relativePath: { eq: "wines-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      merloLabel: file(relativePath: { eq: "wines-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      chardonnayLabel: file(relativePath: { eq: "wines-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      loumataLabel: file(relativePath: { eq: "wines-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide1: file(relativePath: { eq: "slide-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide2: file(relativePath: { eq: "slide-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide4: file(relativePath: { eq: "slide-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide5: file(relativePath: { eq: "slide-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide6: file(relativePath: { eq: "slide-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide8: file(relativePath: { eq: "slide-8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide9: file(relativePath: { eq: "slide-9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide10: file(relativePath: { eq: "slide-10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bottle1: file(relativePath: { eq: "bottle-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bottle2: file(relativePath: { eq: "bottle-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bottle3: file(relativePath: { eq: "bottle-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      winesTop: file(relativePath: { eq: "wines-top.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      storyTop: file(relativePath: { eq: "story-top.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      contactTop: file(relativePath: { eq: "contact-top.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      archanesStreetView: file(relativePath: { eq: "archanes-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      archanesCafenion: file(relativePath: { eq: "archanes-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      archanesPanorama: file(relativePath: { eq: "archanes-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      grapes: file(relativePath: { eq: "grapes.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      farming: file(relativePath: { eq: "farming.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      harvest: file(relativePath: { eq: "harvest.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      organic: file(relativePath: { eq: "organic.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data[name].childImageSharp.fluid}
      className={clsx(className, wrapperClassName)}
      style={style}
      alt={alt}
    />
  );
};

Image.defaultProps = {
  className: 'block w-full h-auto mb-8 filter-contrast filter-saturate',
};

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
  wrapperClassName: PropTypes.string,
};

export default Image;
