import React from "react"
import PropTypes from "prop-types"

const TwoColumns = ({ children }) => (
  <div className="relative mt-12 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:items-center">
    {children}
  </div>
)

TwoColumns.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TwoColumns
