<template>
    <transition name="custom-classes-transition" enter-active-class="animated fadeInLeft">
		<div v-show="show">
			<div class="persion-div">
				<img src="/image/persionImage.JPG" alt="persionImage" class="persionImage" />
			</div>
			<div class="quotes">
				{{ sliderQuotes[parseInt(Math.random()*sliderQuotes.length)] }}
			</div>
			<div class="tags">
				<el-row>
				  	<el-col :span="10" :offset="1" v-for="tag in tags" :key="tag._id">
						<el-tag type="info">{{tag.value}}({{tag.articleCount}})</el-tag>
				  	</el-col>
				</el-row>
			</div>
		</div>
    </transition>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { article } from '../assets/js/api/index'
	export default {
		computed: {
			...mapGetters([
				'sliderQuotes'
			])
		},
		data() {
			return {
				tags: [],
				show: false
			}
		},
		methods: {
			getTags: async function() {
				var req = await article.getTags();
				if (req.code === 'OK') {
					this.tags = req.data;
				}
			}
		},
		created() {
			// this.$store.dispatch('getQuotes', {}).then((data) => {
			// 	console.log(data);
			// });
		},
		mounted() {
			this.show = true;
			this.getTags();
		}
	}
</script>


<style lang="scss">
	.persion-div{
		text-align: center;
	}
	.persionImage{
		width: 150px;
		height: 150px;
		margin: 10px auto;
		border-radius: 50%;
	}
	.quotes{
		padding: 0 20px;
		font-size: .9rem;
		color: #808080;
		text-align: center;
	}
	.tags{
		margin-top: 30px;
		text-align: center;
	}
	.el-tag{
		font-size: 1rem;
	}
</style>