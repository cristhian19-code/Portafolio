<template>
  <div
    v-if="project"
    class="see-project d-flex justify-content-center align-items-center p-4"
  >
    <div class="col-5 d-flex justify-content-center align-items-center">
      <img class="shadow" :src="project.url_img" width="100%" height="300px" />
    </div>
    <div class="col-7 px-3 align-self-start px-4">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <div>
        <h5>Tecnologias usadas:</h5>
        <div class="d-flex justify-content-center gap-2">
          <i
            v-for="icon in project.technologies"
            :key="icon"
            class="fab"
            :class="icon"
          ></i>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <a target="_blank" :href="project.url" class="btn btn-success">
          Link <i class="fas fa-link"></i>
        </a>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      project: {},
    };
  },
  methods: {
    ...mapActions(['getProjects']),
  },
  computed: {
    ...mapState(["projects"]),
  },
  async created() {
    await this.getProjects();
    const id = this.$route.params.id;
    const project = this.projects.find(project => project._id == id);
    this.project = project;
  },
};
</script>

<style scoped>
.see-project {
  margin-top: 100px;
}

img {
  width: 100%;
  height: 300px;
}

i {
  cursor: pointer;
  font-size: 25px;
}

i:hover {
  transition: 0.6s;
  transform: translateY(-10px);
}

.fa-vuejs:hover,
.fa-node-js:hover {
  color: #3ee426;
}
.fa-js-square:hover {
  color: #f9dc1c;
}
.fa-css3-alt:hover {
  color: #264de4;
}
.fa-bootstrap:hover {
  color: #532bc5;
}
.fa-figma:hover {
  color: #d64933;
}
.fa-react:hover {
  color: #145c8c;
}
</style>