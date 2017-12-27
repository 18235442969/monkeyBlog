<template>
    <div class="app">
        <my-header class="header"></my-header>
        <div class="container">
            <slider class="slider" :class="[$store.state.user.isSliderShow ? 'sliderShow' : '']"></slider>
            <div class="shadow" @click="closeSlider(false)" :style="{display: $store.state.user.isSliderShow ? 'block' : 'none'}"></div>
            <transition name="custom-classes-transition" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
                <nuxt class="content media-show" v-show="show"></nuxt>
            </transition>
            <transition name="custom-classes-transition" enter-active-class="animated fadeIn">
                <nuxt class="content media-hide" v-show="show"></nuxt>
            </transition>
        </div>
    </div>
</template>

<script>
import MyHeader from '../components/Header.vue'
import Slider from '../components/Slider.vue'

export default {
    components: {
        MyHeader,
        Slider
    },
    data(){
        return {
            show: false
        }
    },
    methods: {
        closeSlider(par) {
            this.$store.dispatch('changeSlider', par);
        }
    },
    mounted(){
        this.show = true;
    }
}
</script>

<style lang="scss">
    @import '../assets/css/frame.scss';
    @import '../assets/css/animate.css';
    .media-show{
        display: block;
    }
    .media-hide{
        display: none;
    }
    @media (max-width: 800px) {
        .media-hide{
            display: block;
        }
        .media-show{
            display: none;
        }
    }
</style>
