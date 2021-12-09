import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: [
    ],
    technologies: {
    }
  },
  mutations: {
    projects(state,projects) {
      state.projects = projects
    }
  },
  actions: {
    async getProjects({commit}) {
      const data = await fetch('https://upload-projects.herokuapp.com/api/projects', {
        method: 'GET'
      })
      const projects = await data.json();

      commit('projects',projects.data)
    }
  },
  modules: {
  }
})
