<template>
  <div class="services-details-area ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="services-details-image-slides">
            <carousel
              :items-to-show="1"
              :settings="settings"
              :wrapAround="true"
            >
              <slide v-for="slide in carouselItems" :key="slide.id">
                <div class="single-item">
                  <img :src="slide.image" alt="image" />
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
          <div class="services-details-desc">
            <span class="sub-title">AI & ML Development</span>
            <h3>About this Services</h3>
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
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English. Latin words,
              combined with a handful of model sentence structures, to generate
              Lorem Ipsum which looks reasonable.
            </p>
            <h3>Application Areas</h3>
            <div class="row">
              <div class="col-lg-4 col-sm-6 col-md-6">
                <div class="single-industries-serve-box">
                  <div class="icon">
                    <i class="flaticon-factory"></i>
                  </div>
                  Manufacturing
                </div>
              </div>

              <div class="col-lg-4 col-sm-6 col-md-6">
                <div class="single-industries-serve-box">
                  <div class="icon">
                    <i class="flaticon-hospital"></i>
                  </div>
                  Healthcare
                </div>
              </div>

              <div class="col-lg-4 col-sm-6 col-md-6">
                <div class="single-industries-serve-box">
                  <div class="icon">
                    <i class="flaticon-tracking"></i>
                  </div>
                  Automobile
                </div>
              </div>

              <div class="col-lg-4 col-sm-6 col-md-6">
                <div class="single-industries-serve-box">
                  <div class="icon">
                    <i class="flaticon-investment"></i>
                  </div>
                  Banking
                </div>
              </div>

              <div class="col-lg-4 col-sm-6 col-md-6">
                <div class="single-industries-serve-box">
                  <div class="icon">
                    <i class="flaticon-house"></i>
                  </div>
                  Real Estate
                </div>
              </div>

              <div class="col-lg-4 col-sm-6 col-md-6">
                <div class="single-industries-serve-box">
                  <div class="icon">
                    <i class="flaticon-order"></i>
                  </div>
                  Logistics
                </div>
              </div>
            </div>
            <h3>Technologies That We Use</h3>
            <ul class="technologies-features">
              <li><span>JavaScript</span></li>
              <li><span>Python</span></li>
              <li><span>Java</span></li>
              <li><span>C/CPP</span></li>
              <li><span>PHP</span></li>
              <li><span>Swift</span></li>
              <li><span>C# (C- Sharp)</span></li>
              <li><span>Ruby</span></li>
              <li><span>SQL</span></li>
            </ul>
            <div class="charts-image">
              <img
                src="~/assets/images/services/services-charts.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12">
          <ServiceDetailsOneServicesSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

import image1 from "../../assets/images/services/services-details1.jpg";
import image2 from "../../assets/images/services/services-details2.jpg";

export default defineComponent({
  name: "ServicesDetailsContentTwo",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    carouselItems: [
      {
        id: 1,
        image: image1,
      },
      {
        id: 2,
        image: image2,
      },
    ],
  }),
});
</script>