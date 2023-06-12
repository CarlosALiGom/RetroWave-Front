import {
  SynthDataStructure,
  SynthStructure,
  SynthUserDataStructure,
} from "../store/synths/types";

export const synthDbMocks: SynthDataStructure[] = [
  {
    id: "6474a6a62d09cd1540f0fab7",
    name: "TR-808",
    brand: "Roland",
    imageUrl: "https://i.ytimg.com/vi/VrxAUOK0ymo/hqdefault.jpg",
    description:
      "The Roland TR-808 Rhythm Composer, often referred to as the 808, is a classic drum machine famous for its deep bass kicks and snappy snares.",
    yearOfCreation: "1980",
    type: "Analog",
  },
  {
    id: "6474a6a62d09cd1540f0fab8",
    name: "TB-303",
    brand: "Roland",
    imageUrl:
      "https://images.reverb.com/image/upload/s--nHBt75bc--/f_auto,t_supersize/v1616529619/hjnz6g52bgm2ila46ulj.png",
    description:
      "The Roland TB-303 Bass Line is a bass synthesizer known for its distinctive squelchy sound and its influence on the development of electronic music genres like acid house.",
    yearOfCreation: "1982",
    type: "Analog",
  },
  {
    id: "6474a6a62d09cd1540f0fab9",
    name: "MS-20",
    brand: "Moog",
    imageUrl:
      "https://bartwronski.files.wordpress.com/2021/10/pxl_20211014_214606176.jpg",
    description:
      "The Moog MS-20 is a semi-modular monophonic synthesizer that offers versatile sound shaping capabilities and a unique patching system.",
    yearOfCreation: "1978",
    type: "Analog",
  },
  {
    id: "6474a6a62d09cd1540f0faba",
    name: "Grandmother",
    brand: "Moog",
    imageUrl:
      "https://factmag-images.s3.amazonaws.com/wp-content/uploads/2018/05/moog-grandmother-1405.jpg",
    description:
      "The Moog Grandmother is a versatile semi-modular analog synthesizer with a built-in arpeggiator, sequencer, and spring reverb for rich sound exploration.",
    yearOfCreation: "2018",
    type: "Analog",
  },
  {
    id: "6474a6a62d09cd1540f0fabb",
    name: "Minilogue",
    brand: "Korg",
    imageUrl:
      "https://manhattan-proaudio.com/520-thickbox_default/korg-minilogue-xd.jpg",
    description:
      "The Korg Minilogue is a polyphonic analog synthesizer with four voices, a versatile sound engine, and a sleek design suitable for both studio and live performances.",
    yearOfCreation: "2016",
    type: "Hybrid",
  },
];

export const synthDbMock: SynthDataStructure[] = [
  {
    id: "6474a6a62d09cd1540f0fab7",
    name: "TR-808",
    brand: "Roland",
    imageUrl: "https://i.ytimg.com/vi/VrxAUOK0ymo/hqdefault.jpg",
    description:
      "The Roland TR-808 Rhythm Composer, often referred to as the 808, is a classic drum machine famous for its deep bass kicks and snappy snares.",
    yearOfCreation: "1980",
    type: "Analog",
  },
];

export const addSynthMock: SynthStructure = {
  name: "TR-808",
  brand: "Roland",
  imageUrl: "https://i.ytimg.com/vi/VrxAUOK0ymo/hqdefault.jpg",
  description:
    "The Roland TR-808 Rhythm Composer, often referred to as the 808, is a classic drum machine famous for its deep bass kicks and snappy snares.",
  yearOfCreation: "1980",
  type: "Analog",
};

export const addSynthStoreMock: SynthDataStructure = {
  name: "TR-808",
  brand: "Roland",
  imageUrl: "https://i.ytimg.com/vi/VrxAUOK0ymo/hqdefault.jpg",
  description:
    "The Roland TR-808 Rhythm Composer, often referred to as the 808, is a classic drum machine famous for its deep bass kicks and snappy snares.",
  yearOfCreation: "1980",
  type: "Analog",
  id: "6474a6a62d09cd1540f0fab7",
};

