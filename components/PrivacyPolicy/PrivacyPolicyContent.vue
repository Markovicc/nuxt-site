<template>
  <div class="privacy-policy-area ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="privacy-policy-content" v-if="privacy">
            <img :src="privacy.image.data.attributes.url" alt="image" />
            <span v-html="privacy.richText"></span>
          </div>
        </div>

        <div class="col-lg-4 col-md-12">
          <PrivacyPolicySidebar />
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
  name: "PrivacyPolicyContent",
  setup() {
    const privacy = ref<Data | null>(null);

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/privacypolicy?populate=deep"
        );
        const {
          data: { attributes },
        } = response.data;

        privacy.value = attributes;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      privacy,
    };
  },
});
</script>