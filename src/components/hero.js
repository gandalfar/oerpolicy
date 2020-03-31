// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Hero = () => (
  <div className="relative bg-gray-100 overflow-hidden pb-20">
    <div className="mt-16 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20">
      <div className="text-center">
        <h2
          className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-tight md:text-6xl">
          Approachable collection of
          <br />
          <span className="text-primary-100"> Open Education Policies</span>
        </h2>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          The Open Education Policy Registry collects, classifies and visualizes policy documents from all educational sectors and on all levels of governance.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a href="#overview"
               className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-500 hover:bg-secondary focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Policy Overview
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a href="#find"
               className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-primary-500 bg-white hover:text-secondary focus:outline-none focus:shadow-outline-primary transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Find a Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
