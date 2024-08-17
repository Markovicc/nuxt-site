<template>
    <div class="main-banner" :style="{backgroundImage: `url(${head.attributes?.image?.data?.attributes?.url})`}">
        
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="banner-wrapper-content">
                        <span class="sub-title">Najnovije na sajtu</span>
                        <h1>{{ head?.attributes?.title }}</h1>
                        <p>{{ head?.attributes?.content[0]?.children[0]?.text }}</p>
                        <div class="btn-box">
                            <NuxtLink :to="`geoprice-content/${slug}`" class="default-btn"><i class="flaticon-right"></i>Opširnije<span></span></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <!-- <div class="banner-wrapper-image">
                        <img :src="`${head.attributes?.image?.data?.attributes?.url}`" alt="image">
                    </div> -->
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";

const head = ref({})
const slug = ref("")

const apiUrl = useRuntimeConfig().public.apiBase


onMounted(async () => {
      
        try {
          const response = await axios.get(
            `${apiUrl}/posts?populate=*&pagination[limit]=1&sort[0]=createdAt:desc`
          );
          console.log(response.data.data[0])

          head.value = response.data.data[0];

          slug.value = head.value.attributes.slug

          console.log('head.value')
          console.log(head.value)

        } catch (error) {
          console.error("Error fetching data:", error);
        }
      
     


    
    
      
    });


</script>