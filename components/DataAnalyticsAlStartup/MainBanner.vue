<template>
  <div>
    <div class="banner-section">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-12">
            <div class="banner-content">
              <h1>Data Analytics Consulting Services</h1>
              <p>
                World leading reliable research & AI based Data Analytics
                solutions for Big Data companies and consumer business products.
                Drive your success without stress!
              </p>
              <div class="btn-box">
                <NuxtLink to="/about-us-one" class="default-btn">
                  <i class="flaticon-right"></i>
                  About Us
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
            <div class="banner-image">
              <img
                src="~/assets/images/main-banner/banner-two/banner-two-main-pic.png"
                alt="image"
              />
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

<script lang="ts">
import { defineComponent } from "vue";

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
});
</script>