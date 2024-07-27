<template>
  <div class="row justify-content-center">
    <div
      class="col-lg-4 col-md-6 col-sm-6"
      v-for="solution in solutions"
      :key="solution.id"
    >
      <div class="single-solutions-box">
        <div class="icon">
          <i :class="solution.attributes.icon"></i>
        </div>
        <h3>
          <NuxtLink to="/services-details-one">
            {{ solution.attributes.title }}
          </NuxtLink>
        </h3>
        <p>
          {{ solution.attributes.shortDesc }}
        </p>
        <NuxtLink to="/services-details-one" class="view-details-btn">
          {{ solution.attributes.btnText }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "SolutionsItem",
  setup() {
    const solutions = ref<
      Array<{
        id: number;
        attributes: any;
        icon: string;
        title: string;
        shortDesc: string;
        slug: string;
      }>
    >([]);

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/solutions?populate=deep"
        );
        const { data } = response.data;

        solutions.value = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      solutions,
    };
  },
});
</script>