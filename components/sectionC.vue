<template>
  <div class="double-window">
    <mainC></mainC>
    <mainC></mainC>
  </div>
</template>

<script type="text/javascript">
import mainC from '~/components/mainC'
export default {
  data () {
    return {}
  },
  components: {
    mainC
  }
}
</script>

<style media="screen">
.double-window{
  display: flex;
  flex-flow: column;
}
@media screen and (min-width: 800px) {
  .double-window {
    display: flex;
    flex-flow: row nowrap;
    border-left-style: solid;
    border-color: #a85122;
    border-width: 2px;
  }
  .double-window > .main {
    border-style: none;
  }
}
</style>
