module.exports = {
    inputDir: './icons', // (required)
    outputDir: './dist', // (required)
    fontTypes: ['ttf', 'woff', 'woff2', 'opentype'],
    assetTypes: ['ts', 'scss', 'json', 'html'],
    fontsUrl: '../fonts',
    fontHeight: 0,
    normalize: true,
    formatOptions: {
        svg: {
            centerHorizontally: true,
            centerVertically: true
        },
        // Pass options directly to `svgicons2svgfont`
        woff: {
            // Woff Extended Metadata Block - see https://www.w3.org/TR/WOFF/#Metadata
            metadata: '...'
        },
        json: {
            // render the JSON human readable with two spaces indentation (default is none, so minified)
            indent: 2
        },
        pathOptions: {
            ts: './icon-types.ts',
            json: './misc/icon-codepoints.json'
        },
        ts: {
            // select what kind of types you want to generate (default `['enum', 'constant', 'literalId', 'literalKey']`)
            types: ['constant', 'literalId'],
            // render the types with `'` instead of `"` (default is `"`)
            singleQuotes: true,
            // customise names used for the generated types and constants
            enumName: 'MyIconType',
            constantName: 'MY_CODEPOINTS'
            // literalIdName: 'IconId',
            // literalKeyName: 'IconKey'
        }
    },
};
