<template>
  <div class="solutions-area pb-70">
    <div class="container">
      <div class="section-title" v-if="solutions">
        <span class="sub-title">
          <img src="~/assets/images/star-icon.png" alt="image" />
          {{ solutions.subTitle }}
        </span>
        <h2>{{ solutions.heading }}</h2>
        <p>
          {{ solutions.shortDesc }}
        </p>
      </div>

      <DataScienceMlCompanySolutionsItem />
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
  data() {
    return {
      isPopup: false,
    };
  },
  methods: {
    togglePopup() {
      (this as any).isPopup = !(this as any).isPopup;
    },
  },
  setup() {
    const solutions = ref<Data | null>(null);

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/solutionssectiontitle?populate=deep"
        );
        const {
          data: { attributes },
        } = response.data;

        solutions.value = attributes;
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