(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const t={brand:{name:"Валерия",descriptor:"студия движения"},navigation:[["Направления","#directions"],["О студии","#about"],["События","#events"],["Абонементы","#offers"],["Контакты","#contacts"]],hero:{eyebrow:"танец · тело · свобода",title:`Найди свой
природный голос`,quote:"Пространство, где можно слышать тело, раскрывать характер и двигаться без страха ошибиться.",button:"Записаться на первое занятие"},trailer:{title:"Видео о студии",videos:[{label:"Трейлер",cta:"Смотреть трейлер",src:"/videos/trailer.mp4",poster:"/videos/trailer-poster.jpg"},{label:"Фрагмент урока",cta:"Смотреть фрагмент",src:"/videos/sample.mp4",poster:"/videos/sample-poster.jpg"}]},intro:{eyebrow:"Направления /",title:"Откройте мир движения и гармонии",text:"Занятия для взрослых и детей с любым уровнем подготовки. Выберите практику, которая подходит вашему ритму, целям и настроению."},directions:[{number:"01",title:"Современный танец",text:"Свобода, координация и собственный язык движения.",image:"/images/event-duet.jpg",className:"direction-card--wide"},{number:"02",title:"Балет",text:"База, осанка, музыкальность и точность.",image:"/images/hero-dance.jpg",className:"direction-card--tall"},{number:"03",title:"Растяжка",text:"Мягкая работа с гибкостью и диапазоном движения.",color:"pink"},{number:"04",title:"Пилатес",text:"Сильный центр, мобильность и бережная нагрузка.",color:"graphite"},{number:"05",title:"Практика для детей",text:"Творчество, дисциплина и удовольствие от движения.",image:"/images/about-dancer.jpg",className:"direction-card--wide direction-card--focus-top"}],about:{eyebrow:"О студии /",title:"Место, где рождается движение",text:"FORMA открыта для всех — независимо от возраста, опыта и уровня подготовки. Мы верим, что движение помогает лучше чувствовать себя, свободнее выражать эмоции и находить единомышленников.",stats:[["12","направлений"],["18","педагогов"],["7","дней в неделю"]]},benefits:["Раскрыть творческий потенциал и выйти на сцену","Обрести свободу движения и улучшить осанку","Развить силу, гибкость, выносливость и баланс","Научиться слышать музыку и выражать эмоции телом","Войти в круг творческих и открытых людей"],events:[{type:"Новый набор",date:"12 сентября",title:"Современный танец с нуля",image:"/images/event-duet.jpg"},{type:"Мастер-класс",date:"21 сентября",title:"Пластика и импровизация",image:"/images/about-dancer.jpg"},{type:"Открытая практика",date:"28 сентября",title:"Утренний балетный класс",image:"/images/hero-dance.jpg"}],offer:{eyebrow:"Спецпредложение /",title:"Начните двигаться с удовольствием",items:[["Первое занятие","900 ₽"],["4 занятия · 14 дней","3 200 ₽"],["8 занятий · 30 дней","6 900 ₽"]],note:"При покупке абонемента в день первого занятия — скидка 10%."},contacts:{title:"Давайте знакомиться",text:"Напишите нам по поводу занятий или задайте любой вопрос. Мы поможем выбрать подходящее направление и группу.",phone:"+7 900 000-00-00",phoneLink:"+79000000000",email:"hello@forma-studio.ru",address:"Ваш город, ваша улица, 10",socials:["Telegram","VKontakte","YouTube"]}},$=document.querySelector("#app"),c=`
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
`,y=t.directions.map(e=>`
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
    `).join(""),w=t.events.map((e,a)=>`
      <article class="event-card reveal" style="--delay: ${a*80}ms">
        <a class="event-card__image" href="#signup" aria-label="${e.title}">
          <img src="${e.image}" alt="" loading="lazy" />
          <span class="event-card__index">0${a+1}</span>
        </a>
        <div class="event-card__meta">
          <span>${e.type}</span>
          <span>${e.date}</span>
        </div>
        <h3>${e.title}</h3>
        <a class="text-link" href="#signup">Подробнее ${c}</a>
      </article>
    `).join(""),L=`
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5.5v13l10.5-6.5z" />
  </svg>
`,j=t.trailer.videos.map((e,a)=>`
      <button
        class="trailer__tab"
        type="button"
        role="tab"
        id="trailer-tab-${a}"
        aria-selected="${a===0}"
        aria-controls="trailer-panel"
        tabindex="${a===0?0:-1}"
      >${e.label}</button>
    `).join(""),v=t.trailer.videos[0];$.innerHTML=`
  <a class="skip-link" href="#main">К основному контенту</a>

  <header class="site-header">
    <a class="brand" href="#top" aria-label="На главную">
      <span class="brand__name">${t.brand.name}<sup>°</sup></span>
      <span class="brand__descriptor">${t.brand.descriptor}</span>
    </a>
    <nav class="desktop-nav" aria-label="Основная навигация">
      ${t.navigation.map(([e,a])=>`<a href="${a}">${e}</a>`).join("")}
    </nav>
    <a class="header-cta" href="#signup">Записаться ${c}</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Открыть меню">
      <span></span><span></span>
    </button>
    <nav class="mobile-menu" id="mobile-menu" aria-label="Мобильная навигация">
      ${t.navigation.map(([e,a],r)=>`<a href="${a}"><span>0${r+1}</span>${e}</a>`).join("")}
      <a class="mobile-menu__cta" href="#signup">Записаться</a>
    </nav>
  </header>

  <main id="main">
    <section class="hero" id="top">
      <img class="hero__image" src="/images/hero-dance.jpg" alt="Танцоры на репетиции" />
      <div class="hero__veil"></div>
      <div class="hero__content">
        <p class="eyebrow eyebrow--light">${t.hero.eyebrow}</p>
        <h1>${t.hero.title.replace(`
`,"<br />")}</h1>
        <div class="hero__bottom">
          <p>${t.hero.quote}</p>
          <a class="button button--blue" href="#signup">${t.hero.button} ${c}</a>
        </div>
      </div>
      <a class="scroll-cue" href="#directions" aria-label="Прокрутить вниз"><span></span>SCROLL</a>
    </section>

    <section class="trailer" id="video" aria-labelledby="trailer-title">
      <h2 class="visually-hidden" id="trailer-title">${t.trailer.title}</h2>
      <div class="trailer__inner reveal">
        <div class="trailer__tabs" role="tablist" aria-label="${t.trailer.title}">
          ${j}
        </div>
        <div class="trailer__frame" id="trailer-panel" role="tabpanel" aria-labelledby="trailer-tab-0">
          <video
            class="trailer__video"
            src="${v.src}"
            poster="${v.poster||""}"
            muted
            loop
            playsinline
            preload="metadata"
          ></video>
          <span class="trailer__shade" aria-hidden="true"></span>
          <button class="trailer__play" type="button">
            <span class="trailer__play-icon">${L}</span>
            <span class="trailer__play-label">${v.cta}</span>
          </button>
        </div>
      </div>
    </section>

    <section class="intro section" id="directions">
      <div class="section__head reveal">
        <p class="eyebrow">${t.intro.eyebrow}</p>
        <div>
          <h2>${t.intro.title}</h2>
          <p class="section__lead">${t.intro.text}</p>
        </div>
      </div>
      <div class="directions-grid reveal">
        ${y}
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
        <p class="eyebrow eyebrow--light">${t.about.eyebrow}</p>
        <h2>${t.about.title}</h2>
        <p class="about__text">${t.about.text}</p>
        <div class="stats">
          ${t.about.stats.map(([e,a])=>`<div><strong>${e}</strong><span>${a}</span></div>`).join("")}
        </div>
        <a class="button button--outline" href="#events">Узнать больше ${c}</a>
      </div>
    </section>

    <section class="benefits section">
      <div class="benefits__title reveal">
        <p class="eyebrow">Здесь вы сможете /</p>
        <h2>Двигаться<br />в своём ритме</h2>
      </div>
      <div class="benefits__list reveal">
        ${t.benefits.map((e,a)=>`
              <div class="benefit-row">
                <span>0${a+1}</span>
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
        ${w}
      </div>
      <a class="button button--dark events__all" href="#signup">Смотреть все события ${c}</a>
    </section>

    <section class="offer" id="offers">
      <div class="offer__heading reveal">
        <p class="eyebrow eyebrow--light">${t.offer.eyebrow}</p>
        <h2>${t.offer.title}</h2>
      </div>
      <div class="offer__pricing reveal">
        ${t.offer.items.map(([e,a])=>`
              <div class="price-row">
                <span>${e}</span>
                <strong>${a}</strong>
              </div>
            `).join("")}
        <p>${t.offer.note}</p>
        <a class="button button--light" href="#signup">Выбрать занятие ${c}</a>
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
        <button class="button button--dark" type="submit">Отправить заявку ${c}</button>
        <p class="form-message" role="status" aria-live="polite"></p>
      </form>
    </section>
  </main>

  <footer class="footer" id="contacts">
    <div class="footer__top">
      <div class="footer__brand">
        <span>${t.brand.name}<sup>°</sup></span>
        <small>${t.brand.descriptor}</small>
      </div>
      <div class="footer__intro">
        <p class="eyebrow eyebrow--light">Контакты /</p>
        <h2>${t.contacts.title}</h2>
        <p>${t.contacts.text}</p>
      </div>
    </div>
    <div class="footer__grid">
      <div>
        <span class="footer__label">Связаться</span>
        <a href="tel:${t.contacts.phoneLink}">${t.contacts.phone}</a>
        <a href="mailto:${t.contacts.email}">${t.contacts.email}</a>
      </div>
      <div>
        <span class="footer__label">Адрес</span>
        <p>${t.contacts.address}</p>
      </div>
      <div>
        <span class="footer__label">Мы в сети</span>
        ${t.contacts.socials.map(e=>`<a href="#">${e} ↗</a>`).join("")}
      </div>
      <div>
        <span class="footer__label">Навигация</span>
        ${t.navigation.map(([e,a])=>`<a href="${a}">${e}</a>`).join("")}
      </div>
    </div>
    <div class="footer__bottom">
      <span>© ${new Date().getFullYear()} ${t.brand.name}</span>
      <span>Сайт готов к вашему контенту</span>
      <a href="#top">Наверх ↑</a>
    </div>
  </footer>
`;const p=document.querySelector(".menu-toggle"),b=document.querySelector(".mobile-menu");p.addEventListener("click",()=>{const e=p.getAttribute("aria-expanded")==="true";p.setAttribute("aria-expanded",String(!e)),b.classList.toggle("is-open",!e),document.body.classList.toggle("menu-open",!e)});b.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{p.setAttribute("aria-expanded","false"),b.classList.remove("is-open"),document.body.classList.remove("menu-open")})});const h=new IntersectionObserver(e=>{e.forEach(a=>{a.isIntersecting&&(a.target.classList.add("is-visible"),h.unobserve(a.target))})},{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>h.observe(e));const n=document.querySelector(".trailer__frame"),i=n.querySelector(".trailer__video"),q=n.querySelector(".trailer__play"),x=n.querySelector(".trailer__play-label"),d=[...document.querySelectorAll(".trailer__tab")],k=window.matchMedia("(prefers-reduced-motion: reduce)");let m=!1;const E=()=>m&&!k.matches&&!navigator.connection?.saveData&&!n.classList.contains("is-engaged"),f=()=>{E()&&i.play().catch(()=>{})},_=()=>{n.classList.remove("is-engaged"),i.controls=!1,i.muted=!0,i.loop=!0},g=e=>{const a=t.trailer.videos[e];d.forEach((r,l)=>{const s=l===e;r.setAttribute("aria-selected",String(s)),r.tabIndex=s?0:-1}),n.setAttribute("aria-labelledby",d[e].id),n.classList.remove("has-error"),x.textContent=a.cta,_(),i.poster=a.poster||"",i.src=a.src,f()};d.forEach((e,a)=>{e.addEventListener("click",()=>{e.getAttribute("aria-selected")!=="true"&&g(a)}),e.addEventListener("keydown",r=>{const l=d.length-1,s={ArrowRight:a===l?0:a+1,ArrowLeft:a===0?l:a-1,Home:0,End:l};r.key in s&&(r.preventDefault(),d[s[r.key]].focus(),g(s[r.key]))})});q.addEventListener("click",()=>{n.classList.add("is-engaged"),i.loop=!1,i.muted=!1,i.controls=!0,i.currentTime=0,i.play().catch(()=>{}),i.focus()});i.addEventListener("ended",()=>{_(),i.currentTime=0,f()});i.addEventListener("error",()=>n.classList.add("has-error"));new IntersectionObserver(([e])=>{m=e.isIntersecting,m?f():n.classList.contains("is-engaged")||i.pause()},{threshold:.35}).observe(n);document.querySelector(".signup-form").addEventListener("submit",e=>{e.preventDefault();const a=e.currentTarget,r=a.querySelector(".form-message"),l=new FormData(a).get("name");r.textContent=`${l}, заявка принята. Подключите форму к своей CRM или почте перед публикацией.`,a.reset()});
