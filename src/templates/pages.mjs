import { site } from '../site.mjs';
import { esc, md, img } from '../lib/html.mjs';
import { layout, crumbs } from './layout.mjs';
import { leadForm, phoneLink } from './parts.mjs';
import { services } from '../content/services/index.mjs';

const band = ({ title, lede, image, trail, plate }) => `<section class="band"><div class="wrap band__grid"><div>${crumbs(trail)}<h1>${esc(title)}</h1><p class="lg">${lede}</p></div><div class="band__fig figwrap"><div class="frame">${img(image, { eager: true, sizes: '(max-width: 960px) 92vw, 460px', widths: [460, 760, 1000], ratio: 4 / 3.4, alt: '' })}</div>${plate ? `<p class="plate">${esc(plate)}</p>` : ''}</div></div></section>`;
const side = (id) => `<aside class="glance">${leadForm({ id, heading: 'Free estimate', intro: 'We will contact you to arrange a convenient time.', compact: true })}</aside>`;

export function renderAbout() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'About us', path: '/about-us/' }];
  const body = `${band({ title: 'About Epoxy Flooring Prescott', lede: 'A Prescott floor coating company that believes the unseen work, preparation, testing and patience, is what makes a floor last.', image: 'brickPorch', trail, plate: 'Care for homes of every age' })}
<div class="wrap pg"><div class="fade">
${md(`We coat concrete floors for homeowners, businesses and aircraft owners across Prescott and the surrounding communities. Our work is guided by a simple observation: most coating failures can be traced to what happened before the first coat was applied. Sealers left in place, dust and weak concrete not removed, cracks ignored, moisture never tested.

So that is where we put our effort. Every floor is ground with diamond tooling, repaired and checked before we recommend a system. We explain what we find in plain terms and put everything in writing.`)}
<h2>Our commitments</h2>
<div class="vals">
  <div><b>Preparation first</b><span>Grinding and repair are part of every project, never optional extras.</span></div>
  <div><b>Plain explanations</b><span>You will understand what we found and why we recommend a system.</span></div>
  <div><b>Written estimates</b><span>Itemized, clear and without pressure to decide on the spot.</span></div>
  <div><b>Care for your property</b><span>Protected finishes, contained dust and a tidy site each day.</span></div>
</div>
${md(`## The work we do

Residential projects make up much of our schedule: garages and carriage houses, basements and laundry rooms, casitas, workshops and patios. We also work with businesses downtown and across town, including restaurants, retailers, offices and clinics, and with aircraft owners and operators who need durable, bright hangar floors.

## Working in a historic town

Prescott's older homes and commercial buildings often have concrete that has been patched, painted or extended over the decades. We take the time to understand those slabs before recommending anything, and we will be candid if a floor needs repair or further investigation first.

## Getting started

Telephone or send the estimate form. We will arrange a visit to measure the space, examine the concrete and show you samples, then send a written estimate. Take whatever time you need to decide; we are happy to answer questions along the way.`)}
<p style="margin-top:1.5rem"><a class="cta cta--slate" href="/contact-us/">Contact us</a> <a class="cta cta--line" href="/service-areas/">Service areas</a></p>
</div>${side('about-form')}</div>
<div class="sec sec--s"></div>`;
  return layout({ path: '/about-us/', title: 'About Us | Epoxy Flooring Prescott', description: 'About Epoxy Flooring Prescott: careful slab preparation, plain explanations, written estimates and respect for homes and buildings of every age.', body, current: 'about', image: 'brickPorch', breadcrumbs: trail });
}

const towns = {
  Prescott: 'Every part of the city, from homes near Courthouse Square and Mt. Vernon Street to Prescott Lakes, Hassayampa Village, Yavapai Hills, the Ranch and the neighborhoods out toward Willow and Watson Lakes. Commercial and hangar work throughout.',
  'Prescott Valley': 'Garages, interiors and businesses just east of Prescott, including newer homes where builder sealers must be removed before coating.',
  'Chino Valley': 'Homes, shops and new construction to the north, often with detached garages and workshops.',
  'Williamson Valley': 'Ranch properties, barns, equipment buildings and detached garages along Williamson Valley Road.',
  'Groom Creek': 'Cabins and homes in the pines south of town, where cold, shaded slabs and seasonal moisture require careful planning.',
  'Skull Valley': 'Rural homes and outbuildings to the west, by arrangement.',
  'Dewey-Humboldt': 'Larger lots with shops and garages along Highway 69.',
  Kirkland: 'Ranch and rural properties further southwest, scheduled by arrangement.',
};

export function renderAreas() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Service areas', path: '/service-areas/' }];
  const body = `${band({ title: 'Where we work', lede: 'Prescott and the communities of central Yavapai County, with commercial and hangar projects further afield by arrangement.', image: 'dellsWide', trail, plate: 'Around the Granite Dells' })}
<div class="wrap">
  <div class="prose-w fade">${md(`Coating work depends on timing. Temperatures, monsoon storms and the occasional winter snow all affect when a floor can be prepared and coated. Keeping our work concentrated around Prescott lets us respond to the weather and keep projects on schedule.

