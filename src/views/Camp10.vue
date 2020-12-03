<template>
  <ion-page>
    <ion-grid>
    <ion-row >
      <ion-col class="names" size="1.7" style="background: blue;">
        AZUL
      </ion-col>
      <ion-col class="names" size="1.7" style="background: white;">
        BLANCAS
      </ion-col>
      <ion-col class="names" size="1.7" style="background: red;">
        ROJAS
      </ion-col>
      <ion-col class="names" size="1.2" style="background: orange;">
        HOYO
      </ion-col>
      <ion-col class="names" size="1.2" style="background: green;">
        VENTAJA
      </ion-col>
      <ion-col class="names" size="1.2" style="background: yellow;">
        PAR
      </ion-col>
      <ion-col class="names"  style="background: white;">
        JUGADOR
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: blue;">
        529
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: white;">
        517
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: red;">
        442
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: orange;">
        10
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: green;">
        8
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: yellow;">
        5
      </ion-col>
      <ion-col class="numbers" style="background: white;">
        <input type="number" placeholder="N°" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h10">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: blue;">
        392
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: white;">
        368
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: red;">
        350
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: orange;">
        11
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: green;">
        6
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: yellow;">
        4
      </ion-col>
      <ion-col class="numbers" style="background: white;">
        <input type="number" placeholder="N°" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h11">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: blue;">
        587
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: white;">
        536
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: red;">
        470
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: orange;">
        12
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: green;">
        2
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: yellow;">
        5
      </ion-col>
      <ion-col class="numbers" style="background: white;">
        <input type="number" placeholder="N°" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h12">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: blue;">
        197
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: white;">
        185
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: red;">
        167
      </ion-col>
      <ion-col class="numbers"  size="1.2" style="background: orange;">
        13
      </ion-col>
      <ion-col class="numbers"  size="1.2" style="background: green;">
        16
      </ion-col>
      <ion-col class="numbers"  size="1.2" style="background: yellow;">
        3
      </ion-col>
      <ion-col class="numbers"  style="background: white;">
        <input type="number" placeholder="N°" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h13">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: blue;">
        410
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: white;">
        375
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: red;">
        353
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: orange;">
        14
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: green;">
        10
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: yellow;">
        4
      </ion-col>
      <ion-col class="numbers" style="background: white;">
        <input type="number" placeholder="N°" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h14">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: blue;">
        145
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: white;">
        137
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: red;">
        129
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: orange;">
        15
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: green;">
        18
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: yellow;">
        3
      </ion-col>
      <ion-col class="numbers" style="background: white;">
        <input type="number" placeholder="N°" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h15">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: blue;">
        385
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: white;">
        376
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: red;">
        330
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: orange;">
        16
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: green;">
        12
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: yellow;">
        4
      </ion-col>
      <ion-col class="numbers" style="background: white;">
        <input type="number" placeholder="N°" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h16">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: blue;">
        437
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: white;">
        402
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: red;">
        372
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: orange;">
        17
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: green;">
        4
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: yellow;">
        4
      </ion-col>
      <ion-col class="numbers" style="background: white;">
        <input type="number" placeholder="N°" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h17">
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: blue;">
        180
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: white;">
        167
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: red;">
        153
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: orange;">
        18
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: green;">
        14
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: yellow;">
        3
      </ion-col>
      <ion-col class="numbers"  style="background: white;">
        <input type="number" placeholder="N°" style="width: 80px; height:27px" onfocus="this.value=''" v-model="h18" >
      </ion-col>
    </ion-row>
    <ion-row >
      <ion-col class="numbers" size="1.7" style="background: blue; height: 80px">
        3262
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: white; height: 80px">
        3058
      </ion-col>
      <ion-col class="numbers" size="1.7" style="background: red; height: 80px">
        2776
      </ion-col>
      <ion-col class="numbers" size="2.4" style="background: white; height: 80px">
        2da. VUELTA
      </ion-col>
      <ion-col class="numbers" size="1.2" style="background: yellow; height: 80px">
        35
      </ion-col>
      <ion-col class="numbers"  style="background: white; height: 80px">
        <input type="number" placeholder="N°" style="width: 80px; height:27px" v-model="htotal18" >
      </ion-col>
    </ion-row>
    </ion-grid>
  </ion-page>
</template>

<script lang="ts">
import {
} from "@ionic/vue";
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
      htotal18: 0,
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
    FunctionPrueba() {
      alert("¡La contraseña no puede estar vacio!");
    }
  }
};
</script>
<style scoped>
    
    .names{
      color:black;
      height: 100px;
      border: 2px solid #000000;
      
      writing-mode:vertical-lr ;
      text-orientation:sideways-left;
      transform: rotate(180deg);
      
    }
    .numbers{
      color:black;
      text-align: center;
      height: 40px;
      border: 2px solid #000000;
    }

</style>