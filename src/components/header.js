import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import IconGlobe from "../svgs/icon-globe.svg";

const Header = ({ siteTitle }) => (
  <header className="bg-primary-500">
    <div
      className="container mx-auto px-4 py-4 sm:px-6 lg:px-8 text-white"

    >
      <div className="flex justify-between">
        <h1 className="flex hover:underline">
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </h1>

        <span
          className="flex"
        >
        <a className="hover:underline" href="https://oerworldmap.org/">
          <IconGlobe className="inline-block h-3 -mt-1 pr-1" />OER World Map
        </a>
      </span>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
