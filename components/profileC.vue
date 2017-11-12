<template>
  <div class="bloc">
    <div class="col">
      <div class="blocinf">
      <div class="cel">
        <h1>Perfil</h1>
        <div class="avatar" v-bind:style="showImg()"></div>
        <nuxt-link to="editprofile"><button type="button" class="btn btn-warning" style="font-size:.8em;">Editar pefil</button></nuxt-link>
      </div>
      <div class="cel">
        <h5>Nombre</h5>
        <h4>{{infoP.name}}</h4>
        <h5>Nombre usuario</h5>
        <h4>@{{infoP.username}}</h4>
        <h5>Ciudad</h5>
        <h4>{{infoP.city}}</h4>
        <h5>Edad</h5>
        <h4>{{infoP.age}}</h4>
      </div>
    </div>
    <div class="info">
      <h5>Sobre mi</h5>
      <p>{{infoP.info}}</p>
    </div>
    <div class="blocinf ">
      <div class="btn-group cel">
        <button type="button" class="btn btn-danger align"><i class="material-icons">&#xE7EF;</i> Seguidores</button>
        <button type="button" class="btn btn-info align">{{infoP.followers}}</button>
      </div>
      <div class="btn-group cel">
        <button @click="follow" type="button" class="btn btn-danger align">{{followText}}</button>
        <button type="button" class="btn btn-default align"><i class="material-icons" v-html="showStar()"></i></button>
      </div>
    </div>
    </div>
    <div class="col left">
      <uploadC></uploadC>
    </div>
    <div class="posts">
      <h1>Mis publicaciones</h1>
    </div>
  </div>
</template>
<script type="text/javascript">

import uploadC from '~/components/uploadC'
export default {
  data () {
    return {
      infoP:
      {
        id: 3456,
        img: require('~/assets/images/profile.jpg'),
        name: 'Pedro Gomez',
        username: 'pedrogm',
        age: '35',
        city: 'Madrid',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        followers: 46
      },
      followText: 'Seguir',
      following: false,
      fullStar: '&#xe838;',
      emptyStar: '&#xe83a;'
    }
  },
  methods: {
    follow () {
      if (this.following) {
        this.following = false
        this.followText = 'Seguir'
      } else {
        this.following = true
        this.followText = 'Dejar de seguir'
      }
    },
    showStar () {
      if (this.following) {
        return this.fullStar
      } else {
        return this.emptyStar
      }
    },
    showImg () {
      return 'background-image: url(' + this.infoP.img + ')'
    }
  },
  components: {
    uploadC
  }
}
</script>
<style scoped lang='scss'>
@import "assets/sass/colors.scss";

.posts {
  width:100%;
  padding:10px;
  margin-bottom:-3%;
}
.align {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
textarea {
  width: 100%;
  padding: 10px;
}

.info {
  width: 100%;
}
p{
  font-weight: 100;
}

.conditions { display: flex;align-items: center;}

.ico {
  margin-left: 10px;
}

h1 {
  color: $redColor;
  margin-bottom: 4%;
}
h5 {
  font-weight:200;
  margin-top: 10px;
  font-size: 16px;
  background-color: #DBE5E6;
  padding: 5px;
  border-bottom-left-radius: 10px;
}

h4 {
  color: #525252;
}

img{width: 100%;}


.bloc {
  width: 100%;
  margin-top: 2%;
}
.col {
  padding: 20px;
  width: 100%;
  border-top:1px solid #E9E9E9;
}

.cel {
  padding: 10px;
  width: 100%;
}

input {
  width: 85%;
  height: 40px;
  padding: 5px;
}

.imgp {
  max-width: 200px;
}

div.avatar {
    height: 200px;
    width: 200px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% auto;
    background-color: white;
}

@media screen and (min-width: 750px) {

  .bloc {
    display: flex;
    flex-flow: row wrap;
  }

  .blocinf {
    display: flex;
    flex-flow: row wrap;
  }
  .col {
    width: 50%;
  }

  .cel {
    width: 100%;

  }
  .left {
    border-left: 2px solid #E9E9E9;
    border-top:1px solid #E9E9E9;
    border-radius: 20px;
  }
}

@media screen and (min-width: 1200px) {
  .cel {
    width: 50%;

  }
}

</style>
