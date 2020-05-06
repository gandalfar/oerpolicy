import React from "react"
import useSWR from "swr"
import loadable from "@loadable/component"

import fetcher from "../lib/fetcher"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSmall from "../components/hero-small"
import ContentFeature from "../components/content-feature"
import OneColumn from "../components/one-column"
// import TwoColumns from "../components/two-columns"
// import TextColumn from "../components/text-column"

const { NODE_ENV } = process.env

const PieChartPoliciesByFocus = loadable(() =>
  import("../components/PieChart-ByFocus")
)

const ExplorePage = () => {
  const host = NODE_ENV === "production" ? "/api/" : "https://oerworldmap.org/"
  const url = `${host}resource.json?q=about.@type:Policy&sort=dateCreated:DESC&size=500`

  const { data } = useSWR(url, fetcher)

  return (
    <Layout
      heroComponent={
        <HeroSmall
          title={
            <>
              <span className="text-primary-100">Explore our collection</span>{" "}
              of Open Education Policies
            </>
          }
        />
      }
    >
      <ContentFeature
        header={{
          title: "Introduction",
          description: "Discover all the different types of OE Policies",
        }}
      >
        <OneColumn className="w-full justify-center flex">
          <p className="max-w-lg">
            OER World map currently tracks {data ? data.totalItems : "300+"}{" "}
            policies. This is a short extract of a few ways to look at the data
            so that it can support you in creating your policy.
          </p>
        </OneColumn>

        <OneColumn className="w-full lg:w-2/3">
          <h3 className="text-2xl font-bold text-center">
            Open Education Policies by Focus
          </h3>
          {!data ? (
            <p>Loading data ...</p>
          ) : (
            <PieChartPoliciesByFocus items={data.member} />
          )}
        </OneColumn>
      </ContentFeature>

      <SEO title="Explore OE Policies" />
    </Layout>
  )
}

export default ExplorePage
