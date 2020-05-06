import React from "react"
import PropTypes from "prop-types"

const HeroSmall = ({ title, description, children }) => (
  <div className="relative bg-gray-100 overflow-hidden pb-12">
    <div className="mt-16 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-12">
      <div className="text-center">
        <h2 className="text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-3xl sm:leading-tight md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {description}
          </p>
        )}
        {children && (
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            {children}
          </div>
        )}
      </div>
    </div>
  </div>
)

HeroSmall.propTypes = {
  title: PropTypes.element.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
  heroComponent: PropTypes.element,
}

HeroSmall.defaultProps = {
  heroComponent: null,
  description: null,
}

export default HeroSmall
