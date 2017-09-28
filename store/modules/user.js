/**
 * 保存用户的信息
 */
const user = {
    state: {
        loginInfo: '', //登录信息
        isSliderShow: false
    },
    mutations: {
        SAVELOGININFO: (state, par) => {
            state.loginInfo = par;
        },
        CHANGESLIDER: (state, par) => {
            state.isSliderShow = par;
        }
    },
    actions: {
        /**
         * [保存用户信息]
         * @param  {[Object]} commit [commit]
         * @param  {[Object]} par   [登录返回的用户信息]
         */
        saveUserInfo({commit}, par) {
            return new Promise( resolve => {
                commit('SAVELOGININFO', par);
                resolve();
            });
        },
        changeSlider({commit}, par){
            commit('CHANGESLIDER', par);
        }
    }
};

export default user;