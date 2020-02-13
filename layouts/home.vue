<template>
	<div>
		<canvas ref="canvas"></canvas>
		<nuxt />
		<footer>
			<div class="container">
				<div>
					<a href="#">
						<img src="../assets/footer/behance.svg">
					</a>
					<a href="https://medium.com/clarific">
						<img src="../assets/footer/medium.svg">
					</a>
					<a href="#">
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
  methods: {
    generateNoise() {
		this.noise = document.createElement('canvas')
		this.noise.height = window.innerHeight * 2
		this.noise.width  = window.innerWidth * 2
		let noiseContext = this.noise.getContext('2d')
		let noiseData = noiseContext.createImageData(
		this.noise.width,
		this.noise.height
		)
		let buffer32 = new Uint32Array(noiseData.data.buffer)
		let len = buffer32.length - 1
		while (len--) {
		buffer32[len] = Math.random() < 0.5 ? 0 : -1 >> 0
		}
		noiseContext.putImageData(noiseData, 0, 0)
    },
    moveNoise() {
		let canvas  = this.$refs.canvas
		let context = canvas.getContext('2d')
		let x = Math.random() * canvas.width
		let y = Math.random() * canvas.height
		context.clearRect(0, 0, canvas.width, canvas.height)
		context.drawImage(this.noise, -x, -y)
		requestAnimationFrame(this.moveNoise)
    }
  },
  mounted() {
		this.$refs.canvas.height = window.innerHeight
		this.$refs.canvas.width  = window.innerWidth
		this.generateNoise()
		requestAnimationFrame(this.moveNoise)
  }
}
</script>

<style lang="scss" scoped>
	canvas{
	  height: 100%;
	  left: 0;
	  mix-blend-mode: soft-light;
	  opacity: 0.02;
	  pointer-events: none;
	  position: fixed;
	  top: 0;
	  width: 100%;
	  z-index: -100;
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
</style>