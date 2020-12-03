<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Country Club Cochabamba</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-menu side="start" menu-id="first" content-id="main">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item>
          <ion-icon name="home-outline"></ion-icon>
          Inicio
        </ion-item>
        <ion-item>
          <ion-icon name="book-outline"></ion-icon>
          Terminos de Uso
        </ion-item>
        <ion-item>
          <ion-icon name="log-out-outline" white></ion-icon>
          Cerrar Sesion
        </ion-item>
      </ion-list>
    </ion-menu>

    <ion-content id="main">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <h3 class="text-center">Add User</h3>
          <form @submit.prevent="onFormSubmit">
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                v-model="user.name"
                required
              />
            </div>

            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                v-model="user.email"
                required
              />
            </div>

            <div class="form-group">
              <label>Phone</label>
              <input
                type="text"
                class="form-control"
                v-model="user.phone"
                required
              />
            </div>

            <div class="form-group">
              <label>Gender</label>
              <input
                type="text"
                class="form-control"
                v-model="user.gender"
                required
              />
            </div>

            <div class="form-group">
              <button class="btn btn-primary btn-block">Add User</button>
            </div>
          </form>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
  IonIcon,
  menuController,
} from "@ionic/vue";
import { db } from "@/firebaseDb";


export default defineComponent({
  name: "Main",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonIcon,
    IonToolbar,
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone: "",
        gender: "",
      },
    };
  },

  methods: {
    onFormSubmit(event: any) {
      event.preventDefault();
      console.log("usuario", this.user);
      db.collection("users")
        .add(this.user)
        .then(() => {
          alert("User successfully created!");
          this.user.name = "";
          this.user.email = "";
          this.user.phone = "";
          this.user.gender = "";
        })
        .catch((error: any) => {
          console.log(error);
        });
    },
    openFirst() {
      menuController.enable(true, "first");
      menuController.open("first");
    },
  },
});
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: url(../../resources/GolfField.jpg) no-repeat;
  background-size: cover;
}
ion-icon {
  color: rgb(255, 255, 255);
}
</style>
