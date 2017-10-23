/**
 * 保存关于项目的基本信息
 */
const app = {
    state: {
        /**
         * [pathIndex 当前路由地址]
         * @type {String}
         */
        pathIndex: '',
        /**
         * [scrollY 滚动条的位置]
         */
        scrollY: 0
    },
    mutations: {
        CHANGEPATHINDEX: (state, par) => {
            state.pathIndex = par.pathIndex;
        },
        SETSCROLLY: (state, par) => {
            state.scrollY = par;
        }
    },
    actions: {
        /**
         * [changeIndex 改变当前路由]
         * @param  {[Object]} options.commit [commit]
         * @param  {[Object]} par            [当前路由地址]
         */
        changeIndex({ commit }, par) {
            commit('CHANGEPATHINDEX', par);
        }
    }
};

export default app;