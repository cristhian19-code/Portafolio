import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: [
      {
        url: 'https://cristhian19-code.github.io/Zolymix/#/',
        title: 'Zolymix',
        img: 'https://res.cloudinary.com/christian99/image/upload/v1627715380/projects/zolymix_jbzpep.png',
        description: 'Proyecto realizado para la empresa concretera Zolymix.',
        technologies:[
          'fa-vuejs',
          'fa-bootstrap',
        ]
      },
      {
        url: 'https://cristhian19-code.github.io/EducationAppDesing/',
        title: 'Education App',
        img: 'https://res.cloudinary.com/christian99/image/upload/v1627884091/projects/Education_ueyxoz.png',
        description: 'Plantilla web para una intitucion educativa mostrando el avance de los cursos y datos personales del alumno.',
        technologies:[
          'fa-vuejs',
          'fa-css3-alt',
        ]
      },
      {
        url: 'https://cristhian19-code.github.io/TodosApp/',
        title: 'Todos App',
        img: 'https://res.cloudinary.com/christian99/image/upload/v1627887711/projects/todos_jdyier.png',
        description: 'Diseño reto de Frontend Mentor sobre una aplicacion de tareas con funcionalidades como agregar , eliminar y filtrar.',
        technologies:[
          'fa-vuejs',
        ]
      },
      {
        url: 'https://cristhian19-code.github.io/SocialMediaDashboard/',
        title: 'Social Media Dashboard',
        img: 'https://res.cloudinary.com/christian99/image/upload/v1627889783/projects/Social_Media_Dashboard_aiho8h.png',
        description: 'Diseño reto de Frontend Mentor sobre un panel de red social en donde se muestra la cantidad de seguidores y la cantidad de vistas durante el dia.',
        technologies:[
          'fa-vuejs',
        ]
      },
      {
        url: 'https://cristhian19-code.github.io/Tapiceria/',
        title: 'Tapiceria',
        img: 'https://res.cloudinary.com/christian99/image/upload/v1627891854/projects/Tapiceria_xftod3.png',
        description: 'Plantilla web para una tapiceria con un catalogo de productos y el color del material a realizar.',
        technologies:[
          'fa-vuejs',
        ]
      },
      {
        url: 'https://cristhian19-code.github.io/FoodAppDesing/',
        title: 'Food App',
        img: 'https://res.cloudinary.com/christian99/image/upload/v1627892026/projects/Food_App_oizoyb.png',
        description: 'Plantilla web de comidas con una lista de ofertas y lugares para comer , asi como la funcionalidad de agregar y visualizar en la orden.',
        technologies:[
          'fa-vuejs',
          'fa-css3-alt',
        ]
      },
      {
        url: 'https://cristhian19-code.github.io/MusicProject/',
        title: 'Music App',
        img: 'https://res.cloudinary.com/christian99/image/upload/v1627892281/projects/Music_App_s3tm84.png',
        description: 'Aplicacion web para buscar musicas utilizando la API de Deezer, ademas de poder escuchar un preview de la musica seleccionada.',
        technologies:[
        ]
      },

    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
