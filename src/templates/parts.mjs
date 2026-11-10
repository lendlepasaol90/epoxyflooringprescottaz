import { site } from '../site.mjs';
import { esc } from '../lib/html.mjs';
import { services } from '../content/services/index.mjs';

export const phoneLink = (cls = '') => `<a class="${cls}" href="${site.phoneHref}">${esc(site.phone)}</a>`;

export function leadForm({ id, heading, intro, button = 'Request estimate', withMessage = false, preset = '', compact = false }) {
  const f = (n) => `${id}-${n}`;
  const opts = site.projectTypes.map((t) => `<option${t === preset ? ' selected' : ''}>${esc(t)}</option>`).join('');
  return `<form class="rf${compact ? ' rf--compact' : ''}" id="${id}" action="/api/lead" method="post" novalidate data-lead-form>
  ${heading ? `<p class="rf__title">${esc(heading)}</p>` : ''}
  ${intro ? `<p class="rf__intro">${esc(intro)}</p>` : ''}
  <div class="rf__grid">
    <p class="fl"><label for="${f('name')}">Name</label><input id="${f('name')}" name="name" type="text" autocomplete="name" required maxlength="80"><span class="fl__err" aria-live="polite"></span></p>
    <p class="fl"><label for="${f('phone')}">Phone</label><input id="${f('phone')}" name="phone" type="tel" autocomplete="tel" inputmode="tel" required><span class="fl__err" aria-live="polite"></span></p>
    <p class="fl"><label for="${f('email')}">Email</label><input id="${f('email')}" name="email" type="email" autocomplete="email" required maxlength="120"><span class="fl__err" aria-live="polite"></span></p>
    <p class="fl"><label for="${f('project')}">Project</label><select id="${f('project')}" name="project" required><option value="">Choose one</option>${opts}</select><span class="fl__err" aria-live="polite"></span></p>
    ${withMessage ? `<p class="fl fl--wide"><label for="${f('message')}">Notes <span class="fl__opt">optional</span></label><textarea id="${f('message')}" name="message" rows="3" maxlength="2000" placeholder="Size of the space, age of the home, timing"></textarea></p>` : ''}
    <span class="hp" aria-hidden="true"><label for="${f('company')}">Company</label><input id="${f('company')}" name="company" type="text" tabindex="-1" autocomplete="off"></span>
  </div>
  <button class="cta cta--slate rf__go" type="submit"><span>${esc(button)}</span></button>
  <p class="rf__note">Used only to reply about your project. See our <a href="/privacy-policy/">privacy policy</a>.</p>
  <div class="rf__msg" role="status" aria-live="polite"></div>
</form>`;
}

export function header(current = '') {
  const link = (href, label, key) => `<li><a href="${href}"${current === key ? ' aria-current="page"' : ''}>${label}</a></li>`;
  return `<a class="skip" href="#main">Skip to content</a>
<header class="mast" data-header>
  <div class="wrap mast__top">
    <a class="mast__tel" href="${site.phoneHref}"><span class="mast__tel-lbl">Call</span> ${esc(site.phone)}</a>
    <a class="crest" href="/" aria-label="${esc(site.name)} home">
      <!-- Logo placeholder: swap these spans for the final logo image. -->
      <span class="crest__frame" aria-hidden="true"></span><span class="crest__name">${esc(site.name)}</span>
    </a>
    <div class="mast__act">
      <button class="cta cta--slate cta--sm" type="button" data-pop aria-expanded="false" aria-controls="pop">Request estimate</button>
      <div class="pop" id="pop" role="dialog" aria-modal="false" aria-labelledby="pop-h" hidden>
        <button class="pop__x" type="button" data-pop-close aria-label="Close">×</button>
        <p class="pop__h" id="pop-h">Request a free estimate</p>
        <p class="pop__sub">Tell us a little about the floor. We will be in touch to arrange a visit.</p>
        ${leadForm({ id: 'pop-form', compact: true, button: 'Send request' })}
      </div>
      <button class="burger" type="button" data-burger aria-expanded="false" aria-controls="sheet-nav"><span class="visually-hidden">Menu</span><i></i></button>
    </div>
  </div>
  <nav class="mast__nav" aria-label="Main">
    <ul class="wrap">
      ${link('/', 'Home', 'home')}
      <li class="has-sub"><button type="button" class="sub-btn" aria-expanded="false" aria-controls="sub-svc">Services</button>
        <div class="sub" id="sub-svc"><ul>${services.map((s) => `<li><a href="/${s.slug}/"${current === s.slug ? ' aria-current="page"' : ''}>${esc(s.name)}</a></li>`).join('')}</ul></div></li>
      ${link('/about-us/', 'About us', 'about')}
      ${link('/service-areas/', 'Service areas', 'areas')}
      ${link('/contact-us/', 'Contact', 'contact')}
    </ul>
  </nav>
  <div class="sheet-nav" id="sheet-nav" hidden>
    <div class="wrap">
      <p class="sheet-nav__lbl">Services</p>
      <ul>${services.map((s) => `<li><a href="/${s.slug}/">${esc(s.name)}</a></li>`).join('')}</ul>
      <ul class="sheet-nav__pg"><li><a href="/">Home</a></li><li><a href="/about-us/">About us</a></li><li><a href="/service-areas/">Service areas</a></li><li><a href="/contact-us/">Contact</a></li></ul>
      <a class="cta cta--slate cta--block" href="${site.phoneHref}">Call ${esc(site.phone)}</a>
    </div>
  </div>
</header>`;
}

export function footer() {
  const m = site.map;
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(m.query)}&ll=${m.lat},${m.lng}&z=${m.zoom}&output=embed`;
  return `<footer class="foot">
  <div class="wrap foot__grid">
    <div class="foot__brand">
      <a class="crest crest--foot" href="/"><span class="crest__frame" aria-hidden="true"></span><span class="crest__name">${esc(site.name)}</span></a>
      <p>Garage, home, commercial and hangar floor coatings for Prescott and the surrounding communities of central Yavapai County.</p>
      <a class="foot__tel" href="${site.phoneHref}">${esc(site.phone)}</a>
    </div>
    <nav aria-label="Footer services"><p class="foot__h">Services</p><ul>${services.map((s) => `<li><a href="/${s.slug}/">${esc(s.name)}</a></li>`).join('')}</ul></nav>
    <nav aria-label="Footer pages"><p class="foot__h">Company</p><ul><li><a href="/about-us/">About us</a></li><li><a href="/service-areas/">Service areas</a></li><li><a href="/contact-us/">Contact</a></li><li><a href="/privacy-policy/">Privacy policy</a></li><li><a href="/sitemap.xml">Sitemap</a></li></ul></nav>
    <div class="foot__map"><p class="foot__h">Prescott, Arizona</p><div class="frame frame--dark"><iframe title="Map of Prescott, Arizona" src="${src}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div>
  </div>
  <div class="wrap foot__base"><p>© <span data-year>2026</span> ${esc(site.name)}</p><p>Serving Prescott and central Yavapai County</p></div>
</footer>
<a class="m-call" href="${site.phoneHref}">Call</a>`;
}
