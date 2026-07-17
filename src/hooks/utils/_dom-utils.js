/**
 * @author Ryan Balieiro
 * @date 2025-05-10
 */

export const _domUtils = {
    /**
     * @return {boolean}
     **/
    didLoadImagesWithQuerySelector: (querySelector) => {
        const images = document.querySelectorAll(querySelector || 'img')
        return Array.from(images).every(img => img.complete && img.naturalHeight !== 0)
    },

    /**
     * @param {HTMLElement} element
     * @return {boolean}
     */
    isElementOutsideBounds: (element) => {
        const rect = element.getBoundingClientRect()

        return (
            rect.bottom < 0 ||
            rect.right < 0 ||
            rect.left > window.innerWidth ||
            rect.top > window.innerHeight
        )
    },

    /**
     * @param {HTMLElement} element
     * @param {Number} x
     * @param {Number} y
     * @return {boolean}
     */
    isInsideElement: (element, x, y) => {
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return (
            x >= rect.left &&
            x <= rect.right &&
            y >= rect.top &&
            y <= rect.bottom
        )
    }
}