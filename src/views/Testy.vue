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
      <ion-content id="main">
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
      </ion-content>
    </ion-menu>
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

  methods: {
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
