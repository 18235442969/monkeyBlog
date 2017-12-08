<template>
	<div>
		<div v-html="contentFilter(articleDetail.content)" :body-style="blogListBodyStyle">
		</div>
	</div>
</template>

<script>
    import { mapGetters } from 'vuex'
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
		computed: {
            ...mapGetters([
                'articleList'
            ])
        },
		data(){
			return {
				articleDetail: {
					content: ''
				},
				blogListBodyStyle: {
                    padding: '10px'
                }
			}
		},
		methods: {
			getArticleDetail (id){
				this.articleDetail = this.articleList.find(e => e._id === id);
			},
			contentFilter (value){
                return marked(value).replace(/<img/g, '<img style="max-width: 100%;"');
            }
		},
		mounted() {
            this.getArticleDetail(this.$route.params.id);
        },
	}
</script>

<style lang="scss" scoped>
	.blog-detail-title{
		text-align: center;
		margin-top: 5px;
	}
	.blog-detail-time{
		margin: 5px 5px;
		text-align: right;
		font-size: .9rem;
		color: #808080;
	}
	.blog-detail-content{
		padding: 7px;
	}
</style>