<template>
 
  <div :class="['navbar-area', { 'is-sticky': isSticky }]">
    <div class="parix-nav">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-md navbar-light">
          <NuxtLink class="navbar-brand" to="/">
            <img v-if="logo" :src="logo.image.data.attributes.url" alt="Logo" />
          </NuxtLink>

          <b-navbar-toggle target="navbarSupportedContent">
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
          </b-navbar-toggle>

          <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
            <ul class="navbar-nav">
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link" exact> Naslovna </NuxtLink>
              </li>

              
              <li class="nav-item">
                <NuxtLink to="/geoprice" class="nav-link">
                  Geopriče
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/interaktivne" class="nav-link">
                  Interaktivne grafike </NuxtLink>
              </li>

              <li class="nav-item">
                <NuxtLink to="/infografike" class="nav-link">
                  Infografike
                </NuxtLink>
              </li>



            </ul>
          </b-collapse>

          <div class="others-option d-flex align-items-center">
            
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

const apiUrl = useRuntimeConfig().public.apiBase


    const isSticky = ref<any>(false);
    const logo = ref<any>(null);

    onMounted(async () => {
      window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;
        isSticky.value = scrollPos >= 100;
      });

      try {
        const response = await axios.get(
          `${apiUrl}/sitelogo?populate=*`
        );
        const {
          data: { attributes },
        } = response.data;

        logo.value = attributes;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

 
</script>