import Reveal from 'https://cdn.jsdelivr.net/npm/reveal.js/dist/reveal.esm.js'

// CSS loading helpers
function loadCSS(css) {
    document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="${css}">`)
}
function loadRevealCSS(rcss) {
    loadCSS(`https://cdn.jsdelivr.net/npm/reveal.js/dist/${rcss}.css">`)
}

// Load stylesheets
['reset', 'reveal', 'theme/black'].forEach(loadRevealCSS)

// Go!
Reveal.initialize();
