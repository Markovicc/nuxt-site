<template>
   

    <div id="zoneID" :class="zone.class" :data-src="zone.dataSrc">
      
      
     
    </div>
</template>

<script setup lang="ts">

const route = ref<any>(useRoute())

const props = defineProps(['zone']);

const zone = ref<any>(props.zone)



const getScript = () => {
  const flourish = document.querySelector('#zoneID')
  const plugin = document.createElement('script');
  
 
  flourish.appendChild(plugin);
  
}







onMounted( () => {
  useHead({
  script: [
    {
    src: zone.value.script,
    onload: () => { getScript()},
   
    defer: true,
    async: true,
    
    }
  ],
  
});


 
 

});

onBeforeUnmount(() => {

if(window.FlourishLoaded) {
window.FlourishLoaded = null }
})


</script>