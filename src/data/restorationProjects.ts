export interface RestorationProject {
  id: string;
  title: string;
  location: string;
  architect: string;
  year: string;
  description: string;
  thumbnail: string;
  beforeImages: string[];
  afterImages: string[];
  stages: {
    title: string;
    description: string;
    image: string;
  }[];
}

export const restorationProjects: RestorationProject[] = [
  {
    id: 'villa-varna',
    title: 'Historic Villa Restoration in Varna',
    location: 'Varna, Bulgaria',
    architect: 'Arch. Petar Dimitrov',
    year: '2023',
    description: 'Complete restoration of a 1920s Art Deco villa overlooking the Black Sea. The project preserved original architectural details while modernizing infrastructure and interiors.',
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    beforeImages: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
      'https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=800&q=80',
    ],
    afterImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
    stages: [
      {
        title: 'Initial Assessment',
        description: 'Complete structural analysis and historical documentation of the original building.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
      },
      {
        title: 'Foundation & Structural Work',
        description: 'Reinforcement of foundations and structural elements while preserving original walls.',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
      },
      {
        title: 'Roof Restoration',
        description: 'Traditional clay tile roof restored with modern insulation underneath.',
        image: 'https://images.unsplash.com/photo-1632759145354-523c3e9ee141?w=600&q=80',
      },
      {
        title: 'Interior Finishing',
        description: 'Original wood floors refinished, period-appropriate fixtures installed.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      },
    ],
  },
  {
    id: 'rural-house-plovdiv',
    title: 'Traditional Rural House Revival',
    location: 'Plovdiv Region, Bulgaria',
    architect: 'Arch. Maria Ivanova',
    year: '2022',
    description: 'A 150-year-old traditional Bulgarian house transformed into a modern family home while maintaining its authentic character and cultural heritage.',
    thumbnail: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=80',
    beforeImages: [
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80',
      'https://images.unsplash.com/photo-1590725140246-20acddc35fce?w=800&q=80',
    ],
    afterImages: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    ],
    stages: [
      {
        title: 'Heritage Documentation',
        description: 'Detailed photography and measurement of original elements for preservation.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
      },
      {
        title: 'Stone Wall Restoration',
        description: 'Traditional stone masonry repaired using authentic techniques.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      },
      {
        title: 'Wooden Elements',
        description: 'Hand-carved wooden details restored by local craftsmen.',
        image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
      },
      {
        title: 'Modern Amenities',
        description: 'Integration of modern heating, plumbing, and electrical systems.',
        image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
      },
    ],
  },
  {
    id: 'apartment-sofia',
    title: 'Sofia Art Nouveau Apartment',
    location: 'Sofia, Bulgaria',
    architect: 'Arch. Georgi Petkov',
    year: '2024',
    description: 'Luxury apartment renovation in a 1905 Art Nouveau building in central Sofia. Original stucco work and ceiling paintings carefully restored.',
    thumbnail: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&q=80',
    beforeImages: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80',
    ],
    afterImages: [
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    ],
    stages: [
      {
        title: 'Art Survey',
        description: 'Expert analysis of original ceiling paintings and decorative elements.',
        image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=600&q=80',
      },
      {
        title: 'Stucco Restoration',
        description: 'Painstaking repair of ornate plasterwork by specialized artisans.',
        image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
      },
      {
        title: 'Painting Conservation',
        description: 'Professional cleaning and restoration of historic ceiling frescoes.',
        image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80',
      },
      {
        title: 'Luxury Finishing',
        description: 'High-end finishes and custom millwork to complement historic details.',
        image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
      },
    ],
  },
];
