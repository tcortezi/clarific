<template>
	<section class="section">
		<div class="container">
			<a href="https://clarific.com.br/" target="_blank" class="logo"><img src="~/assets/img/lp2/logo.svg"></a>
			<div class="columns">
				<div class="column">
					<div class="content">
						<h1>Websites que geram impacto</h1>
						<a class="cta" v-scroll-to="{
							el: '#form',
							offset: -10,
							easing: [.5, 0, .75, 0],
							duration: 800
						}">
							<span>Vamos criar o seu -></span>
						</a>
					</div>
				</div>
				<div class="column slideContainer">
					<b-carousel
						class="slide"
						:arrow="false"
						:arrow-hover="false"
						:indicator="false"
						:pause-info="false"
						:pause-hover="false"
					>
						<b-carousel-item v-for="(slide, i) in 1" :key="i" class="item">
							<img :src="require(`~/assets/img/lp1/slides/${i}.jpg`)">
						</b-carousel-item>
					</b-carousel>
				</div>
			</div>
		</div>
		<lottie :options="blob" :height="800" :width="800" v-on:animCreated="handleAnimation" class="blob" :noMouse="true" />
	</section>
</template>

<script>
	import Lottie from '~/components/Lottie.vue'

	export default {
		components: {
			Lottie
		},
		data() {
			return {
	      blob: {
	        animationData: require(`~/assets/img/lp1/blob.json`),
	        loop: true,
	        autoplay: true,
	        prerender: true
	      }
			}
		},
		methods: {
      handleAnimation: function (anim) {
        this.anim = anim
        this.anim.setSpeed(0.5)
        this.anim.playSegments([0, 60], true)
        this.playing = true
      }
		}
	}
</script>

<style lang="scss" scoped>
	.column.slideContainer {
		@media(max-width: 769px) {
			max-width: 100vw;
			display: grid;
			place-items: center;
			place-content: center;
		}
	}
	.logo {
		z-index: 30;
		position: relative;
	}
	.slide {
		margin-left: 64px;
		width: 260px;
		height: 520px;
		@media (max-width: 769px) {
			margin-left: unset;
			margin-top: 32px;
			width: 160px;
			height: 320px;
		}
		background: url('~assets/img/lp1/mockup.svg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		display: grid;
		place-items: center;
		place-content: center;
		.item {
			img {
				max-width: 225px;
				border-radius: 30px;
				@media (max-width: 769px) {
					max-width: 138px;
					border-radius: 20px;
				}
			}
		}
	}
	.section {
		background-color: #fafafa;
		min-height: 693px;
		display: flex;
		position: relative;
		.blob {
			position: absolute;
			right: 64px;
			top: -100px;
			z-index: 0;
			@media (max-width: 1600px) {
				right: 0;
			}
			@media (max-width: 1500px) {
				right: -100px;
			}
			@media (max-width: 1380px) {
				right: -200px;
			}
			@media (max-width: 1000px) {
				right: -300px;
			}
			@media (max-width: 769px) {
				right: -500px;
				top: -400px;
			}
		}
		.container {
			min-height: 100%;
		}
		.columns {
			position: relative;
			height: 100%;
			z-index: 20;
			@media (max-width: 769px) {
				display: flex;
				flex-direction: column;
				.column:first-child {
					order: 9;
				}
			}
		}
		.content {
			width: 423px;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			min-height: 100%;
			padding-bottom: 100px;
			@media (max-width: 769px) {
				width: auto;
				display: block;
				margin-top: 32px;
			}
			h1 {
				font-weight: 300;
				font-size: 64px;
				line-height: 72px;
				letter-spacing: -2px;
				color: #141414;
				margin-bottom: 42px;
				@media (max-width: 769px) {
					font-size: 42px;
					line-height: 50px;
				}
			}
			.cta {
				display: inline-block;
				position: relative;
				padding: 25px 48px;
				background: #0B66E3;
				font-weight: normal;
				font-size: 20px;
				line-height: 20px;
				color: #FAFAFA;
				max-width: 289px;
				@media (max-width: 769px) {
					padding: 25px 32px;
				}
				> span {
					z-index: 30;
					position: relative;
				}
				&::before {
					content: '';
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					width: 0%;
					height: 100%;
					background: linear-gradient(90deg, #232526 0%, #414345 100%);
					transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
				}
				@media (min-width: 769px) {
					&:hover {
						&::before {
							width: 100%;
						}
					}
				}
			}
		}
	}
</style>