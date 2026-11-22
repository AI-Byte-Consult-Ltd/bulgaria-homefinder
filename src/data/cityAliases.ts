/**
 * Multilingual city/location aliases for search.
 * Each entry maps a canonical English name to its equivalents in BG, RU, DE, IT.
 * Search normalises input and checks against all aliases.
 */
export const cityAliases: Record<string, string[]> = {
  // Major cities
  burgas: ['бургас', 'bourgas', 'burgos'],
  sofia: ['софия', 'софія', 'sofiya'],
  plovdiv: ['пловдив'],
  varna: ['варна'],
  nesebar: ['несебър', 'несебр', 'nessebar', 'nesebur', 'nesebăr'],
  pomorie: ['поморие', 'поморье'],
  'sunny beach': ['слънчев бряг', 'солнечный берег', 'sonnenstrand', 'spiaggia soleggiata', 'sunny beach'],
  'saint vlas': ['свети влас', 'святой влас', 'sveti vlas', 'sv. vlas', 'saint vlas', 'san vlas'],
  elenite: ['елените', 'елените', 'eleniti'],
  sozopol: ['созопол', 'созополь'],
  ravda: ['равда'],
  sarafovo: ['сарафово'],
  kranevo: ['кранево'],
  obzor: ['обзор'],
  primorsko: ['приморско'],
  lozenets: ['лозенец'],
  aheloy: ['ахелой'],
  kosharitsa: ['кошарица', 'кошариця'],
  goritsa: ['горица'],
  alexandrovo: ['александрово'],
  // Districts
  madika: ['мадика'],
  horizont: ['хоризонт', 'горизонт'],
  zornitsa: ['зорница', 'зорниця'],
  slaveykov: ['славейков'],
  izgrev: ['изгрев'],
  kraymorie: ['крайморие', 'краймори'],
  sredets: ['средец'],
};

/**
 * Cities that should be treated as independent in search results.
 * When a user searches one of these, results are restricted to that exact city
 * (no substring matches against other coastal towns or regions).
 */
export const INDEPENDENT_CITIES = new Set<string>([
  'burgas',
  'sunny beach',
  'saint vlas',
  'elenite',
  'ravda',
  'nesebar',
  'pomorie',
  'sozopol',
  'sofia',
  'plovdiv',
  'varna',
]);

/**
 * Property type aliases across languages.
 * Maps internal type keys to multilingual search terms.
 */
export const propertyTypeAliases: Record<string, string[]> = {
  studio: [
    'studio', 'студио', 'студия', 'studio-apartment',
    'студийо', 'monolocale', 'einzimmerwohnung',
  ],
  apartment: [
    'apartment', 'апартамент', 'квартира', 'апартаменти',
    'appartamento', 'wohnung', 'flat', 'mieszkanie', 'квартиру', 'апартаменты',
    'one bedroom', 'one-bedroom', '1 bedroom', '1-bedroom',
    'однокомнатная', 'одна спальня', 'едностаен',
    'two bedroom', 'two-bedroom', '2 bedroom', '2-bedroom',
    'двустаен', 'двухкомнатная', 'две спальни',
    'three bedroom', 'three-bedroom', '3 bedroom', '3-bedroom',
    'тристаен', 'трехкомнатная', 'три спальни',
  ],
  house: [
    'house', 'къща', 'дом', 'haus', 'casa', 'dom', 'домик', 'къщи',
  ],
  villa: [
    'villa', 'вила', 'вилла', 'willa',
  ],
  land: [
    'land', 'земя', 'земля', 'grundstück', 'terreno', 'парцел', 'участок', 'działka', 'plot',
  ],
  commercial: [
    'commercial', 'търговски', 'коммерческая', 'gewerbe', 'commerciale', 'komercyjne',
  ],
};

/**
 * Resolve a query string to a canonical city if it exactly matches a city name or alias.
 */
export function resolveCanonicalCity(query: string): string | null {
  const q = query.toLowerCase().trim();
  if (!q) return null;
  for (const [canonical, aliases] of Object.entries(cityAliases)) {
    if (canonical === q || aliases.some((a) => a.toLowerCase() === q)) {
      return canonical;
    }
  }
  return null;
}

