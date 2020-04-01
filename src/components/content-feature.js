import React from "react"
import PropTypes from "prop-types"

const ContentFeature = ({ children, header, id }) => (
  <div id={id} className="py-16 bg-gray-50 overflow-hidden lg:py-24">
    <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
      {header && (
        <div className="relative">
          <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {header.title}
          </h3>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-700">
            {header.description}
          </p>
        </div>
      )}
      {children}
    </div>
  </div>
)

ContentFeature.propTypes = {
  header: PropTypes.object,
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
}

ContentFeature.defaultProps = {
  header: {},
  id: "",
}

export default ContentFeature
