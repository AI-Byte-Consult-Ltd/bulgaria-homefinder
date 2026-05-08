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
    'appartamento', 'wohnung', 'flat',
    'one bedroom', 'one-bedroom', '1 bedroom', '1-bedroom',
    'однокомнатная', 'одна спальня', 'едностаен',
    'two bedroom', 'two-bedroom', '2 bedroom', '2-bedroom',
    'двустаен', 'двухкомнатная', 'две спальни',
    'three bedroom', 'three-bedroom', '3 bedroom', '3-bedroom',
    'тристаен', 'трехкомнатная', 'три спальни',
  ],
  house: [
    'house', 'къща', 'дом', 'haus', 'casa',
  ],
  villa: [
    'villa', 'вила', 'вилла', 'villa',
  ],
  land: [
    'land', 'земя', 'земля', 'grundstück', 'terreno', 'парцел', 'участок',
  ],
  commercial: [
    'commercial', 'търговски', 'коммерческая', 'gewerbe', 'commerciale',
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
 * Check if a property matches a free-text search query across all multilingual fields.
 */
export function propertyMatchesQuery(
  property: {
    title: string;
    titleBg?: string;
    location: string;
    locationBg?: string;
    locationRu?: string;
    locationDe?: string;
    locationIt?: string;
    description?: string;
    descriptionBg?: string;
    type?: string;
  },
  query: string
): boolean {
  const q = query.toLowerCase().trim();
  if (!q) return true;

  // Strict mode: if the entire query exactly resolves to an independent city,
  // only return properties whose primary location is that exact city.
  const canonical = resolveCanonicalCity(q);
  if (canonical && INDEPENDENT_CITIES.has(canonical)) {
    const locations = [
      property.location,
      property.locationBg,
      property.locationRu,
      property.locationDe,
      property.locationIt,
    ].filter(Boolean) as string[];
    return locations.some((loc) => locationMatchesCanonicalCity(loc, canonical));
  }

  // Split query into individual terms for multi-word matching
  const terms = q.split(/\s+/).filter(Boolean);

  // Direct text search across all fields
  const searchableText = [
    property.title,
    property.titleBg || '',
    property.location,
    property.description || '',
    property.descriptionBg || '',
  ]
    .join(' ')
    .toLowerCase();

  // Check if ALL terms match (AND logic for multi-word queries)
  const allTermsMatch = terms.every((term) => searchableText.includes(term));
  if (allTermsMatch) return true;

  // Check city aliases: does the query refer to a city that appears in location?
  const matchingCities = findMatchingCities(q);
  const locationLower = property.location.toLowerCase();
  if (matchingCities.some((city) => {
    // For independent cities, require primary-city match (strict)
    if (INDEPENDENT_CITIES.has(city)) {
      return locationMatchesCanonicalCity(property.location, city);
    }
    return locationLower.includes(city);
  })) return true;

  // Check if individual terms match city aliases
  for (const term of terms) {
    const cityMatches = findMatchingCities(term);
    const matched = cityMatches.some((city) => {
      if (INDEPENDENT_CITIES.has(city)) {
        return locationMatchesCanonicalCity(property.location, city);
      }
      return locationLower.includes(city);
    });
    if (matched) {
      const otherTerms = terms.filter((t) => t !== term);
      if (otherTerms.length === 0) return true;
      if (otherTerms.every((t) => searchableText.includes(t))) return true;
    }
  }

  return false;
}
