<template>
	<div>
		<div class="blog-detail-title">
			<h2>子组合选择器和同层组合选择器</h2>
		</div>
		<div class="blog-detail-time">
			<span>2017-09-30</span>
		</div>
		<div class="blog-detail-content">
			detail
		</div>
	</div>
</template>

<script>
	export default {
		asyncData() {
			return {

			}
		},
		methods: {

		}
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