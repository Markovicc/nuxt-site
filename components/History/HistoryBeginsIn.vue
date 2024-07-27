<template>
    <div class="history-area ptb-100 bg-fafafb">
      <div class="container" v-if="history">
        <div class="section-title">
          <span class="sub-title">
            <img src="~/assets/images/star-icon.png" alt="image" />
            {{ history.subTitle }}
          </span>
          <h2>{{ history.heading }}</h2>
        </div>
  
        <ol class="timeline history-timeline">
          <li
            class="timeline-block"
            v-for="timeline in history.historyTimeline"
            :key="timeline.id"
          >
            <div class="timeline-date">
              <span>{{ timeline.year }}</span>
              {{ timeline.date }}
              <sup>th</sup>
            </div>
  
            <div class="timeline-icon">
              <span class="dot-badge"></span>
            </div>
  
            <div class="timeline-content">
              <div class="row align-items-center">
                <div class="col-lg-7 col-md-12">
                  <div class="content">
                    <h3>{{ timeline.title }}</h3>
                    <p>
                      {{ timeline.description }}
                    </p>
                  </div>
                </div>
  
                <div class="col-lg-5 col-md-12">
                  <div class="image" data-tilt>
                    <img :src="timeline.image.data.attributes.url" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ol>
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
    historyTimeline: {
      id: number;
      year: string;
      date: string;
      title: string;
      description: string;
      image: {
        data: {
          attributes: {
            url: string;
          };
        }[];
      };
    }[];
  }
  
  export default defineComponent({
    name: "HistoryBeginsIn",
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
      const history = ref<Data | null>(null);
  
      onMounted(async () => {
        try {
          const response = await axios.get(
            "http://localhost:1337/api/historybegin?populate=deep"
          );
          const {
            data: { attributes },
          } = response.data;
  
          history.value = attributes;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      });
  
      return {
        history,
      };
    },
  });
  </script>