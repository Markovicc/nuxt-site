<template>
  <div>
    <div class="explore-learning-area ptb-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="explore-learning-content">
              <h2>Build Your Data Science Analytics Skills Online</h2>
              <p>
                Want to learn and earn PDUs or CEUs on your schedule — anytime,
                anywhere? Or, pick up a new skill quickly like, project team
                leadership or agile? Browse our most popular online courses.
              </p>
              <NuxtLink to="/courses-grid" class="explore-learing-btn">
                Explore Learing
              </NuxtLink>
            </div>
          </div>

          <div class="col-lg-6 col-md-12">
            <div class="explore-learning-video" data-tilt>
              <img src="~/assets/images/explore-learning.jpg" alt="image" />
              <div
                class="video-btn popup-youtube"
                @click="togglePopup"
                style="cursor: pointer"
              >
                <i class="flaticon-google-play"></i>
              </div>
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
  name: "BuildYourDataScience",
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