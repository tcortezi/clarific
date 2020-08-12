<template>
	<section class="section">
		<div class="container">
			<div id="how"><span>VEJA ALGUNS DE NOSSOS CASES</span></div>

			<div class="columns is-vcentered is-centered">
				<div class="column is-narrow">
					<img src="~/assets/img/lp1/cases/partiu.jpg">
				</div>
				<div class="column is-narrow is-offset-2">
					<h5 class="lp lp1">EVENTOS</h5>
					<h2 class="lp">Partiu Ingresso</h2>
					<p class="lp">
						A Partiu conecta organizadores de eventos aos seus clientes e nós fomos os desenvolvedores do produto digital, desde o backend à interface do usuário.
					</p>
					<a class="btn-lp lp1" @click="isModalActive = true; portfolio = 'partiu';">
						<span>Ver case -></span>
					</a>
				</div>
			</div>

			<div class="columns is-vcentered is-centered">
				<div class="column is-narrow">
					<h5 class="lp lp1">Corporativo</h5>
					<h2 class="lp">Joa Assessoria</h2>
					<p class="lp">
						Fundada por Luciano Huck, a Joa gerencia fundos que impactam a economia brasileira. Fomos os responsáveis pelo desenvolvimento de seu website.
					</p>
					<a class="btn-lp lp1" @click="isModalActive = true; portfolio = 'joa';">
						<span>Ver case -></span>
					</a>
				</div>
				<div class="column is-narrow is-offset-2">
					<img src="~/assets/img/lp1/cases/joa.jpg">
				</div>
			</div>

		</div>

		<b-modal :active.sync="isModalActive"
			full-screen :can-cancel="false" custom-class="lp">
			<partiu v-if="portfolio == 'partiu'" />
			<joa v-if="portfolio == 'joa'" />
		</b-modal>
	</section>
</template>

<script>
	 import Partiu from '~/components/lp1/case/Partiu.vue'
	 import Joa from '~/components/lp1/case/Joa.vue'

	 export default {
	 	components: {
	 		Partiu,
	 		Joa
	 	},
	 	data() {
	 		return {
	 			isModalActive: false,
	 			portfolio: null
	 		}
	 	}
	 }
</script>

<style lang="scss" scoped>
	#how {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 32px;
		margin-bottom: 128px;
		@media (max-width: 769px) {
			margin-top: 24px;
		}
		span {
			padding: 0 16px;
			font-weight: 300;
			font-size: 18px;
			line-height: 18px;
			color: #646464;
			@media (max-width: 769px) {
				font-size: 14px;
				line-height: 14px;
			}
		}
		&::before, &::after {
			content: '';
			display: block;
			height: 1px;
			width: 100px;
			background-color: #C9CACB;
			@media (max-width: 769px) {
				width: 30px;
			}
		}
	}

	.columns + .columns {
		margin-top: 200px;
		@media (max-width: 769px) {
			margin-top: 100px;
		}
	}

	.column {
		> img {
			max-width: 388px;
			@media (max-width: 769px) {
				max-width: 100%;
			}
		}
	}

	@media (max-width: 769px) {
		.columns:last-child {
			display: flex;
			flex-direction: column;
			.column:first-child {
				order: 9;
			}
		}
	}
</style>