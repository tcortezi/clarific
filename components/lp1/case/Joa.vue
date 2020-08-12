<template>
	<section class="section">
		<div class="container">
			<a @click="$parent.close()" class="back"><- <span>Voltar</span></a>
			<div class="columns is-centered">
				<div class="column is-12">
					<h2 class="lp">Joa Assessoria</h2>
					<div class="container-fluid">
						<section class="section is-paddingless">
							<div class="container">
								<div class="columns is-centered">
									<div class="column">
										<span class="subtitle is-spaced">
											Oportunidade
										</span>
										<h2 class="title">Terra Fértil</h2>
										<p class="text">
											O Brasil amadurece seu ambiente de negócios a cada dia e ainda guarda grandes oportunidades. A Joa Assessoria acompanha este movimento e tem como objetivo fomentar e apoiar iniciativas que buscam promover o desenvolvimento social e econômico brasileiros.
										</p>
									</div>
									<div class="column">
										<img class="projectImg" src="~/assets/project/joa/mockup1.png">
									</div>
								</div>
							</div>
						</section>
						<section class="section">
							<div class="container">
								<div class="columns">
									<div class="column">
										<img src="~/assets/project/joa/mockup2.png">
									</div>
									<div class="column">
										<span class="subtitle is-spaced">
											Solução
										</span>
										<h2 class="title">Lar Doce Lar</h2>
										<p class="text">
											Quando a Joa entrou em contato com a gente, sabíamos que tínhamos um belo desafio pela frente. A empresa precisava de um website, naquele momento não possuía nenhuma presença online mas já tinha uma identidade visual, muito bem feita por sinal. O desafio era desenhar um site que transmitisse a seriedade da empresa, por se tratar de uma gestora de fundos, com a modernidade que sua identidade já proporcionava. Utilizamos as curvas que a pedra da Gávea, elemento presente em seu logo, nos permitia para dar um ar mais jovem e moderno e colocamos nossos esforços para que o resultado fosse o mais <em>clean</em> possível, dando destaque ao conteúdo.
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
											Gerenciamento de Conteúdo
										</span>
										<h2 class="title">Sempre Atualizado</h2>
										<p class="text">
											Além do desenvolvimento da página pública também criamos um sistema para que os colaboradores da Joa Assessoria pudessem atualizar o conteúdo da página sempre que necessário. Esta é uma demanda recorrente, principalmente em mercados que são tão dinâmicos. No caso da Joa, sempre que houver novidades no portfolio, por exemplo, bastará alguns cliques para atualizar a página e dar as boas vindas ao novo integrante.
										</p>
									</div>
									<div class="column">
										<img src="~/assets/project/joa/mockup3.png">
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
						<section class="section mt">
							<div class="container">
								<div class="columns">
									<div class="column">
										<img src="~/assets/project/joa/img.jpg">
									</div>
									<div class="column">
										<span class="subtitle is-spaced">
											Processo
										</span>
										<h2 class="title">Criamos Juntos</h2>
										<p class="text">
											O projeto da Joa foi realmente criado a 4 mãos. Por padrão, trabalhamos com processos de aprovação em determinadas etapas de acordo com cada projeto. Mas o pessoal da Joa foi além destes processos, nos dando liberdade criativa e colocando importantes <em>inputs</em> nos momentos corretos. Buscamos sempre trabalhar com uma sintonia como esta pois, além de estarmos sempre alinhados com o cliente, o resultado final costuma ir além das expectativas.
										</p>
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
	}

	.back {
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 24px;
		color: #161719;
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
	}
	.projectImg {
		transform: translateY(0);
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
	}
	.container-fluid > section:first-of-type .columns {
		display: flex;
		flex-direction: column;
		> .column:first-of-type {
			order: 1;
			margin-top: -200px;
		}
		> .column:last-of-type {
			order: 0;
		}
	}
	.container-fluid > section:nth-of-type(2n) .columns {
		margin-top: 30px;
		> .column:last-of-type {
			margin-top: -150px;
		}
	}
	.container-fluid > section:nth-of-type(3n) .columns {
		display: flex;
		flex-direction: column;
		margin-top: 30px;
		> .column:last-of-type {
			order: -1;
			margin-bottom: -60px;
		}
	}
}
</style>