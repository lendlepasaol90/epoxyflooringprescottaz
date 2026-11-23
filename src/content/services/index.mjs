// Service registry: order here drives the menu, footer and homepage index.
import garage from './garage-floor-coating.mjs';
import residential from './basement-and-interior-epoxy.mjs';
import flake from './chip-flake-floors.mjs';
import polyaspartic from './polyaspartic-topcoats.mjs';
import polyurea from './polyurea-coatings.mjs';
import patio from './porch-walkway-patio-coatings.mjs';
import commercial from './commercial-epoxy-floors.mjs';
import warehouse from './hangar-warehouse-floors.mjs';

export const services = [garage, residential, flake, polyaspartic, polyurea, patio, commercial, warehouse];
export const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
