<template>
	<div>
		<div class="persion-div">
			<img src="/image/persionImage.JPG" alt="persionImage" class="persionImage" />
		</div>
		<div class="quotes">
			{{ sliderQuotes[parseInt(Math.random()*sliderQuotes.length)] }}
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		computed: {
			...mapGetters([
				'sliderQuotes'
			])
		},
		asyncData(context) {
			return {
			}
		},
		methods: {

		},
		created() {
			// this.$store.dispatch('getQuotes', {}).then((data) => {
			// 	console.log(data);
			// });
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
		font-size: .7rem;
		color: #808080;
		text-align: center;
	}
</style>