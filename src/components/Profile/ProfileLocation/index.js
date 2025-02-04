import React from "react"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { location } from "../../../../customize"
import styled from "styled-components"

const ProfileLocation = () => {
  return location ? (
    <StyledTextsLocation className="profile-texts-location">
        <FontAwesomeIcon className="icon-fa icon-location" icon={faMapMarkerAlt} />
        {location}
    </StyledTextsLocation>
  ) : null
}

export default ProfileLocation

const StyledTextsLocation = styled.p`
  font-size: 0.85rem;
  margin: 0.3rem !important;
  .icon-location {
      font-size: 0.8rem;
  }
`
