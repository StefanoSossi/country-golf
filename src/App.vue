<template>
  <IonApp>
    <ion-router-outlet class="app" id="main-content"></ion-router-outlet>
  </IonApp>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
});
</script>

<style scoped>
.app{
  background: rgb(240, 253, 255);
}
</style>
