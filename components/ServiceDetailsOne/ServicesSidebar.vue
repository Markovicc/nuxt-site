<template>
  <div class="services-details-info">
    <ul class="services-list">
      <li v-for="service in services.slice(0, 5)" :key="service.id">
        <NuxtLink :to="`/services-details/${service.attributes.slug}`">
          {{ service.attributes.title }}
        </NuxtLink>
      </li>
    </ul>

    <div class="download-file">
      <h3>Brochures</h3>

      <ul>
        <li>
          <a href="#">PDF Download <i class="bx bxs-file-pdf"></i></a>
        </li>
        <li>
          <a href="#">Services Details.txt <i class="bx bxs-file-txt"></i></a>
        </li>
      </ul>
    </div>

    <div class="services-contact-info">
      <h3>Contact Info</h3>

      <ul>
        <li>
          <div class="icon">
            <i class="bx bx-user-pin"></i>
          </div>
          <span>Phone:</span>
          <a href="tel:+21453545413" target="_blank">+2145 354 5413</a>
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
            <i class="bx bx-envelope"></i>
          </div>
          <span>Email:</span>
          <a href="mailto:hello@parix.com">hello@parix.com</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "ServicesSidebar",
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