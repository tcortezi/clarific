<template>
	<section class="section">
		<div class="container">
			<a @click="$parent.close()" class="back"><- <span>Voltar</span></a>
			<div class="columns is-centered">
				<div class="column is-narrow">
					<h2 class="lp has-text-success">Obrigado, {{ name }}</h2>
					<p class="lp">Recebemos sua mensagem e responderemos o mais breve possível! 😉</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			name: String
		}
	}
</script>

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
</style>