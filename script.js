
const CONFIG = {
  whatsapp: '',
  email: ''
};

const $ = (id) =>
  document.getElementById(id);

const year = $('year');

if (year) {
  year.textContent =
    new Date().getFullYear();
}

const root =
  document.documentElement;

try {

  const t =
    localStorage.getItem(
      'theme'
    );

  if (t) {
    root.dataset.theme =
      t;
  }

} catch {}

const themeBtn =
  $('themeBtn');

if (themeBtn) {

  themeBtn.addEventListener(
    'click',
    () => {

      root.dataset.theme =
        root.dataset.theme ===
        'light'
          ? 'dark'
          : 'light';

      try {

        localStorage.setItem(
          'theme',
          root.dataset.theme
        );

      } catch {}

    }
  );

}

const btn =
  $('menuBtn');

const menu =
  $('menu');

if (
  btn &&
  menu
) {

  btn.addEventListener(
    'click',
    () =>
      menu.classList.toggle(
        'open'
      )
  );

  menu.addEventListener(
    'click',
    () =>
      menu.classList.remove(
        'open'
      )
  );

}

const waBtn =
  $('waBtn');

const mailBtn =
  $('mailBtn');

const hint =
  $('hint');

if (
  CONFIG.whatsapp &&
  waBtn
) {

  waBtn.href =
    'https://wa.me/' +
    CONFIG.whatsapp;

  waBtn.hidden = false;

  if (hint) {
    hint.hidden = true;
  }

}

if (
  CONFIG.email &&
  mailBtn
) {

  mailBtn.href =
    'mailto:' +
    CONFIG.email;

  mailBtn.hidden = false;

  if (hint) {
    hint.hidden = true;
  }

}

if (
  'IntersectionObserver' in
  window
) {

  const io =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                'show'
              );

            }

          }
        );

      },
      {
        threshold: .15
      }
    );

  document
    .querySelectorAll(
      '.reveal'
    )
    .forEach(
      (el) =>
        io.observe(el)
    );

} else {

  document
    .querySelectorAll(
      '.reveal'
    )
    .forEach(
      (el) =>
        el.classList.add(
          'show'
        )
    );

}
