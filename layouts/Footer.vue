<template>
  <footer class="footer-area bg-color">
    <div class="container">
      <div class="row" v-if="footer">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <NuxtLink to="/" class="logo">
              <img :src="footer.image.data.attributes.url" alt="logo" />
            </NuxtLink>
            <p>
              {{ footer.shortDesc }}
            </p>
            <ul class="social-link">
              <li v-for="social in footer.socialLink" :key="social.id">
                <a :href="social.link" class="d-block" target="_blank">
                  <i :class="social.icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="single-footer-widget pl-5">
            <h3>{{ footer.title }}</h3>
            <ul class="footer-links-list">
              <li v-for="list in footer.linksList" :key="list.id">
                <NuxtLink :to="list.link">
                  {{ list.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h3>{{ footer.titleTwo }}</h3>
            <ul class="footer-links-list">
              <li v-for="list in footer.linksListTwo" :key="list.id">
                <NuxtLink :to="list.link">
                  {{ list.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h3>{{ footer.titleThree }}</h3>
            <ul class="footer-contact-info">
              <li>
                <i class="bx bx-map"></i>
                {{ footer.address }}
              </li>
              <li>
                <i class="bx bx-phone-call"></i>
                <a :href="`tel:${footer.phone}`">
                  {{ footer.phone }}
                </a>
              </li>
              <li>
                <i class="bx bx-envelope"></i>
                <a :href="`mailto:${footer.email}`">
                  {{ footer.email }}
                </a>
              </li>
              <li>
                <i class="bx bxs-inbox"></i>
                <a :href="`tel:${footer.fax}`">
                  {{ footer.fax }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom-area">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <p>
              <i class="bx bx-copyright"></i>{{ currentYear }}
              <strong>Parix</strong> is Proudly Powered by
              <a target="_blank" href="https://envytheme.com/">EnvyTheme</a>
            </p>
          </div>

          <div class="col-lg-6 col-md-6">
            <!-- <ul>
              <li><NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink></li>
              <li>
                <NuxtLink to="/terms-of-service">Terms & Conditions</NuxtLink>
              </li>
            </ul> -->
          </div>
        </div>
      </div>
    </div>

    <div class="footer-map">
      <img src="~/assets/images/footer-map.png" alt="image" />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

interface Data {
  attributes: any;
  shortDesc: string;
  title: string;
  titleTwo: string;
  titleThree: string;
  address: string;
  phone: string;
  email: string;
  fax: string;
  image: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
  socialLink: {
    id: number;
    icon: string;
    link: string;
  }[];
  linksList: {
    id: number;
    title: string;
    link: string;
  }[];
  linksListTwo: {
    id: number;
    title: string;
    link: string;
  };
}

export default defineComponent({
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  setup() {
    const footer = ref<Data | null>(null);

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/footer?populate=deep"
        );
        const {
          data: { attributes },
        } = response.data;

        footer.value = attributes;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      footer,
    };
  },
});
</script>