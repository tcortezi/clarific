<template>
	<section class="section">
		<div class="container">
			<div class="columns is-variable is-8 is-vcentered">
				<div class="column">
					<h5 class="lp">Sexto passo</h5>
					<h2 class="lp">Tecnologia entra em cena</h2>
					<p class="lp">Transformamos o protótipo em código. Usamos nossa experiência e tecnologias <em>cutting edge</em> para entregar performance e solidez. Isso significa que a página carrega em ~1 segundo e tudo é exibido como deveria.</p>
				</div>
				<div class="column">
					<img src="~/assets/img/lp2/section7.svg">
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.section {
		@media (min-width: 769px) {
			img { max-width: 574px; }
		}
		@media (max-width: 769px) {
			.columns {
				display: flex;
				flex-direction: column;
				.column:first-of-type {
					order: 9;
				}
			}
		}
	}
</style>