import { Product } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Elegance - 2 Front',
    description: 'Premier 3-way floor-standing stereo speaker system with silk tweeter and high-excursion woofers.',
    price: 1850,
    image: 'http://mtpoweraudio.co.uk//storage/categories/OMKljObb6oXyPq4bnwvV.jpg',
    category: 'Floorstanding',
    specs: [
      { label: 'Drivers', value: '1" Silk Tweeter, 3x5.25" Mid, 8" Woofer' },
      { label: 'Frequency Response', value: '35Hz - 25kHz' },
      { label: 'Power Handling', value: '60W - 180W' },
      { label: 'Impedance', value: '8 Ohms' }
    ]
  },
  {
    id: '2',
    name: 'Precision Bookshelf B3',
    description: 'Compact high-performance speakers designed for critical listening in smaller rooms.',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1583394838336-acd97773dbf9?q=80&w=800&auto=format&fit=crop',
    category: 'Bookshelf',
    specs: [
      { label: 'Frequency Response', value: '45Hz - 25kHz' },
      { label: 'Sensitivity', value: '87dB' },
      { label: 'Impedance', value: '8 Ohms' }
    ]
  },
  {
    id: '3',
    name: 'Titan Center C1',
    description: 'The heart of your home theater. Exceptional vocal clarity and dynamic range.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1594106182463-759c60473528?q=80&w=800&auto=format&fit=crop',
    category: 'Center Channel',
    specs: [
      { label: 'Drivers', value: 'Dual 6.5" woofers' },
      { label: 'Power Handling', value: '200W' }
    ]
  },
  {
    id: '4',
    name: 'Deep Bass Sub-X',
    description: 'Active 12-inch subwoofer with 500W RMS amplifier for thunderous low-end.',
    price: 950,
    image: 'https://images.unsplash.com/photo-1544717297-fa95b3ee21f3?q=80&w=800&auto=format&fit=crop',
    category: 'Subwoofer',
    specs: [
      { label: 'Driver', value: '12" Long-throw' },
      { label: 'Amplifier', value: '500W Class D' }
    ]
  },
  {
    id: '5',
    name: 'Classic Vinyl V1',
    description: 'High-fidelity turntable with carbon-fiber tonearm and decoupled motor.',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=800&auto=format&fit=crop',
    category: 'Turntable',
    specs: [
      { label: 'Drive', value: 'Belt Drive' },
      { label: 'Speeds', value: '33/45 RPM' }
    ]
  },
  {
    id: '6',
    name: 'Studio Pro Monitor M8',
    description: 'Reference-grade active monitors for professional audio production and mixing.',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
    category: 'Monitors',
    specs: [
      { label: 'Amp Type', value: 'Bi-amplified' },
      { label: 'Inputs', value: 'XLR / TRS' }
    ]
  },
  {
    id: '7',
    name: 'Acoustic Surround S2',
    description: 'Immersive surround speakers with dipole/bipole switching technology.',
    price: 650,
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop',
    category: 'Surround',
    specs: [
      { label: 'Type', value: 'Dipole' },
      { label: 'Dispersion', value: 'Wide' }
    ]
  },
  {
    id: '8',
    name: 'Power Mono Block P1',
    description: 'Ultra-low distortion monaural power amplifier providing 400W of pure power.',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1624514033330-fd9d66099351?q=80&w=800&auto=format&fit=crop',
    category: 'Electronics',
    specs: [
      { label: 'Power', value: '400W @ 8 Ohms' },
      { label: 'Class', value: 'Class A/B' }
    ]
  },
  {
    id: '9',
    name: 'Pure DAC Converter',
    description: 'Audiophile-grade Digital-to-Analog converter with MQA support and native DSD.',
    price: 1400,
    image: 'https://images.unsplash.com/photo-1545648839-a9310c1448db?q=80&w=800&auto=format&fit=crop',
    category: 'Electronics',
    specs: [
      { label: 'Resolution', value: '32-bit/768kHz' },
      { label: 'Outputs', value: 'Balanced XLR' }
    ]
  },
  {
    id: '10',
    name: 'Grand Signature G9',
    description: 'Our ultimate statement in acoustic engineering. Hand-crafted wood finish.',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop',
    category: 'Floorstanding',
    specs: [
      { label: 'Weight', value: '140 lbs' },
      { label: 'Finish', value: 'Walnut / Piano Black' }
    ]
  },
  {
    id: '11',
    name: 'Modern One Active',
    description: 'All-in-one wireless audio system with HDMI ARC and streaming capabilities.',
    price: 2400,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop',
    category: 'Wireless',
    specs: [
      { label: 'Streaming', value: 'AirPlay 2 / Spotify' },
      { label: 'Power', value: '300W Total' }
    ]
  },
  {
    id: '12',
    name: 'Silver Link Cable',
    description: 'High-purity silver speaker cables for the ultimate signal transparency.',
    price: 450,
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800&auto=format&fit=crop',
    category: 'Accessories',
    specs: [
      { label: 'Material', value: '99.999% Silver' },
      { label: 'Length', value: '3 Meters' }
    ]
  }
];
