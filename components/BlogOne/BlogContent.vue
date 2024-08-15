<template>
    <div class="blog-area ptb-100">
        <div class="container">
            <div class="row">


                <div class="col-lg-6 col-md-6" v-for="post in posts.data">
                    <div class="single-blog-post bg-fffbf5">
                        <div class="post-image">
                            <NuxtLink :to="`geoprice-content/${post.slug}`">
                                <img :src="`${post.image}`" alt="image">
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
                                    <i class='flaticon-calendar'></i> {{ formatPublishedDate(post.published) }}
                                </li>
                            </ul>
                            <h3>
                                <NuxtLink :to="`geoprice-content/${post.slug}`">{{ post.title }}</NuxtLink>
                            </h3>
                        </div>
                    </div>
                </div>

                


                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area text-center">
                        <!-- <a href="#" class="prev page-numbers"><i class='bx bx-chevrons-left'></i></a>
                        <span class="page-numbers current" aria-current="page">1</span>
                        <a href="#" class="page-numbers">2</a>
                        <a href="#" class="page-numbers">3</a>
                        <a href="#" class="page-numbers">4</a>
                        <a href="#" class="next page-numbers"><i class='bx bx-chevrons-right'></i></a> -->
                    
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

    // postsCount: {
    //     type: Number,
    //     required: true
    // }

});


const posts = props.posts
console.log('posts_from_props')
console.log(posts)


const formatPublishedDate = (dateString: string) => {
    const options = { month: "short", day: "numeric", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
        'sr-ME',
        options as Intl.DateTimeFormatOptions
    );
    return formattedDate;
};


</script>

<style>
.pagination-container {
    display: flex;

    column-gap: 10px;
}

.paginate-buttons {
    height: 40px;

    width: 40px;

    border-radius: 20px;

    cursor: pointer;

    background-color: rgb(242, 242, 242);

    border: 1px solid rgb(217, 217, 217);

    color: black;
}

.paginate-buttons:hover {
    background-color: #d8d8d8;
}

.active-page {
    background-color: #3498db;

    border: 1px solid #3498db;

    color: white;
}

.active-page:hover {
    background-color: #2988c8;
}


</style>