import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentFeature from "../components/content-feature"
import TwoColumns from "../components/two-columns"
import TextColumn from "../components/text-column"
import ImageIndexCongress from "../components/ImageIndexCongress"
import ImagePolicyForum from "../components/ImagePolicyForum"
import ImageIndexPolicyDeclaration from "../components/ImageIndexPolicyDeclaration"

import IconFilePlus from "../svgs/icon-file-plus.svg"
import IconFileSearch from "../svgs/icon-file-search.svg"
import ImageTools from "../components/ImageTools"
import Hero from "../components/hero"

const IndexPage = ({ location }) => (
  <Layout
    heroComponent={
      <Hero
        title={
          <Fragment>
            Approachable collection of
            <br />
            <span className="text-primary-100"> Open Education Policies</span>
          </Fragment>
        }
        description="The Open Education Policy Registry collects, classifies and visualizes policy documents from all educational sectors and on all levels of governance."
      >
        <div className="rounded-md shadow">
          <a
            href="#overview"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-500 hover:bg-secondary focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
          >
            Policy Overview
          </a>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <Link
            to="/explore"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-primary-500 bg-white hover:text-white hover:bg-primary-500 focus:outline-none focus:shadow-outline-primary transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
          >
            Explore OE Policies
          </Link>
        </div>
      </Hero>
    }
  >
    <ContentFeature
      header={{
        title: "Enabling Open Education policy making",
      }}
    >
      <TwoColumns>
        <TextColumn>
          <div className="max-w-lg text-xl mb-4">
            The Open Education Policy Hub aims to support the wider Open
            Education community in developing policies, helping them to locate
            and learn from existing initiatives and from the people and
            organisations which have developed and promoted them.
          </div>
          <div className="max-w-lg text-xl mb-4">
            The heart of the hub is the Open Education Policy Registry, a
            dynamic database which collects and classifies Open Education policy
            documents from all educational sectors and all levels of governance
            around the world.
          </div>
          <div className="max-w-lg text-xl">
            We aim at supporting policy advocates, policy makers and researchers
            in gaining a deeper understanding of Open Education policies. By
            showcasing good practices, we seek to inspire policy-making in
            favour of Open Education for everyone.
          </div>
        </TextColumn>
        <div className="mt-10 -mx-4 relative lg:mt-0">
          <ImageIndexCongress className="rounded" />
        </div>
      </TwoColumns>
    </ContentFeature>

    <ContentFeature
      header={{
        title: "What are Open Education  policies?",
      }}
    >
      <TwoColumns>
        <div className="mt-10 -mx-4 relative lg:mt-0">
          <ImageIndexPolicyDeclaration className="rounded" />
        </div>
        <TextColumn>
          <p className="mb-4">
            Open education policies (OE policies) are formal regulations
            regarding support, funding, adoption, and use of Open Educational
            Resources (OER) and/or Open Educational Practices (OEP). Such
            policies are designed to support the creation, adoption, and sharing
            of OER and the design and integration of OEP into programs of study
            (
            <a href="https://library.educause.edu/resources/2018/8/7-things-you-should-know-about-open-education-policies">
              Educause
            </a>
            ).
          </p>
          <p>
            OE Policies may enable and regulate educators’ training and
            institutional resources and they provide a set of rational goals. OE
            policies often entail timelines, budgets and funds as well as human
            resources and other factors to enable Open Education.
          </p>
        </TextColumn>
      </TwoColumns>
      <div className="my-10 leading-8 text-xl bg-gray-200 rounded px-8 pt-2 pb-6 -mx-4">
        <h3 className="text-2xl leading-8 font-bold text-grey-900 sm:text-2x sm:leading-10 py-4">
          What is a policy?
        </h3>
        <p>An Open Education policy...</p>

        <ul className="mt-4">
          <li>...can be a law in your region or country</li>
          <li>...can be a procedural instruction at your institution</li>
          <li>...can be a funding agreement with</li>
          <li>
            ...can be a recommendation within the institution that you work at
          </li>
          <li>
            ...can be a grant programme at regional or institutional level to
            foster Open Education
          </li>
          <li>...can be just a part of broader Education policy</li>
        </ul>
      </div>
    </ContentFeature>

    <ContentFeature
      id="overview"
      header={{
        title: "Policy overview",
      }}
    >
      <TwoColumns>
        <div className="mt-10 -mx-4 relative lg:mt-0 text-center flex justify-center">
          <img
            src="https://oerworldmap.org/stats?field=about.additionalType.@id&filter.about.@type=%22Policy%22"
            alt="OER Policies by Category"
          />
        </div>
        <TextColumn>
          Become a policy expert! Find out how deep and wide Open Education
          policies can reach. Browse through different dimensions of Open
          Education policy-making and get a feel for what you want to address in
          your own policy.
        </TextColumn>
      </TwoColumns>
    </ContentFeature>

    <ContentFeature
      header={{
        title: "Policy activities",
        description:
          "Contribute to the collection of Open Education Policies and level up ",
      }}
    >
      <TwoColumns>
        <TextColumn>
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
                    <a href="#overview" className="button primary">
                      Add a Policy
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </TextColumn>
        <div className="mt-10 -mx-4 pl-4 relative lg:mt-0 col-span-2 lg:col-span-1">
          <ImagePolicyForum className="rounded" />
        </div>
      </TwoColumns>
    </ContentFeature>

    <ContentFeature
      header={{
        title: "Resources",
        description: "Are you working on a guideline, policy or strategy?",
      }}
    >
      <TwoColumns>
        <TextColumn className="text-lg leading-8">
          <p>
            We have a set of resources to support the development of OE policies
            at an institutional or governmental level.
          </p>
          <p class="mt-10">
            <Link to="/resources" className="button primary">
              Explore Resources
            </Link>
          </p>
        </TextColumn>
        <div className="mt-10 -mx-4 relative lg:mt-0 col-span-2 lg:col-span-1">
          <ImageTools className="rounded" />
        </div>
      </TwoColumns>
    </ContentFeature>

    <SEO title="Home" />
  </Layout>
)

export default IndexPage
