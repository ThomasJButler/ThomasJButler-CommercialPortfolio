import "./ASCIILoader.scss"
import React, { useEffect, useState } from 'react'

/**
 * TB pixel grid monogram — brand logo traced as pixel tiles.
 * Cascade reveal animation with neon glow.
 *
 * Grid: 13 cols x 11 rows
 * - T bar spans top, extends into B area (shared top edge)
 * - T stem: cols 2-3, B spine: cols 5-6 (col 4 = gap)
 * - B top bump: cols 10-11, bottom bump: cols 10-12 (wider)
 * - Counters: 3x3 pixel holes at cols 7-9
 */
const TB_PIXELS = [
    // Row 0 — T bar (wide, extends into B area)
    [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],
    // Row 1 — T stem + B top: bump begins curving out
    [1,2],[1,3], [1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],
    // Rows 2-3 — bump WIDENS to col 13 (counter 4-wide: cols 7-10)
    [2,2],[2,3], [2,5],[2,6], [2,11],[2,12],[2,13],
    [3,2],[3,3], [3,5],[3,6], [3,11],[3,12],[3,13],
    // Row 4 — bump curves back in (counter narrows: cols 7-9)
    [4,2],[4,3], [4,5],[4,6], [4,10],[4,11],[4,12],
    // Row 5 — B middle bar (waist)
    [5,2],[5,3], [5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],
    // Row 6 — bottom bump starts curving out (counter: cols 7-9)
    [6,2],[6,3], [6,5],[6,6], [6,10],[6,11],[6,12],
    // Rows 7-8 — bottom bump WIDENS to col 13 (counter 4-wide: cols 7-10)
    [7,2],[7,3], [7,5],[7,6], [7,11],[7,12],[7,13],
    [8,2],[8,3], [8,5],[8,6], [8,11],[8,12],[8,13],
    // Row 9 — B bottom: full width (wide)
    [9,2],[9,3], [9,5],[9,6],[9,7],[9,8],[9,9],[9,10],[9,11],[9,12],[9,13],
    // Row 10 — B bottom bar curves in
    [10,2],[10,3], [10,5],[10,6],[10,7],[10,8],[10,9],[10,10],[10,11],[10,12],
]

function ASCIILoader({ className = "", hidden = false }) {
    const [isRevealed, setIsRevealed] = useState(false)

    const hiddenClass = hidden ? 'pixel-loader-hidden' : ''
    const revealedClass = isRevealed ? 'pixel-loader-revealed' : ''

    useEffect(() => {
        if (hidden) return
        const timer = setTimeout(() => setIsRevealed(true), 100)
        return () => clearTimeout(timer)
    }, [hidden])

    return (
        <div className={`pixel-loader-wrapper ${className} ${hiddenClass} ${revealedClass}`}>
            <div className="pixel-grid">
                {TB_PIXELS.map(([row, col], i) => (
                    <div
                        key={i}
                        className="pixel-tile"
                        style={{
                            left: `calc(${col} * var(--cell))`,
                            top: `calc(${row} * var(--cell))`,
                            animationDelay: `${(row + col) * 30}ms`,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

ASCIILoader.ColorVariants = {
    LOADER: "pixel-loader-variant-loader"
}

export default ASCIILoader
