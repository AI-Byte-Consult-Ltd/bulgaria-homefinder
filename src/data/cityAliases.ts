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
    description?: string;
    descriptionBg?: string;
    type?: string;
  },
  query: string
): boolean {
  const q = query.toLowerCase().trim();
  if (!q) return true;

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
  if (matchingCities.some((city) => locationLower.includes(city))) return true;

  // Check if individual terms match city aliases
  for (const term of terms) {
    const cityMatches = findMatchingCities(term);
    if (cityMatches.some((city) => locationLower.includes(city))) {
      // This term matched a city, check remaining terms against text
      const otherTerms = terms.filter((t) => t !== term);
      if (otherTerms.length === 0) return true;
      if (otherTerms.every((t) => searchableText.includes(t))) return true;
    }
  }

  return false;
}
