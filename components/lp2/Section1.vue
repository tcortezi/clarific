<template>
	<section class="section">
		<div class="container">
			<a href="https://clarific.com.br/" target="_blank" class="logo"><img src="~/assets/img/lp2/logo.svg"></a>
			<img src="~/assets/img/lp2/up.svg" class="up">
		</div>
		<div class="container">
			<div class="columns">
				<div class="column">
					<h1 class="lp">
						Criamos Esta <br />
						Landing Page
					</h1>
					<p class="subtitle lp">
						para que você entenda como fazemos <strong><em>landing pages</em></strong> e decida fazer a sua com a gente.
					</p>
					<a class="btn-lp" v-scroll-to="{
							el: '#how',
							offset: -60
						}">
						<span>Role para baixo ↓</span>
					</a>
				</div>
				<div class="column">
					<img src="~/assets/img/lp2/section1.svg">
				</div>
			</div>
		</div>
		<img src="~/assets/img/lp2/down.svg" class="down">
		<div id="how"><span>VEJA COMO</span></div>
	</section>
</template>

<style lang="scss" scoped>
	.section {
		position: relative;
		padding: 3rem 1.5rem;
		.columns {
			margin-top: 200px;
			@media (max-width: 769px) {
				margin-top: 96px;
				display: flex;
				flex-direction: column;
				> .column:first-of-type {
					order: 99;
				}
			}
			align-items: center;
		}
		.btn-lp {
			margin-top: 10px;
		}
		.down {
			position: absolute;
			bottom: 300px;
			right: 0;
			@media (max-width: 769px) {
				width: 90px;
			}
		}
		#how {
			margin-top: 300px;
			> span {
				@media (max-width: 769px) {
					font-size: 23px;
					line-height: 23px;
				}
				font-weight: 300;
				font-size: 28px;
				line-height: 28px;
				color: #161719;
				padding: 0 16px;
			}
			&::before, &::after {
				content: '';
				display: block;
				height: 1px;
				width: 100px;
				background-color: #C9CACB;
				@media (max-width: 769px) {
					width: 50px;
				}
			}
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.container:first-of-type {
		position: relative;
		.logo {
			position: absolute;
			top: 0;
			left: 0;
		}
		.up {
			@media (max-width: 769px) {
				width: 60px;
				opacity: .25;
			}
			position: absolute;
			top: -48px;
			right: 0;
		}
	}
</style>