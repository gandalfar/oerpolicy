import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSmall from "../components/hero-small"

const NotFoundPage = () => (
  <Layout
    heroComponent={
      <HeroSmall
        title={
          <Fragment>
            <span className="text-primary-100">404: Not Found</span>
          </Fragment>
        }
      ></HeroSmall>
    }
  >
    <SEO title="404: Not found" />
  </Layout>
)

export default NotFoundPage
