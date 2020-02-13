<template>
	<div>
		<section class="section is-paddingless">
			<div class="container">
				<div class="hero">
					<div>
						<h1 class="title">Cuidar</h1>
						<a href="https://cuidarmelhor.med.br/" target="_blank">
							Visitar site
	            <b-icon
	                icon="open-in-new"
	                size="is-small">
	            </b-icon>
						</a>
					</div>
					<div>
						<p class="text">
							A Cuidar é uma clínica que tem como propósito entregar uma melhora não apenas na saúde de seus pacientes mas na qualidade de vida como um todo.
						</p>
				    <b-taglist>
				        <b-tag type="is-dark">website</b-tag>
				        <b-tag type="is-dark">one page</b-tag>
				        <b-tag type="is-dark">video</b-tag>
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
							<script src="https://fast.wistia.com/embed/medias/8n6rwc5b2e.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding projectImg" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_8n6rwc5b2e videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/8n6rwc5b2e/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>
						</div>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="container">
					<div class="columns">
						<div class="column">
							<img src="~/assets/project/cuidar/mockup1.png">
						</div>
						<div class="column">
							<span class="subtitle is-spaced">
								Oportunidade
							</span>
							<h2 class="title">Esqueça O Tradicional</h2>
							<p class="text">
								O que você faz quando precisa de uma consulta médica? Liga para o consultório, agenda sua visita e, na maioria das vezes, sai da consulta com uma receita de medicamentos para resolver o seu problema. Certo? <br />
								É justamente esse processo que a Cuidar pretende revolucionar com seu modelo de negócios inovador. A proposta é um atendimento completo. O paciente é recebido por uma equipe interdisciplinar que se coloca a disposição para melhorar não apenas a saúde como a qualidade de vida do mesmo. Mas havia um problema... pouca gente sabia que a proposta da clínica era esta.
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
								Solução
							</span>
							<h2 class="title">Uma Boa História Pra Contar</h2>
							<p class="text">
								Assim que conversamos com o Dr. Walter, a cabeça por trás de toda a iniciativa, sabíamos que tínhamos o desafio de contar esta história que já era boa por si só. Todo o impacto positivo que as ações desse inovador modelo gerava não só nas vidas dos pacientes que passavam pela clínica mas, também, na própria equipe era algo inspirador. Por isto, criamos um website no modelo <em>one page</em> e um vídeo onde pudemos mostrar os valores que motivam a equipe e toda a estrutura por trás do negócio.
							</p>
						</div>
						<div class="column">
							<img src="~/assets/project/cuidar/mockup2.png">
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
							<img src="~/assets/project/cuidar/img.jpg">
						</div>
						<div class="column">
							<span class="subtitle is-spaced">
								Processo
							</span>
							<h2 class="title">Mais Que Digital</h2>
							<p class="text">
								Como a clínica é composta por um grande número de profissionais, acompanhamos algumas de suas reuniões para entender nos mínimos detalhes os objetivos e expectativas da equipe. A coleta de materiais foi a primeira etapa do trabalho da Clarific, foram alguns dias de fotografias e filmagens tanto dos profissionais quanto da estrutura da clínica. Após isto, seguindo as decisões que tomamos em conjunto com a Cuidar, preparamos o vídeo e o website além de todo o conjunto de papelaria como cartões de visita e receituário.
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