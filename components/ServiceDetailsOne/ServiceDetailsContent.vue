<template>
  <div class="services-details-area ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="services-details-image">
            <img
              :src="details?.attributes?.detailsImage?.data?.attributes?.url"
              alt="image"
            />
          </div>
          <div class="services-details-desc">
            <span class="sub-title">
              {{ details?.attributes?.title }}
            </span>
            <span v-html="details?.attributes?.richText"></span>
            <div class="charts-image">
              <img
                src="~/assets/images/services/services-charts.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12">
          <ServiceDetailsOneServicesSidebar />
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
    shortDesc: string;
    richText: string;
    icon: string;
    slug: string;
    detailsImage: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export default defineComponent({
  name: "ServicesDetailsContent",
  props: ["serviceDetails"],
  data() {
    return {
      details: null as DetailsType | null,
    };
  },
  watch: {
    serviceDetails: {
      handler(newVal) {
        this.details = newVal;
      },
      immediate: true,
    },
  },
});
</script>