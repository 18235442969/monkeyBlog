<template>
    <div class="app">
        <my-header class="header"></my-header>
        <div class="container">
            <slider class="slider" :class="[$store.state.user.isSliderShow ? 'sliderShow' : '']"></slider>
            <div class="shadow" @click="closeSlider(false)" :style="{display: $store.state.user.isSliderShow ? 'block' : 'none'}"></div>
            <nuxt class="content"></nuxt>
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
    methods: {
        closeSlider(par) {
            this.$store.dispatch('changeSlider', par);
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/css/frame.scss';
</style>
