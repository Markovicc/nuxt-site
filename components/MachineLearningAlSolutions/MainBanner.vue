<template>
  <div>
    <div class="home-slides">
      <carousel
        :items-to-show="1"
        :autoplay="9000"
        :settings="settings"
        :wrapAround="true"
      >
        <slide v-for="slide in carouselItems" :key="slide.id">
          <div class="main-banner-item item-bg1">
            <div class="d-table">
              <div class="d-table-cell">
                <div class="container">
                  <div class="banner-item-content">
                    <span class="sub-title">{{ slide.subTitle }}</span>
                    <h1>{{ slide.heading }}</h1>
                    <p>{{ slide.desc }}</p>
                    <div class="btn-box">
                      <NuxtLink to="/about-us-four" class="default-btn">
                        <i class="flaticon-right"></i>
                        About Us
                        <span></span>
                      </NuxtLink>
                      <div
                        class="video-btn"
                        @click="togglePopup"
                        style="cursor: pointer"
                      >
                        <i class="flaticon-google-play"></i>
                        Watch Video
                      </div>
                    </div>
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

    <div class="popup-video" v-if="isPopup">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="popup-overlay-close" @click="togglePopup">
            <div class="popup-overlay-close-line"></div>
            <div class="popup-overlay-close-line"></div>
          </div>
          <div class="play-video">
            <iframe
              src="https://www.youtube.com/embed/g1WG4D0Aiek"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "MainBanner",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    isPopup: false,
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    carouselItems: [
      {
        id: 1,
        class: "main-banner-item item-bg1",
        subTitle: "Welcome",
        heading: "Modern Machine Learning Solutions!",
        desc: "We add values to our clients business by utilizing our expertise and experience on AI based Machine Learning Soltions. Our learning drives us to success!",
      },
      {
        id: 2,
        class: "main-banner-item item-bg2",
        subTitle: "Welcome",
        heading: "AI Based Modern Business Solutions",
        desc: "We add values to our clients business by utilizing our expertise and experience on AI based Machine Learning Soltions. Our learning drives us to success!",
      },
    ],
  }),
  methods: {
    togglePopup() {
      this.isPopup = !this.isPopup;
    },
  },
});
</script>