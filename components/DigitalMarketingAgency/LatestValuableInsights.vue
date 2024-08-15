<template>
    <div class="blog-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <h2><span class="sub-title"><img src="~/assets/images/star-icon.png" alt="image" /></span>
                    <span style="color:chocolate">Priče </span>kroz mape <span style="color: skyblue">|</span> <span
                        style="color:chocolate">Mape </span> kroz priče<span class="overlay"></span>
                </h2>
                <!-- <p> Narativi kroz korišćenje geoprostornih podataka</p> -->
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6" v-for="post in posts">
                    <div class="single-blog-post bg-fffbf5">
                        <div class="post-image">
                            <NuxtLink :to="`geoprice-content/${post?.attributes?.slug}`">
                                <img :src="`${post?.attributes?.image?.data?.attributes?.url}`" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="post-content">
                            <ul class="post-meta d-flex justify-content-between align-items-center">
                                <li>
                                    <div class="post-author d-flex align-items-center">
                                        <!-- <img src="~/assets/images/user1.jpg" class="rounded-circle" alt="image"> -->
                                        <span style="color:chocolate">GEOPRIČE</span> 
                                    </div>
                                </li>
                                <li>
                                    <i class='flaticon-calendar'></i>{{formatPublishedDate(post?.attributes?.publishedAt) }}
                                </li>
                            </ul>
                            <h3>
                                <NuxtLink :to="`geoprice-content/${post?.attributes?.slug}`">{{
                                    post?.attributes?.title }}</NuxtLink>
                            </h3>
                        </div>
                    </div>
                </div>



            </div>
        </div>

        <div class="vector-shape1"><img src="~/assets/images/shape/vector-shape1.png" alt="image"></div>
        <div class="vector-shape2"><img src="~/assets/images/shape/vector-shape2.png" alt="image"></div>
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { useRoute } from "vue-router";

const posts = ref([])

const apiUrl = useRuntimeConfig().public.apiBase


onMounted(async () => {

    try {
        const response = await axios.get(
            `${apiUrl}/posts?populate=*&pagination[limit]=4&sort[0]=createdAt:desc`
        );
        console.log(response.data.data.slice(1, 4))

        posts.value = response.data.data.slice(1, 4);



        console.log('head.value')
        console.log(posts.value)

    } catch (error) {
        console.error("Error fetching data:", error);
    }

});

const formatPublishedDate = (dateString: string) => {
  const options = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    'sr-ME',
    options as Intl.DateTimeFormatOptions
  );
  return formattedDate;
};


</script>