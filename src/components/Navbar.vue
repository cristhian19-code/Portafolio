<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">CR-Portfolio</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item" v-for="route in routes" :key="route.name">
            <router-link
              :class="this.$route.path == route.path ? 'active' : ''"
              class="nav-link"
              :to="route.path"
              >{{ route.name }}</router-link
            >
          </li>

          <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { name: "HOME", path: "/" },
        { name: "PROJECTS", path: "/projects" },
        { name: "ABOUT ME", path: "/about" },
      ],
    };
  },
};
</script>

<style>
.navbar {
  opacity: 0.95;
}
</style>