export const emptySynthStoreMock: SynthDataStructure = {
  brand: "",
  description: "",
  id: "",
  imageUrl: "",
  name: "",
  type: "",
  yearOfCreation: "",
};

export const addSynthStoreUserMock: SynthUserDataStructure = {
  name: "TR-808",
  brand: "Roland",
  imageUrl: "https://i.ytimg.com/vi/VrxAUOK0ymo/hqdefault.jpg",
  description:
    "The Roland TR-808 Rhythm Composer, often referred to as the 808, is a classic drum machine famous for its deep bass kicks and snappy snares.",
  yearOfCreation: "1980",
  type: "Analog",
  id: "6474a6a62d09cd1540f0fab7",
  user: "64707ddf2d09cd1540f0faaf",
};

export const initialStateStoreMock: SynthDataStructure[] = [
  {
    id: "6474a6a62d09cd1540f0faba",
    name: "Grandmother",
    brand: "Moog",
    imageUrl:
      "https://factmag-images.s3.amazonaws.com/wp-content/uploads/2018/05/moog-grandmother-1405.jpg",
    description:
      "The Moog Grandmother is a versatile semi-modular analog synthesizer with a built-in arpeggiator, sequencer, and spring reverb for rich sound exploration.",
    yearOfCreation: "2018",
    type: "Analog",
  },
  {
    id: "6474a6a62d09cd1540f0fabb",
    name: "Minilogue",
    brand: "Korg",
    imageUrl:
      "https://manhattan-proaudio.com/520-thickbox_default/korg-minilogue-xd.jpg",
    description:
      "The Korg Minilogue is a polyphonic analog synthesizer with four voices, a versatile sound engine, and a sleek design suitable for both studio and live performances.",
    yearOfCreation: "2016",
    type: "Hybrid",
  },
];

