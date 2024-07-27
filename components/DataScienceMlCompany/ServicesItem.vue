<template>
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

    <div class="col-lg-12 col-md-12">
      <div class="load-more-btn text-center">
        <NuxtLink to="/services-two" class="default-btn">
          <i class="flaticon-refresh"></i>
          Load More
          <span></span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "ServicesItem",
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