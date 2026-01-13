import "./PortfolioHub.scss"
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper/modules"
import { useViewport } from "/src/providers/ViewportProvider.jsx"
import { useScheduler } from "/src/hooks/scheduler.js"
import { useUtils } from "/src/hooks/utils.js"
import { useConstants } from "/src/hooks/constants.js"

const HubState = {
    CHECKING:   { id: 0, key: "checking" },
    SHOWING:    { id: 1, key: "showing" },
    VISIBLE:    { id: 2, key: "visible" },
    HIDING:     { id: 3, key: "hiding" },
    HIDDEN:     { id: 4, key: "hidden" },
}

const PORTFOLIOS = [
    {
        id: "commercial",
        title: "Commercial & Agency",
        subtitle: "Professional Work",
        description: "Client projects and enterprise solutions",
        url: "https://thomasjbutler.me/",
        image: "https://res.cloudinary.com/depqttzlt/image/upload/w_500,q_auto,f_auto/v1768064849/Tom_Minimalist_3D_logo_of_Commercial_glowing_neon-green_typog_21352a3d-34ec-405d-9891-f07d93f23654_2_konwkz.gif",
        isInternal: true,
        buttonText: "Enter",
        icon: "fa-solid fa-briefcase"
    },
    {
        id: "personal",
        title: "Personal",
        subtitle: "Side Projects",
        description: "Experiments and passion projects",
        url: "https://thomasjbutler.github.io/",
        image: "https://res.cloudinary.com/depqttzlt/image/upload/w_500,q_auto,f_auto/v1768064850/Tom_Minimalist_3D_logo_of_Personal_with_a_glowing_neon-green__fd6f82e1-e17a-459f-825b-aee88269f44a_0_msz7y3.gif",
        isInternal: false,
        buttonText: "Visit",
        icon: "fa-solid fa-code"
    },
    {
        id: "ai-projects",
        title: "AI Projects",
        subtitle: "Agentic AI",
        description: "ML and AI-powered applications",
        url: "https://agenticaiprojectsportfolio.vercel.app/",
        image: "https://res.cloudinary.com/depqttzlt/image/upload/w_500,q_auto,f_auto/v1768064843/Tom_Minimalist_3D_logo_of_AI_glowing_neon-green_typography_on_046f9bf7-ba8d-4f12-8b7e-060c08cdf2c5_1_juwucv.gif",
        isInternal: false,
        buttonText: "Visit",
        icon: "fa-solid fa-robot"
    },
]

const SESSION_KEY = "hasSeenPortfolioHub"

function PortfolioHub({ children }) {
    const utils = useUtils()
    const constants = useConstants()
    const scheduler = useScheduler()
    const viewport = useViewport()

    const [state, setState] = useState(HubState.CHECKING)

    const tag = "portfolio-hub"
    const isMobile = viewport.isMobileLayout()
    const shouldShow = state.id > HubState.CHECKING.id && state.id < HubState.HIDDEN.id

    // Check sessionStorage on mount and poll for preloader completion
    useEffect(() => {
        const hasSeenHub = utils.storage.getSessionVariable(SESSION_KEY)
        if (hasSeenHub === "true") {
            setState(HubState.HIDDEN)
            return
        }

        // Poll for preloader completion
        const checkPreloaderDone = () => {
            return document.body.classList.contains(constants.HTML_CLASSES.bodyAfterLoading)
        }

        const interval = setInterval(() => {
            if (checkPreloaderDone()) {
                clearInterval(interval)
                scheduler.schedule(() => {
                    setState(HubState.SHOWING)
                }, 200, tag)
            }
        }, 100)

        return () => {
            clearInterval(interval)
            scheduler.clearAllWithTag(tag)
        }
    }, [])

    // Animate in
    useEffect(() => {
        if (state !== HubState.SHOWING) return
        utils.dom.setBodyScrollEnabled(false)

        scheduler.schedule(() => {
            setState(HubState.VISIBLE)
        }, 500, tag)
    }, [state])

    // Animate out
    useEffect(() => {
        if (state !== HubState.HIDING) return

        scheduler.schedule(() => {
            setState(HubState.HIDDEN)
            utils.dom.setBodyScrollEnabled(true)
        }, 400, tag)
    }, [state])

    const handlePortfolioClick = (portfolio) => {
        if (portfolio.isInternal) {
            // Only dismiss hub when entering the commercial site
            utils.storage.setSessionVariable(SESSION_KEY, "true")
            setState(HubState.HIDING)
        } else {
            // External links open in new tab but keep hub open
            window.open(portfolio.url, '_blank', 'noopener,noreferrer')
        }
    }

    return (
        <>
            {shouldShow && (
                <PortfolioHubOverlay
                    state={state}
                    isMobile={isMobile}
                    portfolios={PORTFOLIOS}
                    onPortfolioClick={handlePortfolioClick}
                />
            )}
            {children}
        </>
    )
}

