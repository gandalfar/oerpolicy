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

const ImageTools = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "tools.jpg" }) {
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
      />
      <span className="image__attribution">
        <a
          title="Tools"
          href="https://flickr.com/photos/jlgriffiths/9385903809"
        >
          Tools
        </a>{" "}
        flickr photo by{" "}
        <a href="https://flickr.com/people/jlgriffiths">jlgriffiths</a> shared
        under a{" "}
        <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">
          Creative Commons (BY-NC-ND) license
        </a>
      </span>
    </Fragment>
  )
}

ImageTools.propTypes = {
  className: PropTypes.string,
}

ImageTools.defaultProps = {}

export default ImageTools
