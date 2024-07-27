<template>
  <div class="services-area ptb-100 bg-f1f8fb">
    <div class="container">
      <div class="section-title" v-if="services">
        <span class="sub-title">
          <img src="~/assets/images/star-icon.png" alt="image" />
          {{ services.subTitle }}
        </span>
        <h2>{{ services.heading }}</h2>
        <p>
          {{ services.shortDesc }}
        </p>
      </div>

      <DataScienceMlCompanyServicesItem />
    </div>

    <div class="circle-shape2">
      <img src="~/assets/images/shape/circle-shape2.png" alt="image" />
    </div>
    <div class="lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
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
}

export default defineComponent({
  name: "WeDifferentFrom",
  setup() {
    const services = ref<Data | null>(null);

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/servicessectiontitle?populate=deep"
        );
        const {
          data: { attributes },
        } = response.data;

        services.value = attributes;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      services,
    };
  },
});
</script>