<template>
	<section class="section">
		<div class="container">
			<div class="columns is-variable is-8 is-vcentered">
				<div class="column">
					<h5 class="lp">Oitavo passo</h5>
					<h2 class="lp">Plugamos os pixels e começamos os anúncios</h2>
					<p class="lp">Mas não é só de campanha que vem nossa audiência. Trabalhamos o SEO e conteúdo para fazer com que nossos websites recebam visitas orgânicas.</p>
				</div>
				<div class="column has-text-centered">
					<img src="~/assets/img/lp2/section9.svg">
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.section {
		@media (min-width: 769px) {
			img { max-width: 474px; }
		}
		@media (max-width: 769px) {
			.columns {
				display: flex;
				flex-direction: column;
				.column:first-of-type { order: 9; }
			}
		}
	}
</style>