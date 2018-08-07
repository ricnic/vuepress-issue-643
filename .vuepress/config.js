module.exports = {
    title: 'VuePress Issue 643',
    description: 'A bare-bones VuePress site to reproduce issue #643',
    themeConfig: {
        sidebar: [
            '/',
            '/getting-started',
            '/contact-us'
        ],
        displayAllHeaders: true,
        lastUpdated: 'Last Updated',
    },

    // un-comment this to "fix" the dev vs build issue
    /*configureWebpack: {
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        // necessary to ensure async chunks are also extracted
                        test: m => /css-extract/.test(m.type),
                        chunks: 'all',
                        enforce: false
                    }
                }
            }
        }
    }*/
};
