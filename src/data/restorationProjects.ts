import rhodopeBefore1 from '@/assets/restoration/rhodope-before-1.jpg';
import rhodopeAfter1 from '@/assets/restoration/rhodope-after-1.jpg';
import rhodopeStage1 from '@/assets/restoration/rhodope-stage-1.jpg';
import rhodopeStage2 from '@/assets/restoration/rhodope-stage-2.jpg';
import rhodopeStage3 from '@/assets/restoration/rhodope-stage-3.jpg';

import koprivshtitsaBefore1 from '@/assets/restoration/koprivshtitsa-before-1.jpg';
import koprivshtitsaAfter1 from '@/assets/restoration/koprivshtitsa-after-1.jpg';
import koprivshtitsaStage1 from '@/assets/restoration/koprivshtitsa-stage-1.jpg';
import koprivshtitsaStage2 from '@/assets/restoration/koprivshtitsa-stage-2.jpg';

import balkanBefore1 from '@/assets/restoration/balkan-before-1.jpg';
import balkanAfter1 from '@/assets/restoration/balkan-after-1.jpg';
import balkanStage1 from '@/assets/restoration/balkan-stage-1.jpg';
import balkanStage2 from '@/assets/restoration/balkan-stage-2.jpg';

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
    id: 'rhodope-stone-house',
    title: 'Traditional Rhodope Stone House Revival',
    location: 'Shiroka Laka, Rhodope Mountains',
    architect: 'NIC\'s Renovation Team',
    year: '2024',
    description: 'Full restoration of a 19th-century Rhodope stone house in the picturesque village of Shiroka Laka. The original stone masonry, traditional wooden balcony and clay tile roof were carefully restored while adding modern insulation, plumbing and underfloor heating. The house now serves as a family retreat with 3 bedrooms and panoramic mountain views.',
    thumbnail: rhodopeAfter1,
    beforeImages: [rhodopeBefore1],
    afterImages: [rhodopeAfter1],
    stages: [
      {
        title: 'Stone Wall Restoration',
        description: 'Local stonemasons rebuilt crumbling sections using authentic Rhodope stone and traditional lime mortar techniques. Each stone was hand-selected to match the original pattern.',
        image: rhodopeStage1,
      },
      {
        title: 'Roof & Timber Replacement',
        description: 'The collapsed roof was entirely rebuilt with new oak beams and traditional clay tiles. Modern waterproofing membrane was added beneath the tiles for long-term durability.',
        image: rhodopeStage2,
      },
      {
        title: 'Interior Modernisation',
        description: 'New oak plank floors, white lime-plastered walls and restored ceiling beams. A fully equipped modern kitchen was installed while preserving the traditional Bulgarian aesthetic.',
        image: rhodopeStage3,
      },
    ],
  },
  {
    id: 'koprivshtitsa-revival-house',
    title: 'Bulgarian Revival House Restoration',
    location: 'Koprivshtitsa, Sofia Province',
    architect: 'NIC\'s Renovation Team',
    year: '2025',
    description: 'Meticulous restoration of a Bulgarian Revival-era house in the historic town of Koprivshtitsa. The project focused on preserving the ornate hand-carved wooden bay windows (erker), restoring original wall frescoes and the colourful painted facade — a hallmark of the National Revival period. The building is now a fully functioning guesthouse.',
    thumbnail: koprivshtitsaAfter1,
    beforeImages: [koprivshtitsaBefore1],
    afterImages: [koprivshtitsaAfter1],
    stages: [
      {
        title: 'Woodwork & Erker Restoration',
        description: 'Master woodcarvers painstakingly restored the ornate bay-window panels and decorative facade elements using traditional hand tools and aged walnut timber.',
        image: koprivshtitsaStage1,
      },
      {
        title: 'Fresco & Facade Painting',
        description: 'Art conservators cleaned and repainted the traditional floral wall frescoes using period-correct natural pigments bound in lime wash.',
        image: koprivshtitsaStage2,
      },
    ],
  },
  {
    id: 'balkan-village-house',
    title: 'Rural Village House Transformation',
    location: 'Teteven, Stara Planina',
    architect: 'NIC\'s Renovation Team',
    year: '2025',
    description: 'Complete transformation of a derelict single-storey village house at the foot of the Balkan Mountains near Teteven. The collapsed roof and crumbling walls were rebuilt from the foundations up. New wooden shutters, a garden with traditional wooden fence and a modern interior make this an ideal countryside retreat — purchased for under €10,000 and renovated on a budget.',
    thumbnail: balkanAfter1,
    beforeImages: [balkanBefore1],
    afterImages: [balkanAfter1],
    stages: [
      {
        title: 'Foundation Reinforcement',
        description: 'The original river-stone foundation was excavated, repaired and reinforced with a concrete ring beam to ensure structural stability for decades to come.',
        image: balkanStage1,
      },
      {
        title: 'Veranda & Woodwork',
        description: 'A new traditional-style wooden veranda and balcony were constructed using locally sourced pine, adding character and extra living space.',
        image: balkanStage2,
      },
    ],
  },
];
