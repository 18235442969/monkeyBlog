<template>
  	<header>
  		<div class="sliderShowDiv" @click="sliderChange">
			<i class="fa fa-bars"></i>
  		</div>
		<h1 class="blog" @click="goToHme">HZY'Blog</h1>
		<div class="loginBtn">
			<el-button type="text" v-if="!loginInfo" @click="loginIn">登录</el-button>
			<el-dropdown @command="handleCommand" trigger="click" v-else>
			  	<span class="el-dropdown-link">
			    	{{loginInfo.name}}
			    	<i class="el-icon-caret-bottom el-icon--right"></i>
			  	</span>
			  	<el-dropdown-menu slot="dropdown">
				    <el-dropdown-item command="managementCenter">管理中心</el-dropdown-item>
				    <el-dropdown-item command="loginOut">退出</el-dropdown-item>
			  	</el-dropdown-menu>
			</el-dropdown>
  		</div>
  	</header>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default {
		computed: {
	        ...mapGetters([
	            'isSliderShow'
	        ])
	    },
	    data() {
	    	return {
	    		loginInfo: false
	    	}
	    },
		asyncData () {
			return {
			}
		},
		methods: {
			sliderChange () {
				this.$store.dispatch("changeSlider", !this.isSliderShow);
			},
			handleCommand(command) {
				if(command == 'loginOut') {
					localStorage.removeItem('loginInfo');
					this.loginInfo = false;
				} else if (command == 'managementCenter') {
					this.$router.push('/managementCenter');
				}
			},
			loginIn() {
				localStorage.setItem('loginInfo', JSON.stringify({name: 'hzy'}));
				this.loginInfo = {name: 'hzy'};
			},
			goToHme() {
				this.$router.push('/');
			}
		},
		mounted() {
			this.loginInfo = localStorage.loginInfo ? JSON.parse(localStorage.loginInfo) : false;
		}
	}
</script>

<style lang="scss" scoped>
	.loginBtn{
		position: absolute;
		display: inline-block;
		right: 0px;
		width: 100px;
		height: 100%;
		cursor: pointer;
	}
	.blog{
		cursor: pointer;
	}
</style>