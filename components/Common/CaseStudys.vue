<template>
  <div class="container">
    <div class="section-title">
      <h2><span class="sub-title"><img src="~/assets/images/star-icon.png" alt="image" /></span>
        <span style="color:chocolate">Info</span>grafike<span class="overlay"></span>
      </h2>
      <!-- <p> Narativi kroz korišćenje geoprostornih podataka</p> -->
    </div>
    <div class="case-study-area bg-fffbf5">
      <div class="case-study-slides">
        <carousel :items-to-show="1" :autoplay="5000" :settings="settings" :wrapAround="true" v-if="posts">
          <slide v-for="post in posts" :key="post.id">
            <div class="single-case-study-item ptb-100">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-4 col-md-12">
                    <div class="case-study-content">
                      <span class="sub-title">
                        <img src="../../assets/images/star-icon.png" alt="image" />
                        Infografike
                      </span>
                      <h3>{{ post?.attributes?.title }}</h3>
                      <!-- <p>{{ item.description }}</p>
                    <p>{{ item.descriptionTwo }}</p> -->
                      <NuxtLink to="#" class="default-btn">
                        <i class="flaticon-view"></i>
                        <!-- {{ item.btnText }} -->
                        <span></span>
                      </NuxtLink>
                    </div>
                  </div>

                  <div class="col-lg-8 col-md-12">
                    <div class="article-image">
                      <NuxtLink to="#" class="d-block">
                        <img :src="post?.attributes?.image?.data?.attributes?.url" alt="image" />
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </slide>

          <template #addons>
            <navigation>
              <template #next>
                <i class="flaticon-right-1"></i>
              </template>
              <template #prev>
                <i class="flaticon-left-1"></i>
              </template>
            </navigation>
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import axios from "axios";

import "vue3-carousel/dist/carousel.css";



const settings = {
  itemsToShow: 1,
  snapAlign: "center",
}


const posts = ref<any | null>(null);

onMounted(async () => {
  try {
    const response = await axios.get(
      "http://localhost:1337/api/casestudiesitems?populate=*"
    );

    posts.value = response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});


</script>