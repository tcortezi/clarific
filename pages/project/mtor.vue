<template>
	<div>
		<section class="section is-paddingless">
			<div class="container">
				<div class="hero">
					<div>
						<h1 class="title">MTOR Gold</h1>
						<b-tooltip label="Disponível apenas durante campanha"
            position="is-right">
							<a target="_blank">
								Visitar site
		            <b-icon
		                icon="open-in-new"
		                size="is-small">
		            </b-icon>
							</a>
	          </b-tooltip>
					</div>
					<div>
						<p class="text">
							MTOR significa Método de Treinamento Otimizando Resultados e é exatamente isto que ele entrega para seus alunos, sejam eles amadores ou profissionais.
						</p>
				    <b-taglist>
				        <b-tag type="is-dark">landing page</b-tag>
				        <b-tag type="is-dark">video</b-tag>
				        <b-tag type="is-dark">campanha</b-tag>
				    </b-taglist>
					</div>
				</div>
			</div>
		</section>
		<div class="container-fluid">
			<section class="section">
				<div class="container">
					<div class="columns is-centered">
						<div class="column">
							<span class="subtitle is-spaced">
								Oportunidade
							</span>
							<h2 class="title">Resultado É A Palavra</h2>
							<p class="text">
								A técnica criada pelo Maurício Medeiros tem sido disseminada há alguns anos, em meio a inúmeras palestras, cursos presenciais e até participação em canais de YouTube famosos. Esta presença da marca MTOR no meio <em>fitness/bodybuilder</em> dava uma grande força a criação de um produto digital. Atletas de renome chancelavam a técnica com seus testemunhos entusiasmados sobre os resultados que obtinham aplicando a mesma.
							</p>
						</div>
						<div class="column">
							<img class="projectImg" src="~/assets/project/mtor/mockup1.png">
						</div>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="container">
					<div class="columns">
						<div class="column">
							<video autoplay loop muted playsinline="true" preload="auto">
								<source src="~/assets/project/mtor/mtor.webm" type="video/webm">
							  <source src="~/assets/project/mtor/mtor.mp4" type="video/mp4">
							  Oops! Seu browser não suporta video em HTML5.
							</video>
						</div>
						<div class="column">
							<span class="subtitle is-spaced">
								Solução
							</span>
							<h2 class="title">Digital Rocks!</h2>
							<p class="text">
								Pois é, o produto já existia, o método foi criado com muito cuidado e precisão pelo Maurício Medeiros durante anos de muito trabalho e já poderíamos dizer naquele momento que era um sucesso. Mas havia um problema. Como é possível escalar um produto no qual, para ser vendido, dependia da presença física do Maurício para lecionar o extenso conteúdo do qual se tratava o método? Já demos o <em>spoiler</em>, né?
							</p>
							<p class="text">
								Transformar o método em um produto digital, é claro! E é justamente neste ponto em que a Clarific entra. Fomos os responsáveis por esta transformação onde desenvolvemos os vídeos, que eram o produto em si, <em>landing page</em> e todo material de venda que foi utilizado em conjunto com outros profissionais para rodar as campanhas.
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
							<h2 class="title">Mão Na Massa</h2>
							<p class="text">
								Trabalhamos ao lado do Maurício para organizar todo o conteúdo do método e dividir em aulas que, mais tarde, seriam os vídeos do produto digital. Gravamos, editamos todo o conteúdo e disponibilizamos em um sistema onde só permitia o acesso de membros pagos. A partir daí, o trabalho apenas havia começado. Toda a estratégia de venda foi desenhada, seguindo o estilo de lançamentos. Com a <em>copy</em> pronta, desenvolvemos a <em>landing page</em> e editamos todos os vídeos de comunicação. Foram diversos lançamentos durante o ano de 2018 e consideramos o projeto um grande sucesso!
							</p>
						</div>
						<div class="column">
							<img src="~/assets/project/mtor/img.jpg">
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
</template>

<style lang="scss" scoped>
.hero {
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 200px;
	margin-bottom: 200px;
	max-height: 400px;
	a:hover { color: #d0b7f6; }
	> div:last-of-type { 
		max-width: 30%;
		color: rgba(255, 255, 255, 0.65);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		text-align: right;
		align-items: flex-end;
		.text { padding-bottom: 30px; font-size: 0.85rem; }
	}
	.title {
		font-weight: bold;
		font-size: 42px;
		line-height: 52px;
		color: white;
		text-align: left;
		margin-bottom: unset;
	}
	.tag {
		background: unset;
		border: 1px solid rgba(255, 255, 255, 0.25);
	}
}
.container-fluid {
	background: #ffffff;
	height: 100%;
	display: block;
	> section { padding-top: 0; }
	.subtitle:first-of-type {
		margin-top: 70px;
	}
	.projectImg {
		transform: translateY(-130px);
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
			transform: translateY(-190px);
		}
		.section.is-paddingless {
			padding: 3rem 1.5rem !important;
		}
	}
	.container-fluid > section:first-of-type .columns {
		display: flex;
		flex-direction: column;
		> .column:first-of-type {
			order: 1;
			margin-top: -290px;
		}
		> .column:last-of-type {
			order: 0;
		}
	}
	.container-fluid > section:nth-of-type(2n) .columns {
		margin-top: 30px;
		> .column:last-of-type {
			margin-top: -60px;
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
	.container-fluid > section:last-of-type .columns {
		> .column:last-of-type {
			margin-top: -60px;
		}
	}
}
</style>