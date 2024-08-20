<template>
  <div class="section-title">
    <h2><span class="sub-title"><img src="~/assets/images/star-icon.png" alt="image" /></span><span
        style="color:chocolate"> Interaktivne </span>mape i grafike<span class="overlay"></span></h2>

    <!-- <p> Narativi kroz korišćenje geoprostornih podataka</p> -->
  </div>
  <div>
    <div class="about-area pb-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-12"> 
            <div class="about-image-box" v-if="head?.attributes?.iframe[0]?.code" v-html="head?.attributes?.iframe[0]?.code">
            </div>

            <div class="about-image-box" v-if="head?.attributes?.iframe[0]?.script">
                <IFrameCompTwoFrameZonesTwo :zone="head?.attributes?.iframe[0]" />
            </div>
          

          </div>

          <div class="col-lg-4 col-md-12">
            <div class="about-content">
              <div class="content">
                <span class="sub-title"><img src="~/assets/images/star-icon.png" alt="image" /> Interaktivne
                  grafike</span>
                
                <NuxtLink to="/interaktivne" class="default-btn"><i class="flaticon-right"></i>Pogledajte
                  još<span></span></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="circle-shape1">
        <img src="~/assets/images/shape/circle-shape1.png" alt="image" />
      </div>
    </div>


  </div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";

const head = ref({})

const apiUrl = useRuntimeConfig().public.apiBase




  try {
    const {'data': data } = await useFetch(
      `${apiUrl}/interaktivs?populate=*&pagination[limit]=1&sort[0]=createdAt:desc`
    );
    
    head.value = data.value.data[0];
   

  } catch (error) {
    console.error("Error fetching data:", error);
  }
 
  




</script>