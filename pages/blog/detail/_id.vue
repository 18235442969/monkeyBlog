<template>
	<div class="article-content">
		<div v-html="contentFilter(articleDetail.content)" :body-style="blogListBodyStyle">
		</div>
	</div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { article } from '../../../assets/js/api/index'
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
			getArticleDetail: async function(id){
				const req = await article.getArticleDetail({
					id: id
				});
				if (req.code === 'OK') {
					this.articleDetail = req.data;
				}
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
	*{
		margin: auto;
		padding: auto;
	}
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
	@media (max-width: 800px) {
		.content{
			width: 96%;
		}
	}
</style>