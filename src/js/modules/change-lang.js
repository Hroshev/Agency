const langArr = {
  "title": {
    "en": "world-class digital products",
    "ger": "world-class digital products"
  },
  "description": {
    "en": "world-class digital products",
    "ger": "world-class digital products"
  },
  /*  Navigation menu */
  "menu--about": {
    "en": "About us",
    "ger": "Über uns"
  },
  "menu--portfolio": {
    "en": "Portfolio",
    "ger": "Portfolio"
  },
  "menu--services": {
    "en": "Services",
    "ger": "Dienstleistungen"
  },
  "menu--design-branding": {
    "en": "Design and Branding",
    "ger": "Design und Markenbildung"
  },
  "menu--marketing-advertising": {
    "en": "Digital Marketing and Advertising",
    "ger": "Digitales Marketing und Werbung"
  },
  "menu--seo": {
    "en": "SEO optimization",
    "ger": "SEO-Optimierung"
  },
  "menu--button": {
    "en": "Contact us",
    "ger": "Kontakt"
  },
  /*  Projects */
  "title-metal-company": {
    "en": "Website for a laser cutting and metalworking company",
    "ger": "Website für ein Unternehmen für Laserschneiden und Metallbearbeitung"
  },
  "tasks-metal-company": {
    "en": "Create a website that should be modern, stylish and simple at the same time. The design should inspire confidence in the company. Demonstrate the quality of their work.",
    "ger": "Erstellen Sie eine Website, die modern, stilvoll und einfach zugleich sein sollte. Das Design sollte Vertrauen in das Unternehmen erwecken. Zeigen Sie die Qualität ihrer Arbeit."
  },
  "title-fitness-club": {
    "en": "Website for a fitness club",
    "ger": "Website für einen Fitnessclub"
  },
  "tasks-fitness-club": {
    "en": "Create a website that should be modern, stylish and simple at the same time. The design should inspire confidence in the company. Demonstrate the quality of their work.",
    "ger": "Erstellen Sie eine Website, die modern, stilvoll und einfach zugleich sein sollte. Das Design sollte Vertrauen in das Unternehmen erwecken. Zeigen Sie die Qualität ihrer Arbeit."
  },
  "title-frozen-meal": {
    "en": "Website for frozen meal delivery service",
    "ger": "Website für Tiefkühlkost-Lieferdienst"
  },
  "tasks-frozen-meal": {
    "en": "Create a website that should be modern, stylish and simple at the same time. The design should inspire confidence in the company. Demonstrate the quality of their work.",
    "ger": "Erstellen Sie eine Website, die modern, stilvoll und einfach zugleich sein sollte. Das Design sollte Vertrauen in das Unternehmen erwecken. Zeigen Sie die Qualität ihrer Arbeit."
  },
  /*  Contact Us */
  "title-contact-us": {
    "en": "Contact us",
    "ger": "Kontakt"
  },
  "subtitle-contact-us": {
    "en": "<span>Contact us today</span> and let's realize your digital growth <span>together!</span>",
    "ger": "<span>Kontaktieren Sie uns</span> noch heute und lassen Sie uns gemeinsam Ihr digitales Wachstum <span>realisieren!</span>"
  },
  /*  Form */
  "form-name": {
    "en": "*First Name",
    "ger": "*Vorname"
  },
  "form-email": {
    "en": "*Email",
    "ger": "*E-Mail"
  },
  "form-phone": {
    "en": "Phone",
    "ger": "Telefon"
  },
  "form-comments": {
    "en": "*Describe your request",
    "ger": "*Beschreiben Sie Ihr Anliegen"
  },
  "form-file-text": {
    "en": "Attach document",
    "ger": "Dokument anhängen"
  },
  "privacy-policy-text": {
    "en": "I have read and agree to the",
    "ger": "Ich habe gelesen und akzeptiere die"
  },
  "form-submit": {
    "en": "Send",
    "ger": "Senden Sie"
  }
};


const dropdownButton = document.querySelector('.dropdown__button');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownListItem = document.querySelector('.dropdown__list-item');

// Функция для проверки, является ли элемент или его родительская область выпадающим списком
function isDropdownElement(element) {
  if (element === dropdownButton || element === dropdownList || dropdownList.contains(element)) {
    return true;
  }
  return false;
}


function changeSubmitButtonText(lang) {
  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn) {
    submitBtn.value = langArr['form-submit'][lang];
  }
}

// Функция для закрытия выпадающего списка
function closeDropdownList() {
  dropdownList.classList.remove('dropdown__list--active');
}

// Обработчик события клика на странице
document.addEventListener('click', function (event) {
  if (!isDropdownElement(event.target)) {
    closeDropdownList();
  }
});

// Обработчик события скролла на странице
document.addEventListener('scroll', function (event) {
  if (!isDropdownElement(event.target)) {
    closeDropdownList();
  }
});

dropdownButton.addEventListener('click', function () {
  dropdownList.classList.toggle('dropdown__list--active');
});

dropdownListItem.addEventListener('click', function () {
  const lang = dropdownListItem.getAttribute('data-value');
  const currentLang = dropdownButton.innerText;
  dropdownButton.innerText = dropdownListItem.innerText;
  dropdownListItem.innerText = currentLang;
  closeDropdownList();
  changeLanguage(lang);
  changeHtmlLang(lang);
  changeMetaDescription(lang);
  saveLanguagePreference(lang); // Сохраняем выбранный язык
});

const select = document.querySelector('.change-lang .dropdown__select');
const allLang = ['en', 'ger'];
let currentLang = localStorage.getItem('selectedLang');

if (!allLang.includes(currentLang)) {
  currentLang = determineUserLanguage();
  saveLanguagePreference(currentLang); // Сохраняем язык по умолчанию
} else {
  changeLanguage(currentLang); // Инициализация выбранного языка
  changeHtmlLang(currentLang);
  changeMetaDescription(currentLang);
  dropdownButton.innerText = currentLang === 'ger' ? 'Ger' : 'En'; // Отображаем выбранный язык в dropdown__button
}

if (select) {
  select.addEventListener('click', () => {
    select.classList.toggle('dropdown__select--active');
  });
  dropdownListItem.addEventListener('click', () => {
    select.classList.remove('dropdown__select--active');
  });
}

function determineUserLanguage() {
  const userLang = navigator.language.toLowerCase();
  return userLang.startsWith('de') ? 'ger' : 'en';
}

function changeLanguage(lang) {
  Object.keys(langArr).forEach((key) => {
    const elem = document.querySelector(`.lng-${key}`);
    if (elem) {
      elem.innerHTML = langArr[key][lang];
    }
  });

  dropdownListItem.setAttribute('data-value', lang === 'ger' ? 'en' : 'ger');
  dropdownListItem.innerText = lang === 'ger' ? 'En' : 'Ger';
  changeSubmitButtonText(lang);
}

function changeHtmlLang(lang) {
  document.documentElement.lang = lang === 'ger' ? 'de' : 'en';
}

function changeMetaDescription(lang) {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', langArr.description[lang]);
  }
}

function saveLanguagePreference(lang) {
  localStorage.setItem('selectedLang', lang); // Сохраняем выбранный язык в localStorage
}

changeLanguage(currentLang);
changeHtmlLang(currentLang);
changeMetaDescription(currentLang);