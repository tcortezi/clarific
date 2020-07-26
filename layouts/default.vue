<template>
  <div class="default">
    <canvas ref="canvas"></canvas>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img src="~/assets/logo.svg">
        </nuxt-link>

        <a role="button" class="navbar-burger burger" @click="menuMobile">
          <lottie :options="menuOptions" :height="52" :width="52" v-on:animCreated="handleAnimation" :noMouse="true" />
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <nuxt-link to="/projects" @click.native="menuMobile">Cases</nuxt-link>
          </div>
          <div class="navbar-item">
            <nuxt-link to="/services" @click.native="menuMobile">Serviços</nuxt-link>
          </div>
          <div class="navbar-item">
            <nuxt-link to="/about" @click.native="menuMobile">Sobre</nuxt-link>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <nuxt-link to="/contact" class="button contato">
                Contato
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

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
  import Lottie from '~/components/Lottie.vue'

  export default {
    components: {
      Lottie
    },
    data() {
      return {
        menuOptions: {
          animationData: require(`~/assets/menu.json`),
          loop: false,
          autoplay: false,
          prerender: true
        }
      }
    },
    methods: {
      menuMobile() {
        const el = this.$el.querySelector('.navbar')
        const clip = document.getElementsByTagName('html')[0]
        const mobile = window.matchMedia("(max-width: 769px)")
        if(mobile.matches) {
          if(el.classList.contains("active")) {
            el.classList.add("out")
            this.anim.playSegments([28, 0], true)
            clip.style.cssText = ""
            setTimeout(() => { el.className = "navbar" }, 1000)
          } else {
            el.classList.add("active")
            this.anim.playSegments([0, 28], true)
            setTimeout(() => { clip.style.cssText = "overflow: hidden;" }, 1000)
          }
        }
      },
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
      },
      handleAnimation: function (anim) {
        this.anim = anim
        this.anim.goToAndStop(0, true)
      }
    },
    mounted() {
      this.$refs.canvas.height = window.innerHeight
      this.$refs.canvas.width  = window.innerWidth
      this.generateNoise()
      requestAnimationFrame(this.moveNoise)
    },
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
div.default {
  background-color: #191A1E;
}
  nav {
    padding-top: 6.48vh;
    padding-left: 6.25vw;
    padding-right: 6.25vw;
    background: unset;
    .navbar-burger:hover { background-color: unset; }
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
  @keyframes logoBlack {
    from {
      filter: invert(0%);
    }

    to {
      filter: invert(68%);
    }
  }
  @keyframes logoWhite {
    from {
      filter: invert(68%);
    }

    to {
      filter: invert(0%);
    }
  }
  @keyframes bounceInRight {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    from {
      opacity: 0;
      transform: translate3d(3000px, 0, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(-10px, 0, 0);
    }

    75% {
      transform: translate3d(8px, 0, 0);
    }

    90% {
      transform: translate3d(-2px, 0, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes bounceOutRight {
    20% {
      opacity: 1;
      transform: translate3d(-20px, 0, 0);
    }

    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }

  @media screen and (max-width: 769px) {
    footer > div.container { padding: 0 30px; }
    nav {
      &.active {
        .navbar-brand > .navbar-item > img {
          animation-name: logoBlack;
          animation-duration: 1s;
          animation-fill-mode: both; 
        }
        .navbar-burger > div > svg {
          position: relative; z-index: 60;
        }
        .navbar-brand { z-index: 30; position: relative; }
        .navbar-menu {
          animation-name: bounceInRight;
          animation-duration: 1s;
          animation-fill-mode: both;
          display: block;
          box-shadow: unset;
          position: absolute;
          height: 100vh;
          width: 100vw;
          background-color: white;
          top: 0;
          left: 0;
        }
        &.out {
          .navbar-menu {
            animation-name: bounceOutRight;
            animation-duration: 1s;
            animation-fill-mode: both;
          }
          .navbar-brand > .navbar-item > img {
            animation-name: logoWhite;
            animation-duration: 1s;
            animation-fill-mode: both; 
          }
        }
        .navbar-start { margin-left: unset; margin-top: 160px; }
        .navbar-menu .navbar-item {
          padding: 1rem 0.75rem;
          text-align: center;
          .buttons { display: block; text-align: center; }
          a {
            color: rgba(25, 26, 30, 0.9);
            font-size: 2.5rem;
            font-weight: 800;
            &.nuxt-link-active {
              color: #8E54E9;
              border-bottom: 0.25rem solid #8E54E9;
            }
            &.button { background: unset; padding: unset; margin-top: -1rem; }
          }
        }
      }
    }
  }
</style>