/**
 * Get the primary city portion of a location string (text before first comma).
 */
function getPrimaryCity(location: string): string {
  return (location || '').split(',')[0].trim().toLowerCase();
}

/**
 * Check whether a property's primary location equals the given canonical city
 * (also matching any of its aliases).
 */
export function locationMatchesCanonicalCity(location: string, canonical: string): boolean {
  const primary = getPrimaryCity(location);
  if (!primary) return false;
  if (primary === canonical) return true;
  const aliases = cityAliases[canonical] || [];
  return aliases.some((a) => a.toLowerCase() === primary);
}

/**
 * Given a user query, expand it to find matching canonical location names.
 * Returns an array of canonical names that the query could refer to.
 */
export function findMatchingCities(query: string): string[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const matches: string[] = [];

  for (const [canonical, aliases] of Object.entries(cityAliases)) {
    if (
      canonical.includes(q) ||
      q.includes(canonical) ||
      aliases.some((alias) => alias.includes(q) || q.includes(alias))
    ) {
      matches.push(canonical);
    }
  }

  return matches;
}

/**
 * Resolve a single search word to a property type ("дом" → house), if it is one.
 */
export function resolvePropertyType(term: string): string | null {
  const t = term.toLowerCase().trim();
  if (t.length < 3) return null;
  for (const [type, aliases] of Object.entries(propertyTypeAliases)) {
    if (type === 'studio') continue; // studios are listed as apartments
    if (type === t || aliases.some((a) => !a.includes(' ') && a.toLowerCase() === t)) return type;
  }
  return null;
}

const LANG_SUFFIXES = ['', 'Bg', 'Ru', 'De', 'It', 'Pl'];

/** Lower-case and strip Latin diacritics so "nesebăr" matches "nesebar". */
const fold = (v: string) =>
  v.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').normalize('NFC');

/**
 * Check if a property matches a free-text search query across all multilingual fields.
 * Every word of the query has to match: as text in any language version of the
 * title, location or description, as a city/district alias, or as a property type.
 */
export function propertyMatchesQuery(property: any, query: string): boolean {
  const q = fold(query).trim();
  if (!q) return true;

  const locations = LANG_SUFFIXES
    .map((sfx) => property[`location${sfx}`])
    .filter(Boolean)
    .map((l: string) => fold(l));

  // Strict mode: if the entire query exactly resolves to an independent city,
  // only return properties whose primary location is that exact city.
  const canonical = resolveCanonicalCity(q);
  if (canonical && INDEPENDENT_CITIES.has(canonical)) {
    return locations.some((loc) => locationMatchesCanonicalCity(loc, canonical));
  }

  const searchableText = fold(
    LANG_SUFFIXES.flatMap((sfx) => [
      property[`title${sfx}`],
      property[`location${sfx}`],
      property[`description${sfx}`],
    ])
      .filter(Boolean)
      .join(' ') + ` ${property.id || ''}`
  );

  const locationText = locations.join(' | ');
  const cityMatches = (needle: string) =>
    needle.length >= 3 &&
    findMatchingCities(needle).some((city) => {
      if (INDEPENDENT_CITIES.has(city)) {
        return locations.some((loc) => locationMatchesCanonicalCity(loc, city));
      }
      return (
        locationText.includes(city) ||
        (cityAliases[city] || []).some((a) => locationText.includes(a.toLowerCase()))
      );
    });

  // A place name typed on its own, including multi-word ones ("свети влас")
  if (canonical) return cityMatches(q);

  const terms = q.split(/[\s,;]+/).filter(Boolean);
  return terms.every((term) => {
    // A property-type word ("house", "дом", "wohnung") filters by type
    const type = resolvePropertyType(term);
    if (type) return property.type === type;
    // A city name inside a longer query is matched as strictly as on its own
    const city = resolveCanonicalCity(term);
    if (city && INDEPENDENT_CITIES.has(city)) {
      return locations.some((loc) => locationMatchesCanonicalCity(loc, city));
    }
    return searchableText.includes(term) || cityMatches(term);
  });
}
