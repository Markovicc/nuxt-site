<template>
  <div class="project-start-area ptb-100">
    <div class="container">
      <div class="row align-items-center" v-if="weliketo">
        <div class="col-lg-6 col-md-12">
          <div class="project-start-image">
            <img :src="weliketo.image.data.attributes.url" alt="image" />
          </div>
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="project-start-content">
            <h2>{{ weliketo.heading }}</h2>
            <p>
              {{ weliketo.shortDesc }}
            </p>
            <NuxtLink :to="weliketo.btnLink" class="default-btn">
              <i class="flaticon-web"></i>
              {{ weliketo.btnText }}
              <span></span>
            </NuxtLink>
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
  heading: string;
  shortDesc: string;
  btnLink: string;
  btnText: string;
  image: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
}

export default defineComponent({
  name: "WeLikeToStart",
  setup() {
    const weliketo = ref<Data | null>(null);

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/weliketostart?populate=deep"
        );
        const {
          data: { attributes },
        } = response.data;

        weliketo.value = attributes;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      weliketo,
    };
  },
});
</script>