import { site, images } from '../site.mjs';
import { esc, md, img, imgUrl } from '../lib/html.mjs';
import { layout } from './layout.mjs';
import { leadForm, phoneLink } from './parts.mjs';
import { services } from '../content/services/index.mjs';

const orn = '<div class="orn"><span></span></div>';

const faqs = [
  { cat: 'Planning', items: [
    { q: 'My home is older. Is the garage slab still a good candidate?', a: 'Usually, yes. Older slabs often carry stains, paint, patched cracks and some surface wear, but once they are ground and repaired they take a coating very well. We examine the concrete at the estimate and tell you plainly how much repair it needs.' },
    { q: 'What is the best season for a coating project in Prescott?', a: 'May and early June, and again from late September into October, are the easiest months. High summer works well if we begin early, though porches and walks are planned around the afternoon storms. In the colder months we concentrate on heated garages and interiors, bringing in temporary heat where a space needs it.' },
    { q: 'Do you provide written estimates?', a: 'Always. Each estimate lists the preparation, repairs, every layer of the system and the expected cure times, so you can compare options and other quotes on equal terms.' },
  ] },
  { cat: 'The finished floor', items: [
    { q: 'How long until I can use my garage again?', a: 'Most garages accept foot traffic within a day and vehicles within one to three days, depending on the system and temperature. Fast-curing polyaspartic topcoats shorten that window considerably.' },
    { q: 'Will snowmelt make the floor slippery?', a: 'We add a fine slip-resistant aggregate to garage and entry topcoats, and flake finishes carry natural texture. Pushing meltwater out with a floor squeegee after storms keeps the surface safe and clean.' },
    { q: 'How should I clean a coated floor?', a: 'A dust mop or soft broom for routine cleaning, and warm water with a neutral cleaner when it needs more. Avoid harsh solvents and citrus degreasers, and rinse away deicer residue a few times each winter.' },
  ] },
  { cat: 'Businesses and hangars', items: [
    { q: 'Do you coat aircraft hangar floors?', a: 'Yes. Hangar floors need coatings that resist fuel, hydraulic fluid and tire marks, reflect light for inspection work and stand up to tugs and jacks. We discuss the specific aircraft and maintenance activity before recommending a system.' },
    { q: 'Can you work in older downtown buildings?', a: 'We do. Older commercial buildings often have patched or uneven concrete and tenants on every side, so we plan carefully for preparation, dust control and access.' },
  ] },
];

