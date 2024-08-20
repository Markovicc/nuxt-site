<template>
  <div>
    <Navbar />
    <CommonPageTitle pageTitle="Geopriče" />
    <BlogOneBlogContent :posts="posts" />
    <div class="col-lg-12 col-md-12">
      <div class="pagination-area text-center">
        <vue-awesome-paginate :total-items="postsCount" :items-per-page="10" :max-pages-shown="5" v-model="currentPage"
          @click="onClickHandler" />
      </div>

    </div>


    <Footer />
  </div>
</template>

<script setup lang="ts">

import { defineComponent, onMounted, ref, watch } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import Navbar from "../layouts/Navbar.vue";
import Footer from "../layouts/Footer.vue";


const posts = ref<any>({});
const postsCount = ref<any>(0)

const apiUrl = useRuntimeConfig().public.apiBase

const route = useRoute();


const serverCall = async () => 
{
  try {
    const response = await axios.get(
      `${apiUrl}/posts?populate=*&sort[0]=createdAt:desc&pagination[pageSize]=10&pagination[page]=${currentPage.value}`
    );

    postsCount.value = response.data.meta.pagination.total

    console.log('postsCount.value')
    console.log(postsCount.value)

    const titles = response.data.data

    const postApi = <any>[]



  
    titles.forEach((obj: any) =>


      postApi.push(
        {
          title: obj.attributes.title,
          slug: obj.attributes.slug,
          author: obj.attributes.author,
          published: obj.attributes.publishedAt,
          image: obj.attributes.image.data.attributes.url

        }
      ));

      posts.value.data = postApi


    // console.log('response.data.meta.pagination.total')

    // console.log(response.data.meta.pagination.total)


  } catch (error) {
    console.error("Error fetching data:", error);
  }

}

const onClickHandler = () => {
  console.log(currentPage.value);
  serverCall()
  
  console.log('posts')
  console.log(posts.value)



  




};



const currentPage = ref(1);




onMounted( () => {
  const slug = route.params.id;

serverCall()
  


});





</script>
