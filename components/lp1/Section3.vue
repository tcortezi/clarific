<template>
	<section class="section">
		<div class="container">

			<div class="columns is-vcentered is-centered">
				<div class="column is-narrow">
					<img src="~/assets/img/lp1/cases/meushape.jpg">
				</div>
				<div class="column is-narrow is-offset-2">
					<h5 class="lp lp1">Fitness</h5>
					<h2 class="lp">Meu Shape</h2>
					<p class="lp">
						Uma plataforma com aulas e orientações de profissionais para que seus assinantes atinjam o “corpo dos sonhos”.
					</p>
					<a class="btn-lp lp1" @click="isModalActive = true; portfolio = 'meushape';">
						<span>Ver case -></span>
					</a>
				</div>
			</div>

			<div class="columns is-vcentered is-centered">
				<div class="column is-narrow">
					<h5 class="lp lp1">Influencer</h5>
					<h2 class="lp">Bella Lima</h2>
					<p class="lp">
						A digital influencer ensina seus mais de 100k seguidores a atingir o sucesso nas redes sociais. A landing page de suas campanhas ficou por nossa conta.
					</p>
					<a class="btn-lp lp1" @click="isModalActive = true; title = 'Bella Lima'; img = 'bella-big.png'; portfolio = 'landing';">
						<span>Ver detalhes -></span>
					</a>
				</div>
				<div class="column is-narrow is-offset-2">
					<img src="~/assets/img/lp1/cases/bella.jpg">
				</div>
			</div>

			<div class="columns is-vcentered is-centered">
				<div class="column is-narrow">
					<img src="~/assets/img/lp1/cases/projectway.jpg">
				</div>
				<div class="column is-narrow is-offset-2">
					<h5 class="lp lp1">Engenharia</h5>
					<h2 class="lp">Project Way</h2>
					<p class="lp">
						Recebemos o desafio de organizar as diversas frentes de negócio em torno do mercado de egenharia que a empresa trabalha. Confira como nós pudemos ajudá-los.
					</p>
					<a class="btn-lp lp1" @click="isModalActive = true; portfolio = 'projectway';">
						<span>Ver case -></span>
					</a>
				</div>
			</div>

			<div class="columns is-vcentered is-centered">
				<div class="column is-narrow">
					<h5 class="lp lp1">Medicina</h5>
					<h2 class="lp">Cuidar</h2>
					<p class="lp">
						Com um modelo de atendimento inovador, a Cuidar precisava de um website alinhado à modernidade que entrega para seus pacientes. Veja o resultado.
					</p>
					<a class="btn-lp lp1" @click="isModalActive = true; portfolio = 'cuidar';">
						<span>Ver case -></span>
					</a>
				</div>
				<div class="column is-narrow is-offset-2">
					<img src="~/assets/img/lp1/cases/cuidar.jpg">
				</div>
			</div>

			<div class="columns is-vcentered is-centered">
				<div class="column is-narrow">
					<img src="~/assets/img/lp1/cases/fenix.jpg">
				</div>
				<div class="column is-narrow is-offset-2">
					<h5 class="lp lp1">Esportes</h5>
					<h2 class="lp">Fenix Club</h2>
					<p class="lp">
						O clube de assinantes ajuda seus membros a lucrarem com o mercado de apostas relacionados ao universo dos esportes. A landing page ficou por nossa conta.
					</p>
					<a class="btn-lp lp1" @click="isModalActive = true; title = 'Fenix Trader Club'; img = 'fenix-big.png'; portfolio='landing';">
						<span>Ver detalhes -></span>
					</a>
				</div>
			</div>

		</div>

		<b-modal :active.sync="isModalActive"
			full-screen :can-cancel="false" custom-class="lp">
			<meushape v-if="portfolio === 'meushape'" />
			<projectway v-if="portfolio === 'projectway'" />
			<cuidar v-if="portfolio === 'cuidar'" />
			<portfolio v-if="portfolio === 'landing'" :title="title" :img="img" />
		</b-modal>
	</section>
</template>

<script>
	import Portfolio from '~/components/lp2/Portfolio.vue'
	import Meushape from '~/components/lp1/case/Meushape.vue'
	import Projectway from '~/components/lp1/case/Projectway.vue'
	import Cuidar from '~/components/lp1/case/Cuidar.vue'

	 export default {
	 	components: {
	 		Portfolio,
	 		Meushape,
	 		Projectway,
	 		Cuidar
	 	},
	 	data() {
	 		return {
	 			isModalActive: false,
	 			portfolio: null,
	 			title: null,
	 			img: null
	 		}
	 	}
	 }
</script>

<style lang="scss" scoped>
	.columns + .columns {
		margin-top: 200px;
	}

	.column {
		> img { max-width: 388px; }
	}
</style>