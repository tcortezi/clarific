<template>
	<div>
		<section class="section is-paddingless">
			<div class="container">
				<div class="hero">
					<div>
						<h1 class="title">Joa Assessoria</h1>
						<a href="https://joacapital.com.br" target="_blank">
							Visitar site
	            <b-icon
	                icon="open-in-new"
	                size="is-small">
	            </b-icon>
						</a>
					</div>
					<div>
						<p class="text">
							A Joa Assessoria é uma gestora de investimentos que atua ativamente no cenário brasileiro em busca de oportunidades alinhadas aos valores e objetivos da companhia.
						</p>
				    <b-taglist>
				        <b-tag type="is-dark">website</b-tag>
				        <b-tag type="is-dark">content manager</b-tag>
				    </b-taglist>
					</div>
				</div>
			</div>
		</section>
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
</template>

<style lang="scss" scoped>
.hero {
	display: flex;
	flex-direction: row;
	// align-items: center;
	margin-top: 200px;
	margin-bottom: calc(200px - 1.5rem);
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
	margin-top: 90px;
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