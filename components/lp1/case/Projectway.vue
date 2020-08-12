<template>
	<section class="section">
		<div class="container">
			<a @click="$parent.close()" class="back"><- <span>Voltar</span></a>
			<div class="columns is-centered">
				<div class="column is-12">
					<h2 class="lp">Project Way</h2>
					<div class="container-fluid">
						<section class="section">
							<div class="container">
								<div class="columns is-centered">
									<div class="column">
										<span class="subtitle is-spaced">
											Oportunidade
										</span>
										<h2 class="title">Excelência E Experiência</h2>
										<p class="text">
											A Project Way é marcada pela união de profissionais de reconhecida experiência e relevância no mercado em que atuam. A quantidade de soluções que oferecem acompanha a bagagem dos profissionais que estão por trás da marca e, por conta disto, comunicar seus serviços era um desafio.
										</p>
									</div>
									<div class="column">
										<img class="projectImg" src="~/assets/project/projectway/mockup1.png">
									</div>
								</div>
							</div>
						</section>
						<section class="section">
							<div class="container">
								<div class="columns is-vcentered">
									<div class="column">
										<img src="~/assets/project/projectway/img.png">
									</div>
									<div class="column">
										<span class="subtitle is-spaced">
											Solução
										</span>
										<h2 class="title">O Visual Importa Sim!</h2>
										<p class="text">
											A primeira etapa de um projeto que contém a criação de marca e identidade visual se traduz em uma extensa pesquisa para entendermos como se comporta o mercado e, de acordo com os valores que a empresa entrega, como devemos nos posicionar. O resultado foi o que esperávamos: a maioria das empresas de engenharia se preocupam em manter a seriedade do negócio em seus materiais de comunicação. <br />
											Desta forma, trouxemos um design <em>clean</em> e minimalista para manter a comunicação dentro dos padrões do mercado e ousamos nas cores e curvas para destacar a característica inovadora da empresa.
										</p>
									</div>
								</div>
							</div>
						</section>
						<section class="section mt">
							<div class="container">
								<div class="columns">
									<div class="column">
										<span class="subtitle is-spaced">
											Processo
										</span>
										<h2 class="title">Organizando Tudo</h2>
										<p class="text">
											Uma das características do projeto que mais chamou a nossa atenção foi a grande quantidade de serviços prestados pela Project Way e, como em todo <em>job</em> realizado pela Clarific, sempre começamos a trabalhar pensando em como organizar e dar destaque ao conteúdo no processo de design. O fator que ajudou muito na agilidade de todos os processos foi a comunicação quase que instantânea do pessoal da Project Way e, assim, conseguimos categorizar os serviços em dois perfis de clientes: "Condomínios e Clientes Individuais" e "Grandes Clientes e Concessionárias de Serviços Públicos".
										</p>
									</div>
									<div class="column">
										<img src="~/assets/project/projectway/cards.jpg">
									</div>
								</div>
							</div>
						</section>
						<section class="section has-background-light mt is-hidden">
							<div class="container">
								<div class="columns is-multiline is-centered">
									<div class="column is-full has-text-centered">
										<img src="~/assets/project/partiu/logo.png" width="15%">
									</div>
									<div class="column is-7 has-text-centered is-paddingless">
										<blockquote>
											"A plataforma da Partiu Ingresso é de longe a melhor que eu já trabalhei. As constantes atualizações com novas ferramentas nos deixam confortáveis em saber que estamos usando um produto de qualidade para nos ajudar na principal atividade do nosso negócio que é a venda dos ingressos de nossos eventos."
										</blockquote>
										<br />
										<p class="text">AD Produtora</p>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>

	.section {
		background: transparent;
		@media (max-width: 769px) {
			padding-top: 48px;
		}
	}

	.back {
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 24px;
		color: #161719;
		@media (max-width: 769px) {
			margin-bottom: 42px;
			display: inline-block;
		}
		> span {
			position: relative;
			&::after {
				content: '';
				width: 0%;
				height: 4px;
				background-color: #EA9A00;
				position: absolute;
				bottom: 0;
				left: 0;
				transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
				@media (max-width: 769px) {
					width: 100%;
				}
			}
		}
		@media (min-width: 769px) {
			&:hover {
				> span:after {
					width: 100%;
				}
			}
		}
	}

.container-fluid {
	background: #ffffff;
	height: 100%;
	display: block;
	padding: 32px;
	margin-top: 42px;
	border-radius: 10px;
	box-shadow: 0px 0.996212px 2.85027px rgba(22, 23, 25, 0.0590406), 0px 2.39404px 6.84961px rgba(22, 23, 25, 0.0848175), 0px 4.50776px 12.8972px rgba(22, 23, 25, 0.105), 0px 8.04107px 23.0064px rgba(22, 23, 25, 0.125183), 0px 15.0399px 43.0309px rgba(22, 23, 25, 0.150959), 0px 36px 103px rgba(22, 23, 25, 0.10);
	> section { padding-top: 0; }
	.subtitle:first-of-type {
		margin-top: 70px;
		@media (max-width: 769px) {
			margin-top: unset;
		}
	}
	.projectImg {
		transform: translateY(0);
	}
	@media (max-width: 769px) {
		padding: unset;
		box-shadow: unset;
		background: transparent;
	}
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
blockquote {
	font-weight: 400;
	font-style: italic;
	font-size: 18px;
	line-height: 28px;
	text-align: center;
	color: rgba(0, 0, 0, 0.55);
	margin-top: -28px;
}
@media screen and (max-width: 769px) {
	.hero {
		flex-direction: column;
		align-items: unset;
		margin-top: 30px;
		padding: calc(6.25vw + 12px);
		.title { max-width: 230px; }
		> div:last-of-type {
			margin-top: 30px;
			max-width: unset;
			text-align: unset;
			align-items: unset;
		}
	}
	.container-fluid {
		.projectImg {
			transform: translateY(0);
		}
		> section.section { padding: unset; }
	}
	.container-fluid > section:first-of-type .columns {
		display: flex;
		flex-direction: column;
		> .column:first-of-type {
			order: 1;
			margin-top: -200px;
			@media (max-width: 769px) {
				margin-top: unset;
			}
		}
		> .column:last-of-type {
			order: 0;
		}
	}
	.container-fluid > section:nth-of-type(2n) .columns {
		margin-top: 30px;
		> .column:last-of-type {
			margin-top: -150px;
			@media (max-width: 769px) {
				margin-top: unset;
			}
		}
	}
	.container-fluid > section:nth-of-type(3n) .columns {
		display: flex;
		flex-direction: column;
		margin-top: 30px;
		> .column:last-of-type {
			order: -1;
			margin-bottom: -60px;
			@media (max-width: 769px) {
				margin-bottom: unset;
			}
		}
	}
}
</style>