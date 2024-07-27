<template>
  <div class="privacy-policy-area ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="privacy-policy-content" v-if="terms">
            <img :src="terms.image.data.attributes.url" alt="image" />
            <span v-html="terms.richText"></span>
          </div>
        </div>

        <div class="col-lg-4 col-md-12">
          <TermsOfServiceSidebar />
        </div>
      </div>
    </div>
  </div>
</template>   

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

interface Data {
  attributes: any;
  richText: string;
  image: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
}

export default defineComponent({
  name: "TermsOfServiceContent",
  setup() {
    const terms = ref<Data | null>(null);

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/termsofservice?populate=deep"
        );
        const {
          data: { attributes },
        } = response.data;

        terms.value = attributes;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      terms,
    };
  },
});
</script>