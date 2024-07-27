<template>
  <div>
    <div class="about-area ptb-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="about-image-box">
              <img src="~/assets/images/about/about5.jpg" alt="image" />

              <div class="box">
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

          <div class="col-lg-6 col-md-12">
            <div class="about-content">
              <div class="content">
                <span class="sub-title">
                  <img src="~/assets/images/star-icon.png" alt="image" />
                  About Us
                </span>
                <h2>Drive Digital Revolution Through Data Science</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <ul class="features-list">
                  <li>
                    <span>
                      <div class="icon">
                        <img src="~/assets/images/icon1.png" alt="image" />
                      </div>
                      <h3>10 Years</h3>
                      <p>On the market</p>
                    </span>
                  </li>

                  <li>
                    <span>
                      <div class="icon">
                        <img src="~/assets/images/icon2.png" alt="image" />
                      </div>
                      <h3>45+</h3>
                      <p>Team members</p>
                    </span>
                  </li>

                  <li>
                    <span>
                      <div class="icon">
                        <img src="~/assets/images/icon1.png" alt="image" />
                      </div>
                      <h3>100%</h3>
                      <p>Satisfaction rate</p>
                    </span>
                  </li>

                  <li>
                    <span>
                      <div class="icon">
                        <img src="~/assets/images/icon1.png" alt="image" />
                      </div>
                      <h3>80%</h3>
                      <p>Senior scientist</p>
                    </span>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
          </div>
        </div>

        <AboutUsOneAboutInnerContent />
      </div>

      <div class="circle-shape1">
        <img src="~/assets/images/shape/circle-shape1.png" alt="image" />
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
  name: "DriveDigitalRevolution",
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