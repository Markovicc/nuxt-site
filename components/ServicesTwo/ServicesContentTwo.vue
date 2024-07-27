<template>
  <div class="services-area pt-100 pb-70 bg-f1f8fb">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-6"
          v-for="service in services"
          :key="service.id"
        >
          <div class="single-services-box">
            <div class="icon">
              <img
                :src="service.attributes.iconImage.data.attributes.url"
                alt="image"
              />
            </div>
            <h3>
              <NuxtLink :to="`/services-details/${service.attributes.slug}`">
                {{ service.attributes.title }}
              </NuxtLink>
            </h3>
            <p>
              {{ service.attributes.shortDesc }}
            </p>
            <NuxtLink
              :to="`/services-details/${service.attributes.slug}`"
              class="read-more-btn"
            >
              Read More
              <i class="flaticon-right"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="circle-shape2">
      <img src="../../assets/images/shape/circle-shape2.png" alt="image" />
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

export default defineComponent({
  name: "ServicesContentTwo",
  setup() {
    const services = ref<
      Array<{
        id: number;
        attributes: any;
        title: string;
        shortDesc: string;
        slug: string;
        iconImage: {
          data: {
            attributes: {
              url: string;
            };
          }[];
        };
      }>
    >([]);

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/services?populate=deep"
        );
        const { data } = response.data;

        services.value = data;
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