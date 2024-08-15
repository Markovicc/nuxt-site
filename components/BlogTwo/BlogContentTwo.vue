<template>
  <div class="blog-area ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="blog in blogs" :key="blog.id">
          <div class="single-blog-post bg-fffbf5">
            <div class="post-image">
              <NuxtLink to="#">
                <img
                  :src="blog.attributes.image.data.attributes.url"
                  alt="image"
                />
              </NuxtLink>
            </div>

            <div class="post-content">
              <ul
                class="post-meta d-flex justify-content-between align-items-center"
              >
                <!-- <li>
                  <div class="post-author d-flex align-items-center">
                    <img
                      :src="blog.attributes.authorImage.data.attributes.url"
                      class="rounded-circle"
                      alt="image"
                    />
                    <span>{{ blog.attributes.authorName }}</span>
                  </div>
                </li> -->
                <li>
                  <i class="flaticon-calendar"></i>
                  {{ formatPublishedDate(blog.attributes.publishedAt) }}
                </li>
              </ul>
              <h3>
                <NuxtLink :to="`/blog-details-two/${blog.attributes.slug}`">
                  {{ blog.attributes.title }}
                </NuxtLink>
              </h3>
            </div>
          </div>
        </div>

        <div class="col-lg-12 col-md-12">
          <div class="pagination-area text-center">
            <a href="#" class="prev page-numbers">
              <i class="bx bx-chevrons-left"></i>
            </a>
            <span class="page-numbers current" aria-current="page">1</span>
            <a href="#" class="page-numbers">2</a>
            <a href="#" class="page-numbers">3</a>
            <a href="#" class="page-numbers">4</a>
            <a href="#" class="next page-numbers">
              <i class="bx bx-chevrons-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>   

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "BlogContentTwo",
  setup() {
    const blogs = ref<
      Array<{
        id: number;
        attributes: any;
        title: string;
        authorName: string;
        slug: string;
        image: {
          data: {
            attributes: {
              url: string;
            };
          }[];
        };
        authorImage: {
          data: {
            attributes: {
              url: string;
            };
          }[];
        };
      }>
    >([]);

    const formatPublishedDate = (dateString: string) => {
      const options = { month: "short", day: "numeric", year: "numeric" };
      const formattedDate = new Date(dateString).toLocaleDateString(
        undefined,
        options as Intl.DateTimeFormatOptions
      );
      return formattedDate;
    };

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/blogs?populate=deep"
        );
        const { data } = response.data;

        blogs.value = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      blogs,
      formatPublishedDate,
    };
  },
});
</script>