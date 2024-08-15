<template>
    <div class="blog-area ptb-100">
        <div class="container">
            <div class="row align-items center">


                <div class="col-lg-10 offset-lg-1  col-md-12  " v-for="post in posts.data">
                    <div class="single-blog-post bg-fffbf5">
                        <div class="post-image">
                            <NuxtLink  to="/infografike">
                                <img :src="`${post?.image}`" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="post-content">
                            <ul class="post-meta d-flex justify-content-between align-items-center">
                                <li>
                                    <!-- <div class="post-author d-flex align-items-center">
                                        <img :src="`${post.authorImage}`" class="rounded-circle" alt="image">
                                        <span>{{ post.author }}</span>
                                    </div> -->
                                </li>
                                <li>
                                    <i class='flaticon-calendar'></i> {{ formatPublishedDate(post?.published) }}
                                </li>
                            </ul>
                            <h3><NuxtLink to="/infografike">{{ post?.title }}</NuxtLink></h3>
                        </div>
                    </div>
                </div>


                

                

                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
  posts: {
    type: Object,
    required: true,
  },
});
const { posts } = props;

const formatPublishedDate = (dateString: string) => {
  const options = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
   'sr-ME',
    options as Intl.DateTimeFormatOptions
  );
  return formattedDate;
};



</script>