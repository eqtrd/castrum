var fontconvert = require('fontconvert-tool');
const path = require("path");

fontconvert.convertFonts('./src/fonts', './src/fonts', [], {


    subset: [
        'Basic Latin', 'Latin-1 Supplement', // Latin
        'General Punctuation', 'Currency Symbols' // Punctuation
    ],
    outTypes: ['woff', 'woff2', 'otf', 'svg'],
});