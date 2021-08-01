<template>
  <div class="home d-flex flex-column">
    <div class="section">
      <div class="portada">
      </div>
      <div class="text-portada text-center text-dancing">
        <img class="rounded-circle my-4 border border-2 border-primary" src="@/assets/avatar.jpg" alt="" height="150" width="150">
        <p class="display-5 text-primary">@CHRISTIAN RICARDO</p>
        <p class="display-6">Developer</p>
      </div>
    </div>

    <!-- Experience -->
    <div class="section d-flex flex-wrap justify-content-center text-primary mt-3 py-5">
        <div class="col-12 col-md-7 fw-400 my-4 px-4">
          <p class="display-5 text-center my-4">Experience</p>
          <p>I have a little less than 2 years of development experience.
            <ul>
              <li>Frontend: Bootstrap, Tailwind CSS, Vuetify, Quasar, Bulma</li>
              <li>Backend: Node.js, Java, Python, PHP.</li>
            </ul>
            In addition to designing modern pages in Adobe XD and Figma</p>
            <div class="web-technologies d-flex gap-3 justify-content-center mt-4">
              <i v-for="icon in icons" :key="icon" class="fab" :class="icon"></i>
            </div>
        </div>
        <div class="img-experience rounded col-8 d-flex justify-content-center col-md-4 text-center">
          <img src="https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="programing" width="100%">
        </div>
    </div>

    <!-- Some Projects -->
    <div class="section some-projects text-primary mt-3 d-flex flex-column align-items-center py-5">
      <p class="display-5 text-center mb-4">Some projects</p>
      <div class="d-flex flex-wrap justify-content-center gap-4">
        <CardProjectVue v-for="project in projects" :key="project.title" :title="project.title" :img="project.img" :description="project.description"/>
      </div>
      <button class="btn btn-outline-primary mt-4">See more projects <i class="fas fa-arrow-right"></i> </button>
    </div>
  </div>
</template>

<script>
import CardProjectVue from '../components/CardProject.vue'
import {mapState} from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      icons: [
        'fa-vuejs',
        'fa-node-js',
        'fa-js-square',
        'fa-css3-alt',
        'fa-bootstrap',
        'fa-figma',
        'fa-react',
      ]
    }
  },
  computed: {
    ...mapState(['projects'])
  },
  components: {
    CardProjectVue,
    CardProjectVue
  }
}
</script>
<style>
.web-technologies{
  font-size: 30px;
}

i{
  cursor: pointer;
}

i:hover{
  transition: .6s;
  transform: translateY(-10px);
}

.fa-vuejs:hover,
.fa-node-js:hover {
  color: #3ee426;
}
.fa-js-square:hover{
  color: #f9dc1c;
}
.fa-css3-alt:hover{
  color: #264de4
}
.fa-bootstrap:hover{
  color: #532bc5
}
.fa-figma:hover{
  color: #d64933
}
.fa-react:hover{
  color: #145c8c
}

.img-experience{
  overflow:hidden;
  cursor: pointer;
}

.img-experience img{
  -webkit-transition:all .5s ease; /* Safari y Chrome */
  -moz-transition:all .5s ease; /* Firefox */
  -o-transition:all .5s ease; /* IE 9 */
  -ms-transition:all .5s ease; /* Opera */
  width:100%;
}

.img-experience:hover img{
  -webkit-transform:scale(1.25);
  -moz-transform:scale(1.25);
  -ms-transform:scale(1.25);
  -o-transform:scale(1.25);
  transform:scale(1.25);
}
</style>
