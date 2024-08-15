<template>
  <footer class="footer-area bg-color">
    <div class="container">
      <div class="row" v-if="footer">
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <NuxtLink to="/" class="logo">
              <img :src="footer.image.data.attributes.url" alt="logo" />
            </NuxtLink>
            <p>
              {{ footer.shortDesc }}
            </p>
            <ul class="social-link">
              <li v-for="social in footer.socialLink" :key="social.id">
                <a :href="social.link" class="d-block" target="_blank">
                  <i :class="social.icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="single-footer-widget pl-5">
            <h3>{{ footer.title }}</h3>
            <ul class="footer-links-list">
              <li v-for="list in footer.linksList" :key="list.id">
                <NuxtLink :to="list.link">
                  {{ list.title }}
                </NuxtLink>
             </li>
            </ul>
          </div>
        </div>

        
      </div>

      <div class="footer-bottom-area">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <p>
              <i class="bx bx-copyright"></i>2024
              <strong>karto.rs</strong> 
              <!-- <a target="_blank" href="https://envytheme.com/">EnvyTheme</a> -->
            </p>
          </div>

          <div class="col-lg-6 col-md-6">
            
          </div>
        </div>
      </div>
    </div>

    <div class="footer-map">
      <img src="~/assets/images/footer-map.png" alt="image" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
const apiUrl = useRuntimeConfig().public.apiBase

    const footer = ref<any>(null);

    onMounted(async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/footer?populate=*`
        );
        const {
          data: { attributes },
        } = response.data;

        footer.value = attributes;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

   
  

</script>