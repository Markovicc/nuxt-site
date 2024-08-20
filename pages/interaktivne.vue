<template>
    <div>
      <Navbar />
      <CommonPageTitle pageTitle="Interaktivne grafike" />
      <InteraktivneContent :posts="posts" />
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
  
  import { defineComponent, onMounted, ref } from "vue";
  import axios from "axios";
  import { useRoute } from "vue-router";
  import Navbar from "../layouts/Navbar.vue";
  import Footer from "../layouts/Footer.vue";
  
  
  
  const apiUrl = useRuntimeConfig().public.apiBase
  
  
const posts = ref<any>({});
const postsCount = ref<any>(0)

const route = useRoute();


const serverCall = async () => 
{
  try {
    const {'data': data } = await useFetch(
      `${apiUrl}/interaktivs?populate=*&pagination[pageSize]=10&pagination[page]=${currentPage.value}`
    );

    postsCount.value = data.value.data.meta.pagination.total

    const titles =data.value.data

    const postApi = <any>[]



  
    titles.forEach((obj: any) =>


      postApi.push(
        {
          title: obj.attributes.title,
          slug: obj.attributes.slug,
          published: obj.attributes.publishedAt,
          image: obj?.attributes?.image?.data[0]?.attributes?.url

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
  

  




};



const currentPage = ref(1);




onMounted( () => {
  const slug = route.params.id;

serverCall()
  


});

  
  
  </script>