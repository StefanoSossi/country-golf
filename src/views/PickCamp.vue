<template>
  <ion-page>
        <div class="containedLeft">
            <ion-button class="btn1" Fill="clear">1</ion-button>
        </div>
        <div class="containedRight">        
            <ion-button class="btn10" Fill="clear">10</ion-button>
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
  background: url(../../resources/Hole1.jpg) fixed;
  color: white;
  padding: 5px;
  font-size: 35px;
  cursor: pointer;
  margin: 12px 0;
}
.btn10{
  width: 100%;
  height: 100%;
  background: url(../../resources/Hole10.jpg) fixed;
  color: white;
  padding: 5px;
  font-size: 35px;
  cursor: pointer;
  margin: 12px 0;
}
div.containedLeft {
  height: 100%;
  width: 50%;
  float: left;
}
div.containedRight {
  height: 100%;
  width: 50%;
  float: right;
}


</style>