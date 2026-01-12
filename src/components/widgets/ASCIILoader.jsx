import "./ASCIILoader.scss"
import React, { useEffect, useState } from 'react'

// TB shape as grid coordinates [row, col] - forms the letters T and B
const TB_PIXELS = [
    // T - top bar (5 tiles)
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
    // T - stem (4 tiles)
    [1, 2], [2, 2], [3, 2], [4, 2],

    // B - vertical spine (5 tiles)
    [0, 6], [1, 6], [2, 6], [3, 6], [4, 6],
    // B - top horizontal bar
    [0, 7], [0, 8],
    // B - top curve
    [1, 8], [1, 9],
    // B - middle bar
    [2, 7], [2, 8],
    // B - bottom curve
    [3, 8], [3, 9],
    // B - bottom horizontal bar
    [4, 7], [4, 8],
]

function ASCIILoader({ className = "", hidden = false }) {
    const [isRevealed, setIsRevealed] = useState(false)

    const hiddenClass = hidden ? 'pixel-loader-wrapper-hidden' : ''
    // Don't add revealed class if hidden - prevents animation conflicts during hide
    const revealedClass = isRevealed && !hidden ? 'pixel-loader-revealed' : ''

    useEffect(() => {
        if (hidden) {
            setIsRevealed(false)
            return
        }

        // Small delay before revealing for dramatic effect
        const timer = setTimeout(() => {
            setIsRevealed(true)
        }, 100)

        return () => clearTimeout(timer)
    }, [hidden])

    return (
        <div className={`pixel-loader-wrapper ${className} ${hiddenClass}`}>
            <div className={`pixel-loader ${revealedClass}`}>
                <div className="pixel-grid">
                    {TB_PIXELS.map((pos, i) => (
                        <div
                            key={i}
                            className="pixel-tile"
                            style={{
                                left: `${pos[1] * 18}px`,
                                top: `${pos[0] * 18}px`
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

ASCIILoader.ColorVariants = {
    LOADER: "pixel-loader-variant-loader"
}

export default ASCIILoader
