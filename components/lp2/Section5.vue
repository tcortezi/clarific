<template>
	<section class="section">
		<div class="container">
			<div class="columns is-variable is-8 is-vcentered">
				<div class="column">
					<h5 class="lp2">Quarto passo</h5>
					<h2 class="lp2">Criamos e organizamos o conteúdo</h2>
					<p class="lp2">A ideia, gerada na etapa anterior, <strong>deu vida ao texto que você está lendo agora</strong> e foi organizado neste passo a passo. Além disto, separamos as imagens de nosso portfolio que você verá mais a frente.</p>
				</div>
				<div class="column">
					<img src="~/assets/img/lp2/section5.svg">
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.section {
		img {
			@media (min-width: 769px) {
				max-width: 574px;
			}
		}
		@media (max-width: 769px) {
			.columns {
				display: flex;
				flex-direction: column;
				> .column:first-of-type {
					order: 9;
					h2.lp2 { font-size: 28px; }
				}
			}
		}
	}
</style>