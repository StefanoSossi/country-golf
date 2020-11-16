<template>
  <ion-page>
        <div class="containedLeft">
            <ion-button class="btn1" Fill="clear" href="/camp1">Partir del hoyo 1</ion-button>
        </div>
        <div class="containedRight">        
            <ion-button class="btn10" Fill="clear" href="/camp1">Partir del hoyo 10</ion-button>
        </div>   
         
  </ion-page>
</template>
 
<script lang="ts">
import { } from '@ionic/vue';

export default {
  name: 'PickCamp',
  components: {  }
}

</script>

<style scoped>
.btn1{
  width: 100%;
  height: 100%;
  background: url(../../resources/Flag1.jpg) padding-box;
  color: white;
  padding: 5px;
  font-size: 15px;
  cursor: pointer;
  margin: 12px 0;
}
.btn10{
  width: 100%;
  height: 100%;
  background: url(../../resources/Flag10.jpg) center;
  color: white;
  padding: 5px;
  font-size: 15px;
  cursor: pointer;
  margin: 12px 0;
}
div.containedLeft {
  height: 100%;
  width: 50%;
  float: left;
  transition: all 700ms ease-out;
}
div.containedLeft:hover {
  transform: scale(2,2);
}
div.containedRight {
  height: 100%;
  width: 50%;
  float: right;
  transition: all 700ms ease-out;
}

div.containedRight:hover {
  transform: scale(2,2);
}


</style>