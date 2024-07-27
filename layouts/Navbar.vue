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
                <NuxtLink to="/about-us-one" class="nav-link">
                  O sajtu
                </NuxtLink>
              </li>

              <li class="nav-item">
                <NuxtLink to="/blog-one" class="nav-link">
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
            <!-- <div class="option-item">
              <form class="search-box">
                <input type="text" class="input-search" placeholder="Pretraga" />
                <button type="submit"><i class="flaticon-loupe"></i></button>
              </form>
            </div> -->

            <!-- <div class="option-item">
              <NuxtLink to="/contact" class="default-btn">
                <i class="flaticon-right"></i>
                Get Started
                <span></span>
              </NuxtLink>
            </div> -->
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

interface LogoData {
  image: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
}

export default defineComponent({
  name: "Navbar",
  data() {
    return {
      isSticky: false,
    };
  },
  setup() {
    const isSticky = ref(false);
    const logo = ref<LogoData | null>(null);

    onMounted(async () => {
      window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;
        isSticky.value = scrollPos >= 100;
      });

      try {
        const response = await axios.get(
          "http://localhost:1337/api/sitelogo?populate=deep"
        );
        const {
          data: { attributes },
        } = response.data;

        logo.value = attributes;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      isSticky,
      logo,
    };
  },
});
</script>