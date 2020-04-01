import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ContentFeature from "../components/content-feature"
import ImageIndexCongress from "../components/ImageIndexCongress"
import ImagePolicyForum from "../components/ImagePolicyForum"

import IconFilePlus from "../svgs/icon-file-plus.svg"
import IconFileSearch from "../svgs/icon-file-search.svg"

const IndexPage = ({ location }) => (
  <Layout showHero="true">
    <ContentFeature
      header={{
        title: "Vision",
        description:
          "The Open Education Policy Registry collects, classifies and visualizes policy documents from all educational sectors and on all levels of governance. ",
      }}
    >
      <div className="relative mt-12 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="relative">
          <div className="max-w-lg text-xl">
            It aims to support policy makers, advocates and researchers in
            gaining a deeper understanding of various Open Education policies.
            By providing good practices the OE Policy Registry seeks to inspire
            policy-making in favour of Open Education for everyone.
          </div>
        </div>
        <div className="mt-10 -mx-4 relative lg:mt-0">
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
      <div className="relative mt-12 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="mt-10 -mx-4 relative lg:mt-0 text-center flex justify-center">
          <img
            src="https://oerworldmap.org/stats?field=about.additionalType.@id&filter.about.@type=%22Policy%22"
            alt="OER Policies by Category"
          />
        </div>
        <div className="relative">
          <div className="max-w-lg text-xl">
            Become a policy expert! Find out how deep and wide Open Education
            policies can reach. Browse through different dimensions of Open
            Education policy-making and get a feel for what you want to address
            in your own policy.
          </div>
        </div>
      </div>
    </ContentFeature>

    <ContentFeature
      header={{
        title: "Policy activities",
        description:
          "Contribute to the collection of Open Education Policies and level up ",
      }}
    ></ContentFeature>
    <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:items-center mb-20">
      <div className="relative col-span-2 lg:col-span-1">
        <div className="max-w-lg text-xl">
          <ul className="">
            <li>
              <div className="flex">
                <div className="flex-shrink-0 text-primary-100">
                  <IconFileSearch
                    className="inline-block h-10 w-12"
                    stroke="currentColor"
                  />
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Policy Search
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-700">
                    Looking for inspiration? Find out how others have crafted
                    their policies.
                    <br />
                    <br /> Use the policy search and its fine-grained filters to
                    find policies that can be applied and adapted to your needs
                    and interests.
                  </p>
                  <div className="rounded-md shadow inline-block mt-6">
                    <a
                      href="#overview"
                      className="inline-block justify-center px-4 py-1
                                 border border-transparent text-base leading-6
                                 font-medium rounded-md text-white bg-primary-500
                                 hover:bg-secondary focus:outline-none focus:shadow-outline-indigo transition
                                 duration-150 ease-in-out md:py-2 md:px-5"
                    >
                      Start Searching
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0 text-primary-100">
                  <IconFilePlus
                    className="inline-block h-10 w-12"
                    stroke="currentColor"
                  />
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Contribute
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-700">
                    Add your own policy and make your work visible! Let others
                    benefit from your work and your experience! <br />
                    <br />
                    Anyone with an account on the OER World Map can add their
                    policies.
                  </p>
                  <div className="rounded-md shadow inline-block mt-6">
                    <a
                      href="#overview"
                      className="inline-block justify-center px-4 py-1
                                 border border-transparent text-base leading-6
                                 font-medium rounded-md text-white bg-primary-500
                                 hover:bg-secondary focus:outline-none focus:shadow-outline-indigo transition
                                 duration-150 ease-in-out md:py-2 md:px-5"
                    >
                      Add a Policy
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 -mx-4 relative lg:mt-0 col-span-2 lg:col-span-1">
        <ImagePolicyForum className="rounded" />
      </div>
    </div>
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
