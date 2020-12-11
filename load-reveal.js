import Reveal from 'https://cdn.jsdelivr.net/npm/reveal.js/dist/reveal.esm.js'
import Markdown from 'https://cdn.jsdelivr.net/npm/reveal.js/plugin/markdown/markdown.esm.js'
import RevealHighlight from 'https://cdn.jsdelivr.net/npm/reveal.js/plugin/highlight/highlight.esm.js'

// CSS loading helpers
function loadCSS(css) {
    document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="${css}">`)
}
function loadRevealCSS(rcss) {
    loadCSS(`https://cdn.jsdelivr.net/npm/reveal.js/dist/${rcss}.css">`)
}

// Load stylesheets
['reset', 'reveal', 'theme/black', '../lib/css/monokai']
    .forEach(loadRevealCSS)

// Go!
Reveal.initialize({
    hash: true,
    plugins: [Markdown, RevealHighlight]
});