export const eightSynthsDbMock = [
  {
    id: "6474a6a62d09cd1540f0fabb",
    name: "SY77",
    brand: "Yamaha",
    imageUrl:
      "https://media.discordapp.net/attachments/1116096712147222663/1117088699545563296/yamaha-sy77-5621565.webp?width=724&height=585",
    description:
      "The Yamaha SY77 is a hybrid synthesizer workstation that combines FM synthesis with sample-based sound sources. It offers a wide range of realistic and expressive sounds, thanks to its advanced FM engine and extensive sample library. With its powerful sequencing capabilities, built-in effects, and expressive performance controls, the SY77 has been a staple in many professional studios and live performances.",
    yearOfCreation: "1989",
    type: "Hybrid",
    user: "64707ddf2d09cd1540f0faaf",
  },
  {
    id: "6474a6a62d09cd1540f0fabc",
    name: "V-Synth",
    brand: "Roland",
    imageUrl:
      "https://media.discordapp.net/attachments/1116096712147222663/1117088707841896518/v-synth.webp?width=724&height=585",
    description:
      "The Roland V-Synth is a hybrid synthesizer that combines digital synthesis, virtual analog modeling, and sample playback. It offers a wide range of sonic possibilities with its powerful sound engine and extensive real-time control options. The V-Synth features a unique TimeTrip Pad that allows for expressive manipulation of sounds, making it a favorite among sound designers and electronic music producers.",
    yearOfCreation: "2003",
    type: "Hybrid",
    user: "64707ddf2d09cd1540f0faaf",
  },
  {
    id: "6474a6a62d09cd1540f0fabd",
    name: "SQ-80",
    brand: "Ensoniq",
    imageUrl:
      "https://media.discordapp.net/attachments/1116096712147222663/1117478083197415545/ensoniq_sq80_angle1_lg.webp?width=724&height=585",
    description:
      "The Ensoniq SQ-80 is a hybrid synthesizer known for its warm analog filters and digital waveforms. It features a combination of digital oscillators and analog filters, allowing for a unique blend of sounds. The SQ-80 offers extensive modulation capabilities, a versatile sequencer, and a wide range of preset sounds, making it a popular choice among synth enthusiasts and electronic musicians.",
    yearOfCreation: "1987",
    type: "Hybrid",
    user: "64707ddf2d09cd1540f0faaf",
  },
  {
    id: "6474a6a62d09cd1540f0fabe",
    name: "Prophet VS",
    brand: "Sequential Circuits",
    imageUrl:
      "https://media.discordapp.net/attachments/1116096712147222663/1117088790926860288/prophet-vs.webp?width=724&height=585",
    description:
      "The Sequential Circuits Prophet VS is a hybrid synthesizer that combines digital wavetable synthesis with analog filters and amplifiers. It introduced the concept of vector synthesis, allowing for dynamic and evolving soundscapes. The Prophet VS offers a unique sound palette, rich with complex waveforms and expressive timbral control, making it a prized vintage synth sought after by collectors and electronic music producers.",
    yearOfCreation: "1986",
    type: "Hybrid",
    user: "64707ddf2d09cd1540f0faaf",
  },
  {
    id: "6474a6a62d09cd1540f0fabf",
    name: "Digitakt",
    brand: "Elektron",
    imageUrl:
      "https://media.discordapp.net/attachments/1116096712147222663/1117082182515695646/elektron-digitakt.webp?width=724&height=585",
    description:
      "The Elektron Digitakt is a powerful drum machine and sampler with a digital sound engine. It offers a range of high-quality built-in sounds and the ability to import your own samples. With its intuitive sequencer, parameter locks, and real-time control options, the Digitakt allows for precise and dynamic beat creation. It has become a popular choice among electronic music producers and live performers.",
    yearOfCreation: "2017",
    type: "Digital",
    user: "64707ddf2d09cd1540f0faaf",
  },
  {
    id: "6474a6a62d09cd1540f0fabg",
    name: "PO-16",
    brand: "Teenage Engineering",
    imageUrl:
      "https://media.discordapp.net/attachments/1116096712147222663/1117082209006919690/pocket-operators.webp?width=724&height=585",
    description:
      "The Pocket Operator PO-16 is a compact and portable synthesizer and sequencer. It offers a range of built-in sounds and effects, allowing for fun and creative music-making on the go. With its pocket-sized design, intuitive interface, and powerful sound engine, the PO-16 is a popular choice among electronic music enthusiasts and beginners alike.",
    yearOfCreation: "2015",
    type: "Digital",
    user: "64707ddf2d09cd1540f0faaf",
  },
  {
    id: "6474a6a62d09cd1540f0fabh",
    name: "System-1",
    brand: "Roland",
    imageUrl:
      "https://media.discordapp.net/attachments/1116096712147222663/1117089009907273748/system-1.webp?width=724&height=585",
    description:
      "The Roland System-1 is a versatile synthesizer that combines analog modeling with digital sound processing. It offers a wide range of classic Roland synth sounds, along with the ability to create new and unique sounds using its flexible architecture. With its intuitive interface, powerful sound engine, and extensive control options, the System-1 is a popular choice for both studio production and live performances.",
    yearOfCreation: "2014",
    type: "Hybrid",
    user: "64707ddf2d09cd1540f0faaf",
  },
  {
    id: "6474a6a62d09cd1540f0fabi",
    name: "Digitone",
    brand: "Elektron",
    imageUrl:
      "https://media.discordapp.net/attachments/1116096712147222663/1117082155370172496/1ELEKTRONDIGITAKT-1.webp?width=724&height=585",
    description:
      "The Elektron Digitone is a powerful digital synthesizer that combines FM synthesis with a classic subtractive synthesis architecture. It offers a wide range of complex and evolving sounds, making it suitable for various musical styles. With its intuitive interface, versatile sequencer, and powerful sound engine, the Digitone allows for deep sound exploration and intricate pattern creation.",
    yearOfCreation: "2018",
    type: "Digital",
    user: "64707ddf2d09cd1540f0faaf",
  },
];
