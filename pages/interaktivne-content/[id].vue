<template>
    <div>
        <Navbar />
        <!-- <CommonPageTitle :pageTitle="details?.attributes?.title" /> -->
        <BlogDetailsTwoBlogDetailsContentTwo :blogDetails="details" />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref, } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import Navbar from "../../layouts/Navbar.vue";
import Footer from "../../layouts/Footer.vue";



const apiUrl = useRuntimeConfig().public.apiBase

const details = ref<any>({})

const route = useRoute();

    const slug = route.params.id;
    console.log(slug)
    if (slug) {
        try {
            const {'data': data } = await useFetch(
                `${apiUrl}/interaktivs/${slug}?populate=*`
            );

            details.value = data.value.data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    } else {
        console.error("Slug parameter is undefined");
    }

    console.log('details.value')


    console.log(details.value)








</script>