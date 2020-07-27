<template>
	<div class="home">
		<nuxt />
		<footer>
			<div class="container">
				<div>
					<a href="https://www.behance.net/Clarific">
						<img src="../assets/footer/behance.svg">
					</a>
					<a href="https://medium.com/clarific">
						<img src="../assets/footer/medium.svg">
					</a>
					<a href="https://www.instagram.com/clarificlab/">
						<img src="../assets/footer/instagram.svg">
					</a>
				</div>
				<div>
					<p class="text is-size-7">
						Todos os direitos reservados.
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
export default{
	head() {
		return {
			title: 'Landing page premium - Design e desenvolvimento - Clarific',
    link: [
      { rel: 'icon', type: 'image/png', href: '/fav.png' }
    ]
		}
	}
}
</script>

<style lang="scss" scoped>
	div.home {
		background-color: #191A1E;
		height: 100vh;
	}
	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		background: rgba(255, 255, 255, 0.9);
		> div.container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			line-height: 30px;
			> div:first-of-type {
				padding-top: 6px;
				display: flex;
				justify-content: space-between;
				width: 100px;
			}
		}
	}
  @media screen and (max-width: 769px) {
    footer > div.container { padding: 0 30px; }
  }
</style>