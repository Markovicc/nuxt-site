<template>
  <div class="process-area pb-70">
    <div class="container" v-if="datascience">
      <div class="section-title">
        <span class="sub-title">
          <img src="~/assets/images/star-icon.png" alt="image" />
          {{ datascience.subTitle }}
        </span>
        <h2>{{ datascience.heading }}</h2>
        <p>
          {{ datascience.shortDesc }}
        </p>
      </div>

      <div class="row">
        <div
          class="col-lg-4 col-md-6"
          v-for="proces in datascience.process"
          :key="proces.id"
        >
          <div class="single-process-box">
            <div class="number">
              {{ proces.id }}
            </div>
            <div class="image">
              <img :src="proces.image.data.attributes.url" alt="image" />
            </div>
            <h3>{{ proces.title }}</h3>
            <p>
              {{ proces.shortDesc }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="circle-shape1">
      <img src="~/assets/images/shape/circle-shape1.png" alt="image" />
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
  process: {
    id: number;
    title: string;
    shortDesc: string;
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
  name: "TheDataScience",
  setup() {
    const datascience = ref<Data | null>(null);

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/datascienceprocess?populate=deep"
        );
        const {
          data: { attributes },
        } = response.data;

        datascience.value = attributes;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      datascience,
    };
  },
});
</script>