import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { withTheme } from "styled-components"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import {
  faGithub,
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"
import HeaderIcon from "../HeaderIcon"
import ProgressBar from "./ProgressBar"

import config from "../../../customize"
import configStyles from "../../../customize-styles"

const Header = ({ siteTitle, showTitle, isPostTemplate }) => {
  return (
    <StyledMainHeader className="main-header">
      {/* Google AdSense */}
      {config.googleAdSenseId && config.googleAdSenseId !== "" && (
        <script
          data-ad-client={config.googleAdSenseId}
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      )}

      {isPostTemplate && config.useScrollIndicator && <ProgressBar />}     
    </StyledMainHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withTheme(Header)

const StyledMainHeader = styled.header`
  font-family: ${configStyles.fontMain + configStyles.fontsBackUp};
  height: 55px;
  margin-top: ${config.useScrollIndicator ? "-5px" : "0"};
  margin-bottom: 1rem;
`

const StyledMainHeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidthSite};
  padding: 0.6rem;
  h1 {
    font-weight: 400;
  }
`

const StyledMediaIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  * {
    font-size: 1.7rem;
  }

  @media (max-width: 400px) {
    * {
      margin: 0 0.15rem;
    }
  }
`
