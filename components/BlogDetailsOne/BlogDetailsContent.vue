<template>
  <div class="blog-details-area ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 ">
          <div class="blog-details-desc">
            <div class="article-image">
              <img :src="details?.attributes?.image?.data?.attributes?.url" alt="image" />
            </div>

            <div class="article-content">
              <div class="entry-meta">
                <ul>
                  <!-- <li>
                    <img
                      :src="
                        details?.attributes?.authorImage?.data?.attributes?.url
                      "
                      class="rounded-circle"
                      alt="image"
                    />
                    <span>Author</span>
                    <NuxtLink to="/blog-two">
                      {{ details?.attributes?.Author }}
                    </NuxtLink>
                  </li> -->
                  <li>
                    <i class="bx bx-calendar"></i>
                    <span>Objavljeno</span>
                    <a>
                      {{
                formatPublishedDate(details?.attributes?.publishedAt)
              }}
                    </a>
                  </li>
                </ul>
              </div>

              <h3>{{ details?.attributes?.title }}</h3>
              <!-- <StrapiBlocks v-if="details" :content="details?.attributes?.content" /> -->

              <VNode />

              <div class="article-image" v-html="details?.attributes?.iframeZone[0].code">


              </div>


              <!-- <span v-html="details?.attributes?.richText"></span> -->
            </div>

            <div class="article-footer">
              <div class="article-tags">
                <span><i class="bx bx-purchase-tag"></i></span>

                <a v-for="tag in details?.attributes?.tags?.data" href="#">{{ tag.attributes.name }}<span></span></a>
              </div>

              <div class="article-share">
                <ul class="social">
                  <li><span>Share:</span></li>
                  <li>
                    <a href="#" class="facebook" target="_blank"><i class="bx bxl-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#" class="twitter" target="_blank"><i class="bx bxl-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#" class="linkedin" target="_blank"><i class="bx bxl-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="#" class="instagram" target="_blank"><i class="bx bxl-instagram"></i></a>
                  </li>
                </ul>
              </div>
            </div>








          </div>
        </div>

        <!-- <div class="col-lg-4 col-md-12">
          <BlogFourBlogSidebar />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { defineComponent } from "vue";

import { StrapiBlocks, type BlocksContent } from 'vue-strapi-blocks-renderer';




const props = defineProps({
  blogDetails: {
    type: Object,
    required: true,
  },
});

const details = ref(props.blogDetails)

// const content: BlocksContent = details?.value?.attributes?.content

// const VNode = StrapiBlocks({ content: content });



console.log('details_in_component')
console.log(details.value)







watch(() => details,
  (newVal, oldVal) => {
    details.value = newVal

  })

const content: BlocksContent = details.value.attributes.content

const VNode = StrapiBlocks({ content: content });







// if (details) {
//   const content: BlocksContent = details?.value?.attributes?.content

//   const VNode = StrapiBlocks({ content: content });}






const formatPublishedDate = (dateString: string) => {
  const options = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
   'sr-ME',
    options as Intl.DateTimeFormatOptions
  );
  return formattedDate;
};



</script>