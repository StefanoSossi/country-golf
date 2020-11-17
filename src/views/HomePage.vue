<template>
  <ion-page>
    <body>
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

      <ion-grid>
        <ion-row class="marcoNegro">
          <ion-col class="clima">
            <p class="textoCentro">Hoy</p>
            <img src="../../resources/clima.jpg" alt="" />
            <p class="textoCentro">13C/15C</p>
          </ion-col>
          <ion-col class="clima">
            <p class="textoCentro">Martes</p>
            <img src="../../resources/clima.jpg" alt="" />
            <p class="textoCentro">13C/15C</p> </ion-col
          ><ion-col class="clima">
            <p class="textoCentro">Miercoles</p>
            <img src="../../resources/clima.jpg" alt="" />
            <p class="textoCentro">13C/15C</p> </ion-col
          ><ion-col class="clima">
            <p class="textoCentro">Jueves</p>
            <img src="../../resources/clima.jpg" alt="" />
            <p class="textoCentro">13C/15C</p>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-content>
        <div>
          <ion-list>
            <ion-item> </ion-item>
            <ion-item>
              <ion-card>
                <ion-item href="#" class="ion-activated">
                  <ion-button>Reservar</ion-button>
                  <ion-label>Card Link Item 1 activated</ion-label>
                </ion-item>

                <ion-item href="#">
                  <ion-button>Reservar</ion-button>
                  <ion-label>Card Link Item 2</ion-label>
                </ion-item>

                <ion-item class="ion-activated">
                  <ion-button>Reservar</ion-button>
                  <ion-label>Card Button Item 1 activated</ion-label>
                </ion-item>

                <ion-item>
                  <ion-button>Reservar</ion-button>
                  <ion-label>Card Button Item 2</ion-label>
                </ion-item>
              </ion-card>
            </ion-item>
            <ion-item>
              <ion-card>
                <ion-card-header>
                  <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                  <ion-card-title>Card Title</ion-card-title>
                  <img
                    class="image-size"
                    src="../../resources/GolfField.jpg"
                    alt=""
                  />
                </ion-card-header>

                <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in
                  awhile, and climb a mountain or spend a week in the woods.
                  Wash your spirit clean.
                </ion-card-content>
              </ion-card>
            </ion-item>
            <ion-item>
              <ion-card>
                <ion-card-header>
                  <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                  <ion-card-title>Card Title</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in
                  awhile, and climb a mountain or spend a week in the woods.
                  Wash your spirit clean.
                </ion-card-content>
              </ion-card>
            </ion-item>
            <ion-item>
              <ion-card>
                <ion-card-header>
                  <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                  <ion-card-title>Card Title</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in
                  awhile, and climb a mountain or spend a week in the woods.
                  Wash your spirit clean.
                </ion-card-content>
              </ion-card>
            </ion-item>
          </ion-list>
        </div>

        <ion-tabs>
          <ion-tab-bar slot="bottom">
            <ion-tab-button tab="tab1" href="">
              <ion-icon name="basket"></ion-icon>
              <ion-label>Tab 1</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab2" href="">
              <ion-icon :icon="ellipse" />
              <ion-label>Tab 2</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab3" href="">
              <ion-icon :icon="square" />
              <ion-label>Tab 3</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="home" href="">
              <ion-icon :icon="square" />
              <ion-label>Tab home</ion-label>
            </ion-tab-button>
          </ion-tab-bar>
        </ion-tabs>
      </ion-content>
    </body>
  </ion-page>
</template>

<script lang="ts">
import { IonItem, IonList, IonLabel } from "@ionic/vue";

export default {
  name: "Login",
  components: {
    IonItem,
    IonList,
    IonLabel,
  },
};
</script>

<style scoped>
.textoCentro {
  text-align: center;
  font-weight: 700;
  color: #3db5ff;
}
.marcoNegro {
  border: 2px solid #3db5ff;
}
.image-size {
  width: 60%;
  height: 60%;
}
.image-size2 {
  width: 20%;
  height: 60%;
}
</style>
