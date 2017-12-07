<template>
  	<div>
  		<div>
            <div class="article-title">
                标签
                <el-tooltip class="item" effect="dark" content="添加标签" placement="right">
                    <el-button type="primary" icon="plus" style="margin-left: 10px;padding: 7px 9px;" @click="addTag"></el-button>
                </el-tooltip>
            </div>
  			<div>
  				<el-tag :class="tag.class" v-for="tag in tags" :id="tag._id" :key="tag._id" closable type='info' @close="deleteTag($event, tag)" v-on:click.native="filterTag(tag)">
  					<i class="fa fa-tags"></i>
				  	{{ tag.value }}
				</el-tag>
  			</div>
  		</div>
  		<div v-if="articleList.length > 0">
  			<div class="article-title">
  				文章列表
  				<el-tooltip class="item" effect="dark" content="添加新文章" placement="right">
					<el-button type="primary" icon="edit" style="margin-left: 10px;padding: 7px 9px;"></el-button>
				</el-tooltip>
  			</div>
  			<ul class="article-list">
  				<li class="article select" v-for="article in articleList" :key="article._id">
  					<div class="article-header">
  						{{article.title}}
  					</div>
  					<div class="article-time">
  						{{article.createTime}}
  					</div>
  				</li>
  			</ul>
  		</div>
  	</div>
</template>
<script>
	import api from '../assets/js/api/article.js'
    import { mapGetters } from 'vuex'
	export default {
		computed: {
			...mapGetters([
                'tags'
            ])
		},
        data () {
            return {
            	articleList: []
                // tags: []
            }
        },
		asyncData () {
			return {
			}
		},
		methods: {
			getArticleDetail() {
				console.log(1);
			},
            addTag: async function (){
                this.$prompt('请输入标签', '标签', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(async ({ value }) => {
                	var response = await api.addTag({
                		value: value.trim()
                	});
                	if (response.code == 'OK') {
            			this.$message({
				          	message: '添加成功',
				          	type: 'success'
				        });
						this.$store.dispatch('addTags', response.data)
	          		}
                }).catch((error) => {
                	console.log(error);
                });
            },
            getTags: async function (){
            	var response = await api.getTags();
            	if (response.code == 'OK') {
            		response.data.forEach(e => e.class = 'tag');
            		this.$store.dispatch('saveTags', response.data);
          		}
            },
            deleteTag: async function (e, tag) {
            	e.stopPropagation();
        		this.$confirm('不想要这个标签了?', '提示', {
		          	confirmButtonText: '不想要了',
		          	cancelButtonText: '点错了',
		          	type: 'warning'
		        }).then(async () => {
		        	try {
		        		var resourse = await api.delTag({
		        			id: tag._id
		        		});
		        		if (resourse.code === 'OK') {
        					let tags = this.tags.filter(e => e._id !== tag._id);
		        			this.$store.dispatch('saveTags', tags);
							this.$message({
					            type: 'success',
					            message: '删除成功!'
				          	});
		        		} else {
		        			this.$message({
				            	type: 'info',
					            message: resourse.msg
				          	});
		        		}
		        	} catch (e) {
		        		this.$message({
				            type: 'info',
				            message: resourse.msg
			          	});
		        	}
		        }).catch(() => {
		          	this.$message({
			            type: 'info',
			            message: '已取消删除'
		          	});
		        });
            },
            filterTag (tag){
            	//判断当前是否选中
            	if (tag.class.indexOf('actived') > -1) {
            		tag.class = tag.class.replace(/ actived/g, '');
            	} else {
            		//获取其他选中的标签
            		let isChooseTag = this.tags.filter(e => e.class.indexOf('actived') > -1);
            		if (isChooseTag.length > 0) {
            			isChooseTag[0].class = isChooseTag[0].class.replace(/ actived/g, '');
            		}
            		tag.class += ' actived';
            	}
            },
            getArticleList: async function(){
            	const res = await api.getArticleList({
					page: 1,
					tagId: 0
				});
            	if (res.code === 'OK') {
            		this.articleList = res.data;
            	} else {
					this.$message.error('获取文章列表失败');
            	}
            }
		},
		mounted() {
			this.getTags();
			this.getArticleList();
		}
	}
</script>

<style lang="scss" scoped>
	.tag-title, .article-title{
		margin-top: 5px;
		text-align: center;
		color: #ef3f3f;
	}
	.article-title{
		font-size: 1.5rem;
		font-weight: bold;
	}
	.tag{
		display: inline-block;
		cursor: pointer;
		margin: 5px;
		border-radius: 10%;
		padding: 1px 3px;
		background-color: #9e9e9e;
		color: #fff;
		font-size: 1rem;
		&:hover{
			background-color: #f35c5c;
		}
		&:active{
			background-color: #ef3f3f;
		}
	}
	.tag.actived{
		background-color: #ef3f3f;
	}
	.tagClose{
		width: 30px;
		height: 30px;
		border-radius: 100%;
		font-size: 10px;
		background-color: #fff;
		color: #000000;
	}
	.article-list{
		margin-left: 1%;
		margin-top: 10px;
		width: 98%;
		border: 1px solid #c7c6c6;

	}
	.article{
		padding: 5px 7px;
		&:not(:last-child){
			border-bottom: 1px solid #c7c6c6;
		}
		&.select{
			border-left: 0.5rem solid #405bde;
		}
	}
	.article-header{
		padding-left: 5px;
		font-size: 1.1rem;
		font-weight: 700;
	}
	.article-time{
		padding-top: 5px;
		color: #4c4c4c;
		font-size: .8rem;
		text-align: right;
	}
</style>