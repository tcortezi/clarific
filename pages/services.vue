<template>
	<div>
		<section class="section is-paddingless">
			<div class="container">
				<div class="hero">
					<p class="subtitle">
						Serviços
					</p>
					<p class="title">
						Nossos super poderes
					</p>
				</div>
			</div>
		</section>
		<div class="container-fluid">
			<section class="section">
				<div class="container">
					<div class="services">
						<div class="strategy">
							<lottie :options="strategyOptions" :height="140" :width="160" v-on:animCreated="handleAnimation" />
							<p class="title">Consultoria Estratégica</p>
						</div>
						<div class="ux">
							<lottie :options="uxOptions" :height="140" :width="60" v-on:animCreated="handleAnimation" />
							<p class="title">User Experience</p>
						</div>
						<div class="cloud">
							<lottie :options="cloudOptions" :height="140" :width="140" v-on:animCreated="handleAnimation" />
							<p class="title">Arquitetura Cloud</p>
						</div>
						<div class="project">
							<lottie :options="projectOptions" :height="140" :width="120" v-on:animCreated="handleAnimation" />
							<p class="title">Gestão de Projetos</p>
						</div>
						<div class="dev">
							<lottie :options="devOptions" :height="140" :width="160" v-on:animCreated="handleAnimation" />
							<p class="title">Desenvolvimento Web</p>
						</div>
						<div class="mobile">
							<lottie :options="mobileOptions" :height="140" :width="120" v-on:animCreated="handleAnimation" />
							<p class="title">Desenvolvimento Mobile</p>
						</div>
						<div class="quality">
							<lottie :options="qualityOptions" :height="140" :width="120" v-on:animCreated="handleAnimation" />
							<p class="title">Garantia de Qualidade</p>
						</div>
						<div class="continue">
							<lottie :options="continueOptions" :height="140" :width="120" v-on:animCreated="handleAnimation" />
							<p class="title">Serviços Contínuos</p>
						</div>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="container">
					<div class="serviceCard">
						<div class="iconBlock strategy">
							<lottie :options="strategyOptions" :height="140" :width="160" v-on:animCreated="handleAnimation" :noMouse="true" />
							<span>Consultoria Estratégica</span>
						</div>
						<div class="description">
							<p class="subtitle">
								Do Grego "Estrategía"
							</p>
							<p class="title">
								Dimensionando Oportunidades
							</p>
							<p class="text">
								Define o potencial de investimento, <em>stack</em> tecnológico, <em>timeline</em>, custo de <em>ownership</em> total e manutenção contínua necessária para lançar e sustentar a solução. Antes mesmo de arquitetar ou desenvolver, nós examinamos o código, caso já exista, ou dimensionamos o novo modelo de negócios para alinhar aos desafios identificados e explorarmos formas de mitigar riscos associados à tecnologia do negócio.
							</p>
							<div class="columns">
								<div class="column">
									<ul>
										<li>
					            <img src="~/assets/services/icons/chart-pie.svg" width="24px">
					            <span>Segmentação de Mercado</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/competitive.svg" width="24px">
					            <span>Análise Competitiva</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/map.svg" width="24px">
					            <span>Arquitetura Tecnológica</span>
										</li>
									</ul>
								</div>
								<div class="column">
									<ul>
										<li>
					            <img src="~/assets/services/icons/code.svg" width="24px">
					            <span>Análise de Código</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/monitor.svg" width="24px">
					            <span>Monitoramento</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/server.svg" width="24px">
					            <span>Manutenção de Servidor</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="serviceCard">
						<div class="iconBlock ux">
							<lottie :options="uxOptions" :height="140" :width="60" v-on:animCreated="handleAnimation" :noMouse="true" />
							<span>User Experience</span>
						</div>
						<div class="description">
							<p class="subtitle">
								FAMOSO UX
							</p>
							<p class="title">
								To The Next Level
							</p>
							<p class="text">
								Permite elevar a experiência do usuário por meio da criação e execução do design visual. Trabalhamos com um <em>workflow</em> completo, desde a prototipação até a completa transformação da solução mobile/web. Este é um serviço <b-tooltip label="Sob medida" position="is-right"><em class="tooltip">tailor made</em></b-tooltip>, onde colaboramos com sua equipe em entrevistas de <em>stakeholders</em> e a incluímos em todos os processos de decisão para estarmos alinhados com as expectativas e complexidades apresentadas por negócios modernos.
							</p>
							<div class="columns">
								<div class="column">
									<ul>
										<li>
					            <img src="~/assets/services/icons/user-research.svg" width="24px">
					            <span>User Research</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/map.svg" width="24px">
					            <span>Arquitetura da Informação</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/wireframe.svg" width="24px">
					            <span>Wireframing</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/prototype.svg" width="24px">
					            <span>Prototipação</span>
										</li>
									</ul>
								</div>
								<div class="column">
									<ul>
										<li>
					            <img src="~/assets/services/icons/ui.svg" width="24px">
					            <span>Design</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/touch.svg" width="24px">
					            <span>Teste de Usabilidade</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/review.svg" width="24px">
					            <span>Revisão Heurística</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/brush.svg" width="24px">
					            <span>Produção Colaborativa</span>
										</li>
									</ul>
								</div>
							</div>
							<div class="columns is-multiline">
								<div class="column is-full" style="padding-top: unset; padding-bottom: unset;">
									<p class="subtitle">
										Ferramentas & Tecnologias
									</p>
								</div>
								<div class="column">
									<ul class="tools">
										<li>
					            <img src="~/assets/services/icons/figma.svg" width="24px">
					            <span>Figma</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/framer.svg" width="36px">
					            <span>Framer X</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/adobe.svg" width="36px">
					            <span>Adobe CC</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="serviceCard">
						<div class="iconBlock cloud">
							<lottie :options="cloudOptions" :height="140" :width="140" v-on:animCreated="handleAnimation" :noMouse="true" />
							<span>Arquitetura Cloud</span> 
						</div>
						<div class="description">
							<p class="subtitle">
								Mas que nuvem é essa?
							</p>
							<p class="title">
								Infraestrutura Escalável & Sempre De Pé
							</p>
							<p class="text">
								Pouco adianta uma aplicação bem desenvolvida quando a infraestrutura por trás é precária. Seus usuários precisam acessar seu produto de forma rápida e otimizada. Para isto é necessária a construção de uma arquitetura utilizando serviços que permitem usar apenas os recursos que seu software demanda. Uma arquitetura bem construída mitiga riscos de <em>downtime</em>, enxuga custos desnecessários e entrega performance.
							</p>
							<div class="columns">
								<div class="column">
									<ul>
										<li>
					            <img src="~/assets/services/icons/cloud-consulting.svg" width="24px">
					            <span>Consultoria Estratégica</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/cloud-arch.svg" width="24px">
					            <span>Cloud Architecture</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/www.svg" width="24px">
					            <span>Distribuição de Conteúdo</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/analytics.svg" width="24px">
					            <span>Data Analytics</span>
										</li>
									</ul>
								</div>
								<div class="column">
									<ul>
										<li>
					            <img src="~/assets/services/icons/migration.svg" width="24px">
					            <span>Migração de App & Dados</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/serverless.svg" width="24px">
					            <span>Serverless App</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/devops.svg" width="24px">
					            <span>DevOps & Automação</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/integrations.svg" width="24px">
					            <span>Integrações</span>
										</li>
									</ul>
								</div>
							</div>
							<div class="columns is-multiline">
								<div class="column is-full" style="padding-top: unset; padding-bottom: unset;">
									<p class="subtitle">
										Ferramentas & Tecnologias
									</p>
								</div>
								<div class="column">
									<ul class="tools">
										<li>
					            <img src="~/assets/services/icons/aws.svg" width="36px">
					            <span>AWS</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/linode.svg" width="36px">
					            <span>Linode</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/zeit.svg" width="36px">
					            <span>Zeit</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/google-cloud.svg" width="36px">
					            <span>Google Cloud</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/capistrano.svg" width="36px">
					            <span>Capistrano</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="serviceCard">
						<div class="iconBlock project">
							<lottie :options="projectOptions" :height="140" :width="120" v-on:animCreated="handleAnimation" :noMouse="true" />
							<span>Gestão de Projetos</span>
						</div>
						<div class="description">
							<p class="subtitle">
								Evitando código "macarronada"
							</p>
							<p class="title">
								Escopo, Cronograma & Tracking
							</p>
							<p class="text">
								A organização e gestão do projeto é fator de sucesso para um desenvolvimento ágil e eficiente. Por meios de métodos comprovados e processos bem definidos, conseguimos manter o ritimo necessário para o projeto continuar a ganhar corpo ao mesmo tempo em que problemas são solucionados sem desviar do objetivo traçado.
							</p>
							<div class="columns">
								<div class="column">
									<ul>
										<li>
					            <img src="~/assets/services/icons/doc.svg" width="24px">
					            <span>Documentação</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/box.svg" width="24px">
					            <span>Definição de Funcionalidade</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/layers.svg" width="24px">
					            <span>Definição de Prioridades</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/gateway.svg" width="24px">
					            <span>Roadmap</span>
										</li>
									</ul>
								</div>
								<div class="column">
									<ul>
										<li>
					            <img src="~/assets/services/icons/story.svg" width="24px">
					            <span>Story Breakdown</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/backlog.svg" width="24px">
					            <span>Gestão de Backlog</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/sprint.svg" width="24px">
					            <span>Sprint Leadership</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/team.svg" width="24px">
					            <span>Gestão de Recursos</span>
										</li>
									</ul>
								</div>
							</div>
							<div class="columns is-multiline">
								<div class="column is-full" style="padding-top: unset; padding-bottom: unset;">
									<p class="subtitle">
										Ferramentas & Tecnologias
									</p>
								</div>
								<div class="column">
									<ul class="tools">
										<li>
					            <img src="~/assets/services/icons/jira.svg" width="36px">
					            <span>Jira</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/slack.svg" width="36px">
					            <span>Slack</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/meet.svg" width="36px">
					            <span>Meet</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/google-drive.svg" width="36px">
					            <span>Drive</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="serviceCard">
						<div class="iconBlock dev">
							<lottie :options="devOptions" :height="140" :width="160" v-on:animCreated="handleAnimation" :noMouse="true" />
							<span>Desenvolvimento Web</span>
						</div>
						<div class="description">
							<p class="subtitle">
								É Aqui Que Viramos As Noites
							</p>
							<p class="title">
								Ao Alcance De Todos
							</p>
							<p class="text">
								O desenvolvimento customizado oferece opções para negócios que buscam entregar experiências flexíveis e consistentes para usuários de todas as plataformas. Nosso <em>approach</em> permite integrar o desenvolvimento <em>frontend</em> e <em>backend</em> em perfeita sintonia, resultando em processos bem definidos, leves e uma rápida entrega.
							</p>
							<div class="columns is-multiline">
								<div class="column is-full" style="padding-top: unset; padding-bottom: unset;">
									<p class="subtitle">
										Ferramentas & Tecnologias
									</p>
								</div>
								<div class="column">
									<ul class="tools tech">
										<li>
					            <img src="~/assets/services/icons/html5.svg" width="32px">
					            <span>HTML5</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/css3.svg" width="32px">
					            <span>CSS3</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/js.svg" width="36px">
					            <span>Javascript</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/ruby.svg" width="32px">
					            <span>Ruby</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/python.svg" width="36px">
					            <span>Python</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/sass.svg" width="36px">
					            <span>Sass</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/bulma.svg" width="28px">
					            <span>Bulma</span>
										</li>	
										<li>
					            <img src="~/assets/services/icons/node.svg" width="36px">
					            <span>Node</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/vue.svg" width="36px">
					            <span>Vue</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/nuxt.svg" width="36px">
					            <span>Nuxt</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/rails.svg" width="42px">
					            <span>Rails</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/react.svg" width="36px">
					            <span>React</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/svelte.svg" width="32px">
					            <span>Svelte</span>
										</li>																														
										<li>
					            <img src="~/assets/services/icons/firebase.svg" width="28px">
					            <span>Firebase</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/spring.svg" width="36px">
					            <span>Spring</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/postgres.svg" width="36px">
					            <span>Postgresql</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/mongodb.svg" width="60px">
					            <span>MongoDB</span>
										</li>																															
										<li>
					            <img src="~/assets/services/icons/mysql.svg" width="36px">
					            <span>MySQL</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/sqllite.svg" width="48px">
					            <span>SQLite</span>
										</li>		
										<li>
					            <img src="~/assets/services/icons/redis.svg" width="36px">
					            <span>Redis</span>
										</li>	
										<li>
					            <img src="~/assets/services/icons/webpack.svg" width="38px">
					            <span>Webpack</span>
										</li>										
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="serviceCard">
						<div class="iconBlock mobile">
							<lottie :options="mobileOptions" :height="140" :width="120" v-on:animCreated="handleAnimation" :noMouse="true" />
							<span>Desenvolvimento Mobile</span>
						</div>
						<div class="description">
							<p class="subtitle">
								Computador De Bolso
							</p>
							<p class="title">
								Realidade & Oportunidade
							</p>
							<p class="text">
								Os acessos a partir de celulares já deixaram os desktops para trás, comendo poeira, há algum tempo. Nossa equipe está preparada para esta realidade e pronta para contruir soluções <em>cross platforms</em> ou puramente nativas.
							</p>
							<div class="columns is-multiline">
								<div class="column is-full" style="padding-top: unset; padding-bottom: unset;">
									<p class="subtitle">
										Ferramentas & Tecnologias
									</p>
								</div>
								<div class="column">
									<ul class="tools">
										<li>
					            <img src="~/assets/services/icons/ios.svg" width="36px">
					            <span>iOS</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/android.svg" width="36px">
					            <span>Android</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/js.svg" width="36px">
					            <span>Javascript</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/native.svg" width="36px">
					            <span>Native</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/react.svg" width="36px">
					            <span>React</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/swift.svg" width="36px">
					            <span>Swift</span>
										</li>
										<li>
					            <img src="~/assets/services/icons/ionic.svg" width="36px">
					            <span>Ionic</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="serviceCard">
						<div class="iconBlock quality">
							<lottie :options="qualityOptions" :height="140" :width="120" v-on:animCreated="handleAnimation" :noMouse="true" />
							<span>Garantia de Qualidade</span>
						</div>
						<div class="description">
							<p class="subtitle">
								Evitando Haters Com Razão
							</p>
							<p class="title">
								Proteja A Qualidade De Sua Solução
							</p>
							<p class="text">
								Utilizamos as melhores práticas para testar e monitorar o uso de sua aplicação. Através de uma colaboração entre nossos analistas e seu time, identificamos, desenvolvemos o <em>fix</em> e prevenimos que problemas impeçam o bom funcionamento do software.
							</p>
						</div>
					</div>
					<div class="serviceCard">
						<div class="iconBlock continue">
							<lottie :options="continueOptions" :height="140" :width="120" v-on:animCreated="handleAnimation" :noMouse="true" />
							<span>Serviços Contínuos</span>
						</div>
						<div class="description">
							<p class="subtitle">
								A Gente Não Para Nunca!
							</p>
							<p class="title">
								Conte Com O Nosso Help
							</p>
							<p class="text">
								A grande verdade é que o desenvolvimento de um software não termina nunca. Não importa o quanto sólido é o código de sua aplicação, atualizações são inevitáveis. São adequações que são necessárias para novas plataformas ou <em>devices</em>, problemas que passam a surgir com o tempo por conta de ameaças ou novos <em>approachs</em> de serviços que auxilíam a manutenção de seu software ou até mesmo novas oportunidades. Negócios modernos sabem o quanto é importante o <em>timing</em> ao implementar novas funcionalidades que ofereçam alguma solução para o mercado, esta janela de tempo é um fator de sucesso.
								<br /><br />
								Pensando nisto, oferecemos um suporte sob medida, com custos bem definidos e um trabalho dimensionado de acordo com o tamanho e complexidade do seu produto. Após uma profunda análise para determinar a dimensão do trabalho contínuo necessário, podemos oferecer até mesmo um suporte 24/7 para a tecnologia de seu negócio.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	import Lottie from '~/components/Lottie.vue'

	export default {
	  components: {
	    Lottie
	  },
	  asyncData() {
	    return {
	      strategyOptions: {
	        animationData: require(`~/assets/services/strategy.json`),
	        loop: false,
	        autoplay: false,
	        prerender: true
	      },
	      uxOptions: {
	        animationData: require(`~/assets/services/ux.json`),
	        loop: false,
	        autoplay: false,
	        prerender: true
	      },
	      cloudOptions: {
	        animationData: require(`~/assets/services/cloud.json`),
	        loop: false,
	        autoplay: false,
	        prerender: true
	      },
	      projectOptions: {
	        animationData: require(`~/assets/services/project.json`),
	        loop: false,
	        autoplay: false,
	        prerender: true
	      },
	      devOptions: {
	        animationData: require(`~/assets/services/dev.json`),
	        loop: false,
	        autoplay: false,
	        prerender: true
	      },
	      mobileOptions: {
	        animationData: require(`~/assets/services/mobile.json`),
	        loop: false,
	        autoplay: false,
	        prerender: true
	      },
	      qualityOptions: {
	        animationData: require(`~/assets/services/quality.json`),
	        loop: false,
	        autoplay: false,
	        prerender: true
	      },
	      continueOptions: {
	        animationData: require(`~/assets/services/continue.json`),
	        loop: false,
	        autoplay: false,
	        prerender: true
	      }
	    }
	  },
	  methods: {
      handleAnimation: function (anim) {
        this.anim = anim
        this.anim.goToAndStop(89, true)
      }
	  }
	}
