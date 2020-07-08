import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"
import { theme } from "@styles"
import { colors } from "@configs"
import { FormattedIcon } from "@components/icons"

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 275px;
`

const StyledName = styled.p`
    font-size: 1.6em;
    font-weight: 700;
`

const Degree = styled.span`
    font-size: 0.8rem;
`

const StyledImage = styled(Img)`
    border-radius: 50%;
    width: 100%;
`

const StyledResumeButton = styled.a`
    padding: 5px;
    background-color: transparent;
    border: 2px solid ${theme.color};
    border-radius: 5px;
    font-size: 1.2em;
    width: 50%;
    color: ${colors.color};
    text-decoration: none;
    text-align: center;
    margin: 10px;
`

const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 16px;
`

const SocialLink = styled.a`
    margin: 0.6em;

    svg {
        height: 1em;
        width: auto;
        fill: ${theme.color};
    }
`

const Profile = ({ profile }) => {
    const { name, degree, image, resume, social } = profile.node.frontmatter
    console.log("profile", profile)
    return (
        <StyledContainer>
            <StyledImage
                fluid={image.childImageSharp.fluid}
                alt={name + " Freelance Android developer"}
            />
            <StyledName>
                {name} <Degree>{degree}</Degree>
            </StyledName>
            {/* TODO: i18n */}
            <StyledResumeButton href={resume.publicURL}>
                Resume
            </StyledResumeButton>

            <SocialLinks>
                {social.map(({ link, icon }, index) => (
                    <SocialLink key={index} href={link}>
                        <FormattedIcon name={icon} />
                    </SocialLink>
                ))}
            </SocialLinks>
        </StyledContainer>
    )
}

Profile.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default Profile
