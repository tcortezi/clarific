<template>
	<section class="section">
		<div class="container">
			<div class="columns is-centered">
				<div class="column is-7">
					<h1 class="has-text-centered">Como trabalhamos</h1>
					<div class="item">
						<div>
							<img src="~/assets/img/lp1/icons/briefing.svg">
						</div>
						<div>
							<h2>Briefing</h2>
							<p>
								No primeiro contato, coletamos as informações mais relevantes sobre seu negócio. Assim podemos dimensionar o projeto e oferecer uma proposta dentro da realidade das suas necessidades.
							</p>
						</div>
					</div>
					<div class="item">
						<div>
							<img src="~/assets/img/lp1/icons/creative.svg">
						</div>
						<div>
							<h2>Criação e prototipação</h2>
							<p>
								Começamos o seu projeto com as etapas de Market Research, planejamento de User Experience (UX) e desenvolvemos um protótipo que virá a ser a interface de seu website.
							</p>
						</div>
					</div>
					<div class="item">
						<div>
							<img src="~/assets/img/lp1/icons/approval.svg">
						</div>
						<div>
							<h2>Aprovação</h2>
							<p>
								Você avalia o protótipo e refinamos o design com o que for necessário para alinharmos a entrega a sua expectativa.
							</p>
						</div>
					</div>
					<div class="item">
						<div>
							<img src="~/assets/img/lp1/icons/dev.svg">
						</div>
						<div>
							<h2>Desenvolvimento</h2>
							<p>
								Com o design aprovado, o protótipo vira código e ganha vida nesta etapa.
							</p>
						</div>
					</div>
					<div class="item">
						<div>
							<img src="~/assets/img/lp1/icons/launch.svg">
						</div>
						<div>
							<h2>Entrega</h2>
							<p>
								Com tudo pronto, seu website é lançado!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="noise"></div>
	</section>
</template>


<style lang="scss" scoped>
	.section {
		position: relative;
		margin-top: 52px;
		padding: 64px;
		background-color: #161719;
		@media (max-width: 769px) {
			padding: 20px;
		}
		.container {
			z-index: 30;
		}
		h1 {
			font-weight: 800;
			font-size: 32px;
			line-height: 38px;
			color: #FAFAFA;
		}
		.item {
			display: flex;
			align-items: center;
			padding: 42px 0;
			@media (max-width: 769px) {
				flex-direction: column;
			}
			div:first-child {
				min-height: 89px;
				min-width: 100px;
				margin-right: 42px;
				display: grid;
				place-items: center;
				place-content: center;
				@media (max-width: 769px) {
					margin-right: unset;
					margin-bottom: 24px;
				}
			}
			img {
				max-height: 89px;
				width: auto;
			}
			h2 {
				font-weight: normal;
				font-size: 23px;
				line-height: 23px;
				color: #FAFAFA;
				@media (max-width: 769px) {
					text-align: center;
				}
			}
			p {
				font-weight: normal;
				font-size: 16px;
				line-height: 24px;
				color: #E1E1E1;
				margin-top: 20px;
			}
		}
		.noise {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 316px;
			background-image: url('~assets/img/lp2/noise.svg');
		}
	}
</style>