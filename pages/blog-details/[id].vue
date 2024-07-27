 <template>
  <div>
    <Navbar />
    <CommonPageTitle :pageTitle="details?.attributes?.title" />
    <BlogDetailsOneBlogDetailsContent :blogDetails="details" v-if="details" />
    <Footer />
  </div>
</template>

<script  setup lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import Navbar from "../../layouts/Navbar.vue";
import Footer from "../../layouts/Footer.vue";

interface Dentist {
  id: number;
  attributes: {
    title: string;
  };
}




const details = ref<Dentist | null>(null);
    
    const route = useRoute();

    onMounted(async () => {
      const slug = route.params.id;
      console.log(slug)
      if (slug) {
        try {
          const response = await axios.get(
            `http://localhost:1337/api/posts/${slug}?populate=*`
          );

          details.value = response.data.data;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        console.error("Slug parameter is undefined");
      }

      console.log('details.value')


    console.log(details.value)
    
      
    });

    

  

</script>