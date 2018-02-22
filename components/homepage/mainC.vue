<template>
  <div class="out">
    <div class="main">
      <img src="~/assets/images/imgcopia.png" style="opacity:1;">
    </div>
  </div>
</template>

<style scoped lang='scss'>
@import "assets/sass/colors.scss";
.out{
  flex:1 1 70%;
  padding: 5px;
  display: block;
  position: relative;

}
.out:after{
  content: "";
  background: url("~/assets/images/back.png") center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index:-1;
  opacity: .5;
  position: absolute;
}
</style>
