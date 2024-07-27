<template>
  <div class="testimonials-area bg-23173a ptb-100">
    <div class="container">
      <div class="section-title">
        <h2>What Our Clients are Saying?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>

      <div class="testimonials-slides">
        <carousel
          :autoplay="5000"
          :settings="settings"
          :wrapAround="true"
          :breakpoints="breakpoints"
        >
          <slide v-for="slide in carouselItems" :key="slide.id">
            <div class="single-testimonials-box bg-fafafb">
              <img :src="slide.image" class="shadow-sm" alt="image" />
              <p>{{ slide.desc }}</p>
              <div class="client-info">
                <h3>{{ slide.name }}</h3>
                <span>{{ slide.position }}</span>
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

      <div class="testimonials-view-btn text-center">
        <NuxtLink to="/testimonials" class="default-btn">
          <i class="flaticon-view"></i>
          Check Out All Reviews<span></span>
        </NuxtLink>
      </div>
    </div>

    <div class="vector-shape9">
      <img src="../../assets/images/shape/vector-shape9.png" alt="image" />
    </div>
    <div class="vector-shape10">
      <img src="../../assets/images/shape/vector-shape10.png" alt="image" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

import image1 from "../../assets/images/testimonials/testimonials1.jpg";
import image2 from "../../assets/images/testimonials/testimonials2.jpg";
import image3 from "../../assets/images/testimonials/testimonials3.jpg";

export default defineComponent({
  name: "WhatOurClientsSaying",
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
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        name: "Alex Maxwell",
        position: "CEO at EnvyTheme",
      },
      {
        id: 2,
        image: image2,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        name: "David Warner",
        position: "CEO at Envato",
      },
      {
        id: 3,
        image: image3,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        name: "Sarah Taylor",
        position: "CEO at ThemeForest",
      },
      {
        id: 4,
        image: image1,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        name: "Alex Maxwell",
        position: "CEO at EnvyTheme",
      },
      {
        id: 5,
        image: image2,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        name: "David Warner",
        position: "CEO at Envato",
      },
      {
        id: 6,
        image: image3,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        name: "Sarah Taylor",
        position: "CEO at ThemeForest",
      },
    ],
    breakpoints: {
      0: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      768: {
        itemsToShow: 2,
        snapAlign: "left",
      },
      1024: {
        itemsToShow: 2,
        snapAlign: "left",
      },
    },
  }),
});
</script>