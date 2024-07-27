<template>
  <div class="testimonials-area pt-100 pb-70 bg-f1f8fb">
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

      <div class="row">
        <div
          class="col-lg-6 col-md-6"
          v-for="testimonial in testimonials.testimonialsItem"
          :key="testimonial.id"
        >
          <div class="single-testimonials-item">
            <p>
              {{ testimonial.description }}
            </p>
            <div class="client-info">
              <div class="d-flex justify-content-center align-items-center">
                <img :src="testimonial.image.data.attributes.url" alt="image" />
                <div class="title">
                  <h3>{{ testimonial.name }}</h3>
                  <span>{{ testimonial.designation }}</span>
                </div>
              </div>
            </div>
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