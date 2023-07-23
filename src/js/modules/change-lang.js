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
  "back-button": {
    "en": "Back",
    "ger": "Back"
  },
  "tasks": {
    "en": "tasks",
    "ger": "tasks"
  },
  "meta-projects": {
    "en": "Stages of work",
    "ger": "Stages of work"
  },
  "visuals": {
    "en": "Visuals",
    "ger": "Visuals"
  },
  "other-projects-title": {
    "en": "Other projects",
    "ger": "Other projects"
  },
  "other-projects-button": {
    "en": "See all",
    "ger": "See all"
  },

  /*  Projects page */
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
  },

};










const dropdownButton = document.querySelector('.dropdown__button');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownListItem = document.querySelector('.dropdown__list-item');

// Function to check if the element or its parent is the dropdown element
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
  dropdownButton.innerText = lang === 'ger' ? 'Ger' : 'En'; // Fix the button text here
}

// Function to close the dropdown list
function closeDropdownList() {
  dropdownList.classList.remove('dropdown__list--active');
}

// Event listener to close the dropdown list on click outside the dropdown
document.addEventListener('click', function (event) {
  if (!isDropdownElement(event.target)) {
    closeDropdownList();
  }
});

// Event listener to close the dropdown list on scroll
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
  saveLanguagePreference(lang); // Save the selected language
});

const allLang = ['en', 'ger'];
let currentLang = localStorage.getItem('selectedLang');

if (!allLang.includes(currentLang)) {
  currentLang = determineUserLanguage(); // Determine the user's language based on their browser settings
  saveLanguagePreference(currentLang); // Save the determined language in localStorage
} else {
  // If the language is already saved in localStorage, use it as the currentLang
}

// Function to determine the user's language based on their browser settings
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
  localStorage.setItem('selectedLang', lang); // Save the selected language in localStorage
}

// Initialize the page with the chosen language
changeLanguage(currentLang);
changeHtmlLang(currentLang);
changeMetaDescription(currentLang);