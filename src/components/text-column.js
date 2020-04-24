import React from "react"
import PropTypes from "prop-types"

const TextColumn = ({ children }) => (
  <div className="relative max-w-lg text-xl mb-4 ml-4 leading-8">
    {children}
  </div>
)

TextColumn.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TextColumn
