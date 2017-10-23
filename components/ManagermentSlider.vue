<template>
  	<div>
  		<div>
  			<h2 class="tag-title">标签</h2>
  			<div>
  				<div class="tag">
  					<i class="fa fa-tags"></i>
  					打实
  				</div>
  				<div class="tag">
  					<i class="fa fa-tags"></i>
  					打实大s
  				</div>
  				<div class="tag">
  					<i class="fa fa-tags"></i>
  					打实
  				</div>
  				<div class="tag">
  					<i class="fa fa-tags"></i>
  					打实
  				</div>
  				<div class="tag">
  					<i class="fa fa-tags"></i>
  					打实
  				</div>
  				<div class="tag">
  					<i class="fa fa-tags"></i>
  					打实
  				</div>
  				<div class="tag">
  					<i class="fa fa-tags"></i>
  					打实
  				</div>
  				<div class="tag">
  					<i class="fa fa-tags"></i>
  					打实
  				</div>
  			</div>
  		</div>
  		<div>
  			<div class="article-title">
  				文章列表
  				<el-tooltip class="item" effect="dark" content="添加新文章" placement="right">
					<el-button type="primary" icon="edit" style="margin-left: 10px;padding: 7px 9px;"></el-button>
				</el-tooltip>
  			</div>
  			<ul class="article-list">
  				<li class="article select">
  					<div class="article-header">
  						子组合选择器和同层组合选择器
  					</div>
  					<div class="article-time">
  						2017-09-30
  					</div>
  				</li>
  				<li class="article" @click="getArticleDetail">
  					<div class="article-header">
  						子组合选择器和同层组合选择器
  					</div>
  					<div class="article-time">
  						2017-09-30
  					</div>
  				</li>
  				<li class="article">
  					<div class="article-header">
  						子组合选择器和同层组合选择器
  					</div>
  					<div class="article-time">
  						2017-09-30
  					</div>
  				</li>
  			</ul>
  		</div>
  	</div>
</template>
<script>
	export default {
		asyncData () {
			return {
			}
		},
		methods: {
			getArticleDetail() {
				console.log(1);
			}
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
		margin: 10px;
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