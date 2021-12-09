<template>
  <div class="page projects py-5 d-flex flex-wrap justify-content-center gap-4">
    <CardProjectVue
      v-for="project in projects"
      :key="project.title"
      :index="project._id"
      :title="project.title"
      :img="project.url_img"
      :description="project.description"
      :url="project.url"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CardProjectVue from "../components/CardProject.vue";

export default {
  computed: {
    ...mapState(["projects"]),
  },
  components: {
    CardProjectVue,
  },
  methods: {
    ...mapActions(['getProjects'])
  },
  created() {
    this.getProjects();
  },
};
</script>

<style>
</style>