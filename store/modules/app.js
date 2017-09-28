/**
 * 保存关于项目的基本信息
 */
const app = {
    state: {
        /**
         * [pathName 完整路由信息（手动添加，匹配面包屑导航）]
         * @type {Array}
         */
        pathName: [{
            listName: '问卷调查',
            children: [
                {
                    path: 'list',
                    name: '问卷列表'
                },
                {
                    path: 'creat',
                    name: '新增问卷'
                },
                {
                    path: 'edit',
                    name: '修改问卷'
                },
                {
                    path: 'copy',
                    name: '复制问卷'
                },
                {
                    path: 'detail',
                    name: '问卷详情'
                }
            ]
        }],
        /**
         * [pathIndex 当前路由地址]
         * @type {String}
         */
        pathIndex: ''
    },
    mutations: {
        CHANGEPATHINDEX: (state, par) => {
            state.pathIndex = par.pathIndex;
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