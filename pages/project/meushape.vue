<template>
	<div>
		<section class="section is-paddingless">
			<div class="container">
				<div class="hero">
					<div>
						<h1 class="title">Meu Shape</h1>
						<b-tooltip label="Site desativado"
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
							Meu Shape reune uma série de conteúdo premium e extremamente prático voltados ao público fitness.
						</p>
				    <b-taglist>
				        <b-tag type="is-dark">website</b-tag>
				        <b-tag type="is-dark">assinatura</b-tag>
				        <b-tag type="is-dark">videos</b-tag>
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
</style>