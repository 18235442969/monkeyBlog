<template>
	<div>
		<div class="article-title">
			<el-input placeholder="请输入标题" v-model="articleDetail.title">
		    	<template slot="prepend">标题</template>
		  	</el-input>
		</div>
		<div class="article-tag">
			<el-input placeholder="请输入标签" v-model="articleDetail.tag">
		    	<template slot="prepend">标签</template>
		    	<el-button slot="append" icon="plus" @click="addTag"></el-button>
		  	</el-input>
		</div>
		<div class="article-tags">
			<el-tag type="danger" v-for="(tag, index) in articleDetail.tags" :key="index" :closable="true" @close="deleteTag(tag, index)">{{tag}}</el-tag>
		</div>
		<no-ssr>
			<mavon-editor v-model="value" :toolbars="toolbars" @imgAdd="imgAdd"></mavon-editor>
		</no-ssr>
		<div class="article-control">
			<el-button type="success" @click="save">保存</el-button>
     		<el-button type="warning">发布</el-button>
    		<el-button type="danger">删除</el-button>
		</div>
		<div v-html="htmlShow" class="htmlShow">
		</div>
	</div>
</template>

<script>
	import marked from 'marked'
	const rendererMD = new marked.Renderer();
	marked.setOptions({
      	renderer: rendererMD,
      	gfm: true,
      	tables: true,
      	breaks: false,
      	pedantic: false,
      	sanitize: false,
      	smartLists: true,
      	smartypants: false
    });
	import api from '../assets/js/api/article.js'
	export default {
		layout: 'managerment',
		components: {
		},
		data() {
			return {
				value: '',
				toolbars: {
					bold: true, // 粗体
			      	italic: true, // 斜体
			      	header: true, // 标题
			      	underline: true, // 下划线
			      	strikethrough: true, // 中划线
			      	mark: true, // 标记
			      	superscript: true, // 上角标
			      	subscript: true, // 下角标
			      	quote: true, // 引用
			      	ol: true, // 有序列表
			      	ul: true, // 无序列表
			      	link: true, // 链接
			      	imagelink: true, // 图片链接
			      	code: true, // code
			      	table: true, // 表格
			      	fullscreen: true, // 全屏编辑
			      	readmodel: true, // 沉浸式阅读
			      	htmlcode: false, // 展示html源码
			      	help: true, // 帮助
			      	/* 1.3.5 */
			      	undo: true, // 上一步
			      	redo: true, // 下一步
			      	trash: true, // 清空
			      	save: false, // 保存（触发events中的save事件）
			      	/* 1.4.2 */
			      	navigation: false, // 导航目录
			      	/* 2.1.8 */
			      	alignleft: true, // 左对齐
			      	aligncenter: true, // 居中
			      	alignright: true, // 右对齐
			      	/* 2.2.1 */
			      	subfield: true, // 单双栏模式
			      	preview: true, // 预览
				},
				htmlShow: '',
				articleDetail: {
					title: '',
					tag: '',
					tags: [],
					content: ''
				}
			}
		},
		asyncData() {
			return {
			}
		},
		methods: {
			imgAdd(name, imgfile) {
				let param = new FormData(); //创建form对象
	          	param.append('file', imgfile);//通过append向form对象添加数据
	          	let config = {
		            headers:{'Content-Type':'multipart/form-data'}
	          	};  //添加请求头
	          	api.upload(param, config).then( response => {
	          		if (response.code == 'OK') {
		    			this.value = this.value.replace(name, response.data);
	          		}
	          	})
			},
			deleteTag(tag, index) {
				this.articleDetail.tags.splice(index, 1);
			},
			addTag() {
				const tagName = this.articleDetail.tag.trim();
				if (tagName != '') {
					this.articleDetail.tags.push(tagName);
					this.articleDetail.tag = '';
				} else {
					this.$message.error('请输入标签内容再添加');
				}
			},
			save (){
    			this.htmlShow = marked(this.value).replace(/<img/g, '<img style="width: 100%;"');
			}
		},
		computed: {
		},
		mounted() {
		}
	}
</script>

<style lang="scss" scoped>
	.v-note-wrapper{
		margin: 20px;
		width: 95%;
		height: 500px;
	}
	.article-title, .article-tag, .article-tags{
		padding: 15px 30px 0 20px;
	}
	.article-tags{
		padding-top: 0;
		>span{
			margin-right: 10px;
		}
	}
	.article-control{
		margin-right: 20px;
		text-align: right;
	}
	.htmlShow{
		width: 100%;
		img{
			width: 100%;
		}
	}
</style>