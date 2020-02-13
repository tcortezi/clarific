<template>
	<div class="projectCard" :style="projectColor">
		<p class="subtitle">{{ category }}</p>
		<p class="title">{{ title }}</p>
		<nuxt-link class="projectButton" :style="{ backgroundColor: color }" :to="'/project/' + slug"><span>Saiba mais</span></nuxt-link>
		<img class="projectImg" :src="require('~/assets/project/' + slug + '/mockup1.png')">
	</div>
</template>

<script>
	export default {
		props: {
			category: {
				type: String,
				required: true
			},
			title: {
				type: String,
				required: true
			},
			slug: {
				type: String,
				required: true
			},
			color: {
				type: String,
				required: true,
				default: '#000000'
			}
		},
		computed: {
			projectColor() {
				return {
					'--color': this.color
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.projectCard {
		background: #F4F4F4;
		border-radius: 20px;
		max-width: 580px;
		padding: 60px 45px;
		margin: 0 auto;
		pointer-events: none;
		transition: all .1s ease-in-out;
		transition-delay: .05s;
		.subtitle {
			font-weight: normal;
			font-size: 1rem;
			line-height: 19px;
			text-align: center;
			letter-spacing: 0.15em;
			text-transform: uppercase;
			color: rgba(94, 95, 98, 0.75);
			margin-bottom: 10px;
			transition: all .1s ease-in-out;
			transition-delay: .05s;
		}
		.title {
			color: var(--color);
			font-weight: bold;
			font-size: 30px;
			line-height: 36px;
			text-align: center;
			margin-top: unset;
			transition: all .1s ease-in-out;
			transition-delay: .05s;
		}
		.projectButton {
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 30px;
			width: 160px;
			height: 36px;
			font-weight: 500;
			font-size: 16px;
			line-height: 19px;
			color: white;
			pointer-events: auto;
			&:hover {
				border: 1px solid rgba(255, 255, 255, 0.25);
			}
		}
		.projectImg	{
			margin: 0 auto;
			margin-top: 30px;
		}
		&:hover { 
			background: var(--color);
			transform: scale(1.02);
			box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 24px 32px rgba(0, 0, 0, 0.04);
			.subtitle { color: rgba(255, 255, 255, 0.75); }
			.title { color: #ffffff; }
		}
	}
	@media screen and (max-width: 769px) {
		.projectCard {
			padding: 45px 45px;
		}
	}
</style>