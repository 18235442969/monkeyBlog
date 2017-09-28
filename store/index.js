import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import user from './modules/user';
import slider from './modules/slider';
import getters from './getters';

Vue.use(Vuex);

const store = () => new Vuex.Store({
    modules: {
        app,
        user,
        slider
    },
    getters
});

export default store