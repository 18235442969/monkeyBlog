module.exports = {
    vender:[
        'element-ui', 'axios', 'mavon-editor'
    ],
    /*
    ** Headers of the page
    */
    head: {
        title: "HZY'Blog",
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: "HZY'Blog" }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Global CSS
    */
    css: [{
        src: '~assets/css/main.scss',
        lang: 'scss'
    },{
        src: 'element-ui/lib/theme-default/index.css',
        lang: 'css'
    },{
        src: '~static/css/font-awesome.min.css',
        lang: 'css'
    },{
        src: '~static/css/mavonEditor.css',
        lang: 'css'
    }],
    /*
    ** Customize the progress-bar color
    */
    // loading: { color: '#3B8070' },
    loading: { color: '#59afec' },
    loaders: [
        {
            test: '/\.scss$/',
            loader: 'style!css!scss'
        }
    ],
    babel:{
        'plugins': [['component', [
            {
              'libraryName': 'element-ui',
              'styleLibraryName': 'theme-default'
            },
            'transform-async-to-generator',
            'transform-runtime'
        ]]],
        comments: true
    },
    plugins: [
        {
            src: '~plugins/element-ui',
            ssr: true
        },{
            src: '~plugins/mavon-editor',
            ssr: false
        }
    ],
    build: {
        vendor: ['axios', 'element-ui']
    }
}
