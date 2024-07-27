<template>
  <div class="faq-area ptb-100">
    <div class="container">
      <div class="faq-accordion-tab" v-if="faq">
        <b-tabs content-class="mt-3">
          <b-tab
            v-for="tab in faq.accordionTabs"
            :key="tab.id"
            :title="tab.title"
          >
            <div class="faq-accordion">
              <BAccordion class="accordion">
                <BAccordionItem
                  v-for="accordion in tab.accordions"
                  :key="accordion.id"
                  :title="accordion.title"
                >
                  {{ accordion.description }}
                </BAccordionItem>
              </BAccordion>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>   

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

interface Data {
  attributes: any;
  accordionTabs: {
    id: number;
    title: string;
    accordions: {
      id: number;
      title: string;
      description: string;
    };
  };
}

export default defineComponent({
  name: "FaqContent",
  setup() {
    const faq = ref<Data | null>(null);

    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/faq?populate=deep"
        );
        const {
          data: { attributes },
        } = response.data;

        faq.value = attributes;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      faq,
    };
  },
});
</script>