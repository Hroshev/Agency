const listItem = [
    {
      id: "metal-company",
      title: "Website for a laser cutting and metalworking company",
      type: "corporate-website",
      linkUrl: "./metal-company.html",
      mainImgUrl: "img/projects/metalworking-company/main-picture.png",
      technologies: ["UX/UI Design", "SEO", "Front-end", "Back-end"],
      tasks: "Create a website that should be modern, stylish and simple at the same time. The design should inspire confidence in the company. Demonstrate the quality of their work."
    },
    {
      id: "fitness-club",
      title: "Website for a fitness club",
      type: "corporate-website",
      linkUrl: "./fitness-club.html",
      mainImgUrl: "img/projects/fitness-club/main-picture.png",
      technologies: ["UX/UI Design", "SEO", "Front-end"],
      tasks: "Create a website that should be modern, stylish and simple at the same time. The design should inspire confidence in the company. Demonstrate the quality of their work."
    },
    {
      id: "frozen-meal",
      title: "Website for frozen meal delivery service",
      type: "online-store",
      linkUrl: "./frozen-meal.html",
      mainImgUrl: "img/projects/frozen-meal/main-picture.png",
      technologies: ["UX/UI Design", "SEO", "Front-end", "Back-end"],
      tasks: "Create a website that should be modern, stylish and simple at the same time. The design should inspire confidence in the company. Demonstrate the quality of their work."
    },
  ];
  
  /* Function for creating an element */
  const makeElement = (tagName, className, text, data) => {
    const element = document.createElement(tagName);
  
    if (text) element.textContent = text;
  
    if (className) {
      const classes = className.split(" ");
      classes.forEach((cls) => {
        element.classList.add(cls);
      });
    }
  
    if (data) element.setAttribute("data-type", data);
  
    return element;
  };
  
  /* Function for creating elements on the project page */
  function headerProjectsPage(data) {
    const currentId = document.body.getAttribute("data-page-id");
  
    const createItem = (project) => {
      const { tasks, title, technologies } = project;
  
      const container = makeElement("div", "header-projects__container");
  
      const backButton = makeElement("a", "header-projects__button", "Back");
      backButton.href = "./portfolio.html";
      container.appendChild(backButton);
  
      const headerTitle = makeElement("h1", "header-projects__title", title);
      container.appendChild(headerTitle);
  
      const list = makeElement("ul", "header-projects__list");
      container.appendChild(list);
  
      technologies.forEach((technology) => {
        const item = makeElement("li", "header-projects__item", technology);
        list.appendChild(item);
      });
  
      const innerContainer = makeElement("div", "header-projects__inner");
      container.appendChild(innerContainer);
  
      const subtitle = makeElement("h3", "header-projects__subtitle", "tasks");
      innerContainer.appendChild(subtitle);
  
      const text = makeElement("p", "header-projects__text", tasks);
      innerContainer.appendChild(text);
  
      return container;
    };
  
    const headerProjects = document.querySelector(".header-projects");
    if (!headerProjects) return;
  
    const currentProject = data.find((project) => project.id === currentId);
  
    if (currentProject) {
      const cardItem = createItem(currentProject);
      headerProjects.prepend(cardItem);
    }
  }
  
  headerProjectsPage(listItem);
  
  /* Function for creating other projects */
  function otherProjects(data) {
    const currentId = document.body.getAttribute("data-page-id");
  
    const createItem = (project) => {
      const { id, linkUrl, mainImgUrl, title, technologies } = project;
  
      if (id === currentId) {
        return null; // Skip loading current project
      }
  
      const slide = makeElement("div", "swiper-slide other-projects__swiper-slide");
  
      const wrap = makeElement("div", "projects__wrap");
      slide.appendChild(wrap);
  
      const link = makeElement("a", "projects__link");
      link.href = linkUrl;
      wrap.appendChild(link);
  
      const image = makeElement("img", "projects__image");
      image.src = mainImgUrl;
      image.loading = "lazy";
      image.alt = "Our projects";
      link.appendChild(image);
  
      const wrapper = makeElement("div", "projects__wrapper");
      link.appendChild(wrapper);
  
      const titleElement = makeElement("h3", "projects__name", title);
      wrapper.appendChild(titleElement);
  
      const arrow = makeElement("div", "projects__arrow");
      wrapper.appendChild(arrow);
  
      const technologiesList = makeElement("ul", "projects__list-technologies");
      wrap.appendChild(technologiesList);
  
      technologies.forEach((technology) => {
        const specialty = makeElement("li", "projects__specialties", technology);
        technologiesList.appendChild(specialty);
      });
  
      return slide;
    };
  
    const otherProjectsContainer = document.querySelector(".other-projects__swiper-wrapper");
    if (!otherProjectsContainer) return;
  
    data.forEach((project) => {
      const cardItem = createItem(project);
      if (cardItem) {
        otherProjectsContainer.prepend(cardItem);
      }
    });
  }
  
  otherProjects(listItem);
  
  /* Function for creating elements on the portfolio page */
  function createItemPortfolio(data) {
    const createItem = (project) => {
      const { type, linkUrl, mainImgUrl, title, technologies } = project;
  
      const item = makeElement("li", "projects__item", "", type);
  
      const wrap = makeElement("div", "projects__wrap");
      item.appendChild(wrap);
  
      const link = makeElement("a", "projects__link");
      link.href = linkUrl;
      wrap.appendChild(link);
  
      const image = makeElement("img", "projects__image");
      image.src = mainImgUrl;
      image.loading = "lazy";
      image.alt = "Our projects";
      link.appendChild(image);
  
      const wrapper = makeElement("div", "projects__wrapper");
      link.appendChild(wrapper);
  
      const titleElement = makeElement("h3", "projects__name", title);
      wrapper.appendChild(titleElement);
  
      const arrow = makeElement("div", "projects__arrow");
      wrapper.appendChild(arrow);
  
      const technologiesList = makeElement("ul", "projects__list-technologies");
      wrap.appendChild(technologiesList);
  
      technologies.forEach((technology) => {
        const specialty = makeElement("li", "projects__specialties", technology);
        technologiesList.appendChild(specialty);
      });
  
      return item;
    };
  
    const containerItem = document.querySelector(".projects__list");
    if (!containerItem) return;
  
    data.forEach((project) => {
      const cardItem = createItem(project);
      containerItem.prepend(cardItem);
    });
  }
  
  createItemPortfolio(listItem);


/* Project filtering */
function filterProjects() {
  const categoryFilterButtons = document.querySelectorAll(
    ".projects-features__button"
  );
  const projectsList = document.querySelectorAll(".projects__item");

  categoryFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const categoryFilterValue = button.getAttribute("data-type");

      categoryFilterButtons.forEach((btn) =>
        btn.classList.remove("projects-button--active")
      );
      button.classList.add("projects-button--active");

      projectsList.forEach((project) => {
        const projectCategory = project.getAttribute("data-type");

        if (
          categoryFilterValue === "all" ||
          categoryFilterValue === projectCategory
        ) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });
}
filterProjects();