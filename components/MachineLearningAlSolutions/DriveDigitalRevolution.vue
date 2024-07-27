<template>
  <div class="section-title">
    <h2><span class="sub-title"><img src="~/assets/images/star-icon.png" alt="image" /></span
                ><span style="color:chocolate"> Interaktivne </span>grafike<span class="overlay"></span></h2>
    
                <!-- <p> Narativi kroz korišćenje geoprostornih podataka</p> -->
            </div>
  <div>
    <div class="about-area pb-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-12">
            <div class="about-image-box">
              <!-- <img src="~/assets/images/about/about5.jpg" alt="image" /> -->
              <iframe src='https://flo.uri.sh/visualisation/18196633/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/18196633/?utm_source=embed&utm_campaign=visualisation/18196633' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

              <!-- <div class="box">
                <div
                  class="video-btn popup-youtube"
                  @click="togglePopup"
                  style="cursor: pointer"
                >
                  <i class="flaticon-google-play"></i>
                  Watch Video
                </div>
              </div> -->
            </div>
          </div>

          <div class="col-lg-4 col-md-12">
            <div class="about-content">
              <div class="content">
                <span class="sub-title"
                  ><img src="~/assets/images/star-icon.png" alt="image" /> Interaktivne grafike</span
                >
                <h2>Drive Digital Revolution Through Data Science</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <!-- <ul class="features-list">
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
                </ul> -->
                <!-- <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p> -->
                <NuxtLink to="/interaktivne" class="default-btn"
                  ><i class="flaticon-right"></i>Pogledajte još<span></span
                ></NuxtLink>
              </div>
            </div>
          </div>
        </div>
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
            <iframe src='https://flo.uri.sh/visualisation/18196633/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/18196633/?utm_source=embed&utm_campaign=visualisation/18196633' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>
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