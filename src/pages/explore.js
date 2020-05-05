import React from "react"
import useSWR from "swr"
import fetcher from "../lib/fetcher"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ExplorePage = () => {
  const url =
    "https://oerworldmap.org/resource.json?q=about.@type:Policy&sort=dateCreated:DESC&size=500"

  const { data, error } = useSWR(url, fetcher)

  console.log(data)
  return (
    <Layout>
      <SEO title="Explore OE Policies" />
      {!data ? <p>Loading data ...</p> : <p>{data.totalItems}</p>}
    </Layout>
  )
}

export default ExplorePage
