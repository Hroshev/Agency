/* Project filtering */
function filterProjects() {
  const categoryFilterButtons = document.querySelectorAll('.projects-features__button');
  const specialtyFilterButtons = document.querySelectorAll('.projects__specialties');
  const projectsList = document.querySelectorAll('.projects__item');

  categoryFilterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const categoryFilterValue = button.classList[1].split('--')[1];

          categoryFilterButtons.forEach(btn => btn.classList.remove('projects-button--active'));
          button.classList.add('projects-button--active');

          projectsList.forEach(project => {
              if (categoryFilterValue === 'all' || project.classList.contains(`projects--${categoryFilterValue}`)) {
                  project.style.display = 'block';
              } else {
                  project.style.display = 'none';
              }
          });
      });
  });

  specialtyFilterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const specialtyFilterValue = button.innerText;

          specialtyFilterButtons.forEach(btn => btn.classList.remove('projects__specialties--active'));
          button.classList.add('projects__specialties--active');

          projectsList.forEach(project => {
              const projectSpecialties = project.querySelectorAll('.projects__specialties');
              let hasSpecialty = Array.from(projectSpecialties).some(specialty => specialty.innerText === specialtyFilterValue);

              if (specialtyFilterValue === 'All' || hasSpecialty) {
                  project.style.display = 'block';
              } else {
                  project.style.display = 'none';
              }
          });
      });
  });
}

filterProjects();