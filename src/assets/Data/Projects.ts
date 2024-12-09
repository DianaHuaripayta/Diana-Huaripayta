
import vk_1 from "../../assets/vokativa_1.png";
import vk_2 from "../../assets/vokativa_2.png";
import vk_3 from "../../assets/vokativa_3.png";
import vk_4 from "../../assets/vokativa_4.png";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/socialNetwork.png";

import a_1 from "../../assets/Altope_1.png";
import a_2 from "../../assets/Altope_2.png";
import a_3 from "../../assets/Altope_3.png";
import a_4 from "../../assets/Altope_4.png";
import a_5 from "../../assets/Altope_5.png";
import a_6 from "../../assets/Altope_6.png";
import a_7 from "../../assets/Altope_7.png";

import t_1 from "../../assets/toktik_1.png";
import t_2 from "../../assets/toktik_2.png";
import t_3 from "../../assets/toktik_3.png";


import n_1 from "../../assets/Network_1.png";
import n_2 from "../../assets/Network_2.png";
import n_3 from "../../assets/Network_3.png";
import n_4 from "../../assets/Network_4.png";

import g_1 from "../../assets/ghibli_1.png";
import g_2 from "../../assets/ghibli_2.png";
import g_3 from "../../assets/ghibli_3.png";
export const projects = [
    {
      title: "Vokativa",
      techStack: ["React v18", "React Router Dom", "Slick Carousel", "Styled Components"],
      description:'Vokativa es una landing page interactiva y moderna diseñada y desarrollada completamente con React, utilizando las últimas tecnologías y mejores prácticas de desarrollo web. Este proyecto fue creado para representar la identidad de la marca Vokativa, destacando su propuesta de valor de manera visual y funcional.',
      link: "../../assets/project1.png",
      images: [vk_1, vk_2, vk_3, vk_4],
    },
    {
      title: "Altope App",
      description:'Desarrollé un sistema de inventario robusto y eficiente utilizando Angular v17, diseñado para optimizar la gestión de productos, facilitar el control de existencias y mejorar la toma de decisiones empresariales. Este proyecto incluye funcionalidades clave como la actualización en tiempo real de inventarios, generación de reportes, categorización de productos y una interfaz intuitiva para garantizar una experiencia de usuario fluida.El sistema está pensado para pequeñas y medianas empresas que buscan digitalizar sus operaciones y mantener un control preciso de sus recursos.',
      images: [a_1, a_2, a_3, a_4,a_5,a_6, a_7],
      techStack: ["Angular v17", "Firebase", "Material Angular", "Prime Ng", "xlsx", "Mongo DB", 'Node.js', 'Express'],
    },
    {
      title: "Toktik",
      repoLink: "https://github.com/DianaHuaripayta/fake-store",
      description:"Toktik es una aplicación interactiva creada con Dart y Flutter, diseñada para ofrecer una experiencia fluida y atractiva en el manejo de contenido multimedia.",
      images: [t_1, t_2, t_3,],
      techStack: ["Dart", "Flutter"],
    },
    {
      title: "Social Network",
      image: project2,
      images: [n_1, n_2, n_3, n_4],
      description:'CourseShare está desarrollada con HTML, CSS, Javascript y Firebase, en donde los usuarios registrados pueden visualizar los posts de otros miembros, incluida una sección sobre post destacados, además pueden realizar publicaciones, editarlos y eliminarlos y buscar algún miembro en específico. El usuario puede asignar a sus publicaciones el modo público o privado y dar like a sus publicaciones favoritas.',
      techStack: ["Firebase", "Javascript", "Jest"],
    },
    {
      title: "Data Lovers Ghibli",
      image: project1,
      images: [g_1, g_2, g_3],
      description:'Studio Ghibli es una aplicación web interactiva desarrollada con HTML, CSS y JavaScript. Permite a los usuarios explorar y descubrir todas las películas de Studio Ghibli, filtrarlas por diversos criterios y acceder a detalles completos de cada título, incluyendo sinopsis y otros datos relevantes. Con un diseño intuitivo y fácil de navegar, la aplicación ofrece una experiencia fluida para los fanáticos de las películas de Ghibli.',
      techStack: ["Javascript", "Jest", "GitHub", "CSS"],
    },
  ];