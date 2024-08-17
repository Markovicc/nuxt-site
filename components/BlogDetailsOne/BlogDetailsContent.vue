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


              <!-- <StrapiBlocks v-if="details" :content="details?.attributes?.content" /> -->

              <div class="row">
                <div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                  <h1>{{ details?.attributes?.title }}</h1>

                  <VNode />
                </div>

              </div>

              <!-- <div class="article-image" v-if="details?.attributes?.iframeZone[0]"
                v-html="details?.attributes?.iframeZone[0].code"> -->

              <!-- <div class="row" v-for="zone in details?.attributes?.iframeZone"> -->
              <!-- <div v-if="zone.__component === 'posts.iframe'" v-html="zone.code">               

                </div> -->
              <div class="row" v-for="zone in details?.attributes?.iframeZone" >
                
                <div class="col-lg-12 col-md-12">
                  <IFrameCompFrameZones v-if="zone.__component === 'posts.iframe'" :zone="zone" :key="Math.random()*100"/>
                </div>

                  <div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                  <RichTextCompRichText v-if="zone.__component === 'posts.rich-text'"
                    :vnodes="retContent(zone.content)" />
                </div>
              
              </div>







            </div>






            <!-- <span v-html="details?.attributes?.richText"></span> -->
            <!-- </div> -->

            <div class="article-footer">
              <div class="article-tags">
                <span><i class="bx bx-purchase-tag"></i></span>

                <a v-for="tag in details?.attributes?.tags?.data" href="#">{{ tag.attributes.name
                  }}<span></span></a>
              </div>

              <div class="article-share">
                <ul class="social">
                 
                  <!-- <li><span class="pb-5">Podeli:</span></li> -->
                  <li >
                    <SocialShare network="facebook" />
                  </li>
                  <li >
                    <SocialShare network="twitter" :title="details?.attributes?.title" />
                  </li>
                  <li >
                    <SocialShare network="linkedin"/>
                  </li>
                  
                 


                  <!-- <li>
                    <a href="#" class="twitter" target="_blank"><i class="bx bxl-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#" class="linkedin" target="_blank"><i class="bx bxl-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="#" class="instagram" target="_blank"><i class="bx bxl-instagram"></i></a>
                  </li> -->
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








console.log('seo_in_component')
console.log(details?.value?.attributes?.seo?.seoTitle)
console.log(details?.value?.attributes?.seo?.seoDescription)

onMounted( () => {

  const computedPageMeta=computed(() => {

    return {
  title: details?.value?.attributes?.seo?.seoTitle ?? 'karto' ,
  meta: [{ name: "description", content: details?.value?.attributes?.seo?.seoDescription ?? 'karte i mape'}],
  
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
    ogImage: () => details?.value?.attributes?.image?.data?.attributes?.url,
    twitterImage: () => details?.value?.attributes?.image?.data?.attributes?.url,
    twitterCard: 'summary_large_image',

  })

})





watch(() => details,
  (newVal, oldVal) => {
    details.value = newVal

  })

const content: BlocksContent = details.value.attributes.content

const VNode = StrapiBlocks({ content: content });







const retContent = (cont: any) => {
  const contParsed = JSON.parse(JSON.stringify(cont))
  const content: BlocksContent = contParsed
  console.log('strapi_blocks')

  console.log(StrapiBlocks({ content: content }));
  // console.log('vnode')
  // console.log(VNode)

  const richNode = StrapiBlocks({ content: content })
  return richNode
}




const formatPublishedDate = (dateString: string) => {
  const options = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    'sr-ME',
    options as Intl.DateTimeFormatOptions
  );
  return formattedDate;
};

// const route = useRoute()

// watch(
//   () => route.path,
//   () => {
//     console.log('route')
//     console.log(route.value.path)
//   },
// );






</script>