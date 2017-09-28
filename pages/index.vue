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
                    <router-link to="/about">阅读原文</router-link>
                </div>
            </el-card>
            <el-card class="box-card" :body-style="blogListBodyStyle">
                <h3>子组合选择器和同层组合选择器</h3>
                <div class="blogListTime">2017-09-30 15:55</div>
                <div class="blogListContent">
                    子组合选择器和同层组合选择器子组合选择器和同层组合选择器,子组合选择器和同层组合选择器子组合选择器和同层组合选择器，子组合选择器和同层组合选择器
                </div>
                <div class="blogListFooter">
                    <router-link to="/about">阅读原文</router-link>
                </div>
            </el-card>
            <el-card class="box-card" :body-style="blogListBodyStyle">
                <h3>子组合选择器和同层组合选择器</h3>
                <div class="blogListTime">2017-09-30 15:55</div>
                <div class="blogListContent">
                    子组合选择器和同层组合选择器子组合选择器和同层组合选择器,子组合选择器和同层组合选择器子组合选择器和同层组合选择器，子组合选择器和同层组合选择器
                </div>
                <div class="blogListFooter">
                    <router-link to="/about">阅读原文</router-link>
                </div>
            </el-card>
            <el-card class="box-card" :body-style="blogListBodyStyle">
                <h3>子组合选择器和同层组合选择器</h3>
                <div class="blogListTime">2017-09-30 15:55</div>
                <div class="blogListContent">
                    子组合选择器和同层组合选择器子组合选择器和同层组合选择器,子组合选择器和同层组合选择器子组合选择器和同层组合选择器，子组合选择器和同层组合选择器
                </div>
                <div class="blogListFooter">
                    <router-link to="/about">阅读原文</router-link>
                </div>
            </el-card>
            <el-card class="box-card" :body-style="blogListBodyStyle">
                <h3>子组合选择器和同层组合选择器</h3>
                <div class="blogListTime">2017-09-30 15:55</div>
                <div class="blogListContent">
                    子组合选择器和同层组合选择器子组合选择器和同层组合选择器,子组合选择器和同层组合选择器子组合选择器和同层组合选择器，子组合选择器和同层组合选择器
                </div>
                <div class="blogListFooter">
                    <router-link to="/about">阅读原文</router-link>
                </div>
            </el-card>
            <el-card class="box-card" :body-style="blogListBodyStyle">
                <h3>子组合选择器和同层组合选择器</h3>
                <div class="blogListTime">2017-09-30 15:55</div>
                <div class="blogListContent">
                    子组合选择器和同层组合选择器子组合选择器和同层组合选择器,子组合选择器和同层组合选择器子组合选择器和同层组合选择器，子组合选择器和同层组合选择器
                </div>
                <div class="blogListFooter">
                    <router-link to="/about">阅读原文</router-link>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        asyncData() {
            return {
                blogListBodyStyle: {
                    padding: '10px'
                }
            }
        },
        methods: {

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
                font-size: .9rem;
            }
        }
    }
</style>
