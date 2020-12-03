<template>
  <ion-page>
      <body>
        <form @submit.prevent="verify" class="login-box">
          <div class="imagebox">
            <img src="../../resources/logo-country.png" />
          </div>
          <div class="textbox">
            <input type="text" placeholder="Username" v-model="username">
          </div>
          <div class="textbox">
            <input type="password" placeholder="Password" v-model="password">
          </div>
          <button expand="block" shape="round" class="btn" type="submit" Fill="clear" >Sign in</button>
        </form>
      </body>
  </ion-page>
</template>

<script>

import { auth } from "@/firebaseDb";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    pressed(){
      
      auth.signInWithEmailAndPassword(this.$data.username,this.$data.password)
      .then(data => {
          console.log(data);
          this.$router.push("/home");
        })
        .catch(error => {
          this.error = error;
          alert(this.error);
        });
    },
    verify(){
      const nav = document.querySelector('ion-nav');
      if( this._validateUsername() && this._validatePassword()){
        this.pressed();
        
      }
    },
    _validateUsername() {
      if(this.username === ""){
        alert("¡El nombre de usuario no puede estar vacio!");
        return false;
      }else {
        return true;
      }
    },
    _validatePassword() {
      if(this.password === ""){
        alert("¡La contraseña no puede estar vacio!");
        return false;
      }else {
        return true;
      }
    },
  }
  
};
</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: url(../../resources/GolfBall.jpg) no-repeat;
  background-size: cover;
}
.login-box{
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: rgb(0, 0, 0);
}
.textbox{
  width: 100%;
  overflow: hidden;
  font-size: 10%;
  padding: 8px 0;
  margin: 8px 0;
  border-bottom: 1px solid #0022e4;
}
.textbox i{
  width: 10%;
  float: left;
  text-align: center;
}
.textbox input{
  border: none;
  outline: none;
  background: rgba(251, 251, 251, 0.50);
  color: rgb(36, 36, 36);
  font-size: 18px;
  width: 80%;
  float: left;
  margin: 0 10px;
}
.btn{
  width: 100%;
  background:  rgba(50, 162, 236, 0.5);
  color: rgb(0, 0, 0);
  padding: 5px;
  font-size: 18px;
  cursor: pointer;
  margin: 12px 0;
  shape-margin: 2px solid #0035e4;
}
img{
  position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}


</style>