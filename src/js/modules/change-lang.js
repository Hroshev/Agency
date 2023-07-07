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
    "en": "Seo optimization",
    "ger": "Seo-Optimierung"
  },
  "menu--button": {
    "en": "Contact us",
    "ger": "Kontakt"
  },
  /*  //Navigation menu */
};

const dropdownButton = document.querySelector('.dropdown__button');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownListItem = document.querySelector('.dropdown__list-item');

dropdownButton.addEventListener('click', function () {
  dropdownList.classList.toggle('dropdown__list--active');
});

dropdownListItem.addEventListener('click', function () {
  const lang = dropdownListItem.getAttribute('data-value');
  const currentLang = dropdownButton.innerText;
  dropdownButton.innerText = dropdownListItem.innerText;
  dropdownListItem.innerText = currentLang;
  dropdownList.classList.remove('dropdown__list--active');
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
  dropdownButton.innerText = currentLang.toUpperCase(); // Отображаем выбранный язык в dropdown__button
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
}

function changeHtmlLang(lang) {
  document.documentElement.lang = lang === 'ger' ? 'de' : 'en';
}

function changeMetaDescription(lang) {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription){
    metaDescription.setAttribute('content', langArr.description[lang]);
  }
}

function saveLanguagePreference(lang) {
  localStorage.setItem('selectedLang', lang); // Сохраняем выбранный язык в localStorage
}

changeLanguage(currentLang);
changeHtmlLang(currentLang);
changeMetaDescription(currentLang);