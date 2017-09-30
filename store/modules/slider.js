import sliderApi from 'assets/js/api/sliderApi'
/**
 * slider侧边栏
 */
const slider = {
    state: {
        quotes: [
            "The more a man learns, the more he sees his ignorance",
            "我努力的奔跑,  只为追上那个曾经被寄予厚望的自己",
            "君以国士待我, 我必国士报之",
            "不要证明别人错了，去让他们相信你是对的",
            "我和别人打赌，赢了一瓶酒。你们心安理得的喝着这酒，说着：反正是白送的。那么是否真的明白我输了也是要送出一瓶酒",
            "好像突然有了软肋，也突然有了铠甲",
            "我虽然不同意你的观点，但我誓死捍卫你说话的权利"
        ]
    },
    mutations: {
        SETQUOTES: (state, par) => {
            state.quotes = par;
        }
    },
    actions: {
        getQuotes({commit}, par) {
            return new Promise((resolve, reject) => {
                sliderApi.getQuotes(par).then((data) => {
                    commit('SETQUOTES', data);
                    resolve(data);
                })
            })
        }
    }
};

export default slider;