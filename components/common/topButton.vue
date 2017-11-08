<template>
    <button v-on:scroll="scrollFunction" v-on:click="topFunction()" class='topButton' ref="topButton" title="Go to top"><i class="material-icons size">&#xE5C6;</i></button>
</template>

<script>
export default {
  methods: {
    scrollFunction (event) {
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        this.$refs.topButton.style.display = 'block'
      } else {
        this.$refs.topButton.style.display = 'none'
      }
    },
    topFunction (event) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      this.$refs.topButton.style.display = 'none'
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.scrollFunction)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollFunction)
  }
}
</script>

<style scoped lang='scss'>
@import "assets/sass/colors.scss";
.size{
  transform: rotate(180deg);
  font-size: 3em;
  color: red;
  opacity: 0.7;
}
.topButton {
  
  position: fixed;
  display: none;
  bottom: 1%;
  right: 1%;
  z-index: 99;
  border: none;
  outline: none;
  background-color: transparent;
  
  /*
  background-color: red;
  color: white;
  opacity: 0.7;
  cursor: pointer;
  border-radius: 50%;
  animation-duration: 1s;
  animation-name: slidein;
  */
}
/*
@keyframes slidein {
  from {
    margin-left: 0%;
    width: 25%
  }

  to {
    margin-left: 0%;
    width: 10%;
  }
}
*/
.topButton:hover .size{
  color: #555;
}
</style>
