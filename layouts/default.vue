<template>
  <div>
    <Preloader v-if="isLoading" />
    <NuxtPage />
    <GoTop />
    <AiChatWidget />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Preloader from "./Preloader.vue";
import GoTop from "./GoTop.vue";
import AiChatWidget from "../components/AiChatbot/AiChatWidget.vue";

export default defineComponent({
  components: {
    Preloader,
    GoTop,
    AiChatWidget,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
});
</script>