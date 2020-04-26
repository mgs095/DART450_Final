module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        // Comment out below 
        process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
            content: [
                './public/index.html',

            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
    ]
    // Comment out above - make css changes then uncomment => npm run build
}