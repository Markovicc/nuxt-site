 <template>
  <div>
    <Navbar />
    <CommonPageTitle pageTitle="History" />
    <HistoryBeginsIn />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../layouts/Navbar.vue";
import Footer from "../layouts/Footer.vue";

export default defineComponent({
  components: {
    Navbar,
    Footer,
  },
});
</script>
