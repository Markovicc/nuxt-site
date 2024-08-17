<template>
   

    <div id="zoneIDS" :class="zone.class" :data-src="zone.dataSrc"></div>  

   
   

</template>

<script setup lang="ts">

const route = useRoute()

const props = defineProps(['zone']);

const zone = ref<any>(props.zone)


const getScript = () => {
  const flourish = document.querySelector('#zoneIDS')
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
    async: true
    }
  ],
  
});

  
// reloadNuxtApp({
//     ttl: 1000
//   })
 
  
 
 

});

onBeforeUnmount(() => {

  if(window.FlourishLoaded) {
  window.FlourishLoaded = null }
})




</script>