These are the communities we serve most often. If yours is not listed, please telephone; we will tell you honestly whether we can help.`)}</div>
  <div class="towns">${site.serviceAreas.map((a) => `<article class="fade"><h2>${esc(a.name)}</h2><p>${esc(towns[a.name] || a.note)}</p></article>`).join('')}</div>
  <div class="prose-w fade" style="margin-top:3rem"><h2>Services offered throughout the area</h2><ul>${services.map((s) => `<li><a href="/${s.slug}/">${esc(s.name)}</a>: ${esc(s.tagline)}</li>`).join('')}</ul></div>
</div>
<section class="sec closer" id="estimate" style="margin-top:var(--sp)"><div class="wrap closer__grid"><div><h2>Unsure if we cover your address?</h2><p>Leave your details and we will confirm coverage when we reply. You are also welcome to telephone ${phoneLink()}.</p></div><div class="closer__card">${leadForm({ id: 'areas-form', heading: 'Request an estimate', withMessage: true })}</div></div></section>`;
  return layout({ path: '/service-areas/', title: 'Service Areas | Epoxy Flooring Prescott & Yavapai County', description: 'Floor coatings in Prescott, Prescott Valley, Chino Valley, Williamson Valley, Groom Creek, Skull Valley, Dewey-Humboldt and Kirkland.', body, current: 'areas', image: 'dellsWide', breadcrumbs: trail });
}

export function renderContact() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact-us/' }];
  const body = `${band({ title: 'Contact us', lede: 'Request a free estimate or ask a question about your floor. We will be in touch to discuss it.', image: 'victorianBlue', trail })}
<div class="wrap pg" id="estimate">
  <div class="fade">
    <h2>Helpful details to include</h2>
    <ul><li>The space you would like coated and its approximate size</li><li>The age of the home or building, and any previous coatings or paint</li><li>Visible cracks, flaking or stains</li><li>Your preferred timing, and any historic district or HOA considerations</li></ul>
    <p><strong>Telephone:</strong> ${phoneLink()}${site.email ? `<br><strong>Email:</strong> <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>` : ''}</p>
    <h3>What happens next</h3>
    <ol><li>We contact you to arrange a visit.</li><li>We examine the concrete, measure and show samples.</li><li>You receive a written estimate with clear options.</li></ol>
  </div>
  <div class="closer__card fade dl1" style="border:1px solid var(--line-2)">${leadForm({ id: 'contact-form', heading: 'Request your free estimate', withMessage: true })}</div>
</div>
<div class="sec sec--s"></div>`;
  return layout({ path: '/contact-us/', title: 'Contact Us | Free Floor Coating Estimates in Prescott', description: 'Request a free, in-person estimate for garage, interior, commercial or hangar floor coatings in Prescott and central Yavapai County.', body, current: 'contact', image: 'victorianBlue', breadcrumbs: trail });
}

export function renderPrivacy() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Privacy policy', path: '/privacy-policy/' }];
  const body = `${band({ title: 'Privacy policy', lede: 'How information submitted through this website is collected and used.', image: 'forestStream', trail })}
<div class="wrap prose-w" style="padding-bottom:var(--sp)">${md(`## Information collected

Our forms ask for your name, telephone number, email address, project type and any notes you choose to add. We also record the page from which the form was sent. This website does not use advertising or tracking cookies.

## Use of information

Information you provide is used solely to respond to your enquiry, arrange an estimate and correspond about your project. It is not sold, rented or shared for marketing.

## Third parties

Submissions may be delivered to us through an email or workflow service. The map is supplied by Google Maps and photographs are served by Unsplash; these services may collect routine technical information, such as IP addresses, under their own policies.

## Your rights

To correct or remove information you have submitted, please reach us through the [contact page](/contact-us/).

## Revisions

This policy may be revised from time to time; the version on this page is current.`)}</div>`;
  return layout({ path: '/privacy-policy/', title: 'Privacy Policy | Epoxy Flooring Prescott', description: 'How Epoxy Flooring Prescott collects, uses and protects the information submitted through estimate and contact forms on this website.', body, breadcrumbs: trail });
}

export function render404() {
  const body = `<section class="nf"><div class="wrap prose-w c"><div class="orn"><span></span></div><h1>Page not found</h1><p class="lg mute">The page you requested is not available. These links may help.</p><p><a class="cta cta--slate" href="/">Homepage</a> <a class="cta cta--line" href="/garage-floor-coatings/">Garage coatings</a> <a class="cta cta--line" href="/contact-us/">Contact</a></p></div></section>`;
  return layout({ path: '/404.html', title: 'Page not found | Epoxy Flooring Prescott', description: 'The page you requested could not be found.', body }).replace('<meta name="robots" content="index, follow, max-image-preview:large">', '<meta name="robots" content="noindex">');
}
