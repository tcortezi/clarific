<template>
	<section class="section">
		<div class="container">
			<a @click="$parent.close()" class="back"><- <span>Voltar</span></a>
			<div class="columns is-centered">
				<div class="column is-narrow">
					<h2 class="lp">{{ title }}</h2>
					<img :src="require(`~/assets/img/lp2/${img}`)">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			title: String,
			img: String
		}
	}
</script>

<style lang="scss" scoped>
	.section {
		background: transparent;
		@media (max-width: 769px) {
			padding-top: 48px;
		}
		.column {
			> img {
				box-shadow: 0px 0.996212px 2.85027px rgba(22, 23, 25, 0.0590406), 0px 2.39404px 6.84961px rgba(22, 23, 25, 0.0848175), 0px 4.50776px 12.8972px rgba(22, 23, 25, 0.105), 0px 8.04107px 23.0064px rgba(22, 23, 25, 0.125183), 0px 15.0399px 43.0309px rgba(22, 23, 25, 0.150959), 0px 36px 103px rgba(22, 23, 25, 0.21);
			}
		}
	}

	.back {
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 24px;
		color: #161719;
		@media (max-width: 769px) {
			display: inline-block;
			margin-bottom: 32px;
		}
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
				@media (max-width: 769px) {
					width: 100%;
				}
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