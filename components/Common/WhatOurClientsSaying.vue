<template>
  <div class="testimonials-area bg-f1f8fb">
    <div class="container" v-if="testimonials">
      <div class="section-title">
        <span class="sub-title">
          <img src="~/assets/images/star-icon.png" alt="image" />
          {{ testimonials.subTitle }}
        </span>
        <h2>{{ testimonials.heading }}</h2>
        <p>
          {{ testimonials.shortDesc }}
        </p>
      </div>

      <div class="testimonials-slides">
        <carousel
          :autoplay="5000"
          :settings="settings"
          :wrapAround="true"
          :breakpoints="breakpoints"
        >
          <slide
            v-for="testimonial in testimonials.testimonialsItem"
            :key="testimonial.id"
          >
            <div class="single-testimonials-item">
              <p>{{ testimonial.description }}</p>
              <div class="client-info">
                <div class="d-flex justify-content-center align-items-center">
                  <img
                    :src="testimonial.image.data.attributes.url"
                    class="shadow-sm"
                    alt="image"
                  />
                  <div class="title">
                    <h3>{{ testimonial.name }}</h3>
                    <span>{{ testimonial.designation }}</span>
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

      <div class="testimonials-view-btn text-center">
        <NuxtLink :to="testimonials.btnLink" class="default-btn">
          <i class="flaticon-view"></i>
          {{ testimonials.btnText }}
          <span></span>
        </NuxtLink>
      </div>
    </div>

    <div class="shape-img1">
      <img src="../../assets/images/shape/shape1.svg" alt="image" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import axios from "axios";

import "vue3-carousel/dist/carousel.css";

interface Data {
  attributes: any;
  subTitle: string;
  heading: string;
  shortDesc: string;
  btnLink: string;
  btnText: string;
  testimonialsItem: {
    id: number;
    name: string;
    designation: string;
    description: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
  }[];
}

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
  setup() {
    const testimonials = ref<Data | null>(null);

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/testimonial?populate=deep"
        );
        const {
          data: { attributes },
        } = response.data;

        testimonials.value = attributes;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      testimonials,
    };
  },
});
</script>