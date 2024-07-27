<template>
  <div class="projects-area pb-70">
    <div class="container">
      <div class="section-title">
        <h2>More Projects You Might Like</h2>
      </div>

      <div class="row">
        <div
          class="col-lg-4 col-md-6"
          v-for="studie in studies.slice(0, 3)"
          :key="studie.id"
        >
          <div class="single-projects-box">
            <div class="image">
              <img
                :src="studie.attributes.image.data.attributes.url"
                alt="image"
              />

              <NuxtLink
                :to="`/case-studies-details/${studie.attributes.slug}`"
                class="link-btn"
              >
                <i class="bx bx-plus"></i>
              </NuxtLink>
            </div>

            <div class="content">
              <h3>
                <NuxtLink
                  :to="`/case-studies-details/${studie.attributes.slug}`"
                >
                  {{ studie.attributes.title }}
                </NuxtLink>
              </h3>
              <span>{{ studie.attributes.category }}</span>
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

export default defineComponent({
  name: "MoreProjects",
  setup() {
    const studies = ref<
      Array<{
        id: number;
        attributes: any;
        title: string;
        category: string;
        slug: string;
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
          "http://localhost:1337/api/casestudiesitems?populate=deep"
        );
        const { data } = response.data;

        studies.value = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      studies,
    };
  },
});
</script>