// Site-wide configuration for Epoxy Flooring Prescott.

export const site = {
  name: 'Epoxy Flooring Prescott',
  domain: 'https://prescotteliteepoxyflooring.com',
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

// Licensed Envato Elements photography, self-hosted as WebP in src/assets/img (key-<width>.webp).
export const images = {
  dells: { file: 'dells', group: 'scene', w: 1600, h: 1200, widths: [480, 800, 1200, 1600], alt: "Granite boulders rising from Watson Lake in Prescott" },
  dellsWide: { file: 'dellsWide', group: 'scene', w: 1600, h: 1033, widths: [480, 800, 1200, 1600], alt: "Watson Lake and its granite formations at dusk" },
  dellsBlue: { file: 'dellsBlue', group: 'scene', w: 1600, h: 1200, widths: [480, 800, 1200, 1600], alt: "Rounded granite boulders along a deep blue lake" },
  forestStream: { file: 'forestStream', group: 'scene', w: 1600, h: 896, widths: [480, 800, 1200, 1600], alt: "Small stream winding through a pine forest" },
  forestSnow: { file: 'forestSnow', group: 'scene', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Tall pines standing in fresh winter snow" },
  victorianBlue: { file: 'victorianBlue', group: 'scene', w: 1600, h: 898, widths: [480, 800, 1200, 1600], alt: "Light blue porch with white railings on a historic home" },
  victorianTurret: { file: 'victorianTurret', group: 'scene', w: 1600, h: 1290, widths: [480, 800, 1200, 1600], alt: "Victorian homes with turrets and ornate trim" },
  brickPorch: { file: 'brickPorch', group: 'scene', w: 1600, h: 1067, widths: [480, 800, 1200, 1600], alt: "Historic brick house with a long covered front porch" },
  garageGroup: { file: 'garageGroup', group: 'garage', w: 1600, h: 1064, widths: [480, 800, 1200, 1600], alt: "Service shop with vehicle lifts over a light tiled floor" },
  garageRow: { file: 'garageRow', group: 'garage', w: 1600, h: 1064, widths: [480, 800, 1200, 1600], alt: "Bright residential garage with a dark tiled floor" },
  garageDark: { file: 'garageDark', group: 'garage', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Clean, empty garage with a grey concrete floor" },
  roomWindow: { file: 'roomWindow', group: 'interior', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Wooden table in front of a bright room with a large window" },
  livingCouch: { file: 'livingCouch', group: 'interior', w: 1600, h: 1200, widths: [480, 800, 1200, 1600], alt: "Living room with a dark couch and coffee table on a smooth floor" },
  kitchenLights: { file: 'kitchenLights', group: 'interior', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Kitchen with a wooden table beneath a pendant light" },
  restaurant: { file: 'restaurant', group: 'commercial', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Restaurant dining room with rustic wooden tables and benches" },
  bar: { file: 'bar', group: 'commercial', w: 1600, h: 1200, widths: [480, 800, 1200, 1600], alt: "Marble bar counter with stools under soft blue lighting" },
  hangarJet: { file: 'hangarJet', group: 'industrial', w: 1600, h: 809, widths: [480, 800, 1200, 1600], alt: "Private jets parked inside a hangar on a light, sealed floor" },
  hangarSmall: { file: 'hangarSmall', group: 'industrial', w: 1600, h: 1200, widths: [480, 800, 1200, 1600], alt: "Small single-engine airplane parked inside a hangar" },
  hangarVintage: { file: 'hangarVintage', group: 'industrial', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Airplanes parked in a wide hangar with a glossy blue floor" },
  workshop: { file: 'workshop', group: 'industrial', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Fabrication workshop with steel framing and equipment" },
  xSweep: { file: 'xSweep', group: 'garage', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Broom sweeping dust from a grey workshop floor" },
  xStorage: { file: 'xStorage', group: 'garage', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Workshop storage room with shelves, tools and a mower" },
  xOffice: { file: 'xOffice', group: 'interior', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Home office with a desk and chair on a polished concrete floor" },
  xTheater: { file: 'xTheater', group: 'interior', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Media room with leather seating and a pale floor" },
  xEntrance: { file: 'xEntrance', group: 'interior', w: 1600, h: 1067, widths: [480, 800, 1200, 1600], alt: "Bright entry hall with a bench and a tiled floor" },
  xSpread: { file: 'xSpread', group: 'industrial', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Installer spreading a fresh coating across a large floor" },
  xCommercialCoat: { file: 'xCommercialCoat', group: 'industrial', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Installer rolling a grey coating in a commercial space" },
  xPrep: { file: 'xPrep', group: 'industrial', w: 1600, h: 1067, widths: [480, 800, 1200, 1600], alt: "Installers preparing a concrete floor for resin" },
  xSalon: { file: 'xSalon', group: 'commercial', w: 1600, h: 1032, widths: [480, 800, 1200, 1600], alt: "Salon with wash stations and a coated red floor" },
};
