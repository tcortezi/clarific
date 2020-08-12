<template>
	<div class="lp1">
		<section1 />
		<section2 />
		<cta />
		<section3 />
		<workflow />
		<section4 />
		<section5 />
		<whatsapp class="fixedBtn" @action-click="whatsappClicked" />
	</div>
</template>

<script>
	import Section1 from '~/components/lp1/Section1.vue'
	import Section2 from '~/components/lp1/Section2.vue'
	import Section3 from '~/components/lp1/Section3.vue'
	import Cta from '~/components/lp1/Cta.vue'
	import Workflow from '~/components/lp1/Workflow.vue'
	import Section4 from '~/components/lp1/Section4.vue'
	import Section5 from '~/components/lp1/Section5.vue'
	import Whatsapp from '~/components/lp2/Whatsapp.vue'
	export default {
		components: {
			Section1,
			Section2,
			Cta,
			Section3,
			Workflow,
			Section4,
			Section5,
			Whatsapp
		},
		layout: 'landing',
		head() {
			return {
				title: 'Design e desenvolvimento de produtos digitais - Clarific',
	    	link: [
	      	{ rel: 'icon', type: 'image/png', href: '/fav-lp-2.png' }
	    	]
			}
		},
		methods: {
			whatsappClicked() {
				this.$gtm.push({ event: 'whatsappLink', label: 'lp1-contact' })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.fixedBtn {
		position: fixed;
		bottom: 42px;
		right: 42px;
		z-index: 90;
		@media (max-width: 769px) {
			bottom: 20px;
			right: 20px;
		}
	}
</style>