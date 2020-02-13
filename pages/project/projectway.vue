<template>
	<div>
		<section class="section is-paddingless">
			<div class="container">
				<div class="hero">
					<div>
						<h1 class="title">Project Way</h1>
						<a href="https://gr-projectway.com.br/" target="_blank">
							Visitar site
	            <b-icon
	                icon="open-in-new"
	                size="is-small">
	            </b-icon>
						</a>
					</div>
					<div>
						<p class="text">
							A Project Way oferece uma ampla lista de soluções em engenharia para clientes exigentes.
						</p>
				    <b-taglist>
				        <b-tag type="is-dark">website</b-tag>
				        <b-tag type="is-dark">identidade visual</b-tag>
				        <b-tag type="is-dark">stationary</b-tag>
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
</style>