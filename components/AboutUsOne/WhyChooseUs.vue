<template>
  <div class="how-its-work-area ptb-100">
    <div class="container">
      <div class="row align-items-center" v-if="chooseus">
        <div class="col-lg-6 col-md-12">
          <div class="how-its-work-content">
            <span class="sub-title">
              <img src="~/assets/images/star-icon.png" alt="image" />
              {{ chooseus.subTitle }}
            </span>
            <h2>{{ chooseus.heading }}</h2>
            <p>
              {{ chooseus.shortDesc }}
            </p>
            <div class="inner-box">
              <div
                class="single-item"
                v-for="inner in chooseus.innerBox"
                :key="inner.id"
              >
                <div class="count-box">
                  {{ inner.id }}
                </div>
                <h3>{{ inner.title }}</h3>
                <p>
                  {{ inner.shortDesc }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="how-its-work-image" data-tilt>
            <img :src="chooseus.image.data.attributes.url" alt="image" />
          </div>
        </div>
      </div>
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
  innerBox: {
    id: number;
    title: string;
    shortDesc: string;
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
  name: "WhyChooseUs",
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
    const chooseus = ref<Data | null>(null);

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/whychooseus?populate=deep"
        );
        const {
          data: { attributes },
        } = response.data;

        chooseus.value = attributes;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      chooseus,
    };
  },
});
</script>