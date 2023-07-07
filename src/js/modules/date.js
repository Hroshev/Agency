const date = new Date();
const year = date.getFullYear();
const copyrightText = document.querySelectorAll('.footer__copyright-text');

copyrightText.forEach(item => item.innerHTML = `<p>© ${year} Trinwdax Digital Agency</p>`)