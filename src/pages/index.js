import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ContentFeature from "../components/content-feature"
import ImageIndexCongress from "../components/ImageIndexCongress"

const IndexPage = ({ location }) => (
  <Layout showHero="true">
    <ContentFeature
      header={{
        title: "Vision",
        description:
          "The Open Education Policy Registry collects, classifies and visualizes policy documents from all educational sectors and on all levels of governance. ",
      }}
    >
      <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-4 lg:gap-8 lg:items-center">
        <div className="relative col-span-2 lg:col-span-2">
          <div className="max-w-lg text-xl">
            It aims to support policy makers, advocates and researchers in
            gaining a deeper understanding of various Open Education policies.
            By providing good practices the OE Policy Registry seeks to inspire
            policy-making in favour of Open Education for everyone.
          </div>
        </div>
        <div className="mt-10 -mx-4 relative lg:mt-0 col-span-2 lg:col-span-2">
          <ImageIndexCongress className="rounded" />
        </div>
      </div>
    </ContentFeature>

    <ContentFeature
      id="overview"
      header={{
        title: "Policy overview",
      }}
    >
      <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-4 lg:gap-8 lg:items-center">
        <div className="mt-10 -mx-4 relative lg:mt-0 col-span-2 lg:col-span-2 text-center flex justify-center">
          <img
            src="https://oerworldmap.org/stats?field=about.additionalType.@id&filter.about.@type=%22Policy%22"
            alt="OER Policies by Category"
          />
        </div>
        <div className="relative col-span-2 lg:col-span-2">
          <div className="max-w-lg text-xl">
            Become a policy expert! Find out how deep and wide Open Education
            policies can reach. Browse through different dimensions of Open
            Education policy-making and get a feel for what you want to address
            in your own policy.
          </div>
        </div>
      </div>
    </ContentFeature>

    <SEO title="Home" />
  </Layout>
)

export default IndexPage
