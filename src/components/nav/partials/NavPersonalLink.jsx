import "./NavPersonalLink.scss"
import React from 'react'
import {useLanguage} from "/src/providers/LanguageProvider.jsx"

/**
 * A standalone, gold-accented external link to Tom's personal engineering portfolio.
 * Distinct from the (green) section nav links above it — those navigate internally,
 * this opens an external URL in a new tab.
 */
function NavPersonalLink({ profile, expanded }) {
    const language = useLanguage()

    const personalLink = profile?.personalLink
    if(!personalLink?.href)
        return null

    const label = language.getTranslation(profile.locales, "personalLinkLabel", "Personal Portfolio")
    const tagline = language.getTranslation(profile.locales, "personalLinkTagline", "See my real engineering projects")
    const faIcon = personalLink.faIcon || "fa-solid fa-laptop-code"

    const shrinkClass = expanded ?
        `` :
        `nav-personal-link-shrink`

    return (
        <div className={`nav-personal-link-wrapper ${shrinkClass}`}>
            <a  className={`nav-personal-link`}
                href={personalLink.href}
                target={`_blank`}
                rel={`noopener noreferrer`}
                data-tooltip={expanded ? null : label}>
                <i className={faIcon}/>
                <span className={`nav-personal-link-text`}>
                    <span className={`nav-personal-link-label`}>{label}</span>
                    <span className={`nav-personal-link-tagline`}>{tagline}</span>
                </span>
            </a>
        </div>
    )
}

export default NavPersonalLink
