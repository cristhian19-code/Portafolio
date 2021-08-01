<template>
  <div class="d-flex flex-column">
    <NavbarVue />
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import FooterVue from './components/Footer.vue'
import NavbarVue from './components/Navbar.vue'

export default {
  components:{
    NavbarVue,
    FooterVue
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');

*{
  font-family: 'Montserrat', sans-serif;
}

.fw-bold{
  font-weight: bold;
}

.fw-100{
  font-weight: 100;
}
.fw-200{
  font-weight: 200;
}
.fw-300{
  font-weight: 300;
}
.fw-400{
  font-weight: 400;
}
.fw-500{
  font-weight: 500;
}
.fw-600{
  font-weight: 600;
}
.fw-700{
  font-weight: 700;
}
.fw-800{
  font-weight: 800;
}

.section{
  position: relative;
}
.portada{
  margin-top: 80px;
  height: 80vh;
  opacity: .5;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-image: url(
    https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
  );
}

.text-portada{
  bottom: 20%;
  position: absolute;
  z-index: 100;
  width: 100%;
}
</style>
