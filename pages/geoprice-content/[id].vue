<template>
  <div>
    <Navbar />
    <!-- <CommonPageTitle :pageTitle="details?.attributes?.title" /> -->
    
    <BlogDetailsOneBlogDetailsContent :blogDetails="details" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import Navbar from "../../layouts/Navbar.vue";
import Footer from "../../layouts/Footer.vue";






const details = ref<any>({})


const apiUrl = useRuntimeConfig().public.apiBase




const route = useRoute();


  const slug = route.params.id;
  
 
  if (slug) {
    try {
      const { 'data': data } = await useFetch(
        `${apiUrl}/posts/${slug}?populate=*`
      );

      console.log(data.value.data)

      
      details.value = data.value.data
     

     
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  } else {
    console.error("Slug parameter is undefined");
  }

  

  




</script>