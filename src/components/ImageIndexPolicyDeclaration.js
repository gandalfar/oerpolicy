import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

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

const ImageIndexPolicyDeclaration = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "oe-policy-declaration.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      <Img
        className={className}
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Cape Town Open Education Declaration 10th Anniversary booklet"
      />
      <span className="image__attribution">
        <a
          title="Open Education Policy Forum 2018"
          href="https://flickr.com/photos/centrumcyfrowe/30571386747"
        >
          Open Education Policy Forum 2018
        </a>{" "}
        flickr photo by{" "}
        <a href="https://flickr.com/people/centrumcyfrowe">centrumcyfrowe</a>{" "}
        shared under a{" "}
        <a href="https://creativecommons.org/licenses/by/2.0/">
          Creative Commons (BY) license
        </a>
      </span>
    </Fragment>
  )
}

ImageIndexPolicyDeclaration.propTypes = {
  className: PropTypes.string,
}

ImageIndexPolicyDeclaration.defaultProps = {}

export default ImageIndexPolicyDeclaration
