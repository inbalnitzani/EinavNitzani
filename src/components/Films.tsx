import React from 'react';
import FilmCard from './FilmCard';
import type { Film } from '../types/Film';
// Define the Film type



// Array 1: Screenwriter/Director
const screenwriterDirectorFilms: Film[] = [
  {
    title: 'As Stars Out There',
    role: ' Writer & Director',
    description: `In the year of 1991, during the Gulf War and when Saddam Hussein decided to throw missiles at Israel, a civil defense siren forces a mother, daughter, pregnant granddaughter and awkward religious neighbor to remain in a safe room together for several hours. Adding to this already stressful situation, now that they're stuck in a room and have nowhere to run, family tensions and grudges emerge, forcing everyone to confront the fears and anxiety that their daily routines had previously kept under the surface.
                  The film touches on the complexity of mother-daughter relationships, single parenthood, multi-generational gaps, and is a sardonic look at the absurdity of wartime routines.`,
    trailer: '/videos/as__stars_out_there_trailer.mp4',
    festivals: [
      '-Won "Best Narrative Short" Award at LA Independent Women Film Awards 2022.',
      '-Official selection shorts program, 2023 Gender Equity in Media Society Vancouver (GEMS Vancouver), formerly Women in Film and Television Vancouver (WIFTV)',
      '-Screened at New York Shorts International Film Festival (Canadian Screen Award Qualifying).',
      '-Screened at New York Shorts International Film Festival (Canadian Screen Award Qualifying).',
      '-Participation at the Family Business Shorts Programme at UK Jewish Film Festival, 2023 '
    ],
    director: 'Einav Nitzani',
    cast: 'Rivka Michaeli, Sandra Sade, Amit Farkas and Yarden Toussia-Cohen',
    info: 'Israel, 2022, 15 min, Hebrew',
    photos: ['/photos/ASOT_1.jpg','/photos/ASOT_2.jpg','/photos/ASOT_3.jpg'],
    leftImageAngle: -2,
    topRightImageAngle: -7,
    bottomRightImageAngle: 12,
    leftImageSize: 250,
    topRightImageSize: 300,
    bottomRightImageSize: 220
  },
  {
    title: 'Hang, Swang, Vera Wang',
    role: ' Writer & Director',
    description: `In a quiet suburban backyard, Susan, a reserved housekeeper, discovers a hole in a shirt while doing laundry. But when she locks herself out of the house, a small act of improvisation - cutting a heart shape from the damaged fabric - triggers a surprising transformation. After a mysterious delivery of wedding dresses, Susan embarks on a private, whimsical journey of self-expression. One dress at a time, she inhabits different versions of herself: bride, ballerina, rock star, seductress, all within the bounds of a locked courtyard.
                  But when the homeowner Tami returns, reality reasserts itself. A silent exchange between the two women leaves unspoken questions suspended in the air: What was seen? What is forgiven? And who gets to try on a different life, even for a moment?`,
    trailer: '/videos/mos_trailer.mp4',
    festivals: [],
    director: 'Einav Nitzani',
    cast: 'Dafi Cramer',
    info: 'USA, 2024, 5 min, 16mm',
    photos: ['/photos/MOS_PIC_1.png','/photos/MOS_PIC_2.png','/photos/MOS_PIC_3.png'],
    leftImageAngle: 5,
    topRightImageAngle: -3,
    bottomRightImageAngle: -8,
    leftImageSize: 180,
    topRightImageSize: 280,
    bottomRightImageSize: 320
  },
  {
    title: 'Gefile-Fishi',
    role: ' Writer & Director',
    description: `In this heartwarming and comedic short film, sisters Billy (11) and Teddy (13) find themselves in a moral dilemma during a visit to their grandmother's Upper East Side apartment for Rosh Hashanah. Billy, an enthusiastic social media user, and Teddy, a principled animal rights advocate, discover a live carp in their grandmother's bathtub meant to be turned into gefilte fish. As they navigate their differing perspectives, the girls decide to save the fish by releasing it into Central Park's lake. Along their journey, they bond over their shared values and reflect on their grandmother's efforts to bridge generational and ideological gaps. Ultimately, the adventure becomes a lesson in compassion, understanding, and family loyalty.`,
    trailer: '/videos/mos_trailer.mp4',
    festivals: [],
    director: 'Einav Nitzani | DP: Cole Johnson | Producer: Yoni Azulay',
    cast: 'Jeanne Rosier, Annie Tisdale, Yuqian Zhang',
    info: 'USA, 2024, 7 min, English',
    photos: [],
    leftImageAngle: -6,
    topRightImageAngle: 4,
    bottomRightImageAngle: -1,
    leftImageSize: 320,
    topRightImageSize: 200,
    bottomRightImageSize: 260
  },
  {
    title: 'DAWN',
    role: ' Writer & Director',
    description: `A weekend reunion at an abandoned summer camp becomes a journey of humor, nostalgia, and reflection as Eva and her friends confront past losses and the fragile bonds of friendship while scattering a beloved friend's ashes.`,
    trailer: '/videos/mos_trailer.mp4',
    festivals: [],
    director: `Einav Nitzani | DP: Gaby Johnson | Producer: Yoni Azulay`,
    cast: 'Sarah Yarkin, Conor William Wright, Cory Jeacoma, Rosalie Lowe and Ben Warheit',
    info: 'USA, 2025, 15 min, English',
    photos: ['/photos/DAWN_1.JPG','/photos/DAWN_2.JPG','/photos/DAWN_3.JPG'],
    leftImageAngle: 3,
    topRightImageAngle: -9,
    bottomRightImageAngle: 6,
    leftImageSize: 200,
    topRightImageSize: 350,
    bottomRightImageSize: 240
  }
  // Add more films as needed
];

// Array 2: Producer
// const producerFilms: Film[] = [
//   {
//     title: 'Siblings',
//     role: 'Producer',
//     description: 'A documentary about marine life.',
//     img: 'https://via.placeholder.com/200x300?text=Beyond+the+Sea',
//     trailer: 'https://www.youtube.com/watch?v=trailer2',
//     festivals: [
//       { name: 'Berlin', awards: 'Best Documentary', year: 2020 },
//     ],
//     director: 'Director X',
//     cast: 'Actor C, Actor D',
//     language: 'English',
//     year: 2020,
//     duration: '75 min',
//     country: 'UK',
//   },
  // Add more films as needed
// ];

// // Array 3: Production Designer/Costume Designer
// const designerFilms: Film[] = [
//   {
//     title: 'Colors of Life',
//     role: 'Production Designer/Costume Designer',
//     description: 'A vibrant film about art and fashion.',
//     img: 'https://via.placeholder.com/200x300?text=Colors+of+Life',
//     trailer: 'https://www.youtube.com/watch?v=trailer3',
//     festivals: [
//       { name: 'Venice', awards: 'Best Costume Design', year: 2019 },
//     ],
//     director: 'Director Y',
//     cast: 'Actor E, Actor F',
//     language: 'French',
//     year: 2019,
//     duration: '110 min',
//     country: 'France',
//   },
//   // Add more films as needed
// ];

const Films: React.FC = () => (
  <div className="container d-flex flex-column justify-content-center align-items-center " style={{ minHeight: '80vh' }}>
    {screenwriterDirectorFilms.map(film => <FilmCard film={film} />)}
  </div>
);

export default Films;
