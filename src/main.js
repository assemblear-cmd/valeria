import "./styles.css";
import { siteContent as content } from "./content.js";

const app = document.querySelector("#app");

const arrow = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
`;

const directionCards = content.directions
  .map(
    (item) => `
      <article
        class="direction-card ${item.className || ""} ${item.color ? `direction-card--${item.color}` : ""}"
        ${item.image ? `style="--card-image: url('${item.image}')"` : ""}
      >
        <div class="direction-card__top">
          <span>${item.number}</span>
          <span class="direction-card__arrow">↗</span>
        </div>
        <div class="direction-card__copy">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      </article>
    `,
  )
  .join("");

const eventCards = content.events
  .map(
    (item, index) => `
      <article class="event-card reveal" style="--delay: ${index * 80}ms">
        <a class="event-card__image" href="#signup" aria-label="${item.title}">
          <img src="${item.image}" alt="" loading="lazy" />
          <span class="event-card__index">0${index + 1}</span>
        </a>
        <div class="event-card__meta">
          <span>${item.type}</span>
          <span>${item.date}</span>
        </div>
        <h3>${item.title}</h3>
        <a class="text-link" href="#signup">Подробнее ${arrow}</a>
      </article>
    `,
  )
  .join("");

app.innerHTML = `
  <a class="skip-link" href="#main">К основному контенту</a>

  <header class="site-header">
    <a class="brand" href="#top" aria-label="На главную">
      <span class="brand__name">${content.brand.name}<sup>°</sup></span>
      <span class="brand__descriptor">${content.brand.descriptor}</span>
    </a>
    <nav class="desktop-nav" aria-label="Основная навигация">
      ${content.navigation.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
    </nav>
    <a class="header-cta" href="#signup">Записаться ${arrow}</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Открыть меню">
      <span></span><span></span>
    </button>
    <nav class="mobile-menu" id="mobile-menu" aria-label="Мобильная навигация">
      ${content.navigation.map(([label, href], index) => `<a href="${href}"><span>0${index + 1}</span>${label}</a>`).join("")}
      <a class="mobile-menu__cta" href="#signup">Записаться</a>
    </nav>
  </header>

  <main id="main">
    <section class="hero" id="top">
      <img class="hero__image" src="/images/hero-dance.jpg" alt="Танцоры на репетиции" />
      <div class="hero__veil"></div>
      <div class="hero__content">
        <p class="eyebrow eyebrow--light">${content.hero.eyebrow}</p>
        <h1>${content.hero.title.replace("\n", "<br />")}</h1>
        <div class="hero__bottom">
          <p>${content.hero.quote}</p>
          <a class="button button--blue" href="#signup">${content.hero.button} ${arrow}</a>
        </div>
      </div>
      <a class="scroll-cue" href="#directions" aria-label="Прокрутить вниз"><span></span>SCROLL</a>
    </section>

    <section class="intro section" id="directions">
      <div class="section__head reveal">
        <p class="eyebrow">${content.intro.eyebrow}</p>
        <div>
          <h2>${content.intro.title}</h2>
          <p class="section__lead">${content.intro.text}</p>
        </div>
      </div>
      <div class="directions-grid reveal">
        ${directionCards}
      </div>
    </section>

    <div class="marquee" aria-hidden="true">
      <div class="marquee__track">
        <span>БАЛЕТ</span><i>✦</i><span>СОВРЕМЕННЫЙ ТАНЕЦ</span><i>✦</i><span>ПИЛАТЕС</span><i>✦</i><span>РАСТЯЖКА</span><i>✦</i>
        <span>БАЛЕТ</span><i>✦</i><span>СОВРЕМЕННЫЙ ТАНЕЦ</span><i>✦</i><span>ПИЛАТЕС</span><i>✦</i><span>РАСТЯЖКА</span><i>✦</i>
      </div>
    </div>

    <section class="about section section--dark" id="about">
      <div class="about__visual reveal">
        <img src="/images/about-dancer.jpg" alt="Современная танцовщица в движении" loading="lazy" />
        <span class="about__stamp">MOVE<br />YOUR<br />WAY</span>
      </div>
      <div class="about__content reveal">
        <p class="eyebrow eyebrow--light">${content.about.eyebrow}</p>
        <h2>${content.about.title}</h2>
        <p class="about__text">${content.about.text}</p>
        <div class="stats">
          ${content.about.stats
            .map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`)
            .join("")}
        </div>
        <a class="button button--outline" href="#events">Узнать больше ${arrow}</a>
      </div>
    </section>

    <section class="benefits section">
      <div class="benefits__title reveal">
        <p class="eyebrow">Здесь вы сможете /</p>
        <h2>Двигаться<br />в своём ритме</h2>
      </div>
      <div class="benefits__list reveal">
        ${content.benefits
          .map(
            (item, index) => `
              <div class="benefit-row">
                <span>0${index + 1}</span>
                <h3>${item}</h3>
                <span class="benefit-row__icon">+</span>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="events section" id="events">
      <div class="section__head reveal">
        <p class="eyebrow">Афиша /</p>
        <div>
          <h2>Будьте в ритме</h2>
          <p class="section__lead">Ближайшие события, открытые уроки и мастер-классы студии.</p>
        </div>
      </div>
      <div class="events-grid">
        ${eventCards}
      </div>
      <a class="button button--dark events__all" href="#signup">Смотреть все события ${arrow}</a>
    </section>

    <section class="offer" id="offers">
      <div class="offer__heading reveal">
        <p class="eyebrow eyebrow--light">${content.offer.eyebrow}</p>
        <h2>${content.offer.title}</h2>
      </div>
      <div class="offer__pricing reveal">
        ${content.offer.items
          .map(
            ([label, price]) => `
              <div class="price-row">
                <span>${label}</span>
                <strong>${price}</strong>
              </div>
            `,
          )
          .join("")}
        <p>${content.offer.note}</p>
        <a class="button button--light" href="#signup">Выбрать занятие ${arrow}</a>
      </div>
    </section>

    <section class="signup" id="signup">
      <div class="signup__copy reveal">
        <p class="eyebrow">Первое занятие /</p>
        <h2>Начните<br />сейчас</h2>
        <p>Оставьте контакты — администратор свяжется с вами и поможет выбрать направление.</p>
      </div>
      <form class="signup-form reveal">
        <label>
          <span>Имя</span>
          <input type="text" name="name" placeholder="Как к вам обращаться?" required />
        </label>
        <label>
          <span>Телефон</span>
          <input type="tel" name="phone" placeholder="+7 900 000-00-00" required />
        </label>
        <label>
          <span>Направление</span>
          <select name="direction">
            <option>Современный танец</option>
            <option>Балет</option>
            <option>Растяжка</option>
            <option>Пилатес</option>
            <option>Занятия для детей</option>
          </select>
        </label>
        <label class="consent">
          <input type="checkbox" required />
          <span>Я согласен с политикой конфиденциальности</span>
        </label>
        <button class="button button--dark" type="submit">Отправить заявку ${arrow}</button>
        <p class="form-message" role="status" aria-live="polite"></p>
      </form>
    </section>
  </main>

  <footer class="footer" id="contacts">
    <div class="footer__top">
      <div class="footer__brand">
        <span>${content.brand.name}<sup>°</sup></span>
        <small>${content.brand.descriptor}</small>
      </div>
      <div class="footer__intro">
        <p class="eyebrow eyebrow--light">Контакты /</p>
        <h2>${content.contacts.title}</h2>
        <p>${content.contacts.text}</p>
      </div>
    </div>
    <div class="footer__grid">
      <div>
        <span class="footer__label">Связаться</span>
        <a href="tel:${content.contacts.phoneLink}">${content.contacts.phone}</a>
        <a href="mailto:${content.contacts.email}">${content.contacts.email}</a>
      </div>
      <div>
        <span class="footer__label">Адрес</span>
        <p>${content.contacts.address}</p>
      </div>
      <div>
        <span class="footer__label">Мы в сети</span>
        ${content.contacts.socials.map((social) => `<a href="#">${social} ↗</a>`).join("")}
      </div>
      <div>
        <span class="footer__label">Навигация</span>
        ${content.navigation.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </div>
    <div class="footer__bottom">
      <span>© ${new Date().getFullYear()} ${content.brand.name}</span>
      <span>Сайт готов к вашему контенту</span>
      <a href="#top">Наверх ↑</a>
    </div>
  </footer>
`;

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  mobileMenu.classList.toggle("is-open", !open);
  document.body.classList.toggle("menu-open", !open);
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelector(".signup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector(".form-message");
  const name = new FormData(form).get("name");

  message.textContent = `${name}, заявка принята. Подключите форму к своей CRM или почте перед публикацией.`;
  form.reset();
});
