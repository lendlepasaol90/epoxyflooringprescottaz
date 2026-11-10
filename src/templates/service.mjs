import { site } from '../site.mjs';
import { esc, md, inline, img, abs } from '../lib/html.mjs';
import { layout, crumbs } from './layout.mjs';
import { leadForm, phoneLink } from './parts.mjs';
import { bySlug } from '../content/services/index.mjs';

const slugify = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function blk(b) {
  const id = b.id || slugify(b.heading);
  const h = `<h2 id="${id}">${esc(b.heading)}</h2>`;
  switch (b.kind) {
    case 'split':
      return `<section class="blk blk--fig${b.flip ? ' rev' : ''}" aria-labelledby="${id}"><div class="fade">${h}${md(b.body)}</div><div class="figwrap"><div class="frame lift">${img(b.image, { sizes: '(max-width: 960px) 92vw, 340px', widths: [400, 700], ratio: 0.8 })}</div></div></section>`;
    case 'options':
      return `<section class="blk" aria-labelledby="${id}"><div class="fade">${h}${md(b.body || '')}</div><div class="opts">${b.items.map((o, i) => `<article class="fade dl${i % 3}"><h3>${esc(o.name)}</h3><p>${inline(o.body)}</p></article>`).join('')}</div>${b.after ? `<div class="fade" style="margin-top:1.4rem">${md(b.after)}</div>` : ''}</section>`;
    case 'uses':
      return `<section class="blk" aria-labelledby="${id}"><div class="fade">${h}${md(b.body || '')}</div><dl class="usedef fade">${b.items.map((u) => `<div><dt>${esc(u.name)}</dt><dd>${inline(u.body)}</dd></div>`).join('')}</dl></section>`;
    case 'steps':
      return `<section class="blk" aria-labelledby="${id}"><div class="fade">${h}${md(b.body || '')}</div><ol class="seq">${b.items.map((s) => `<li class="fade"><div><h3>${esc(s.name)}</h3><p>${inline(s.body)}</p></div></li>`).join('')}</ol></section>`;
    case 'callout':
      return `<section class="blk note fade" aria-labelledby="${id}">${h}${md(b.body)}</section>`;
    case 'local':
      return `<section class="blk slatebox" aria-labelledby="${id}"><div class="slatebox__bg" aria-hidden="true">${img(b.image || 'dells', { widths: [700, 1100], alt: '' })}</div>${h}${md(b.body)}</section>`;
    case 'table':
      return `<section class="blk" aria-labelledby="${id}"><div class="fade">${h}${md(b.body || '')}</div><div class="tablewrap fade"><table class="ba"><thead><tr>${b.cols.map((c) => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${b.rows.map((r) => `<tr><th scope="row">${esc(r[0])}</th>${r.slice(1).map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>${b.after ? `<div class="fade" style="margin-top:1.4rem">${md(b.after)}</div>` : ''}</section>`;
    default:
      return `<section class="blk fade" aria-labelledby="${id}">${h}${md(b.body)}</section>`;
  }
}

export function renderService(s) {
  const path = `/${s.slug}/`;
  const rel = (s.related || []).map((r) => bySlug[r]).filter(Boolean);
  const body = `
<section class="band">
  <div class="wrap band__grid">
    <div>
      ${crumbs([{ name: 'Home', path: '/' }, { name: s.name, path }])}
      <h1>${esc(s.h1)}</h1>
      <p class="lg">${inline(s.lede)}</p>
      <div class="band__btns"><a class="cta cta--light" href="#estimate">Request an estimate</a><a class="cta cta--line" href="${site.phoneHref}">${esc(site.phone)}</a></div>
    </div>
    <div class="band__fig figwrap"><div class="frame">${img(s.image, { eager: true, sizes: '(max-width: 960px) 92vw, 460px', widths: [460, 760, 1000], ratio: 4 / 3.4 })}</div><p class="plate">${esc(s.plate || s.name)}</p></div>
  </div>
</section>
<div class="wrap page">
  <article class="art">
    <div class="lede-p fade">${md(s.intro)}</div>
    ${s.blocks.map(blk).join('\n')}
  </article>
  <aside class="glance" aria-label="At a glance">
    <h2>At a glance</h2>
    <ul>${(s.chips || []).map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
    <a class="cta cta--slate cta--block" href="#estimate">Request an estimate</a>
    <a class="glance__tel" href="${site.phoneHref}">${esc(site.phone)}</a>
    <nav aria-label="On this page"><p>On this page</p><ol>${s.blocks.map((b) => `<li><a href="#${b.id || slugify(b.heading)}">${esc(b.toc || b.heading)}</a></li>`).join('')}<li><a href="#faq">Questions</a></li></ol></nav>
  </aside>
</div>
<section class="sec" id="faq" aria-labelledby="faq-h">
  <div class="wrap">
    <div class="hd c fade"><div class="orn"><span></span></div><h2 id="faq-h">${esc(s.faqHeading)}</h2></div>
    <div class="faq">${s.faqs.map((f) => `<details><summary>${esc(f.q)}</summary><div class="faq__a">${md(f.a)}</div></details>`).join('')}</div>
  </div>
</section>
${rel.length ? `<section class="sec sec--s sec--white" aria-labelledby="rel-h"><div class="wrap"><div class="hd fade"><h2 id="rel-h" style="font-size:1.9rem">${esc(s.relatedHeading || 'Related services')}</h2></div>
<div class="rel">${rel.map((r) => `<a class="item fade" href="/${r.slug}/"><div class="frame">${img(r.image, { widths: [400, 700], sizes: '(max-width: 960px) 46vw, 360px', ratio: 4 / 3, alt: '' })}</div><h3>${esc(r.name)}</h3><p>${esc(r.tagline)}</p></a>`).join('')}</div></div></section>` : ''}
<section class="sec closer" id="estimate" aria-labelledby="est-h">
  <div class="closer__bg" aria-hidden="true">${img(s.closerImage || 'dellsWide', { widths: [800, 1400], alt: '' })}</div>
  <div class="wrap closer__grid">
    <div class="fade"><h2 id="est-h">${esc(s.cta.heading)}</h2>${md(s.cta.body)}<ul class="closer__list"><li>Telephone <b>${phoneLink()}</b></li><li>Estimates <b>Free, in person</b></li><li>Area <b><a href="/service-areas/">Prescott &amp; nearby</a></b></li></ul></div>
    <div class="closer__card fade dl1">${leadForm({ id: `${s.slug}-form`, heading: 'Request an estimate', withMessage: true, preset: s.formPreset })}</div>
  </div>
</section>`;
  const schema = [
    { '@type': 'Service', '@id': abs(path) + '#service', name: s.name, serviceType: s.serviceType, description: s.description, provider: { '@id': abs('/#business') }, areaServed: site.serviceAreas.map((a) => ({ '@type': 'Place', name: `${a.name}, AZ` })), url: abs(path) },
    { '@type': 'FAQPage', mainEntity: s.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '') } })) },
  ];
  return layout({ path, title: s.title, description: s.description, body, current: s.slug, image: s.image, schema, breadcrumbs: [{ name: 'Home', path: '/' }, { name: s.name, path }] });
}
