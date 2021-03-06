const getters = {
    loginInfo: state => state.user.loginInfo, //登录用户信息
    isSliderShow: state => state.user.isSliderShow, //判断slider是否显示
    sliderQuotes: state => state.slider.quotes, //slider名言
    scrollY: state => state.app.scrollY, //滚动条位置
    tags: state => state.article.tags, //标签列表
    articleList: state => state.article.articleList, //文章列表
    page: state => state.article.page //文章页码
    // pathIndex: state => state.app.pathIndex,	//当前路由地址
    // pathName: state => state.app.pathName	//路由信息，用于面包屑导航
};

export default getters