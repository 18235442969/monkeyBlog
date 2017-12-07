<template>
  	<header>
  		<div class="sliderShowDiv" @click="sliderChange">
			<i class="fa fa-bars"></i>
  		</div>
		<h1 class="blog" @click="goToHme">HZY'Blog</h1>
		<div class="loginBtn">
			<el-button type="text" v-if="!loginInfo" @click="loginInDialog = true">登录</el-button>
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
  		<el-dialog title="登录" :visible.sync="loginInDialog" :modal="false" size="tiny">
		  	<el-form :model="loginData" :rules="loginRule" ref="loginData" label-width="50px" class="demo-ruleForm">
		  		<el-form-item label="账号" prop="username">
			    	<el-input type="text" v-model="loginData.username" auto-complete="off"></el-input>
			  	</el-form-item>
			  	<el-form-item label="密码" prop="password">
			    	<el-input type="password" v-model="loginData.password" auto-complete="off"></el-input>
			  	</el-form-item>
			  	<el-form-item style="text-align: right;">
			    	<el-button type="primary" @click="submitForm('loginData')">提交</el-button>
			  	</el-form-item>
			</el-form>
		</el-dialog>
  	</header>
</template>
<script>
	import { mapGetters } from 'vuex'
	import api from '../assets/js/api/loginApi.js'
	export default {
		computed: {
	        ...mapGetters([
	            'isSliderShow', 'loginInfo'
	        ])
	    },
	    data() {
	    	const validateUsername = (rule, value, callback) => {
	    		if ( value.trim() == '' ) {
		          	return callback(new Error('请输入账号'));
		        }
		        setTimeout(() => {
		          	const usernameReg = /[a-zA-Z0-9]{5,12}/;
		          	if (usernameReg.test(value)) {
		          		callback();
		          	} else {
		          		callback("账号为5-12位");
		          	}
		        }, 100);
	    	}
	    	const validatePassword = (rule, value, callback) => {
	    		if ( value.trim() == '' ) {
		          	return callback(new Error('请输入密码'));
		        }
		        setTimeout(() => {
		          	const passwordReg = /[a-z0-9A-Z]{6,12}/;
		          	if (passwordReg.test(value)) {
		          		callback();
		          	} else {
		          		callback("密码为6-12位");
		          	}
		        }, 100);
	    	}
	    	return {
	    		loginInDialog: false,
	    		loginData: {
	    			username: '',
	    			password: ''
	    		},
	    		loginRule: {
		          	username: [
		            	{ validator: validateUsername,trigger: 'blur' }
		          	],
		          	password: [
		            	{ validator: validatePassword,trigger: 'blur'}
		          	]
		        }
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
					this.$confirm('退出?', '提示', {
			          	confirmButtonText: '麻溜儿的',
			          	cancelButtonText: '手误',
			          	type: 'warning'
			        }).then(() => {
		        		document.cookie = 'loginInfo="";-1';
						this.$store.dispatch('saveUserInfo', false);
			        }).catch(() =>{})
				} else if (command == 'managementCenter') {
					this.$router.push('/managementCenter');
				}
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
		          	if (valid) {
		          		this.loginIn();
		          	} else {
			            return false;
		          	}
		        });
			},
			loginIn: async function (){
				var data = await api.loginIn(this.loginData);
				if (data.code === 'OK') {
					//清除登录框信息
					this.loginInDialog = false;
					this.loginData.username = '';
					this.loginData.password = '';
					//保存到cookie
					let nowDate = new Date();
				  	nowDate.setTime(nowDate.getTime() + (10 * 60 * 1000));
				  	var expires = "expires = " + nowDate.toGMTString();
				  	document.cookie = 'loginInfo=' + JSON.stringify(data.data) + "; " + expires;
				  	//保存用户信息
					this.$store.dispatch('saveUserInfo', data.data);
				} else {
					this.$message.error(data.msg);
				}
			},
			goToHme() {
				this.$router.push('/');
			}
		},
		mounted() {
			let cookieArr = document.cookie.split(';')
			let loginInfo = cookieArr.find(e => e.indexOf('loginInfo=') > -1);
			if (loginInfo) {
				this.$store.dispatch('saveUserInfo', JSON.parse(loginInfo.split('=')[1]));
			}
		}
	}
</script>

<style lang="scss" scoped>
	.loginBtn{
		position: absolute;
		display: inline-block;
		right: 0px;
		width: 150px;
		height: 100%;
		cursor: pointer;
	}
	.blog{
		cursor: pointer;
	}
	@media (max-width: 800px) {
		.loginBtn{
			display: none;
		}
	}
</style>