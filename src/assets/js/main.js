/* Epoxy Flooring Prescott — interactions */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = matchMedia('(max-width: 960px)');

  /* Compact masthead on scroll */
  const mast = $('[data-header]');
  const onScroll = () => mast?.classList.toggle('is-small', scrollY > 30);
  onScroll(); addEventListener('scroll', onScroll, { passive: true });

  /* Services submenu */
  const sb = $('.sub-btn'), sub = $('#sub-svc');
  const setSub = (o) => { if (!sb) return; sb.setAttribute('aria-expanded', String(o)); sub.classList.toggle('open', o); };
  if (sb) {
    const li = sb.parentElement; let t;
    sb.addEventListener('click', () => setSub(sb.getAttribute('aria-expanded') !== 'true'));
    li.addEventListener('mouseenter', () => { if (matchMedia('(hover: hover)').matches) { clearTimeout(t); setSub(true); } });
    li.addEventListener('mouseleave', () => { if (matchMedia('(hover: hover)').matches) t = setTimeout(() => setSub(false), 180); });
    li.addEventListener('focusout', (e) => { if (!li.contains(e.relatedTarget)) setSub(false); });
  }

  /* Mobile sheet nav */
  const burger = $('[data-burger]'), sheet = $('#sheet-nav');
  const setSheet = (o) => { if (!burger) return; sheet.hidden = !o; burger.setAttribute('aria-expanded', String(o)); };
  burger?.addEventListener('click', () => { setPop(false); setSheet(sheet.hidden); });

  /* Estimate popover (bottom sheet on small screens) */
  const pop = $('#pop'), popBtn = $('.mast__act [data-pop]');
  let scrim = null, lastFocus = null;
  function setPop(o, opener) {
    if (!pop) return;
    if (o) { lastFocus = opener || document.activeElement; setSheet(false); setSub(false); }
    pop.hidden = !o;
    popBtn?.setAttribute('aria-expanded', String(o));
    if (o && small.matches) { scrim = document.createElement('div'); scrim.className = 'scrim'; scrim.addEventListener('click', () => setPop(false)); document.querySelector('.mast').append(scrim); document.body.style.overflow = 'hidden'; }
    if (!o) { scrim?.remove(); scrim = null; document.body.style.overflow = ''; lastFocus?.focus?.(); }
    if (o) setTimeout(() => $('input', pop)?.focus({ preventScroll: true }), 40);
  }
  $$('[data-pop]').forEach((b) => b.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = pop.hidden;
    if (open && b !== popBtn && !small.matches) scrollTo({ top: 0, behavior: calm ? 'auto' : 'smooth' });
    setPop(open, b);
  }));
  $$('[data-pop-close]').forEach((b) => b.addEventListener('click', () => setPop(false)));
  document.addEventListener('click', (e) => { if (pop && !pop.hidden && !pop.contains(e.target) && !small.matches) setPop(false); setSubOutside(e); });
  function setSubOutside(e) { if (sb && !sb.parentElement.contains(e.target)) setSub(false); }
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (pop && !pop.hidden) setPop(false);
    setSub(false);
    if (sheet && !sheet.hidden) { setSheet(false); burger.focus(); }
  });

  /* Reveal */
  const els = $$('.fade, .lift');
  if (calm || !('IntersectionObserver' in window)) els.forEach((e) => e.classList.add('shown'));
  else { const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('shown'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }); els.forEach((e) => io.observe(e)); }

  /* Parallax */
  const px = $$('[data-parallax]');
  if (px.length && !calm) { let q = false; const go = () => { const vh = innerHeight; px.forEach((el) => { const r = el.parentElement.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh) return; el.style.transform = `translate3d(0,${(((r.top + r.height / 2 - vh / 2) / vh) * -60).toFixed(1)}px,0)`; }); q = false; }; addEventListener('scroll', () => { if (!q) { q = true; requestAnimationFrame(go); } }, { passive: true }); go(); }

  /* Counters */
  const tick = (el) => { const end = +el.dataset.count, suf = el.dataset.suffix || ''; if (calm) { el.textContent = end.toLocaleString('en-US') + suf; return; } const t0 = performance.now(); const f = (t) => { const p = Math.min(1, (t - t0) / 1500); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString('en-US') + suf; if (p < 1) requestAnimationFrame(f); }; requestAnimationFrame(f); };
  if ('IntersectionObserver' in window) { const co = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { tick(en.target); co.unobserve(en.target); } }), { threshold: 0.6 }); $$('[data-count]').forEach((c) => co.observe(c)); }

  /* Lightbox */
  const lb = $('#lbox');
  if (lb) {
    const lbImg = $('img', lb), lbCap = $('p', lb);
    $$('[data-lb]').forEach((b) => b.addEventListener('click', () => {
      lbImg.src = b.dataset.lb; lbImg.alt = $('img', b)?.alt || ''; lbCap.textContent = b.dataset.cap || '';
      lb.showModal ? lb.showModal() : lb.setAttribute('open', '');
    }));
    $('.lbox__x', lb).addEventListener('click', () => lb.close());
    lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });
  }

  /* Contents highlighting in the glance card */
  const tocA = $$('.glance nav a');
  if (tocA.length && 'IntersectionObserver' in window) {
    const m = new Map(tocA.map((a) => [a.hash.slice(1), a]));
    const to = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { tocA.forEach((a) => a.classList.remove('at')); m.get(en.target.id)?.classList.add('at'); } }), { rootMargin: '-30% 0px -60% 0px' });
    m.forEach((_, id) => { const el = document.getElementById(id); if (el) to.observe(el); });
  }

  /* Forms */
  const rules = {
    name: (v) => (v.trim().length >= 2 ? '' : 'Please tell us your name.'),
    phone: (v) => (v.replace(/\D/g, '').length >= 10 ? '' : 'Please include the area code.'),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'This email looks incomplete.'),
    project: (v) => (v ? '' : 'Please choose a project.'),
  };
  const check = (el) => { const r = rules[el.name]; if (!r) return true; const m = r(el.value), box = el.closest('.fl'), err = $('.fl__err', box); box.classList.toggle('err', !!m); el.setAttribute('aria-invalid', m ? 'true' : 'false'); if (err) { err.id ||= el.id + '-err'; el.setAttribute('aria-describedby', err.id); err.textContent = m; } return !m; };
  $$('[data-lead-form]').forEach((form) => {
    const ph = form.elements.phone;
    ph?.addEventListener('input', () => { const d = ph.value.replace(/\D/g, '').replace(/^1/, '').slice(0, 10); ph.value = d.length > 6 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : d.length > 3 ? `(${d.slice(0, 3)}) ${d.slice(3)}` : d; });
    $$('input, select', form).forEach((el) => { el.addEventListener('blur', () => el.value && check(el)); el.addEventListener('input', () => el.closest('.fl')?.classList.contains('err') && check(el)); });
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const msg = $('.rf__msg', form), fs = $$('[name]', form).filter((el) => rules[el.name]);
      if (!fs.map(check).every(Boolean)) { fs.find((f) => f.getAttribute('aria-invalid') === 'true')?.focus(); return; }
      const btn = $('.rf__go', form), lbl = $('span', btn), txt = lbl.textContent;
      btn.disabled = true; lbl.textContent = 'Sending…'; msg.className = 'rf__msg'; msg.textContent = '';
      const data = Object.fromEntries(new FormData(form)); data.page = location.pathname;
      try {
        const res = await fetch(form.action, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
        const out = await res.json().catch(() => ({}));
        if (!res.ok || !out.ok) throw new Error();
        form.classList.add('sent'); msg.classList.add('ok');
        msg.textContent = `Thank you, ${data.name.trim().split(' ')[0]}. Your request has been received, and we will contact you shortly to arrange a visit.`;
        msg.tabIndex = -1; msg.focus({ preventScroll: true });
      } catch {
        msg.classList.add('no');
        const t = $('.mast__tel');
        msg.innerHTML = `Your request could not be sent. Please try again, or telephone <a href="${t?.getAttribute('href') || '#'}">${t?.textContent.replace('Call', '').trim() || 'us'}</a>.`;
      } finally { btn.disabled = false; lbl.textContent = txt; }
    });
  });
  $$('[data-year]').forEach((y) => (y.textContent = new Date().getFullYear()));
})();
