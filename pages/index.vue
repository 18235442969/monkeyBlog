<template>
    <div>
        <div class="blogList">
            <el-card class="box-card" :body-style="blogListBodyStyle">
                <h3>子组合选择器和同层组合选择器</h3>
                <div class="blogListTime">2017-09-30 15:55</div>
                <div class="blogListContent">
                    子组合选择器和同层组合选择器子组合选择器和同层组合选择器,子组合选择器和同层组合选择器子组合选择器和同层组合选择器，子组合选择器和同层组合选择器
                </div>
                <div class="blogListFooter">
                    <nuxt-link to="/blog/detail">阅读原文</nuxt-link>
                </div>
            </el-card>
            <el-card class="box-card" :body-style="blogListBodyStyle">
                <h3>子组合选择器和同层组合选择器</h3>
                <div class="blogListTime">2017-09-30 15:55</div>
                <div class="blogListContent">
                    子组合选择器和同层组合选择器子组合选择器和同层组合选择器,子组合选择器和同层组合选择器子组合选择器和同层组合选择器，子组合选择器和同层组合选择器
                </div>
                <div class="blogListFooter">
                    <nuxt-link to="/blog/detail">阅读原文</nuxt-link>
                </div>
            </el-card>
            <el-card class="box-card" :body-style="blogListBodyStyle">
                <h3>子组合选择器和同层组合选择器</h3>
                <div class="blogListTime">2017-09-30 15:55</div>
                <div class="blogListContent">
                    子组合选择器和同层组合选择器子组合选择器和同层组合选择器,子组合选择器和同层组合选择器子组合选择器和同层组合选择器，子组合选择器和同层组合选择器
                </div>
                <div class="blogListFooter">
                    <nuxt-link to="/blog/detail">阅读原文</nuxt-link>
                </div>
            </el-card>
            <el-card class="box-card" :body-style="blogListBodyStyle">
                <h3>子组合选择器和同层组合选择器</h3>
                <div class="blogListTime">2017-09-30 15:55</div>
                <div class="blogListContent">
                    子组合选择器和同层组合选择器子组合选择器和同层组合选择器,子组合选择器和同层组合选择器子组合选择器和同层组合选择器，子组合选择器和同层组合选择器
                </div>
                <div class="blogListFooter">
                    <nuxt-link to="/blog/detail">阅读原文</nuxt-link>
                </div>
            </el-card>
            <el-card class="box-card" :body-style="blogListBodyStyle">
                <h3>子组合选择器和同层组合选择器</h3>
                <div class="blogListTime">2017-09-30 15:55</div>
                <div class="blogListContent">
                    子组合选择器和同层组合选择器子组合选择器和同层组合选择器,子组合选择器和同层组合选择器子组合选择器和同层组合选择器，子组合选择器和同层组合选择器
                </div>
                <div class="blogListFooter">
                    <nuxt-link to="/blog/detail">阅读原文</nuxt-link>
                </div>
            </el-card>
            <el-card class="box-card" :body-style="blogListBodyStyle" >
                <h3>子组合选择器和同层组合选择器</h3>
                <div class="blogListTime">2017-09-30 15:55</div>
                <div class="blogListContent">
                    子组合选择器和同层组合选择器子组合选择器和同层组合选择器,子组合选择器和同层组合选择器子组合选择器和同层组合选择器，子组合选择器和同层组合选择器
                </div>
                <div class="blogListFooter">
                    <nuxt-link to="/blog/detail" >阅读原文</nuxt-link>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        beforeRouteLeave (to, from, next) {
            // 导航离开该组件的对应路由时调用
            if (to.path.indexOf('blog/detail') > -1) {
                this.$store.commit('SETSCROLLY', window.scrollY);
            } else {
                this.$store.commit('SETSCROLLY', 0);
            }
            next();
        },
        computed: {
            ...mapGetters([
                'scrollY'
            ])
        },
        asyncData() {
            return {
                blogListBodyStyle: {
                    padding: '10px'
                }
            }
        },
        methods: {
        },
        mounted() {
            window.scrollTo(0, this.scrollY);
        },
        created() {
        }
    }
</script>

<style lang="scss" scoped>
    .blogList{
        padding: 5px 5px 30px 5px;
        .box-card{
            margin-top: 5px;
            > {
                padding: 5px;
            }
            .blogListTime{
                margin: 5px 0;
                color: gray;
                font-size: .9rem;
            }
            .blogListFooter{
                text-align: right;
                font-size: .9rem;
            }
        }
    }
</style>
