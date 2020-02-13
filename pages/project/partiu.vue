<template>
	<div>
		<section class="section is-paddingless">
			<div class="container">
				<div class="hero">
					<div>
						<h1 class="title">Partiu Ingresso</h1>
						<a href="https://partiuingresso.com" target="_blank">
							Visitar site
	            <b-icon
	                icon="open-in-new"
	                size="is-small">
	            </b-icon>
						</a>
					</div>
					<div>
						<p class="text">
							A Partiu Ingresso permite que produtores realizem a gestão e a venda de seus ingressos de forma simples e eficiente.
						</p>
				    <b-taglist>
				        <b-tag type="is-dark">marketplace</b-tag>
				        <b-tag type="is-dark">zendesk</b-tag>
				        <b-tag type="is-dark">app</b-tag>
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
							<h2 class="title">Do It Yourself</h2>
							<p class="text">
								O mercado de eventos é um mercado dinâmico e que não para de crescer no Brasil, como demonstra dados do site <a href="https://www.statista.com/statistics/976812/brazil-international-events/" target="_blank">Statista</a>. Seguindo esta tendência a Partiu Ingresso começou suas operações com o objetivo de atender a demanda de produtores/organizadores por uma estrutura para gerir e vender ingressos de seus eventos online. O desafio era desenvolver uma plataforma que prestasse um serviço no modelo <em>"do it yourself"</em>, ou seja, os própios produtores podem cadastrar seus eventos e começar a vender de forma rápida e prática.
							</p>
						</div>
						<div class="column">
							<img class="projectImg" src="~/assets/project/partiu/mockup1.png">
						</div>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="container">
					<div class="columns">
						<div class="column">
							<img src="~/assets/project/partiu/mockup2.png">
						</div>
						<div class="column">
							<span class="subtitle is-spaced">
								Solução
							</span>
							<h2 class="title">On The Fly</h2>
							<p class="text">
								Aceitamos o desafio de entregar uma <strong>solução completa</strong> de produto para a marca. Concepção de marca e identidade visual, design de produto, pesquisa e estratégia de UX (<em>User Experience</em>) ao desenvolvimento da UI (<em>User Inteface</em>) e implementação de toda tecnologia, <em>Backend</em> e <em>Frontend</em>, da plataforma. A Partiu Ingresso é mais do que um <em>marketplace</em> completo, integrando funcionalidades que auxiliam os produtores de evento a alcançar metas de conversão e gerir os desafios diários da interação com clientes.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="container">
					<div class="columns">
						<div class="column">
							<span class="subtitle is-spaced">
								Central de Ajuda
							</span>
							<h2 class="title">Serviços Integrados</h2>
							<p class="text">
								Uma das características de um negócio que mais gera impacto na experiência do usuário é o atendimento de qualidade. No caso da Partiu Ingresso, utilizamos os produtos da Zendesk e trabalhamos no design e setup deste ambiente. Uma Central de Ajuda bem organizada e funcional é um fator crítico de sucesso. Além de diminuir drasticamente os tickets gerados, a partir dos artigos que podem sanar as principais dúvidas dos consumidores, é dali que a empresa transmite a sensação de conforto e credibilidade.
							</p>
						</div>
						<div class="column">
							<img src="~/assets/project/partiu/mockup3.png">
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
							<img src="~/assets/project/partiu/img.jpg">
						</div>
						<div class="column">
							<span class="subtitle is-spaced">
								Processo
							</span>
							<h2 class="title">Cuidando Como Um Filho</h2>
							<p class="text">
								Por se tratar de um produto complexo com um grande volume de entregas por exigir uma resposta rápida na resolução de problemas e na implantação de novas funcionalidades para atender as expectativas do mercado, a Partiu Ingresso conta com o trabalho diário da Clarific. Participamos ativamente desde as decisões envolvendo a parte tecnologica do produto, o planejamento e as implementações finais.
							</p>
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
		transform: translateY(-80px);
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
			transform: translateY(-140px);
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