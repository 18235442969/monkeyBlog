const getters = {
    loginInfo: state => state.user.loginInfo, //登录用户信息
    isSliderShow: state => state.user.isSliderShow, //判断slider是否显示
    pathIndex: state => state.app.pathIndex,	//当前路由地址
    pathName: state => state.app.pathName	//路由信息，用于面包屑导航
};

export default getters