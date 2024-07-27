<template>
  <div class="blog-area pt-100 pb-70 bg-fffbf5">
    <div class="container">
      <div class="section-title" v-if="blogs">
        <span class="sub-title">
          <img src="~/assets/images/star-icon.png" alt="image" />
          {{ blogs.subTitle }}
        </span>
        <h2>{{ blogs.heading }}</h2>
        <p>
          {{ blogs.shortDesc }}
        </p>
      </div>

      <CommonBlogItem />
    </div>

    <div class="vector-shape1">
      <img src="~/assets/images/shape/vector-shape1.png" alt="image" />
    </div>
    <div class="vector-shape2">
      <img src="~/assets/images/shape/vector-shape2.png" alt="image" />
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
  name: "LatestValuableInsights",
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
    const blogs = ref<Data | null>(null);

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/blogsectiontitle?populate=deep"
        );
        const {
          data: { attributes },
        } = response.data;

        blogs.value = attributes;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      blogs,
    };
  },
});
</script>