<template>
  <ion-page>
    <ion-grid>
    <ion-row >
      <ion-col class="names" size="1.7" style="background: rgba(0, 0, 255, 0.5);">
        AZUL
      </ion-col>
      <ion-col class="names" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        BLANCAS
      </ion-col>
      <ion-col class="names" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        ROJAS
      </ion-col>
      <ion-col class="names" size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        HOYO
      </ion-col>
      <ion-col class="names" size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        VENTAJA
      </ion-col>
      <ion-col class="names" size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        PAR
      </ion-col>
      <ion-col class="names"  style="background: rgba(255, 255, 255, 0.5);">
        JUGADOR
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5);">
        364
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        352
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        300
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        1
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        15
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        4
      </ion-col>
      <ion-col class="numbers" style="background: rgba(255, 255, 255, 0.5);">
        <input type="number" placeholder="N°" v-on:change="FunctionTotalHoyos()" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h1">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5);">
        300
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        287
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        272
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        2
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        11
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        4
      </ion-col>
      <ion-col class="numbers" style="background: rgba(255, 255, 255, 0.5);">
        <input type="number" placeholder="N°" v-on:change="FunctionTotalHoyos()" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h2">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5);">
        185
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        163
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        158
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        3
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        17
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        3
      </ion-col>
      <ion-col class="numbers" style="background: rgba(255, 255, 255, 0.5);">
        <input type="number" placeholder="N°" v-on:change="FunctionTotalHoyos()" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h3">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5);">
        549
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        525
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        464
      </ion-col>
      <ion-col class="numbers"  size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        4
      </ion-col>
      <ion-col class="numbers"  size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        3
      </ion-col>
      <ion-col class="numbers"  size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        5
      </ion-col>
      <ion-col class="numbers"  style="background: rgba(255, 255, 255, 0.5);">
        <input type="number" placeholder="N°" v-on:change="FunctionTotalHoyos()" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h4">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5);">
        628
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        614
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        565
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        5
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        1
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        5
      </ion-col>
      <ion-col class="numbers" style="background: rgba(255, 255, 255, 0.5);">
        <input type="number" placeholder="N°" v-on:change="FunctionTotalHoyos()" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h5">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5);">
        417
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        399
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        347
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        6
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        5
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        4
      </ion-col>
      <ion-col class="numbers" style="background: rgba(255, 255, 255, 0.5);">
        <input type="number" placeholder="N°" v-on:change="FunctionTotalHoyos()" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h6">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5);">
        192
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        179
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        150
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        7
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        13
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        3
      </ion-col>
      <ion-col class="numbers" style="background: rgba(255, 255, 255, 0.5);">
        <input type="number" placeholder="N°" v-on:change="FunctionTotalHoyos()" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h7">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5);">
        380
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        365
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        337
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        8
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        9
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        4
      </ion-col>
      <ion-col class="numbers" style="background: rgba(255, 255, 255, 0.5);">
        <input type="number" placeholder="N°" v-on:change="FunctionTotalHoyos()" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h8">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5);">
        562
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        547
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        452
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        9
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        7
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        5
      </ion-col>
      <ion-col class="numbers"  style="background: rgba(255, 255, 255, 0.5);">
        <input type="number" placeholder="N°" v-on:change="FunctionTotalHoyos()" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h9" >
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5); height: 80px">
        3577
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5); height: 80px">
        3431
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5); height: 80px">
        3045
      </ion-col>
      <ion-col class="numbers" size="2.4" style=" background: rgba(255, 255, 255, 0.5); height: 80px">
        1era. VUELTA
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 255, 0, 0.5); height: 80px">
        37
      </ion-col>
      <ion-col class="numbers"  style="background: rgba(255, 255, 255, 0.5); height: 80px">
        <input type="number" placeholder="N°" disabled="true" style="width: 80px; height:27px" v-model="htotal9" >
      </ion-col>
    </ion-row>
    </ion-grid>
    <button>Terminar Partida</button>
  </ion-page>
</template>

<script>
import {
} from "@ionic/vue";
import { removeOutline, addOutline  } from 'ionicons/icons';
export default {
  name: "camp1",
  data() {
    return {
      h1: 0,
      h2: 0,
      h3: 0,
      h4: 0,
      h5: 0,
      h6: 0,
      h7: 0,
      h8: 0,
      h9: 0,
      htotal9: 0,
    };
  },
  components: { 
  },
  setup() {
    return {
      addOutline,
      removeOutline
    }
  },
  methods: {
    FunctionTotalHoyos(){
      this.htotal9 = Number(this.h9) + Number(this.h1) + Number(this.h2) + Number(this.h3) + Number(this.h4) + Number(this.h5) + Number(this.h6) + Number(this.h7) + Number(this.h8);     
    }
  }
};
</script>
<style scoped>
    
    .names{
      color:black;
      height: 100px;
      border: 2px solid #000000;
      font-weight: bold;
      writing-mode:vertical-lr ;
      text-orientation:sideways-left;
      transform: rotate(180deg);
      
    }
    .numbers{
      color:black;
      text-align: center;
      height: 40px;
      border: 2px solid #000000;
      font-weight: bold;
    }

</style>