<template>
  <div class="blog-details-area ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 ">
          <div class="blog-details-desc">


            <div class="article-content">
              <div class="entry-meta">
                <ul>

                  <li>
                    <i class="bx bx-calendar"></i>
                    <span>Objavljeno</span>
                    <a>
                      {{ formatPublishedDate(details?.attributes?.publishedAt) }}
                    </a>
                  </li>
                </ul>
              </div>

              <h3>{{ details?.attributes?.title }}</h3>



              <div class="row" v-for="zone in details?.attributes?.iframe">

                <div class="col-lg-12 col-md-12" v-if="zone.__component === 'posts.iframe'">

                  <div>
                    <IFrameCompTwoFrameZonesTwo v-if="zone.script" :zone="zone" />
                  </div>

                  <div v-if="zone.code" v-html="zone.code">

                  </div>



                </div>

                
              </div>






            </div>

            <div class="article-footer">


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

console.log('details: ', details.value)

const route = useRoute()

console.log(route.fullPath)




// onMounted( () => {


const computedPageMeta = computed(() => {

  return {
    title: details?.value?.attributes?.seo?.seoTitle ?? 'karto',
    meta: [{ name: "description", content: details?.value?.attributes?.seo?.seoDescription ?? 'karte i mape' }],

  }

})
useHead(computedPageMeta);

useSeoMeta({
  title: () => details?.value?.attributes?.seo?.seoTitle,
  twitterTitle: () => details?.value?.attributes?.seo?.seoTitle,
  ogTitle: () => details?.value?.attributes?.seo?.seoTitle,
  description: () => details?.value?.attributes?.seo?.seoDescription,
  twitterDescription: () => details?.value?.attributes?.seo?.seoDescription,
  ogDescription: () => details?.value?.attributes?.seo?.seoDescription,
  ogImage: () => details?.value?.attributes?.image?.data[0]?.attributes?.url,
  twitterImage: () => details?.value?.attributes?.image?.data[0]?.attributes?.url,
  ogUrl: () => route.fullPath,
  twitterCard: 'summary_large_image',
  ogLocale: 'sr_Latn_RS',
  ogType: 'article',


})

// })



const formatPublishedDate = (dateString: string) => {
  const options = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    'sr-ME',
    options as Intl.DateTimeFormatOptions
  );
  return formattedDate;
};






</script>