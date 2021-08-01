import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: [
      {
        url: 'https://cristhian19-code.github.io/Zolymix/#/',
        title: 'Zolymix',
        img: 'https://res.cloudinary.com/christian99/image/upload/v1627715380/projects/zolymix_jbzpep.png',
        description: 'Proyecto realizado para la empresa concretera Zolymix',
        technologies:[
          'fa-vuejs',
          'fa-bootstrap'
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
