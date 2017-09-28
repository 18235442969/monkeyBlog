<template>
    <div class="app">
        <my-header class="header"></my-header>
        <div class="container">
            <slider class="slider" :class="[$store.state.user.isSliderShow ? 'sliderShow' : '']"></slider>
            <div class="shadow" @click="closeSlider(false)"></div>
            <nuxt class="content"></nuxt>
        </div>
        <!-- <my-footer class="footer"></my-footer> -->
    </div>
</template>

<script>
// import MyFooter from '../components/Footer.vue'
import MyHeader from '../components/Header.vue'
import Slider from '../components/Slider.vue'

export default {
    components: {
        // MyFooter
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
