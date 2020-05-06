import React from "react"
import useSWR from "swr"
import Plot from "react-plotly.js"
import { countBy } from "lodash"

import fetcher from "../lib/fetcher"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSmall from "../components/hero-small"
import ContentFeature from "../components/content-feature"
import OneColumn from "../components/one-column"

const ExplorePage = () => {
  const url =
    "https://oerworldmap.org/resource.json?q=about.@type:Policy&sort=dateCreated:DESC&size=500"

  const { data } = useSWR(url, fetcher)
  console.log(data)

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
        <OneColumn className="w-full lg:w-2/3">
          <p>
            OER World map currently tracks {data ? data.totalItems : "300+"}{" "}
            policies. This is a short extract of a few ways to look at the data
            and make if more valuable for you.
          </p>
        </OneColumn>
      </ContentFeature>

      {!data ? <p>Loading data ...</p> : <PieChart items={data.member} />}

      <SEO title="Explore OE Policies" />
    </Layout>
  )
}

const PieChart = ({ items }) => {
  const data = countBy(
    items.flatMap((item) => {
      return item.about.focus ? item.about.focus : []
    })
  )

  return (
    <Plot
      data={[
        {
          values: Object.values(data),
          labels: Object.keys(data),
          type: "pie",
          automargin: true,
          sort: true,
        },
      ]}
      layout={{
        width: "auto",
        height: 500,
        title: "Avaliable policies by focus",
      }}
      config={{ displaylogo: false }}
    />
  )
}

export default ExplorePage