function PortfolioHubOverlay({ state, isMobile, portfolios, onPortfolioClick }) {
    const visibilityClass = state === HubState.HIDING ? 'hub-hiding' :
                           state === HubState.SHOWING ? 'hub-showing' : 'hub-visible'

    return (
        <div className={`portfolio-hub-overlay ${visibilityClass}`}>
            <div className="portfolio-hub-container">
                <PortfolioHubHeader />

                {isMobile ? (
                    <PortfolioHubCarousel
                        portfolios={portfolios}
                        onPortfolioClick={onPortfolioClick}
                    />
                ) : (
                    <PortfolioHubPanels
                        portfolios={portfolios}
                        onPortfolioClick={onPortfolioClick}
                    />
                )}

                <PortfolioHubFooter />
            </div>
        </div>
    )
}

function PortfolioHubHeader() {
    return (
        <div className="portfolio-hub-header">
            <h1 className="portfolio-hub-title">
                Thomas <span className="highlight">Butler</span>
            </h1>
            <p className="portfolio-hub-subtitle">
                Full-Stack Developer & AI Specialist
            </p>
        </div>
    )
}

function PortfolioHubPanels({ portfolios, onPortfolioClick }) {
    return (
        <div className="portfolio-hub-panels">
            {portfolios.map((portfolio, index) => (
                <PortfolioHubPanel
                    key={portfolio.id}
                    portfolio={portfolio}
                    onClick={() => onPortfolioClick(portfolio)}
                    index={index}
                />
            ))}
        </div>
    )
}

function PortfolioHubPanel({ portfolio, onClick, index }) {
    const utils = useUtils()
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={`portfolio-hub-panel ${isHovered ? 'hovered' : ''}`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="portfolio-hub-panel-image">
                <img
                    src={utils.file.resolvePath(portfolio.image)}
                    alt={portfolio.title}
                />
                <div className="portfolio-hub-panel-overlay" />
            </div>

            <div className="portfolio-hub-panel-content">
                <div className="portfolio-hub-panel-icon">
                    <i className={portfolio.icon} />
                </div>
                <p className="portfolio-hub-panel-subtitle">{portfolio.subtitle}</p>

                <button
                    className="portfolio-hub-panel-button"
                    onClick={(e) => {
                        e.stopPropagation()
                        onClick()
                    }}
                >
                    {portfolio.buttonText}
                    <i className={portfolio.isInternal ? "fa-solid fa-arrow-right" : "fa-solid fa-external-link"} />
                </button>
            </div>

            {!portfolio.isInternal && (
                <div className="portfolio-hub-panel-badge">
                    <i className="fa-solid fa-external-link" />
                </div>
            )}
        </div>
    )
}

function PortfolioHubCarousel({ portfolios, onPortfolioClick }) {
    return (
        <Swiper
            className="portfolio-hub-carousel"
            slidesPerView={1.15}
            spaceBetween={16}
            centeredSlides={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
        >
            {portfolios.map((portfolio, index) => (
                <SwiperSlide key={portfolio.id}>
                    <PortfolioHubCard
                        portfolio={portfolio}
                        onClick={() => onPortfolioClick(portfolio)}
                        index={index}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

function PortfolioHubCard({ portfolio, onClick, index }) {
    const utils = useUtils()

    return (
        <div
            className="portfolio-hub-card"
            onClick={onClick}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="portfolio-hub-card-image">
                <img
                    src={utils.file.resolvePath(portfolio.image)}
                    alt={portfolio.title}
                />
            </div>

            <div className="portfolio-hub-card-content">
                <p className="portfolio-hub-card-subtitle">{portfolio.subtitle}</p>
                <p className="portfolio-hub-card-description">{portfolio.description}</p>

                <button
                    className="portfolio-hub-card-button"
                    onClick={(e) => {
                        e.stopPropagation()
                        onClick()
                    }}
                >
                    {portfolio.buttonText}
                    <i className={portfolio.isInternal ? "fa-solid fa-arrow-right" : "fa-solid fa-external-link"} />
                </button>
            </div>

            {!portfolio.isInternal && (
                <div className="portfolio-hub-card-badge">
                    <i className="fa-solid fa-external-link" />
                </div>
            )}
        </div>
    )
}

function PortfolioHubFooter() {
    return (
        <div className="portfolio-hub-footer">
            <div className="portfolio-hub-social">
                <a
                    href="https://github.com/ThomasJButler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-hub-social-link"
                    aria-label="GitHub"
                >
                    <i className="fa-brands fa-github" />
                </a>
                <a
                    href="https://www.linkedin.com/in/thomasbutleruk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-hub-social-link"
                    aria-label="LinkedIn"
                >
                    <i className="fa-brands fa-linkedin" />
                </a>
                <a
                    href="https://buymeacoffee.com/ojrwoqkgmv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-hub-social-link"
                    aria-label="Buy Me a Coffee"
                >
                    <i className="fa-solid fa-mug-hot" />
                </a>
            </div>
        </div>
    )
}

export default PortfolioHub
