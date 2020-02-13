<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <img src="../assets/logo.svg">
          <p class="lat">
            [Do lat. <em>clarificare</em>.]
          </p>
          <p class="dic">
            V.t.d <b>1.</b> Tornar(-se) claro <br />
            <span class="highlight">
              <b>2.</b> <strong>Design e desenvolvimento</strong> de produtos digitais
            </span>
          </p>
          <div class="menu">
            <nuxt-link to="/projects">Works</nuxt-link>
            <a>Serviços</a>
            <a>Sobre</a>
            <a>Contato</a>
          </div>
        </div>
        <div class="column app">
          <img src="../assets/home/app-base.svg">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'home',
  name: 'HomePage'
}
</script>

<style lang="scss" scoped>
section {
  margin-top: 124px;
  .column:first-of-type {
    p.lat { 
      margin-top: 40px;
      font-weight: 300;
      font-size: 24px;
      line-height: 29px;
      color: rgba(255, 255, 255, 0.6);
    }
    p.dic {
      margin-top: 18px;
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;
      color: rgba(255, 255, 255, 0.9);
      b { font-weight: 600; }
      > .highlight {
        display: block;
        position: relative;
        overflow: visible;
        margin-top: 18px;
        color: rgba(255, 255, 255, 1);
        > strong { color: white; font-weight: bold; }
        &::after {
          content: '';
          position: absolute;
          top: -8px;
          left: 0;
          width: 502px;
          height: 45px;
          background-image: url('../assets/home/highlight.svg');
          background-size: 502px 45px;
          z-index: -1;
          margin-left: -10px;
        }
      }
    }
    div.menu {
      margin-top: 90px;
      a {
        color: white;
        &:hover {
          color: #B087F0;
          text-decoration: underline;
        }
        &:not(:last-of-type) { margin-right: 34px; }
      }
    }
  }
  .column.app {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 128px;
      left: 100px;
      width: 400px;
      height: 250px;
      background-image: url('../assets/home/app-1.svg');
      background-repeat: no-repeat;
      z-index: 10;
      animation: float 2s linear infinite;
      animation-delay: 0.75s;
      transform-origin: 50% 50%;
    }
    &::after {
      content: '';
      position: absolute;
      top: -20px;
      left: 160px;
      width: 400px;
      height: 250px;
      background-image: url('../assets/home/app-2.svg');
      background-repeat: no-repeat;
      z-index: 20;
      animation: float2 2s linear infinite;
      transform-origin: 50% 50%;
    }
  }
}

@keyframes float {
  0% { transform: translateY(0) }
  50% { transform: translateY(-4px) }
  100% { transform: translateY(0) }
}
@keyframes float2 {
  0% { transform: translateY(0) }
  50% { transform: translateY(-3px) }
  100% { transform: translateY(0) }
}
</style>