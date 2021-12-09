<template>
  <figure class="imghvr-fade shadow">
    <img class="project-img" :src="img" alt="example-image" />
    <figcaption class="text-white d-flex flex-column">
      <h3 class="ih-fade-down ih-delay-sm">{{ title }}</h3>
      <p class="text-description ih-zoom-in ih-delay-md">
        <i>{{ description }}</i>
      </p>
      <div class="d-flex justify-content-around align-items-cente">
        <button class="btn btn-success">
          Ver mas <i class="fas fa-arrow-right"></i>
          <router-link :to="`/project/${index}`"> </router-link>
        </button>
        <button @click="ir(url)" class="btn btn-info">
          Link <i class="fas fa-link"></i>
        </button>
      </div>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
    },
    title: {
      type: String,
    },
    img: {
      type: String,
    },
    description: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  methods: {
    ir(url) {
      window.location = url;
    },
  },
};
</script>

<style>
@import url("../imagehover.css");
button{
  position: relative;
}

.imghvr-fade {
  border-radius: 5px;
}
.project-img {
  height: 250px;
  width: 400px;
}

.text-description {
  height: 50px;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>