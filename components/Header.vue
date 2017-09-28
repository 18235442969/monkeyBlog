<template>
  	<header>
  		<div class="sliderShowDiv" @click="sliderChange">
			<i class="fa fa-bars"></i>
  		</div>
		<h1>HZY'Blog</h1>
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
		asyncData () {
			return {
			}
		},
		methods: {
			sliderChange () {
				this.$store.dispatch("changeSlider", !this.isSliderShow);
			}
		}
	}
</script>