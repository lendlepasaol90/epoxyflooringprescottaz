// Site-wide configuration for Epoxy Flooring Prescott.

export const site = {
  name: 'Epoxy Flooring Prescott',
  domain: 'https://epoxyflooringprescottaz.com',
  city: 'Prescott',
  cityLong: 'Prescott',
  region: 'Yavapai County, Arizona',
  state: 'AZ',
  locale: 'en_US',

  // PLACEHOLDER — replace before launch, then set phoneVerified: true.
  phone: '(928) 555-0186',
  phoneHref: 'tel:+19285550186',
  phoneVerified: false,
  email: '',

  map: { query: 'Prescott, AZ', lat: 34.54, lng: -112.4685, zoom: 12 },

  serviceAreas: [
    { name: 'Prescott', note: 'From the historic downtown and Mt. Vernon Street to Prescott Lakes and the Ranch.' },
    { name: 'Prescott Valley', note: 'Garages and businesses just east over Glassford Hill.' },
    { name: 'Chino Valley', note: 'Homes, shops and new construction to the north.' },
    { name: 'Williamson Valley', note: 'Ranch properties, barns and detached garages.' },
    { name: 'Groom Creek', note: 'Cabins and homes in the pines south of town.' },
    { name: 'Skull Valley', note: 'Rural homes and outbuildings to the west.' },
    { name: 'Dewey-Humboldt', note: 'Larger lots and workshops along Highway 69.' },
    { name: 'Kirkland', note: 'Ranch and rural properties by arrangement.' },
  ],

  projectTypes: [
    'Garage floor coating',
    'Residential interior floor',
    'Decorative flake floor',
    'Metallic epoxy floor',
    'Polyaspartic coating',
    'Polyurea coating',
    'Patio or pool deck',
    'Commercial floor',
    'Warehouse or industrial floor',
    'Not sure yet',
  ],
};

// Licensed Unsplash photography (Unsplash License). Swap `id` for `src` to self-host.
export const images = {
  dells: { id: 'photo-1628876521367-b344c020be54', alt: 'Granite boulders rising from calm lake water' },
  dellsWide: { id: 'photo-1649280559763-30335bb48d04', alt: 'Lake surrounded by rounded granite rock formations' },
  dellsBlue: { id: 'photo-1739559623816-952e4e2aded8', alt: 'Wide lake ringed by granite boulders under a blue sky' },
  forestStream: { id: 'photo-1649280559795-1c7a44cdb729', alt: 'Small stream winding through a pine forest' },
  forestSnow: { id: 'photo-1728673690748-82829f83a93d', alt: 'National forest sign half buried in winter snow' },
  victorianBlue: { id: 'photo-1775686296044-41d87f8307a2', alt: 'Light blue Victorian house with a front porch' },
  victorianTurret: { id: 'photo-1776538229252-3e4146f01815', alt: 'Victorian home with a turret and wraparound porch' },
  brickPorch: { id: 'photo-1758549799429-ac65e5f8321f', alt: 'Historic brick house with a covered front porch' },
  garageRow: { id: 'photo-1694025881942-b752102cee95', alt: 'Several cars parked on a smooth, sealed garage floor' },
  garageGroup: { id: 'photo-1694026078756-3743e4b9a09c', alt: 'Group of vehicles parked side by side in a clean garage' },
  garageDark: { id: 'photo-1769641241120-f0dd8669b12d', alt: 'Black SUV parked in a dimly lit garage' },
  roomWindow: { id: 'photo-1721222203357-098e3672276c', alt: 'Room with a large window, wooden table and seamless floor' },
  livingCouch: { id: 'photo-1721989521740-64f25460c768', alt: 'Living room with a couch and coffee table on a smooth floor' },
  kitchenLights: { id: 'photo-1721989516956-a9b06801038f', alt: 'Kitchen with a wooden table beneath hanging pendant lights' },
  restaurant: { id: 'photo-1706037463845-82bacd79c3ee', alt: 'Restaurant dining room with wooden tables and stools' },
  bar: { id: 'photo-1763264296087-ea5f487297d3', alt: 'Bartender serving drinks behind a modern bar counter' },
  hangarJet: { id: 'photo-1772161166556-67d412d8ac76', alt: 'Private jet parked inside a hangar on a light, sealed floor' },
  hangarSmall: { id: 'photo-1759753463512-ad0664fd89e5', alt: 'Several small aircraft parked inside a hangar' },
  hangarVintage: { id: 'photo-1779283203458-06b1cd8499cc', alt: 'Vintage silver airplane displayed in a wide hangar' },
  workshop: { id: 'photo-1777973706803-6f3f11fe5d77', alt: 'Busy workshop with a large project under construction' },
};
