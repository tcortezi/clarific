<template>
    <div :style="style" ref="lavContainer" v-on:mouseover="playMouse()"></div>
</template>

<script>
  import lottie from 'lottie-web';
  export default {
    props: {
      options: {
        type: Object,
        required: true
      },
      height: Number,
      width: Number,
      noMouse: Boolean
    },
    data () {
      return {
        style: {
          width: this.width ? `${this.width}px` : '100%',
          height: this.height ? `${this.height}px` : '100%',
          overflow: 'hidden'
        },
        playing: false
      }
    },
    mounted () {
      this.anim = lottie.loadAnimation({
          container: this.$refs.lavContainer,
          renderer: 'svg',
          loop: this.options.loop !== false,
          autoplay: this.options.autoplay !== false,
          animationData: this.options.animationData,
          rendererSettings: this.options.rendererSettings
        }
      );
      this.$emit('animCreated', this.anim)
    },
    methods: {
      play: function() {
        this.anim.playSegments([0, 89], true)
        this.playing = true
        setTimeout(() => { this.playing = false }, 3000)
      },
      playMouse: function() {
        if(!this.playing && !this.noMouse) {
          this.play()
        }
      }
    }
  }
</script>