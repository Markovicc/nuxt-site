<template>
  <div class="about-area pb-100">
    <div class="container-fluid">
      <div class="row align-items-center" v-if="about">
        <div class="col-lg-6 col-md-12">
          <div class="about-image">
            <img :src="about.image.data.attributes.url" alt="image" />
          </div>
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="about-content">
            <div class="content">
              <span class="sub-title">
                <img src="~/assets/images/star-icon.png" alt="image" />
                {{ about.subTitle }}
              </span>
              <h2>{{ about.heading }}</h2>
              <p>
                {{ about.shortDesc }}
              </p>
              <ul class="features-list">
                <li v-for="feature in about.features" :key="feature.id">
                  <span>
                    <div class="icon">
                      <img
                        :src="feature.iconImage.data.attributes.url"
                        alt="image"
                      />
                    </div>
                    <h3>{{ feature.title }}</h3>
                    <p>{{ feature.shortDesc }}</p>
                  </span>
                </li>
              </ul>
              <p>
                {{ about.shortDescTwo }}
              </p>
              <NuxtLink :to="about.btnLink" class="default-btn">
                <i class="flaticon-right"></i>
                {{ about.btnText }}
                <span></span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="circle-shape1">
      <img src="~/assets/images/shape/circle-shape1.png" alt="image" />
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

interface Data {
  attributes: any;
  subTitle: string;
  heading: string;
  shortDesc: string;
  shortDescTwo: string;
  btnLink: string;
  btnText: string;
  features: {
    id: number;
    title: string;
    shortDesc: string;
    iconImage: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
  }[];
  image: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
}

export default defineComponent({
  name: "DriveDigitalRevolution",
  data() {
    return {
      isPopup: false,
    };
  },
  methods: {
    togglePopup() {
      (this as any).isPopup = !(this as any).isPopup;
    },
  },
  setup() {
    const about = ref<Data | null>(null);

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/aboutus?populate=deep"
        );
        const {
          data: { attributes },
        } = response.data;

        about.value = attributes;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      about,
    };
  },
});
</script>