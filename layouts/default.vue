<template>
  <div>
    <canvas ref="canvas"></canvas>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~/assets/logo.svg">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <nuxt-link to="/projects">Works</nuxt-link>
          </div>
          <div class="navbar-item">
            <a>Serviços</a>
          </div>
          <div class="navbar-item">
            <nuxt-link to="/about">Sobre</nuxt-link>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button contato">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nuxt />
    <footer>
      <div class="container">
        <div>
          <a href="#">
            <img src="../assets/footer/behance.svg">
          </a>
          <a href="#">
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
  // div { position: relative; height: 100%; }
  nav {
    padding-top: 6.48vh;
    margin-left: 6.25vw;
    margin-right: 6.25vw;
    background: unset;
    .navbar-start { margin-left: 10px; }
    .navbar-item img { max-height: 2.5rem; }
    .navbar-item a:not(.button) {
      color: rgba(255, 255, 255, 0.85);
      &:hover { color: rgba(255, 255, 255, 1); }
    }
    .button.contato {
      color: white;
      min-width: 115px;
      background: linear-gradient(109.8deg, #2CB67D 0%, #6BCCA4 100%); 
      border: none; 
      border-radius: 30px;
      transition: all .1s ease-in-out;
      &:hover {
        font-weight: 600;
        transform: scale(1.05);
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(44, 182, 125, 0.12), 0px 6px 20px rgba(44, 182, 125, 0.18);
      }
    }
  }
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
    background: #F4F4F4;
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