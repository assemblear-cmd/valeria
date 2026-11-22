(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const g of n.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const a={brand:{name:"Валерия",descriptor:"студия движения"},navigation:[["Направления","#directions"],["О студии","#about"],["События","#events"],["Абонементы","#offers"],["Контакты","#contacts"]],hero:{eyebrow:"танец · тело · свобода",title:`Найди свой
природный голос`,quote:"Пространство, где можно слышать тело, раскрывать характер и двигаться без страха ошибиться.",button:"Записаться на первое занятие"},trailer:{title:"Видео о студии",videos:[{label:"Трейлер",cta:"Смотреть трейлер",youtube:"https://youtu.be/VmiVhB72dew"},{label:"Фрагмент урока",cta:"Смотреть фрагмент",src:"/videos/sample.mp4",poster:"/videos/sample-poster.jpg"}]},intro:{eyebrow:"Направления /",title:"Откройте мир движения и гармонии",text:"Занятия для взрослых и детей с любым уровнем подготовки. Выберите практику, которая подходит вашему ритму, целям и настроению."},directions:[{number:"01",title:"Современный танец",text:"Свобода, координация и собственный язык движения.",image:"/images/event-duet.jpg",className:"direction-card--wide"},{number:"02",title:"Балет",text:"База, осанка, музыкальность и точность.",image:"/images/hero-dance.jpg",className:"direction-card--tall"},{number:"03",title:"Растяжка",text:"Мягкая работа с гибкостью и диапазоном движения.",color:"pink"},{number:"04",title:"Пилатес",text:"Сильный центр, мобильность и бережная нагрузка.",color:"graphite"},{number:"05",title:"Практика для детей",text:"Творчество, дисциплина и удовольствие от движения.",image:"/images/about-dancer.jpg",className:"direction-card--wide direction-card--focus-top"}],about:{eyebrow:"О студии /",title:"Место, где рождается движение",text:"FORMA открыта для всех — независимо от возраста, опыта и уровня подготовки. Мы верим, что движение помогает лучше чувствовать себя, свободнее выражать эмоции и находить единомышленников.",stats:[["12","направлений"],["18","педагогов"],["7","дней в неделю"]]},benefits:["Раскрыть творческий потенциал и выйти на сцену","Обрести свободу движения и улучшить осанку","Развить силу, гибкость, выносливость и баланс","Научиться слышать музыку и выражать эмоции телом","Войти в круг творческих и открытых людей"],events:[{type:"Новый набор",date:"12 сентября",title:"Современный танец с нуля",image:"/images/event-duet.jpg"},{type:"Мастер-класс",date:"21 сентября",title:"Пластика и импровизация",image:"/images/about-dancer.jpg"},{type:"Открытая практика",date:"28 сентября",title:"Утренний балетный класс",image:"/images/hero-dance.jpg"}],offer:{eyebrow:"Спецпредложение /",title:"Начните двигаться с удовольствием",items:[["Первое занятие","900 ₽"],["4 занятия · 14 дней","3 200 ₽"],["8 занятий · 30 дней","6 900 ₽"]],note:"При покупке абонемента в день первого занятия — скидка 10%."},contacts:{title:"Давайте знакомиться",text:"Напишите нам по поводу занятий или задайте любой вопрос. Мы поможем выбрать подходящее направление и группу.",phone:"+7 900 000-00-00",phoneLink:"+79000000000",email:"hello@forma-studio.ru",address:"Ваш город, ваша улица, 10",socials:["Telegram","VKontakte","YouTube"]}},x=document.querySelector("#app"),c=`
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
`,Y=a.directions.map(e=>`
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
    `).join(""),S=a.events.map((e,t)=>`
      <article class="event-card reveal" style="--delay: ${t*80}ms">
        <a class="event-card__image" href="#signup" aria-label="${e.title}">
          <img src="${e.image}" alt="" loading="lazy" />
          <span class="event-card__index">0${t+1}</span>
        </a>
        <div class="event-card__meta">
          <span>${e.type}</span>
          <span>${e.date}</span>
        </div>
        <h3>${e.title}</h3>
        <a class="text-link" href="#signup">Подробнее ${c}</a>
      </article>
    `).join(""),j=`
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5.5v13l10.5-6.5z" />
  </svg>
`,P=e=>{if(!e)return null;const t=String(e).trim(),o=r=>typeof r=="string"&&/^[\w-]{11}$/.test(r);if(o(t))return t;try{const r=new URL(t),s=r.hostname.replace(/^(www|m)\./,"");let n=null;return s==="youtu.be"?n=r.pathname.split("/")[1]:(s==="youtube.com"||s==="youtube-nocookie.com")&&(n=r.searchParams.get("v")||r.pathname.match(/^\/(?:embed|shorts|live)\/([^/]+)/)?.[1]),o(n)?n:null}catch{return null}},h=a.trailer.videos.map(e=>{const t=P(e.youtube);if(e.youtube&&!t&&console.warn(`Не удалось распознать ссылку на YouTube: ${e.youtube}`),!t)return e;const o=r=>`https://i.ytimg.com/vi/${t}/${r}.jpg`;return{...e,youtubeId:t,poster:e.poster||o("maxresdefault"),posterFallback:o("hqdefault")}}),O=h.map((e,t)=>`
      <button
        class="trailer__tab"
        type="button"
        role="tab"
        id="trailer-tab-${t}"
        aria-selected="${t===0}"
        aria-controls="trailer-panel"
        tabindex="${t===0?0:-1}"
      >${e.label}</button>
    `).join("");x.innerHTML=`
  <a class="skip-link" href="#main">К основному контенту</a>

  <header class="site-header">
    <a class="brand" href="#top" aria-label="На главную">
      <span class="brand__name">${a.brand.name}<sup>°</sup></span>
      <span class="brand__descriptor">${a.brand.descriptor}</span>
    </a>
    <nav class="desktop-nav" aria-label="Основная навигация">
      ${a.navigation.map(([e,t])=>`<a href="${t}">${e}</a>`).join("")}
    </nav>
    <a class="header-cta" href="#signup">Записаться ${c}</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Открыть меню">
      <span></span><span></span>
    </button>
    <nav class="mobile-menu" id="mobile-menu" aria-label="Мобильная навигация">
      ${a.navigation.map(([e,t],o)=>`<a href="${t}"><span>0${o+1}</span>${e}</a>`).join("")}
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
          <a class="button button--blue" href="#signup">${a.hero.button} ${c}</a>
        </div>
      </div>
      <a class="scroll-cue" href="#directions" aria-label="Прокрутить вниз"><span></span>SCROLL</a>
    </section>

    <section class="trailer" id="video" aria-labelledby="trailer-title">
      <h2 class="visually-hidden" id="trailer-title">${a.trailer.title}</h2>
      <div class="trailer__inner reveal">
        <div class="trailer__tabs" role="tablist" aria-label="${a.trailer.title}">
          ${O}
        </div>
        <div class="trailer__frame" id="trailer-panel" role="tabpanel" aria-labelledby="trailer-tab-0">
          <video class="trailer__video" muted loop playsinline preload="metadata"></video>
          <img class="trailer__poster" alt="" decoding="async" />
          <span class="trailer__shade" aria-hidden="true"></span>
          <button class="trailer__play" type="button">
            <span class="trailer__play-icon">${j}</span>
            <span class="trailer__play-label">${h[0].cta}</span>
          </button>
          <div class="trailer__fallback" role="status" aria-live="polite">
            <p class="trailer__fallback-text"></p>
            <a class="trailer__fallback-link" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">Смотреть на YouTube ↗</a>
          </div>
        </div>
      </div>
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
        ${Y}
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
          ${a.about.stats.map(([e,t])=>`<div><strong>${e}</strong><span>${t}</span></div>`).join("")}
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
        ${a.benefits.map((e,t)=>`
              <div class="benefit-row">
                <span>0${t+1}</span>
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
        ${S}
      </div>
      <a class="button button--dark events__all" href="#signup">Смотреть все события ${c}</a>
    </section>

    <section class="offer" id="offers">
      <div class="offer__heading reveal">
        <p class="eyebrow eyebrow--light">${a.offer.eyebrow}</p>
        <h2>${a.offer.title}</h2>
      </div>
      <div class="offer__pricing reveal">
        ${a.offer.items.map(([e,t])=>`
              <div class="price-row">
                <span>${e}</span>
                <strong>${t}</strong>
              </div>
            `).join("")}
        <p>${a.offer.note}</p>
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
        ${a.navigation.map(([e,t])=>`<a href="${t}">${e}</a>`).join("")}
      </div>
    </div>
    <div class="footer__bottom">
      <span>© ${new Date().getFullYear()} ${a.brand.name}</span>
      <span>Сайт готов к вашему контенту</span>
      <a href="#top">Наверх ↑</a>
    </div>
  </footer>
`;const f=document.querySelector(".menu-toggle"),$=document.querySelector(".mobile-menu");f.addEventListener("click",()=>{const e=f.getAttribute("aria-expanded")==="true";f.setAttribute("aria-expanded",String(!e)),$.classList.toggle("is-open",!e),document.body.classList.toggle("menu-open",!e)});$.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{f.setAttribute("aria-expanded","false"),$.classList.remove("is-open"),document.body.classList.remove("menu-open")})});const E=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("is-visible"),E.unobserve(t.target))})},{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>E.observe(e));const l=document.querySelector(".trailer__frame"),i=l.querySelector(".trailer__video"),d=l.querySelector(".trailer__poster"),F=l.querySelector(".trailer__play"),M=l.querySelector(".trailer__play-label"),v=[...document.querySelectorAll(".trailer__tab")],R=window.matchMedia("(prefers-reduced-motion: reduce)");let w=!1;const V=l.querySelector(".trailer__fallback-text"),C=l.querySelector(".trailer__fallback-link");let b=h[0],p=null,T=null,y=null,u=0,m=0;const N=()=>w&&!b.youtubeId&&!R.matches&&!navigator.connection?.saveData&&!l.classList.contains("is-engaged"),k=()=>{N()&&i.play().catch(()=>{})},I=()=>{l.classList.remove("is-engaged"),i.controls=!1,i.muted=!0,i.loop=!0},B=()=>(y??=new Promise((e,t)=>{if(window.YT?.Player){e(window.YT);return}const o=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{o?.(),e(window.YT)};const r=document.createElement("script");r.src="https://www.youtube.com/iframe_api",r.async=!0,r.addEventListener("error",()=>{y=null,r.remove(),t(new Error("YouTube iframe API is unavailable"))}),document.head.append(r)}),y),_=e=>{V.textContent=e,l.classList.add("has-fallback")},q=()=>{u+=1,clearTimeout(m),T?.destroy(),T=null,p?.remove(),p=null,l.classList.remove("has-fallback")},D=async e=>{q();const t=u;C.href=`https://www.youtube.com/watch?v=${e.youtubeId}`;const o=document.createElement("div");p=document.createElement("div"),p.className="trailer__embed",p.append(o),l.append(p),m=setTimeout(()=>_("Видео долго загружается. Можно посмотреть его прямо на YouTube."),12e3);try{const r=await B();if(t!==u)return;T=new r.Player(o,{videoId:e.youtubeId,playerVars:{autoplay:1,rel:0,playsinline:1},events:{onReady:s=>{if(t!==u)return;clearTimeout(m),l.classList.remove("has-fallback");const n=s.target.getIframe();n.title=`${a.trailer.title}: ${e.label}`,s.target.playVideo(),n.focus()},onError:s=>{t===u&&(clearTimeout(m),console.warn("YouTube player error",s.data),_("Это видео не запускается на сайте. Посмотрите его на YouTube."))}}})}catch{if(t!==u)return;clearTimeout(m),_("Не удалось подключиться к YouTube. Попробуйте открыть видео там.")}},L=e=>{const t=h[e];if(b=t,v.forEach((o,r)=>{const s=r===e;o.setAttribute("aria-selected",String(s)),o.tabIndex=s?0:-1}),l.setAttribute("aria-labelledby",v[e].id),l.classList.remove("has-error"),l.classList.toggle("is-youtube",!!t.youtubeId),M.textContent=t.cta,q(),I(),t.youtubeId){i.pause(),i.removeAttribute("src"),i.removeAttribute("poster"),i.load(),d.src=t.poster;return}d.removeAttribute("src"),i.poster=t.poster||"",i.src=t.src,k()},A=()=>{const e=b.posterFallback;e&&d.getAttribute("src")!==e&&(d.src=e)};d.addEventListener("load",()=>{d.naturalWidth<=120&&A()});d.addEventListener("error",A);v.forEach((e,t)=>{e.addEventListener("click",()=>{e.getAttribute("aria-selected")!=="true"&&L(t)}),e.addEventListener("keydown",o=>{const r=v.length-1,s={ArrowRight:t===r?0:t+1,ArrowLeft:t===0?r:t-1,Home:0,End:r};o.key in s&&(o.preventDefault(),v[s[o.key]].focus(),L(s[o.key]))})});F.addEventListener("click",()=>{if(l.classList.add("is-engaged"),b.youtubeId){D(b);return}i.loop=!1,i.muted=!1,i.controls=!0,i.currentTime=0,i.play().catch(()=>{}),i.focus()});i.addEventListener("ended",()=>{I(),i.currentTime=0,k()});i.addEventListener("error",()=>{b.youtubeId||l.classList.add("has-error")});L(0);new IntersectionObserver(([e])=>{w=e.isIntersecting,w?k():l.classList.contains("is-engaged")||i.pause()},{threshold:.35}).observe(l);document.querySelector(".signup-form").addEventListener("submit",e=>{e.preventDefault();const t=e.currentTarget,o=t.querySelector(".form-message"),r=new FormData(t).get("name");o.textContent=`${r}, заявка принята. Подключите форму к своей CRM или почте перед публикацией.`,t.reset()});
