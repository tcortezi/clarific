<template>
	<section class="section">
		<div class="container">
			<div class="columns is-variable is-8 is-vcentered">
				<div class="column">
					<h5 class="lp">Segundo passo</h5>
					<h2 class="lp">Examinamos mais de uma centena de sites de outras agências</h2>
					<p class="lp">Para mantermos nosso negócio sempre a <strong>um passo à frente</strong> precisamos analisar o mercado como um todo e nos posicionarmos.</p>
				</div>
				<div class="column">
					<img src="~/assets/img/lp2/section3.svg">
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.section {
		img { max-width: 570px; }
		.columns {
			@media (max-width: 769px) {
				display: flex;
				flex-direction: column;
				> .column:first-of-type {
					order: 9;
				}
				img { max-width: 100%; }
				margin-top: -42px;
			}
		}
	}
</style>