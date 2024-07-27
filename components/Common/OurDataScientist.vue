<template>
  <div class="scientist-area bg-color pt-100 pb-70">
    <div class="container" v-if="content">
      <div class="section-title">
        <span class="sub-title">
          <img src="~/assets/images/star-icon.png" alt="image" />
          {{ content.subTitle }}
        </span>
        <h2>{{ content.heading }}</h2>
        <p>{{ content.shortDesc }}</p>
      </div>

      <div class="row">
        <div
          class="col-lg-3 col-sm-6 col-md-6"
          v-for="scientist in content.scientists.slice(0, 4)"
          :key="scientist.id"
        >
          <div class="single-scientist-box">
            <div class="image">
              <img :src="scientist.image.data.attributes.url" alt="image" />
            </div>
            <div class="content">
              <h3>{{ scientist.name }}</h3>
              <span>{{ scientist.designation }}</span>
              <ul class="social">
                <li v-for="list in scientist.lists" :key="list.id">
                  <a :href="list.link" class="d-block" target="_blank">
                    <i :class="list.icon"></i>
                  </a>
                </li>
              </ul>
            </div>
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
  shortDesc: string;
  scientists: {
    id: number;
    name: string;
    designation: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
    lists: {
      id: number;
      icon: string;
      link: string;
    }[];
  }[];
}

export default defineComponent({
  name: "TheDataScience",
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
    const content = ref<Data | null>(null);

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/ourdatascientist?populate=deep"
        );
        const {
          data: { attributes },
        } = response.data;

        content.value = attributes;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      content,
    };
  },
});
</script>