<template>
	<section class="section">
		<div class="container">
			<div class="columns is-variable is-8 is-vcentered">
				<div class="column">
					<h2 class="lp">Vamos conversar sobre seu projeto?</h2>
				</div>
				<div class="column has-text-right">
					<a class="btn-lp" v-scroll-to="{
							el: '#form',
							offset: -10,
							easing: [.5, 0, .75, 0],
							duration: 800
						}">
						<span>Ok, vamos lá! ↘</span>
					</a>
				</div>
			</div>
		</div>
		<div class="noise"></div>
	</section>
</template>

<style lang="scss" scoped>
	.section {
		margin-top: 52px;
		margin-bottom: 100px;
		@media (max-width: 769px) {
			.columns {
				display: flex;
				flex-direction: column;
				justify-content: center;
				h2.lp { text-align: center; }
			}
		}
		background: #161719;
		min-height: 316px;
		position: relative;
		.noise {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 316px;
			background-image: url('~assets/img/lp2/noise.svg');
		}
		.container {
			z-index: 30;
		}
		h2 {
			color: #fafafa;
			max-width: unset;
		}
		display: flex;
		align-items: center;
		.btn-lp {
			border: 1px solid #fafafa;
			color: #fafafa;
			&::before {
				background: #fafafa;
			}
		  @media (min-width: 769px) {
		    &:hover {
		      color: #161719;
		      &::before {
		        width: 100%;
		      }
		    }
		  }
		}
	}
</style>