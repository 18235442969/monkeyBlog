<template>
  	<div>
  		<div class="backBtn" @click="goback">
			<i class="fa fa-mail-reply"></i>
  		</div>
		<span class="title">后台管理中心</span>
  	</div>
</template>
<script>
	export default {
		asyncData () {
			return {
			}
		},
		methods: {
			goback() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.title{
		font-size: 2rem;
		font-weight: 700;
	}
	.backBtn{
	    display: inline-block;
	    text-align: center;
	    width: 4rem;
	    font-size: 2rem;
	    cursor: pointer;
	    &:hover{
	    	background-color: #d6d4d3;
	    };
	    &:active{
	    	background-color: #9c9c9c;
	    }
	}
</style>