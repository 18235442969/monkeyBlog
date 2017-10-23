<template>
    <div class="app">
            <managerment-header class="header"></managerment-header>
            <div class="managerment-container">
                <managerment-slider class="managerment-slider"></managerment-slider>
                <nuxt class="managerment-main"></nuxt>
            </div>
        </div>
    </div>
</template>

<script>
    import ManagermentHeader from '../components/ManagermentHeader.vue'
    import ManagermentSlider from '../components/ManagermentSlider.vue'

    export default {
        components: {
            ManagermentHeader,
            ManagermentSlider
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/frame.scss';
    .managerment-container{
        position: absolute;
        top: 7.5%;
        min-width: 100%;
        height: 92%;
    }
    .header{
        height: 7.5%;
        text-align: -webkit-auto;
    }
    @media (max-width: 800px) {
        .container{
            width: 95%;
        }
    }
    .managerment-slider, .managerment-main{
        position: relative;
        display: inline-block;
        overflow-y: auto;
        height: 100%;
    }
    .managerment-slider::-webkit-scrollbar {
        display: none;
    }
    .managerment-main::-webkit-scrollbar {
        display:none;
    }
    .managerment-slider{
        width: 25%;
        // border-right: 1px solid #c7c6c6;
    }
    .managerment-main{
        width: 74%;
    }
</style>
