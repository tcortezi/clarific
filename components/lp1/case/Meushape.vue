<template>
	<section class="section">
		<div class="container">
			<a @click="$parent.close()" class="back"><- <span>Voltar</span></a>
			<div class="columns is-centered">
				<div class="column is-12">
					<h2 class="lp">Meu Shape</h2>
					<div class="container-fluid">
						<section class="section">
							<div class="container">
								<div class="columns is-centered">
									<div class="column">
										<span class="subtitle is-spaced">
											Oportunidade
										</span>
										<h2 class="title">Mídia & Demanda</h2>
										<p class="text">
											Os produtores do canal Fábrica de Monstros, no YouTube, disponibilizavam conteúdo grátis semanalmente para um público de mais de 2.5 milhões de inscritos. A grande maioria eram pessoas que praticavam musculação de forma casual e para este público, que não tem a intenção de se aprofundar no assunto e desejam apenas objetivos de saúde e estética, não haviam muitas alternativas para encontrar um caminho prático em direção aos resultados almejados.
										</p>
									</div>
									<div class="column">
										<img class="projectImg" src="~/assets/project/meushape/mockup1.png">
									</div>
								</div>
							</div>
						</section>
						<section class="section">
							<div class="container">
								<div class="columns">
									<div class="column">
										<img src="~/assets/project/meushape/img.jpg">
									</div>
									<div class="column">
										<span class="subtitle is-spaced">
											Solução
										</span>
										<h2 class="title">Caminho Das Pedras</h2>
										<p class="text">
											Maurício Medeiros é conhecido pelo seu método MTOR e é um professor de mão cheia. Além disto, ele fazia parte da equipe de apresentadores do canal Fábrica de Monstros e tinha proximidade dos produtores do canal. A união fazia total sentido para a criação do MeuShape.com e esse foi o caminho escolhido. A Clarific produziu os vídeos do produto e desenvolveu toda a estrutura tecnológica que contava com uma assinatura mensal e acesso restrito do conteúdo aos membros pagos.
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
										<h2 class="title">De Floripa Para Todo Brasil</h2>
										<p class="text">
											A produção dos vídeos do produto foi a primeira etapa e foi realizada em Floripa, onde residia o apresentador. Após a coleta de todo o material, voltamos ao Rio de Janeiro, editamos os vídeos com elementos didáticos e preparamos toda a parte tecnologica para colocar o projeto no ar.
										</p>
									</div>
									<div class="column">
										<img src="~/assets/project/meushape/img2.jpg">
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