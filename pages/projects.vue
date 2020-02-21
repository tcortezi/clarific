<template>
	<div>
		<section class="section is-paddingless">
			<div class="container">
				<div class="hero">
					<p class="subtitle">
						Cases
					</p>
					<h1 class="title">
						Projetos em destaque
					</h1>
				</div>
			</div>
		</section>
		<div class="container-fluid">
			<section class="section">
				<div class="container">
					<div class="columns is-multiline">
						<div class="column is-half" v-for="project in projects">
							<project-display
								:category="project.category"
								:title="project.title"
								:slug="project.slug"
								:color="project.color"
							></project-display>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import ProjectDisplay from '~/components/ProjectDisplay'
export default {
	components: { ProjectDisplay },
	data() {
		return {
			projects: [
				{ category: 'eventos', title: 'Partiu Ingresso', slug: 'partiu', color: '#C72328' },
				{ category: 'investimentos', title: 'Joa Assessoria', slug: 'joa', color: '#28004C' },
				{ category: 'saúde', title: 'Cuidar', slug: 'cuidar', color: '#2B6CB0'},
				{ category: 'engenharia', title: 'Project Way', slug: 'projectway', color: '#70B5B6'},
				{ category: 'fitness', title: 'MTOR Gold', slug: 'mtor', color: '#F39C12' },
				{ category: 'fitness', title: 'Meu Shape', slug: 'meushape', color: '#283237' }
			]
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
			transform: translateY(-80px);
		}
	}
	@media screen and (max-width: 769px) {
		.hero {
			margin-top: 30px;
			padding: calc(6.25vw + 12px);
			.title { text-align: center; }
			.subtitle { font-size: 18px; }
		}
		.container-fluid {
			margin-top: 120px;
		}
	}
</style>