</script>

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
	.container {
		transform: translateY(-120px);
		background: white;
		border-radius: 20px;
		.services {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			> div {
				align-self: stretch;
				display: flex;
				flex-wrap: wrap;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;
				padding: 10px;
				padding-bottom: 60px;
				cursor: pointer;
				filter: grayscale(100%);
				transition: all ease .25s;
				p.title { width: 80%; word-break: keep-all; }
				&:hover {
					p { color: white; }
					filter: grayscale(0%);
					transform: translateY(-20px);
				}
			}
			.title { font-size: 12px; text-transform: uppercase; width: 50%; text-align: center; }
			.strategy:hover { background-color: #7C05F2; }
			.ux:hover { background-color: #FF007E; }
			.cloud:hover { background-color: #00B9F0; }
			.project:hover { background-color: #F24607; }
			.dev:hover { background-color: #F2B90C; }
			.mobile:hover { background-color: #00B9F0; }
			.quality:hover { background-color: #0583F2; }
			.continue:hover { background-color: #7C05F2; }
		}
	}
}

.serviceCard {
	display: flex;
	width: 95%;
	margin: 0 auto;
	&:not(:last-of-type) { margin-bottom: 60px; }
	> .description {
		background-color: hsl(0, 0%, 98%);
		padding: 80px;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
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
		> .columns {
			margin-top: 30px;
			ul > li {
				padding: 12px;
				display: flex;
				align-items: center;
				> img { margin-right: 12px; }
			}
			ul.tools {
				margin-top: -24px;
				display: flex;
				flex-wrap: wrap;
				> li {
					min-width: 14%;
					height: 110px;
					padding: 12px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
					font-size: 14px;
					font-weight: 500;
					text-align: center;
					> img { margin-right: unset; margin: auto 0; }
				}
			}
		}
	}
	> .iconBlock {
		display: flex;
		align-items: center;
		flex-direction: column;
		min-width: 30%;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		padding: 40px;
		color: #ffffff;
		font-size: 12px;
		font-weight: 600;
		text-transform: uppercase;
		text-align: center;
		> span { margin-top: -20px; }
		&.strategy { background-color: #7C05F2; }
		&.ux { background-color: #FF007E; }
		&.cloud { background-color: #00B9F0; }
		&.project { background-color: #F24607; }
		&.dev { background-color: #F2B90C; }
		&.mobile { background-color: #00B9F0; }
		&.quality { background-color: #0583F2; }
		&.continue { background-color: #7C05F2; }
	}
}

@media screen and (min-width: 1408px) {
	.container-fluid .container .services {
		flex-wrap: unset;
		justify-content: space-between;
		> div { flex: 1 1 0; }
		.strategy { border-top-left-radius: 20px; }
		.continue { border-top-right-radius: 20px; }
	}
}

@media screen and (max-width: 769px) {
	.hero {
		margin-top: 60px;
	}
	.container-fluid .container {
		.services {
			> div {
				flex: none;
				width: 50%;
				filter: unset;
			}
		}
	}
	.serviceCard {
		flex-direction: column;
		width: unset;
		&:not(:last-of-type) { margin-bottom: 90px; }
		> .description {
			border-top-right-radius: unset;
			border-bottom-left-radius: 20px;
			padding: 20px;
			.column:not(:first-of-type) {
				padding-top: unset;
				margin-top: -32px;
			}
			.subtitle { font-size: 16px; }
			.title { font-size: 24px; line-height: 34px; }
			.text { font-size: 16px; line-height: 24px; }
			> .columns {
				ul.tools {
					margin-top: 32px;
					> li {
						width: 33.33%;
					}
				}
			}
		}
		> .iconBlock {
			border-bottom-left-radius: unset;
			border-top-right-radius: 20px;
			height: 218px;
			justify-content: center;
			> div { margin-top: -32px; }
		}
	}
}
</style>