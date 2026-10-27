'use strict';

// Navigation mobile : ouvre ou ferme le menu principal.
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Formulaire local de démonstration : aucune donnée n'est transmise ni stockée.
const registrationForm = document.querySelector('#registration-form');
const formFeedback = document.querySelector('#form-feedback');

if (registrationForm && formFeedback) {
  registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formFeedback.hidden = false;
    formFeedback.classList.remove('is-error');

    if (!registrationForm.checkValidity()) {
      formFeedback.classList.add('is-error');
      formFeedback.textContent = 'Certains champs obligatoires doivent être complétés. Vérifiez le nom, l’adresse e-mail, le format choisi, le niveau d’expérience et la case de confirmation.';
      registrationForm.reportValidity();
      formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }

    formFeedback.textContent = 'Démonstration réussie : les champs semblent correctement remplis. Aucune donnée n’a été envoyée ou enregistrée. Cette préinscription est fictive et n’a aucune valeur d’inscription réelle.';
    formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}
