<template>
  <div class="page home d-flex flex-column">
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
          <p class="display-5 text-center my-4">Experiencia</p>
          <p>Cuento con mas de 2 años de experiencia en desarrollo web
            <ul class="d-flex justify-content-around">
              <li>Frontend:
                <ul>
                  <li>React</li>
                  <li>Vue</li>
                  <li>Bootstrap</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>PrimeVue</li>
                  <li>Vuetify</li>
                  <li>JavaScript</li>
                </ul>
              </li>
              <li>Backend:
                <ul>
                  <li>Node.js</li>
                  <li>PHP</li>
                </ul>
              </li>
              <li>
                Diseño UX/UI
                <ul>
                    <li>Adobe XD</li>
                    <li>Figma</li>
                </ul>
              </li>
            </ul>
            </p>
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
      <p class="display-5 text-center mb-4">Algunos Proyectos</p>
      <div v-if="new_list.length != 0" class="d-flex flex-wrap justify-content-center gap-4">
        <CardProjectVue v-for="project in new_list" :key="project.title" :title="project.title" :img="project.img" :description="project.description" :url="project.url"/>
      </div>
      <router-link class="btn btn-outline-primary mt-4" to="/projects">Ver todos mis proyectos <i class="fas fa-arrow-right"></i> </router-link>
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
      ],
      new_list: []
    }
  },
  computed: {
    ...mapState(['projects'])
  },
  components: {
    CardProjectVue,
  },
  async created() {
    const num_random = await Math.floor((Math.random() * (this.projects.length - 2)) + 3)
    for (let index = num_random; index > num_random-3; index--) {
      this.new_list.push(this.projects[index]);
    }
  },
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