export function renderHome() {
  const catalog = services.map((s, i) => `<a class="item fade dl${i % 3}" href="/${s.slug}/"><div class="figwrap"><div class="frame lift">${img(s.image, { widths: [400, 700], sizes: '(max-width: 640px) 92vw, (max-width: 960px) 46vw, 360px', ratio: 4 / 3, alt: '' })}</div></div><h3>${esc(s.name)}</h3><p>${esc(s.homeBlurb)}</p></a>`).join('');
  const gal = [
    ['garageGroup', 'Full flake garage with clear topcoat'],
    ['livingCouch', 'Satin coated slab in a living room'],
    ['hangarJet', 'Light, reflective hangar floor'],
    ['bar', 'Durable floor behind a busy bar'],
    ['kitchenLights', 'Seamless floor in a kitchen and dining area'],
    ['hangarSmall', 'Shared hangar with multiple aircraft'],
  ];
  const allFaqs = faqs.flatMap((g) => g.items);

  const body = `
<section class="hero" aria-labelledby="hero-h">
  <div class="hero__tex" aria-hidden="true">${img('dellsBlue', { widths: [800, 1400, 2000], alt: '' })}</div>
  <div class="wrap">
    <div class="hero__copy fade shown">
      ${orn}
      <h1 id="hero-h">Well-made floors for Prescott homes, businesses and hangars</h1>
      <p class="lg">Garage coatings, interior epoxy, decorative and metallic finishes and commercial floors, built on carefully prepared concrete and suited to life at five thousand feet.</p>
      <div class="hero__btns"><button class="cta cta--slate" type="button" data-pop>Request an estimate</button><a class="cta cta--line" href="#services">View our services</a></div>
    </div>
    <figure class="hero__fig figwrap" style="margin-inline:auto">
      <div class="frame lift">${img('garageRow', { eager: true, sizes: '(max-width: 1100px) 92vw, 1040px', widths: [600, 1000, 1400, 2000], ratio: 21 / 9 })}</div>
      <figcaption class="plate">A finished garage floor with a clear, protective topcoat</figcaption>
    </figure>
    <div class="counts">
      <div class="fade"><b><span data-count="5400">5,400</span> ft</b><span class="counts__lbl">approximate elevation, with real winters</span></div>
      <div class="fade dl1"><b><span data-count="1864">1864</span></b><span class="counts__lbl">the year Prescott was founded, so some slabs have stories</span></div>
      <div class="fade dl2"><b><span data-count="9">9</span></b><span class="counts__lbl">floor coating services under one roof</span></div>
    </div>
  </div>
</section>

<section class="sec sec--s sec--white" aria-labelledby="doors-h">
  <h2 id="doors-h" class="visually-hidden">Who we help</h2>
  <div class="wrap doors">
    <a class="door fade" href="/garage-floor-coatings/"><h3>For homeowners</h3><p>Garages, basements, laundry rooms, casitas and patios in homes of every age, from Victorians near the square to newer builds at the edge of town.</p><span>Residential coatings</span></a>
    <a class="door fade dl1" href="/commercial-epoxy-flooring/"><h3>For businesses</h3><p>Restaurants, shops, offices and clinics, including tenants in older downtown buildings where careful planning matters.</p><span>Commercial floors</span></a>
    <a class="door fade dl2" href="/warehouse-floor-coatings/"><h3>For hangars and industry</h3><p>Aircraft hangars, maintenance shops, warehouses and fabrication space that need tough, bright and chemical-resistant floors.</p><span>Industrial coatings</span></a>
  </div>
</section>

<section class="sec" aria-labelledby="intro-h">
  <div class="wrap intro">
    <div class="fade">
      <h2 id="intro-h">Epoxy flooring with an eye for the details</h2>
      <p class="pull">A good floor is mostly invisible work: the grinding, the patching, the testing and the patience to wait for the right conditions.</p>
    </div>
    <div class="prose-w fade dl1">
      <p>Prescott is a town that values craftsmanship. People restore Victorian porches, keep vintage cars in their garages and take pride in homes that have been cared for over decades. We approach concrete floors the same way.</p>
      <p>Before anything is applied, we look carefully at the slab. Older homes may have paint, sealers or patched cracks from years past. Newer homes may carry a builder's curing compound. Garages near the national forest often show winter damage near the door. All of it is ground away or repaired so the coating bonds to sound concrete, which is what decides whether a floor lasts three years or fifteen.</p>
      <p>Then we recommend a system to suit the space: a <a href="/garage-floor-coatings/">garage floor coating</a> with a decorative flake finish, a seamless <a href="/residential-epoxy-flooring/">interior floor</a> for a basement or casita, a fast-curing <a href="/polyaspartic-floor-coatings/">polyaspartic</a> or flexible <a href="/polyurea-floor-coatings/">polyurea</a> build, a <a href="/metallic-epoxy-flooring/">metallic</a> or <a href="/decorative-flake-flooring/">decorative flake</a> finish, a protective <a href="/patio-concrete-coatings/">patio coating</a>, or a durable <a href="/commercial-epoxy-flooring/">commercial</a> or <a href="/warehouse-floor-coatings/">hangar and warehouse</a> floor. Every estimate is free and provided in writing.</p>
    </div>
  </div>
</section>

<section class="sec sec--white" id="services" aria-labelledby="svc-h">
  <div class="wrap">
    <div class="hd c fade">${orn}<h2 id="svc-h">Our flooring services</h2><p class="mute">Nine services, each explained in detail on its own page with finishes, process, care and common questions.</p></div>
    <div class="catalog">${catalog}</div>
  </div>
</section>

<section class="sec" aria-labelledby="gar-h">
  <div class="wrap feat">
    <div class="figwrap fade"><div class="frame lift">${img('garageGroup', { sizes: '(max-width: 960px) 92vw, 540px', widths: [500, 800, 1100], ratio: 5 / 4 })}</div><p class="plate">Flake finish, slip-resistant topcoat</p></div>
    <div class="fade dl1">
      <h2 id="gar-h">Garage floor coatings for every era of home</h2>
      <p>Garages around Prescott range from detached carriage houses behind older homes to three-car garages in Prescott Lakes and the Ranch. They share a set of challenges: snow and slush tracked in through winter, road deicer, spring dust, strong sun at altitude and the oil and fluids that come with vehicles and equipment.</p>
      <p>Our garage systems begin with diamond grinding to remove whatever is on the slab and open the concrete. Cracks, spalls and winter scaling are repaired. Then we apply a bonding base coat, a broadcast of decorative flakes and a UV-stable, slip-resistant topcoat that will not yellow by the door.</p>
      <ul class="marks"><li>Old paint, sealers and failed coatings removed completely</li><li>Repairs for cracks and winter flaking included in the estimate</li><li>Finishes chosen to suit the home, from classic to contemporary</li></ul>
      <a class="go" href="/garage-floor-coatings/">Learn about garage coatings</a>
    </div>
  </div>
</section>

<section class="sec sec--s" aria-labelledby="res-h">
  <div class="wrap feat feat--rev">
    <div class="duo">
      <div class="figwrap fade"><div class="frame lift">${img('roomWindow', { sizes: '(max-width: 640px) 92vw, 260px', widths: [300, 520], ratio: 0.75 })}</div></div>
      <div class="figwrap fade dl1"><div class="frame lift">${img('victorianTurret', { sizes: '(max-width: 640px) 92vw, 260px', widths: [300, 520], ratio: 0.75 })}</div></div>
    </div>
    <div class="fade">
      <h2 id="res-h">Residential epoxy flooring inside the home</h2>
      <p>Many Prescott homes have rooms on concrete that work harder than any other part of the house: basements in older homes, laundry and mudrooms, casitas, workshops and studios. A seamless coated floor in those spaces is easy to clean, stands up to wet boots and dogs, and can look as refined as the rest of the home.</p>
      <p>Interior work calls for more care than a garage. Finishes are chosen to complement cabinetry, trim and wall color, sheen is matched to the light in the room and moisture is tested before anything is applied, which matters especially in basements and older slabs. Our <a href="/residential-epoxy-flooring/">residential epoxy flooring</a> page covers finishes, preparation and what to expect.</p>
    </div>
  </div>
</section>

<section class="sec sec--forest" aria-labelledby="deco-h">
  <div class="wrap feat">
    <div class="fade">
      <h2 id="deco-h">Decorative and metallic epoxy flooring</h2>
      <p>Coated concrete can be a design element in its own right. Decorative flake floors use layered vinyl chips for a speckled, stone-like look that hides everyday dust and wear. Metallic epoxy uses reflective pigments worked by hand into clear resin, producing a floor with depth and movement that is different in every room.</p>
      <p>Prescott homes often suit natural palettes: granite greys inspired by the Dells, forest greens, warm walnut and birch tones that echo wood trim, and soft slate blues.</p>
      <div class="chips" aria-label="Popular palettes">
        <div class="chip"><i style="background:radial-gradient(circle at 30% 30%,#d7d4cc,#8c8a83)"></i><span>Granite Dells</span></div>
        <div class="chip"><i style="background:radial-gradient(circle at 30% 30%,#9db3a2,#4c6955)"></i><span>Ponderosa green</span></div>
        <div class="chip"><i style="background:radial-gradient(circle at 30% 30%,#c7a582,#7a5739)"></i><span>Walnut bronze</span></div>
        <div class="chip"><i style="background:radial-gradient(circle at 30% 30%,#b6c4d1,#4b6075)"></i><span>Thumb Butte slate</span></div>
      </div>
      <p><a class="go" href="/decorative-flake-flooring/">Decorative flake</a>&ensp;&ensp;<a class="go" href="/metallic-epoxy-flooring/">Metallic epoxy</a></p>
    </div>
    <div class="figwrap fade dl1"><div class="frame lift">${img('livingCouch', { sizes: '(max-width: 960px) 92vw, 540px', widths: [500, 800, 1100], ratio: 5 / 4 })}</div><p class="plate">Satin finish in a family room</p></div>
  </div>
</section>

<section class="sec sec--slate" aria-labelledby="biz-h">
  <div class="wrap">
    <div class="hd c fade">${orn}<h2 id="biz-h">Commercial and industrial flooring</h2><p>From restaurants near Courthouse Square to hangars at Prescott Regional Airport, businesses here need floors that are tough, easy to keep clean and installed without unnecessary downtime.</p></div>
    <div class="bizgrid">
      <article class="biz fade"><figure>${img('restaurant', { sizes: '(max-width: 960px) 46vw, 360px', widths: [400, 700], ratio: 1.6 })}</figure><div><h3>Commercial epoxy flooring</h3><p>Restaurants, bars, retail shops, salons, offices and medical practices. Seamless floors that clean quickly, resist spills and chemicals and can be textured where floors get wet.</p><a href="/commercial-epoxy-flooring/">Commercial floors</a></div></article>
      <article class="biz fade dl1"><figure>${img('hangarSmall', { sizes: '(max-width: 960px) 46vw, 360px', widths: [400, 700], ratio: 1.6 })}</figure><div><h3>Aircraft hangars</h3><p>Bright, chemical-resistant floors that make leaks easy to spot, reflect light for maintenance work and stand up to tugs, jacks and tire marks.</p><a href="/warehouse-floor-coatings/">Hangar and industrial floors</a></div></article>
      <article class="biz fade dl2"><figure>${img('workshop', { sizes: '(max-width: 960px) 46vw, 360px', widths: [400, 700], ratio: 1.6 })}</figure><div><h3>Industrial flooring solutions</h3><p>Warehouses, fabrication and maintenance shops, and storage buildings. High-build epoxy and polyurea systems, joint repair, dust-proofing and safety striping.</p><a href="/polyurea-floor-coatings/">Heavy-duty systems</a></div></article>
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="why-h">
  <div class="wrap">
    <div class="hd c fade">${orn}<h2 id="why-h">Why choose our epoxy flooring services?</h2><p class="mute">What you can count on, project after project.</p></div>
    <div class="princ">
      <div class="fade"><h3>Thorough preparation</h3><p>Diamond grinding and repair on every floor, because the bond to the concrete decides how long a coating lasts.</p></div>
      <div class="fade dl1"><h3>Respect for older homes</h3><p>We protect trim, doors and finishes, and we take extra care with historic properties and their slabs.</p></div>
      <div class="fade dl2"><h3>Systems for the climate</h3><p>Coatings chosen for freeze-thaw, deicer, monsoon moisture and the strong sun at this elevation.</p></div>
      <div class="fade"><h3>Clear written estimates</h3><p>Every step and layer itemized, with cure times and care instructions included.</p></div>
      <div class="fade dl1"><h3>Sensible scheduling</h3><p>Projects planned around the weather and your household or business, never rushed into poor conditions.</p></div>
      <div class="fade dl2"><h3>Honest recommendations</h3><p>We suggest what the space needs. Sometimes that is a simpler system or a sealer rather than a full coating.</p></div>
    </div>
  </div>
</section>

<section class="dells" aria-labelledby="dells-h">
  <div class="dells__bg" data-parallax aria-hidden="true">${img('dells', { widths: [800, 1400, 2000, 2600], alt: '' })}</div>
  <div class="dells__box fade">
    <div>
      <h2 id="dells-h">Prescott's climate and your concrete</h2>
      <p>Prescott enjoys four distinct seasons, and each one leaves its mark on concrete. Our coatings and schedules are planned around all of them.</p>
      <div class="wx">
        <div><b>Winter</b>Freeze-thaw cycles and deicer cause flaking near garage doors.</div>
        <div><b>Spring</b>Wind carries fine dust and pollen into every garage.</div>
        <div><b>Summer</b>Strong sun at altitude yellows ordinary epoxy.</div>
        <div><b>Monsoon</b>Heavy storms bring water and mud indoors.</div>
      </div>
      <button class="cta cta--light" type="button" data-pop>Plan a floor for all four seasons</button>
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="proc-h">
  <div class="wrap">
    <div class="hd c fade">${orn}<h2 id="proc-h">Our flooring installation process</h2><p class="mute">A typical garage is completed in one to three days. Interiors, hangars and commercial spaces receive a written schedule in advance.</p></div>
    <ol class="miles">
      <li class="fade"><h3>Consultation</h3><p>We visit, measure, examine the slab and show finish samples in your space.</p></li>
      <li class="fade dl1"><h3>Proposal</h3><p>A written estimate with options, cure times and a recommended date.</p></li>
      <li class="fade dl2"><h3>Preparation</h3><p>Dust-controlled grinding, then crack, scaling and spall repair.</p></li>
      <li class="fade dl3"><h3>Application</h3><p>Base coat, decorative layers and a protective, textured topcoat.</p></li>
      <li class="fade dl3"><h3>Handover</h3><p>A final walkthrough with written cure times and care guidance.</p></li>
    </ol>
  </div>
</section>

<section class="sec sec--s" aria-labelledby="ask-h">
  <div class="wrap feat">
    <div class="fade">
      <h2 id="ask-h">Questions worth asking any flooring contractor</h2>
      <p>Whoever you choose to coat your floor, a few questions will tell you a great deal about the quality of the work to come. A good contractor will answer each of them clearly and put the answers in writing.</p>
    </div>
    <ul class="marks fade dl1">
      <li><strong>How will the slab be prepared?</strong> Diamond grinding is the standard for a lasting bond; acid etching or a quick wash is not.</li>
      <li><strong>Will you test for moisture?</strong> Especially important for basements, older slabs and interior rooms.</li>
      <li><strong>How are cracks and joints treated?</strong> Rigid, flexible or left alone, and why.</li>
      <li><strong>What topcoat will be used, and is it light-stable?</strong> At this elevation, it matters.</li>
      <li><strong>What are the cure times at this time of year?</strong> A good answer depends on temperature.</li>
      <li><strong>What does the written estimate include?</strong> Every layer and repair should be listed.</li>
    </ul>
  </div>
</section>

<section class="sec sec--white" aria-labelledby="ben-h">
  <div class="wrap">
    <div class="hd fade"><h2 id="ben-h">Benefits of professional epoxy flooring</h2><p class="mute">How a properly installed system compares with leaving concrete bare or applying a store-bought kit.</p></div>
    <div class="tablewrap fade">
      <table class="ba">
        <caption>Typical outcomes after a few Prescott winters</caption>
        <thead><tr><th scope="col">Consideration</th><th scope="col">Bare concrete</th><th scope="col">Store-bought kit</th><th scope="col">Professional system</th></tr></thead>
        <tbody>
          <tr><th scope="row">Bond to the slab</th><td>Not applicable</td><td>Weak; often over sealers or dust</td><td>Strong; ground and repaired first</td></tr>
          <tr><th scope="row">Winter deicer</th><td>Soaks in and causes flaking</td><td>Often lifts at edges</td><td>Stays on the surface; wipes off</td></tr>
          <tr><th scope="row">Dust</th><td>Constant fine dust</td><td>Reduced at first</td><td>Sealed and dust-free</td></tr>
          <tr><th scope="row">Sunlight</th><td>Unaffected</td><td>Tends to yellow</td><td>UV-stable topcoat options</td></tr>
          <tr><th scope="row">Appearance</th><td>Stained and patchy</td><td>Thin, uneven color</td><td>Flake, solid or metallic finishes</td></tr>
        </tbody>
      </table>
    </div>
    <p class="prose-w fade" style="margin-top:2rem">The difference is rarely visible on the first day. It shows after the second or third winter, when a kit floor has begun to lift along the tire paths and a properly bonded system still looks much as it did when it was finished. That longevity is the real value of professional work, and it is why we would rather spend an extra hour on preparation than save it.</p>
    <p class="prose-w fade" style="margin-top:2rem">A coated floor also brightens a space by reflecting light, reduces the time you spend sweeping and cleaning, and gives garages, basements and shops a finished appearance that buyers notice when a home is shown.</p>
  </div>
</section>

<section class="sec" aria-labelledby="local-h">
  <div class="wrap local">
    <div class="fade">
      <h2 id="local-h">Why property owners in Prescott choose us</h2>
      <p>Prescott's housing is unusually varied. Victorian and early twentieth century homes cluster around the historic downtown and Mt. Vernon Street. Mid-century neighborhoods spread out from there, and newer communities sit among the granite and pines on the edges of town. Each era of home brings its own concrete, and its own surprises once the old flooring comes up.</p>
      <p>Owners here tend to ask good questions, value durability over shortcuts and want to know that their home will be treated with care. That suits the way we work. We explain what we find, recommend only what the space needs and leave the site clean at the end of each day.</p>
      <p>Newer neighborhoods have their own considerations. Garages in communities built over the last two decades usually have sound slabs but may carry builder sealers, and homeowners' associations sometimes have rules about work hours, parking and anything visible from the street. We are accustomed to working within those requirements, keeping driveways clear and the street tidy, and providing product information whenever an association asks for it.</p>
      <p>We work regularly in neighborhoods including:</p>
      <ul class="hoods"><li>Historic downtown</li><li>Mt. Vernon area</li><li>Prescott Lakes</li><li>Hassayampa Village</li><li>Yavapai Hills</li><li>The Ranch at Prescott</li><li>Country Club Park</li><li>Forest Trails</li><li>Willow Lake area</li><li>Granite Dells area</li></ul>
    </div>
    <aside class="aside-card fade dl1">
      <h3>A note on historic properties</h3>
      <p>Many older Prescott homes have garages, carriage houses or basements that were added or altered over the years, often with concrete of different ages side by side. We look closely at joints, patches and moisture in those spaces, and we will tell you if something should be addressed before coating.</p>
      <p>If your property is in a historic district, interior garage and basement floors rarely require review, but anything visible from the street may. We are glad to provide product information if you need it.</p>
    </aside>
  </div>
</section>

<section class="sec sec--white" aria-labelledby="gal-h">
  <div class="wrap">
    <div class="hd c fade">${orn}<h2 id="gal-h">Featured floors and finishes</h2><p class="mute">Select an image to view it larger. Samples of every finish come with your estimate.</p></div>
    <div class="lgal">${gal.map(([k, cap], i) => `<button type="button" class="fade dl${i % 3}" data-lb="${imgUrl(k, 1600)}" data-cap="${esc(cap)}"><div class="frame">${img(k, { widths: [400, 700], sizes: '(max-width: 640px) 92vw, (max-width: 960px) 46vw, 360px', ratio: 4 / 3 })}</div><span>${esc(cap)}</span></button>`).join('')}</div>
  </div>
</section>
<dialog class="lbox" id="lbox" aria-label="Image viewer"><button class="lbox__x" type="button" aria-label="Close image">×</button><img src="data:image/gif;base64,R0lGODlhAQABAAAAACw=" alt=""><p></p></dialog>

<section class="sec" aria-labelledby="areas-h">
  <div class="wrap areas">
    <div class="fade"><h2 id="areas-h">Service areas</h2><p class="mute">We are based in Prescott and work throughout central Yavapai County. Commercial and hangar projects may take us further afield by arrangement.</p><a class="go" href="/service-areas/">More about where we work</a></div>
    <ul class="alist fade dl1">${site.serviceAreas.map((a) => `<li><b>${esc(a.name)}</b><span>${esc(a.note)}</span></li>`).join('')}</ul>
  </div>
</section>

<section class="sec sec--white" aria-labelledby="faq-h">
  <div class="wrap">
    <div class="hd c fade">${orn}<h2 id="faq-h">Frequently asked questions</h2><p class="mute">If your question is not answered here, telephone ${phoneLink()}.</p></div>
    <div class="faq">${faqs.map((g) => `<h3>${esc(g.cat)}</h3>${g.items.map((f) => `<details><summary>${esc(f.q)}</summary><div class="faq__a">${md(f.a)}</div></details>`).join('')}`).join('')}</div>
  </div>
</section>

<section class="sec closer" id="estimate" aria-labelledby="est-h">
  <div class="closer__bg" aria-hidden="true">${img('forestStream', { widths: [800, 1400], alt: '' })}</div>
  <div class="wrap closer__grid">
    <div class="fade">
      <h2 id="est-h">Arrange a free estimate</h2>
      <p>Tell us about the floor you have in mind. We will arrange a visit, examine the concrete and provide a written estimate with clear options and an honest recommendation.</p>
      <ul class="closer__list"><li>Telephone <b>${phoneLink()}</b></li><li>Estimates <b>Free, in person, in writing</b></li><li>Area <b>Prescott &amp; central Yavapai County</b></li></ul>
    </div>
    <div class="closer__card fade dl1">${leadForm({ id: 'home-form', heading: 'Request your estimate', intro: 'A minute to complete. We will contact you to arrange a convenient time.', withMessage: true })}</div>
  </div>
</section>`;

  return layout({
    path: '/',
    title: 'Epoxy Flooring Prescott | Garage, Home & Hangar Floor Coatings',
    description: 'Garage, interior, decorative, commercial and hangar floor coatings in Prescott, AZ. Careful slab preparation, written estimates and systems built for four seasons.',
    body,
    image: 'garageRow',
    schema: [{ '@type': 'FAQPage', mainEntity: allFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }],
  });
}
