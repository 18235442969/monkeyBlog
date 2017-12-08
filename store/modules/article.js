/**
 * 保存文章信息
 */
const article = {
    state: {
        tags: [],
        articleDetail: {},
        articleList: []
    },
    mutations: {
        SAVETAGS: (state, par) => {
            state.tags = par;
        },
        ADDTAGS: (state, par) => {
            state.tags.push(par);
        },
        SAVEARTICLEDETAIL: (state, par) => {
            if(par._id == ''){
                state.articleList.forEach(e => {
                    if (e.class.indexOf('select') > -1) {
                        e.class = e.class.replace(/ select/g, '');
                    }
                })
            }
            state.articleDetail = par;
        },
        SAVEARTICLELIST: (state, par) => {
            state.articleList = par;
        },
        ADDARTICLE: (state, par) => {
            state.articleList.forEach(e => {
                if (e.class.indexOf('select') > -1) {
                    e.class = e.class.replace(/ select/g, '');
                }
            })
            state.articleList.unshift(par);
        },
        DELARTICLE: (state, par) => {
            state.articleList = state.articleList.filter(e => e._id != par);
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
        },
        /**
         * [saveArticleDetail 保存文章详情]
         */
        saveArticleDetail({ commit }, par) {
            commit('SAVEARTICLEDETAIL', par);
        },
        /**
         * [saveArticleList 保存文章列表]
         */
        saveArticleList({ commit }, par) {
            commit('SAVEARTICLELIST', par);
        },
        /**
         * [addArticle 保存文章]
         */
        addArticle({ commit }, par) {
            commit('ADDARTICLE', par);
        },
        /**
         * [delArticle 删除文章]
         */
        delArticle({ commit }, par) {
            commit('DELARTICLE', par);
        }
    }
};

export default article;