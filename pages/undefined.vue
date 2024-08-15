<template>
    <div>
      <Navbar />
      <CommonPageTitle pageTitle="Tražena stranica ne postoji"/>
     
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