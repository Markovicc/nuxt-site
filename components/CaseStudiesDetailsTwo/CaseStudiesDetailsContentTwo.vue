<template>
  <div>
    <div class="case-studies-details-area ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12">
            <div class="case-studies-details-image">
              <img
                src="~/assets/images/projects/projects-details2.jpg"
                alt="image"
              />

              <div
                class="video-btn popup-youtube"
                @click="togglePopup"
                style="cursor: pointer"
              >
                <i class="flaticon-google-play"></i>
              </div>
            </div>
            <div class="case-studies-details-desc">
              <span class="sub-title">Data Science</span>
              <h3>
                Complete Data Science Training: Mathematics, Statistics, Python,
                Advanced Statistics in Python
              </h3>
              <p>
                Improve Machine Learning algorithms by studying underfitting,
                overfitting, training, validation, n-fold cross validation,
                testing, and how hyperparameters could improve performance.
                Perform linear and logistic regressions in Python.
              </p>
              <div class="row align-items-center">
                <div class="col-lg-6 col-md-6">
                  <div class="image">
                    <img
                      src="~/assets/images/projects/projects2.jpg"
                      alt="image"
                    />
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="content">
                    <h3>Important Facts</h3>
                    <ul>
                      <li>The Field of Data Science</li>
                      <li>The Problem</li>
                      <li>The Solution</li>
                      <li>The Skills</li>
                      <li>Statistics</li>
                      <li>Mathematics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using ‘Content
                here, content here’, making it look like readable English. Latin
                words, combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn’t anything embarrassing
                hidden in the middle of text.
              </p>
              <h3>Results</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna ad aliqua.
                Ut enim ad minim veniam quis nostrud exercitation ullamco
                labori.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-12">
            <div class="case-studies-sidebar-sticky">
              <div class="case-studies-details-info">
                <ul>
                  <li>
                    <div class="icon">
                      <i class="bx bx-user-pin"></i>
                    </div>
                    <span>Client:</span>
                    <a href="https://envytheme.com/" target="_blank">
                      EnvyTheme.com
                    </a>
                    <a href="#" target="_blank">ThemeForest.com</a>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="bx bx-map"></i>
                    </div>
                    <span>Location:</span>
                    New York, USA
                  </li>
                  <li>
                    <div class="icon">
                      <i class="bx bx-purchase-tag"></i>
                    </div>
                    <span>Technologies:</span>
                    Python, Data Science
                  </li>
                  <li>
                    <div class="icon">
                      <i class="bx bx-check"></i>
                    </div>
                    <span>Completed:</span>
                    28 April 2020
                  </li>
                  <li>
                    <div class="icon">
                      <i class="bx bx-globe"></i>
                    </div>
                    <span>Website:</span>
                    <a href="https://envytheme.com/" target="_blank">
                      EnvyTheme.com
                    </a>
                  </li>
                </ul>
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
  name: "CaseStudiesDetailsContentTwo",
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