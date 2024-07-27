<template>
  <div class="partner-area pt-100 pb-70">
    <div class="container">
      <div class="row align-items-center">
        <div
          class="col-lg-2 col-6 col-sm-4 col-md-4"
          v-for="partner in partners"
          :key="partner.id"
        >
          <div class="single-partner-item">
            <img
              :src="partner.attributes.image.data.attributes.url"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "PartnerContent",
  setup() {
    const partners = ref<
      Array<{
        id: number;
        image: {
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
          "http://localhost:1337/api/partners?populate=deep"
        );
        const { data } = response.data;

        partners.value = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      partners,
    };
  },
});
</script>