<template>
	<section class="section">
		<div class="container">
			<div class="columns is-centered">
				<div class="column is-narrow">
					<h2 class="lp has-text-centered">Esta <em>landing page</em> nos ajudou a encontrar nossos clientes</h2>
					<p class="lp has-text-centered">Como por exemplo:</p>
				</div>
			</div>
			<div class="portfolio">
				<div class="item" @click="isModalActive = true; title = 'Fenix Trader Club'; img = 'fenix-big.png';">
					<img src="~/assets/img/lp2/portfolio/fenix.jpg">
				</div>
				<div class="item" @click="isModalActive = true; title = 'MTOR'; img = 'mtor-big.png';">
					<img src="~/assets/img/lp2/portfolio/mtor.jpg">
				</div>
				<div class="item" @click="isModalActive = true; title = 'Bella Lima'; img = 'bella-big.png';">
					<img src="~/assets/img/lp2/portfolio/bella.jpg">
				</div>
			</div>
			<div class="portfolio">
				<div class="item" @click="isModalActive = true; title = 'Carol Sanches'; img = 'csanches-big.png';">
					<img src="~/assets/img/lp2/portfolio/csanches.jpg">
				</div>
				<div class="item" @click="isModalActive = true; title = 'Geisla Melo'; img = 'geisla-big.png';">
					<img src="~/assets/img/lp2/portfolio/geisla.jpg">
				</div>
				<div class="item" @click="isModalActive = true; title = 'Fábrica de Monstros'; img = 'fdm-big.png';">
					<img src="~/assets/img/lp2/portfolio/fdm.jpg">
				</div>
			</div>
		</div>
		<b-modal :active.sync="isModalActive"
			full-screen :can-cancel="false" custom-class="lp">
			<portfolio :title="title" :img="img" />
		</b-modal>
	</section>
</template>

<script>
	import Portfolio from '~/components/lp2/Portfolio.vue'

	export default {
		components: {
			Portfolio
		},
		data() {
			return {
				isModalActive: false,
				title: null,
				img: null
			}
		}
	}
</script>

<style lang="scss" scoped>
	.section {
		h2.lp { margin-top: unset; }
		.columns { margin-bottom: 62px; }
		.portfolio {
			display: flex;
			align-items: center;
			justify-content: space-between;
			&:last-of-type { margin-top: 100px; margin-bottom: 200px; }
			@media (max-width: 769px) {
				flex-direction: column;
				.item + .item {
					margin-top: 62px;
				}
				&:last-of-type { margin-top: 62px; margin-bottom: unset; }
			}
		}

		.portfolio {
			&:nth-of-type(2n) {
				.item {
					&:first-of-type {
						background-image: url('~assets/img/lp2/portfolio/frame1.svg');
					}
					&:nth-of-type(2n) {
						background-image: url('~assets/img/lp2/portfolio/frame2.svg');
					}
					&:nth-of-type(3n) {
						background-image: url('~assets/img/lp2/portfolio/frame3.svg');
					}
				}
			}
			&:last-of-type {
				.item {
					&:first-of-type {
						background-image: url('~assets/img/lp2/portfolio/frame4.svg');
					}
					&:nth-of-type(2n) {
						background-image: url('~assets/img/lp2/portfolio/frame5.svg');
					}
					&:nth-of-type(3n) {
						background-image: url('~assets/img/lp2/portfolio/frame6.svg');
					}
				}
			}
		}
		.item {
			width: 200px;
			height: 292px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-size: cover;
			background-repeat: no-repeat;
			cursor: pointer;
			transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
			transform-origin: center center;
			img {
				width: 150px;
				height: 244px;
				max-width: 150px;
				max-height: 244px;
				backface-visibility: hidden;
				transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
			}
			@media (min-width: 769px) {
				&:hover {
					transform: scale(1.12);
					img {
						transform: scale(1.01);
					}
				}
			}
		}
	}
</style>