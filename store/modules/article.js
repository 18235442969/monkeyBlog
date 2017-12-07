/**
 * 保存文章信息
 */
const article = {
    state: {
        tags: []
    },
    mutations: {
        SAVETAGS: (state, par) => {
            state.tags = par;
        },
        ADDTAGS: (state, par) => {
            state.tags.push(par);
        }
    },
    actions: {
        /**
         * [saveTags 保存标签列表]
         */
        saveTags({ commit }, par) {
            commit('SAVETAGS', par);
        },
        /**
         * [addTags 添加标签列表]
         */
        addTags({ commit }, par) {
            par.class = 'tag';
            commit('ADDTAGS', par);
        }
    }
};

export default article;