<template>
    <div>
        <div class="blogList">
            <el-card class="box-card" :body-style="blogListBodyStyle" v-for="article in articleList" :key="article._id">
                <h3>{{article.title}}</h3>
                <div class="blogListTime">{{article.createTime | timeFilter}}</div>
                <div class="blogListContent" v-html='contentFilter(article.content)'>
                </div>
                <div class="blogListFooter">
                    <nuxt-link :to="article._id | urlFilter">阅读原文</nuxt-link>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import api from '../assets/js/api/article.js'
    import marked from 'marked'
    const rendererMD = new marked.Renderer();
    marked.setOptions({
        renderer: rendererMD,
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: true,
        sanitize: true,
        smartLists: true,
        smartypants: true
    });
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
                'scrollY', 'articleList'
            ])
        },
        data() {
            return {
                blogListBodyStyle: {
                    padding: '10px'
                }
            }
        },
        methods: {
            getArticleList: async function(tagId, page, state){
                const res = await api.getArticleList({
                    page: page,
                    tagId: tagId,
                    state: state
                });
                if (res.code === 'OK') {
                    this.count = res.data.count;
                    res.data.articleList.forEach(e => e.class = 'article');
                    this.$store.dispatch('saveArticleList', res.data.articleList)
                } else {
                    this.$message.error('获取文章列表失败');
                }
            },
            contentFilter (value){
                return marked(value).replace(/<img/g, '<img style="max-width: 100%;"').slice(0, 300) + '...';
            }
        },
        mounted() {
            window.scrollTo(0, this.scrollY);
            this.getArticleList(0, 1);
        },
        filters: {
            timeFilter (time){
                var d = new Date(time);
                var year = d.getFullYear();
                var month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
                var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
                var hour = d.getHours();
                var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
                return  year+ '年' + month + '月' + day + '日 ' + hour + '点' + minutes + '分';
            },
            urlFilter (val){
                return `/blog/detail/${val}`
            }
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
