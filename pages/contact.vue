<template>
	<div>
		<section class="section is-paddingless">
			<div class="container">
				<div class="hero">
					<p class="subtitle">
						Contato
					</p>
					<h1 class="title">
						Fale com a gente
					</h1>
				</div>
			</div>
		</section>
		<div class="container-fluid">
			<section class="section">
				<div class="container">
					<div class="columns is-centered">
						<div class="column is-5">
							<contact-form />
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import ContactForm from '~/components/ContactForm'
export default {
	components: { ContactForm }
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
	.column {
		transform: translateY(-120px);
		background: #ffffff;
		border-radius: 20px;
	}
}
</style>