(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const a={brand:{name:"FORMA",descriptor:"студия движения"},navigation:[["Направления","#directions"],["О студии","#about"],["События","#events"],["Абонементы","#offers"],["Контакты","#contacts"]],hero:{eyebrow:"танец · тело · свобода",title:`Найди свой
природный голос`,quote:"Пространство, где можно слышать тело, раскрывать характер и двигаться без страха ошибиться.",button:"Записаться на первое занятие"},intro:{eyebrow:"Направления /",title:"Откройте мир движения и гармонии",text:"Занятия для взрослых и детей с любым уровнем подготовки. Выберите практику, которая подходит вашему ритму, целям и настроению."},directions:[{number:"01",title:"Современный танец",text:"Свобода, координация и собственный язык движения.",image:"/images/event-duet.jpg",className:"direction-card--wide"},{number:"02",title:"Балет",text:"База, осанка, музыкальность и точность.",image:"/images/hero-dance.jpg",className:"direction-card--tall"},{number:"03",title:"Растяжка",text:"Мягкая работа с гибкостью и диапазоном движения.",color:"pink"},{number:"04",title:"Пилатес",text:"Сильный центр, мобильность и бережная нагрузка.",color:"graphite"},{number:"05",title:"Практика для детей",text:"Творчество, дисциплина и удовольствие от движения.",image:"/images/about-dancer.jpg",className:"direction-card--wide direction-card--focus-top"}],about:{eyebrow:"О студии /",title:"Место, где рождается движение",text:"FORMA открыта для всех — независимо от возраста, опыта и уровня подготовки. Мы верим, что движение помогает лучше чувствовать себя, свободнее выражать эмоции и находить единомышленников.",stats:[["12","направлений"],["18","педагогов"],["7","дней в неделю"]]},benefits:["Раскрыть творческий потенциал и выйти на сцену","Обрести свободу движения и улучшить осанку","Развить силу, гибкость, выносливость и баланс","Научиться слышать музыку и выражать эмоции телом","Войти в круг творческих и открытых людей"],events:[{type:"Новый набор",date:"12 сентября",title:"Современный танец с нуля",image:"/images/event-duet.jpg"},{type:"Мастер-класс",date:"21 сентября",title:"Пластика и импровизация",image:"/images/about-dancer.jpg"},{type:"Открытая практика",date:"28 сентября",title:"Утренний балетный класс",image:"/images/hero-dance.jpg"}],offer:{eyebrow:"Спецпредложение /",title:"Начните двигаться с удовольствием",items:[["Первое занятие","900 ₽"],["4 занятия · 14 дней","3 200 ₽"],["8 занятий · 30 дней","6 900 ₽"]],note:"При покупке абонемента в день первого занятия — скидка 10%."},contacts:{title:"Давайте знакомиться",text:"Напишите нам по поводу занятий или задайте любой вопрос. Мы поможем выбрать подходящее направление и группу.",phone:"+7 900 000-00-00",phoneLink:"+79000000000",email:"hello@forma-studio.ru",address:"Ваш город, ваша улица, 10",socials:["Telegram","VKontakte","YouTube"]}},u=document.querySelector("#app"),n=`
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
`,b=a.directions.map(e=>`
      <article
        class="direction-card ${e.className||""} ${e.color?`direction-card--${e.color}`:""}"
        ${e.image?`style="--card-image: url('${e.image}')"`:""}
      >
        <div class="direction-card__top">
          <span>${e.number}</span>
          <span class="direction-card__arrow">↗</span>
        </div>
        <div class="direction-card__copy">
          <h3>${e.title}</h3>
          <p>${e.text}</p>
        </div>
      </article>
    `).join(""),v=a.events.map((e,s)=>`
      <article class="event-card reveal" style="--delay: ${s*80}ms">
        <a class="event-card__image" href="#signup" aria-label="${e.title}">
          <img src="${e.image}" alt="" loading="lazy" />
          <span class="event-card__index">0${s+1}</span>
        </a>
        <div class="event-card__meta">
          <span>${e.type}</span>
          <span>${e.date}</span>
        </div>
        <h3>${e.title}</h3>
        <a class="text-link" href="#signup">Подробнее ${n}</a>
      </article>
    `).join("");u.innerHTML=`
  <a class="skip-link" href="#main">К основному контенту</a>

  <header class="site-header">
    <a class="brand" href="#top" aria-label="На главную">
      <span class="brand__name">${a.brand.name}<sup>°</sup></span>
      <span class="brand__descriptor">${a.brand.descriptor}</span>
    </a>
    <nav class="desktop-nav" aria-label="Основная навигация">
      ${a.navigation.map(([e,s])=>`<a href="${s}">${e}</a>`).join("")}
    </nav>
    <a class="header-cta" href="#signup">Записаться ${n}</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Открыть меню">
      <span></span><span></span>
    </button>
    <nav class="mobile-menu" id="mobile-menu" aria-label="Мобильная навигация">
      ${a.navigation.map(([e,s],o)=>`<a href="${s}"><span>0${o+1}</span>${e}</a>`).join("")}
      <a class="mobile-menu__cta" href="#signup">Записаться</a>
    </nav>
  </header>

  <main id="main">
    <section class="hero" id="top">
      <img class="hero__image" src="/images/hero-dance.jpg" alt="Танцоры на репетиции" />
      <div class="hero__veil"></div>
      <div class="hero__content">
        <p class="eyebrow eyebrow--light">${a.hero.eyebrow}</p>
        <h1>${a.hero.title.replace(`
`,"<br />")}</h1>
        <div class="hero__bottom">
          <p>${a.hero.quote}</p>
          <a class="button button--blue" href="#signup">${a.hero.button} ${n}</a>
        </div>
      </div>
      <a class="scroll-cue" href="#directions" aria-label="Прокрутить вниз"><span></span>SCROLL</a>
    </section>

    <section class="intro section" id="directions">
      <div class="section__head reveal">
        <p class="eyebrow">${a.intro.eyebrow}</p>
        <div>
          <h2>${a.intro.title}</h2>
          <p class="section__lead">${a.intro.text}</p>
        </div>
      </div>
      <div class="directions-grid reveal">
        ${b}
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
        <p class="eyebrow eyebrow--light">${a.about.eyebrow}</p>
        <h2>${a.about.title}</h2>
        <p class="about__text">${a.about.text}</p>
        <div class="stats">
          ${a.about.stats.map(([e,s])=>`<div><strong>${e}</strong><span>${s}</span></div>`).join("")}
        </div>
        <a class="button button--outline" href="#events">Узнать больше ${n}</a>
      </div>
    </section>

    <section class="benefits section">
      <div class="benefits__title reveal">
        <p class="eyebrow">Здесь вы сможете /</p>
        <h2>Двигаться<br />в своём ритме</h2>
      </div>
      <div class="benefits__list reveal">
        ${a.benefits.map((e,s)=>`
              <div class="benefit-row">
                <span>0${s+1}</span>
                <h3>${e}</h3>
                <span class="benefit-row__icon">+</span>
              </div>
            `).join("")}
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
        ${v}
      </div>
      <a class="button button--dark events__all" href="#signup">Смотреть все события ${n}</a>
    </section>

    <section class="offer" id="offers">
      <div class="offer__heading reveal">
        <p class="eyebrow eyebrow--light">${a.offer.eyebrow}</p>
        <h2>${a.offer.title}</h2>
      </div>
      <div class="offer__pricing reveal">
        ${a.offer.items.map(([e,s])=>`
              <div class="price-row">
                <span>${e}</span>
                <strong>${s}</strong>
              </div>
            `).join("")}
        <p>${a.offer.note}</p>
        <a class="button button--light" href="#signup">Выбрать занятие ${n}</a>
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
        <button class="button button--dark" type="submit">Отправить заявку ${n}</button>
        <p class="form-message" role="status" aria-live="polite"></p>
      </form>
    </section>
  </main>

  <footer class="footer" id="contacts">
    <div class="footer__top">
      <div class="footer__brand">
        <span>${a.brand.name}<sup>°</sup></span>
        <small>${a.brand.descriptor}</small>
      </div>
      <div class="footer__intro">
        <p class="eyebrow eyebrow--light">Контакты /</p>
        <h2>${a.contacts.title}</h2>
        <p>${a.contacts.text}</p>
      </div>
    </div>
    <div class="footer__grid">
      <div>
        <span class="footer__label">Связаться</span>
        <a href="tel:${a.contacts.phoneLink}">${a.contacts.phone}</a>
        <a href="mailto:${a.contacts.email}">${a.contacts.email}</a>
      </div>
      <div>
        <span class="footer__label">Адрес</span>
        <p>${a.contacts.address}</p>
      </div>
      <div>
        <span class="footer__label">Мы в сети</span>
        ${a.contacts.socials.map(e=>`<a href="#">${e} ↗</a>`).join("")}
      </div>
      <div>
        <span class="footer__label">Навигация</span>
        ${a.navigation.map(([e,s])=>`<a href="${s}">${e}</a>`).join("")}
      </div>
    </div>
    <div class="footer__bottom">
      <span>© ${new Date().getFullYear()} ${a.brand.name}</span>
      <span>Сайт готов к вашему контенту</span>
      <a href="#top">Наверх ↑</a>
    </div>
  </footer>
`;const l=document.querySelector(".menu-toggle"),d=document.querySelector(".mobile-menu");l.addEventListener("click",()=>{const e=l.getAttribute("aria-expanded")==="true";l.setAttribute("aria-expanded",String(!e)),d.classList.toggle("is-open",!e),document.body.classList.toggle("menu-open",!e)});d.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{l.setAttribute("aria-expanded","false"),d.classList.remove("is-open"),document.body.classList.remove("menu-open")})});const p=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-visible"),p.unobserve(s.target))})},{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>p.observe(e));document.querySelector(".signup-form").addEventListener("submit",e=>{e.preventDefault();const s=e.currentTarget,o=s.querySelector(".form-message"),r=new FormData(s).get("name");o.textContent=`${r}, заявка принята. Подключите форму к своей CRM или почте перед публикацией.`,s.reset()});
