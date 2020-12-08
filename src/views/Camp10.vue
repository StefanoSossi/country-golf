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
        529
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        517
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        442
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        10
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        8
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        5
      </ion-col>
      <ion-col class="numbers" style="background: rgba(255, 255, 255, 0.5);">
        <input type="number" placeholder="N°" v-on:change="FunctionTotalHoyos()" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h10">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5);">
        392
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        368
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        350
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        11
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        6
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        4
      </ion-col>
      <ion-col class="numbers" style="background: rgba(255, 255, 255, 0.5);">
        <input type="number" placeholder="N°" v-on:change="FunctionTotalHoyos()" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h11">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5);">
        587
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        536
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        470
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        12
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        2
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        5
      </ion-col>
      <ion-col class="numbers" style="background: rgba(255, 255, 255, 0.5);">
        <input type="number" placeholder="N°" v-on:change="FunctionTotalHoyos()" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h12">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5);">
        197
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        185
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        167
      </ion-col>
      <ion-col class="numbers"  size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        13
      </ion-col>
      <ion-col class="numbers"  size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        16
      </ion-col>
      <ion-col class="numbers"  size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        3
      </ion-col>
      <ion-col class="numbers"  style="background: rgba(255, 255, 255, 0.5);">
        <input type="number" placeholder="N°" v-on:change="FunctionTotalHoyos()" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h13">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5);">
        410
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        375
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        353
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        14
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        10
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        4
      </ion-col>
      <ion-col class="numbers" style="background: rgba(255, 255, 255, 0.5);">
        <input type="number" placeholder="N°" v-on:change="FunctionTotalHoyos()" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h14">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5);">
        145
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        137
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        129
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        15
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        18
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        3
      </ion-col>
      <ion-col class="numbers" style="background: rgba(255, 255, 255, 0.5);">
        <input type="number" placeholder="N°" v-on:change="FunctionTotalHoyos()" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h15">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5);">
        385
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        376
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        330
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        16
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        12
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        4
      </ion-col>
      <ion-col class="numbers" style="background: rgba(255, 255, 255, 0.5);">
        <input type="number" placeholder="N°" v-on:change="FunctionTotalHoyos()" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h16">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5);">
        437
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        402
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        372
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        17
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        4
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        4
      </ion-col>
      <ion-col class="numbers" style="background: rgba(255, 255, 255, 0.5);">
        <input type="number" placeholder="N°" v-on:change="FunctionTotalHoyos()" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h17">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5);">
        180
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5);">
        167
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5);">
        153
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 166, 0, 0.5);">
        18
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(0, 128, 0, 0.5);">
        14
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 255, 0, 0.5);">
        3
      </ion-col>
      <ion-col class="numbers"  style="background: rgba(255, 255, 255, 0.5);">
        <input type="number" v-on:change="FunctionTotalHoyos()" placeholder="N°" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h18" >
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: rgba(0, 0, 255, 0.5); height: 80px">
        3262
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 255, 255, 0.5); height: 80px">
        3058
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: rgba(255, 0, 0, 0.5); height: 80px">
        2776
      </ion-col>
      <ion-col class="numbers" size="2.4" style="background: rgba(255, 255, 255, 0.5); height: 80px">
        2da. VUELTA
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: rgba(255, 255, 0, 0.5); height: 80px">
        35
      </ion-col>
      <ion-col class="numbers"  style="background: rgba(255, 255, 255, 0.5); height: 80px">
        <input type="number" placeholder="N°" disabled="true" style="width: 80px; height:27px" v-model="htotal18" >
      </ion-col>
    </ion-row>
    </ion-grid>
    <button>Terminar Partida</button>
    <button>Siguiente Hoyo</button>
  </ion-page>
</template>

<script>
import {
} from "@ionic/vue";
import { auth } from "@/firebaseDb";
import { removeOutline, addOutline  } from 'ionicons/icons';
export default {
  name: "camp10",
  data() {
    return {
      h10: 0,
      h11: 0,
      h12: 0,
      h13: 0,
      h14: 0,
      h15: 0,
      h16: 0,
      h17: 0,
      h18: 0,
      htotal18: null
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
      this.htotal18 = Number(this.h10) + Number(this.h11) + Number(this.h12) + Number(this.h13) + Number(this.h14) + Number(this.h15) + Number(this.h16) + Number(this.h17) + Number(this.h18);     
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