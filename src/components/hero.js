import React from "react"
import PropTypes from "prop-types"

const Hero = ({ title, description, children }) => (
  <div className="relative bg-gray-100 overflow-hidden pb-20">
    <div className="mt-16 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20">
      <div className="text-center">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-tight md:text-6xl">
          {title}
        </h2>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {description}
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          {children}
        </div>
      </div>
    </div>
  </div>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
  heroComponent: PropTypes.element,
}

Hero.defaultProps = {
  heroComponent: null,
}

export default Hero
