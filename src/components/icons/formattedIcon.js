import React from "react"
import PropTypes from "prop-types"
import {
    ForkIcon,
    StarIcon,
    GithubIcon,
    LinkedinIcon,
    XingIcon,
} from "@components/icons"

const FormattedIcon = ({ name }) => {
    switch (name) {
        case "github":
            return <GithubIcon />
        case "linkedin":
            return <LinkedinIcon />
        case "xing":
            return <XingIcon />
        case "fork":
            return <ForkIcon />
        case "star":
            return <StarIcon />
    }
}

FormattedIcon.propType = {
    name: PropTypes.string.isRequired,
}

export default FormattedIcon
