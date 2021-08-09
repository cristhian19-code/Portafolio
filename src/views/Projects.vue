<template>
  <div class="page projects py-5 d-flex flex-wrap justify-content-center gap-4">
    <CardProjectVue
      v-for="(project, i) in projects"
      :key="project.title"
      :index="i"
      :title="project.title"
      :img="project.img"
      :description="project.description"
      :url="project.url"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardProjectVue from "../components/CardProject.vue";

export default {
  computed: {
    ...mapState(["projects"]),
  },
  components: {
    CardProjectVue,
  },
};
</script>

<style>
</style>