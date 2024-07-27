<template>
  <div v-if="banner">
    <div class="main-banner">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-12">
            <div class="main-banner-content">
              <h1>{{ banner.heading }}</h1>
              <p>
                {{ banner.shortDesc }}
              </p>
              <div class="btn-box">
                <NuxtLink :to="banner.btnLink" class="default-btn">
                  <i class="flaticon-structure"></i>
                  {{ banner.btnText }}
                  <span></span>
                </NuxtLink>
                <div
                  class="video-btn popup-youtube"
                  @click="togglePopup"
                  style="cursor: pointer"
                >
                  <i class="flaticon-google-play"></i>
                  Watch Video
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7 col-md-12">
            <div class="main-banner-image">
              <img :src="banner.image.data.attributes.url" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="popup-video" v-if="isPopup">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="popup-overlay-close" @click="togglePopup">
            <div class="popup-overlay-close-line"></div>
            <div class="popup-overlay-close-line"></div>
          </div>
          <div class="play-video">
            <iframe :src="banner.videoLink" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

interface Data {
  attributes: any;
  heading: string;
  shortDesc: string;
  btnLink: string;
  btnText: string;
  videoLink: string;
  image: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
}

export default defineComponent({
  name: "MainBanner",
  data() {
    return {
      isPopup: false,
    };
  },
  methods: {
    togglePopup() {
      (this as any).isPopup = !(this as any).isPopup;
    },
  },
  setup() {
    const banner = ref<Data | null>(null);

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/mainbanner?populate=deep"
        );
        const {
          data: { attributes },
        } = response.data;

        banner.value = attributes;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      banner,
    };
  },
});
</script>