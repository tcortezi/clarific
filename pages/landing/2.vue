<template>
	<div class="lp2">
		<section-1 />
		<section-2 />
		<section-3 />
		<section-4 />
		<section-5 />
		<cta />
		<section-6 />
		<section-7 />
		<section-8 />
		<section-9 />
		<section-10 />
		<section-11 />
		<section-12 />
		<whatsapp class="fixedBtn" />
	</div>
</template>

<script>
	import Section1 from '~/components/lp2/Section1.vue'
	import Section2 from '~/components/lp2/Section2.vue'
	import Section3 from '~/components/lp2/Section3.vue'
	import Section4 from '~/components/lp2/Section4.vue'
	import Section5 from '~/components/lp2/Section5.vue'
	import Cta from '~/components/lp2/Cta.vue'
	import Section6 from '~/components/lp2/Section6.vue'
	import Section7 from '~/components/lp2/Section7.vue'
	import Section8 from '~/components/lp2/Section8.vue'
	import Section9 from '~/components/lp2/Section9.vue'
	import Section10 from '~/components/lp2/Section10.vue'
	import Section11 from '~/components/lp2/Section11.vue'
	import Section12 from '~/components/lp2/Section12.vue'
	import Whatsapp from '~/components/lp2/Whatsapp.vue'

	export default {
		components: {
			Section1,
			Section2,
			Section3,
			Section4,
			Section5,
			Cta,
			Section6,
			Section7,
			Section8,
			Section9,
			Section10,
			Section11,
			Section12,
			Whatsapp
		},
		layout: 'landing',
		head() {
			return {
				title: 'Landing page premium - Design e desenvolvimento - Clarific',
	    link: [
	      { rel: 'icon', type: 'image/png', href: '/fav-lp-2.png' }
	    ]
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