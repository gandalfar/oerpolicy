import React from "react"
import PropTypes from "prop-types"

const OneColumn = ({ children, className }) => (
  <div className="flex justify-center">
    <div className={`layout__text relative mt-12 lg:mt-24 ${className}`}>
      {children}
    </div>
  </div>
)

OneColumn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

OneColumn.defaultProps = {
  className: "",
}

export default OneColumn
