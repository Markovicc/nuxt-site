<template>
  <div>
    <Navbar />
    <CommonPageTitle pageTitle="About Us" />
    <AboutUsOneDriveDigitalRevolution />
    <AboutUsOneHistoryBeginsIn />
    <AboutUsOneWhyChooseUs />
    <AboutUsOneTheDataScience class="pt-0" />
    <CommonWhatOurClientsSaying />
    <AboutUsOnePartner />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../layouts/Navbar.vue";
import Footer from "../layouts/Footer.vue";

export default defineComponent({
  components: {
    Navbar,
    Footer,
  },
});
</script>

