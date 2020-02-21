<template>
	<div>
		<section class="section is-paddingless">
			<div class="container">
				<div class="hero">
					<p class="subtitle">
						Sobre
					</p>
					<h1 class="title">
						A Clarific
					</h1>
				</div>
			</div>
		</section>
		<div class="container-fluid">
			<section class="section">
				<div class="container">
					<div class="columns">
						<div class="column is-narrow">
							<video width="450" autoplay loop muted>
							  <source src="~/assets/about/logoAnima.mp4" type="video/mp4">
							  Oops! Seu browser não suporta video em HTML5.
							</video>
						</div>
						<div class="column">
							<p class="subtitle">
								Background
							</p>
							<p class="title">
								Nossa História
							</p>
							<p class="text">
								A Clarific é resultado da união de profissionais apaixonados e entusiasmados com os desafios que a construção de produtos digitais proporciona. Os sócios vêm de <em>startups</em>, centenas de projetos realizados em trabalhos anteriores e muita disposição para encarar novos desafios mantendo um ambiente leve, criativo e autêntico.
							</p>
							<div class="columns is-multiline mt">
								<div class="column is-full">
									<p class="subtitle">
										Pessoas
									</p>
									<p class="title">
										Os Líderes
									</p>
								</div>
								<div class="column is-narrow">
									<div class="teamCard">
										<figure class="image is-128x128">
										  <img class="is-rounded" src="~/assets/about/tiago.jpg">
										</figure>
										<div>
											<p class="title">
												Tiago Villardi Cortezi
											</p>
											<b-tag type="is-dark">Product Design & Frontend</b-tag>
										</div>
									</div>
								</div>
								<div class="column is-narrow">
									<div class="teamCard">
										<figure class="image is-128x128">
										  <img class="is-rounded" src="~/assets/about/rodrigo.png">
										</figure>
										<div>
											<p class="title">
												Rodrigo Villardi Cortezi
											</p>
											<b-tag type="is-dark">Product Owner & Backend</b-tag>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 200px;
		.subtitle {
			font-weight: normal;
			font-size: 20px;
			letter-spacing: 0.05em;
			color: #5E5F62;
			text-transform: uppercase;
		}
		.title {
			font-weight: bold;
			font-size: 42px;
			line-height: 52px;
			color: white;
			text-align: center;
		}
	}
.container-fluid {
	background: #ffffff;
	height: 100%;
	display: block;
	margin-top: 212px;
	min-height: 300px;
	> section { padding-top: 0; }
	.column > video {
		transform: translateY(-120px);
		border-radius: 20px;
	}
	.subtitle {
		display: inline-block;
		// border-bottom: 2px solid #6BCCA4;
		padding-bottom: 8px;
		text-transform: uppercase;
		color: #5E5F62;
		font-weight: 300;
		font-size: 16px;
		line-height: 16px;
		letter-spacing: 0.05em;
	}
	.title {
		font-size: 28px;
	}
	.text {
		font-size: 18px;
	}
	.section.mt {
		margin-top: 60px;
	}
	.teamCard {
		display: flex;
		flex-direction: column;
		> figure { flex-shrink: 0; margin-bottom: 20px; }
	}
	.mt { margin-top: 90px; }
}
@media screen and (max-width: 769px) {
	.hero {
		margin-top: 60px;
	}
	.container-fluid {
		.container > .columns:first-of-type {
			> .column:nth-of-type(2n) {
				margin-top: -120px;
			}
		}
	}
}
</style>