<template>
  <div class="case-studies-details-area ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="case-studies-details-image">
            <img
              :src="details?.attributes?.image?.data?.attributes?.url"
              alt="image"
            />
          </div>
          <div class="case-studies-details-desc">
            <span class="sub-title">
              {{ details?.attributes?.category }}
            </span>
            <h3>
              {{ details?.attributes?.title }}
            </h3>
            <span v-html="details?.attributes?.richText"></span>
          </div>
        </div>

        <div class="col-lg-4 col-md-12">
          <CaseStudiesDetailsOneStudiesSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface DetailsType {
  attributes: {
    title: string;
    category: string;
    richText: string;
    slug: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export default defineComponent({
  name: "CaseStudiesDetailsContent",
  props: ["caseStudiesDetails"],
  data() {
    return {
      details: null as DetailsType | null,
    };
  },
  watch: {
    caseStudiesDetails: {
      handler(newVal) {
        this.details = newVal;
      },
      immediate: true,
    },
  },
});
</script>