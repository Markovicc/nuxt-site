<template>
  <div>
    <Navbar />
    <CommonPageTitle pageTitle="Blog Grid (2 in Row)" />
    <BlogOneBlogContent :posts="posts" />
    <Footer />
  </div>
</template>

<script setup lang="ts">

import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import Navbar from "../layouts/Navbar.vue";
import Footer from "../layouts/Footer.vue";


    const posts = ref<any>([]);
    const route = useRoute();

    onMounted(async () => {
      const slug = route.params.id;
      
        try {
          const response = await axios.get(
            `http://localhost:1337/api/posts?populate=*`
          );
          

          const titles = response.data.data

          titles.forEach((obj: any) =>  posts.value.push(
            {title: obj.attributes.title,
             slug: obj.attributes.slug,
             author: obj.attributes.author,
             published: obj.attributes.publishedAt,
             image: obj.attributes.image.data.attributes.url
             
             }
            ));

          console.log('test_fetch')
          

        } catch (error) {
          console.error("Error fetching data:", error);
        }
      
    });

   
    

</script>