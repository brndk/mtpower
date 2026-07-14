import { Product } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Elegance - 2 Front',
    description: 'Преміальна 3-смугова підлогова стереоакустична система з шовковим твітером та довгохідними вуферами.',
    price: 1850,
    image: 'https://lh3.googleusercontent.com/u/0/d/1FuV8K3zEssogLSpw5exRrJ-5Z4Xw7pjo=w1000',
    category: 'Підлогова',
    specs: [
      { label: 'Динаміки', value: '1" шовковий твітер, 3x5.25" СЧ, 8" НЧ' },
      { label: 'Частотна характеристика', value: '35Гц - 25кГц' },
      { label: 'Потужність', value: '60Вт - 180Вт' },
      { label: 'Опір', value: '8 Ом' }
    ]
  },
  {
    id: '2',
    name: 'Precision Bookshelf B3',
    description: 'Компактні високопродуктивні колонки, розроблені для критичного прослуховування в невеликих приміщеннях.',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1583394838336-acd97773dbf9?q=80&w=800&auto=format&fit=crop',
    category: 'Полична',
    specs: [
      { label: 'Частотна характеристика', value: '45Гц - 25кГц' },
      { label: 'Чутливість', value: '87дБ' },
      { label: 'Опір', value: '8 Ом' }
    ]
  },
  {
    id: '3',
    name: 'Titan Center C1',
    description: 'Серце вашого домашнього кінотеатру. Виняткова чіткість вокалу та динамічний діапазон.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1594106182463-759c60473528?q=80&w=800&auto=format&fit=crop',
    category: 'Центральний канал',
    specs: [
      { label: 'Динаміки', value: 'Подвійні 6.5" НЧ-динаміки' },
      { label: 'Потужність', value: '200Вт' }
    ]
  },
  {
    id: '4',
    name: 'Deep Bass Sub-X',
    description: 'Активний 12-дюймовий сабвуфер з підсилювачем 500 Вт RMS для громового низькочастотного звуку.',
    price: 950,
    image: 'https://images.unsplash.com/photo-1544717297-fa95b3ee21f3?q=80&w=800&auto=format&fit=crop',
    category: 'Сабвуфер',
    specs: [
      { label: 'Динамік', value: '12" довгохідний' },
      { label: 'Підсилювач', value: '500Вт Клас D' }
    ]
  },
  {
    id: '5',
    name: 'Classic Vinyl V1',
    description: 'Високоякісний програвач вінілу з тонармом з вуглецевого волокна та розв\'язаним двигуном.',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=800&auto=format&fit=crop',
    category: 'Програвач',
    specs: [
      { label: 'Привід', value: 'Ремінний привід' },
      { label: 'Швидкості', value: '33/45 об/хв' }
    ]
  },
  {
    id: '6',
    name: 'Studio Pro Monitor M8',
    description: 'Активні монітори еталонного класу для професійного аудіовиробництва та зведення.',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
    category: 'Монітори',
    specs: [
      { label: 'Тип підсилювача', value: 'Bi-amplified' },
      { label: 'Входи', value: 'XLR / TRS' }
    ]
  },
  {
    id: '7',
    name: 'Acoustic Surround S2',
    description: "Іммерсивні колонки об'ємного звучання з технологією перемикання диполь/біполь.",
    price: 650,
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop',
    category: "Об'ємний звук",
    specs: [
      { label: 'Тип', value: 'Диполь' },
      { label: 'Дисперсія', value: 'Широка' }
    ]
  },
  {
    id: '8',
    name: 'Power Mono Block P1',
    description: 'Монауральний підсилювач потужності з наднизьким рівнем спотворень, що забезпечує 400 Вт чистої потужності.',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1624514033330-fd9d66099351?q=80&w=800&auto=format&fit=crop',
    category: 'Електроніка',
    specs: [
      { label: 'Потужність', value: '400Вт @ 8 Ом' },
      { label: 'Клас', value: 'Клас A/B' }
    ]
  },
  {
    id: '9',
    name: 'Pure DAC Converter',
    description: 'Цифро-аналоговий перетворювач аудіофільського класу з підтримкою MQA та нативним DSD.',
    price: 1400,
    image: 'https://images.unsplash.com/photo-1545648839-a9310c1448db?q=80&w=800&auto=format&fit=crop',
    category: 'Електроніка',
    specs: [
      { label: 'Роздільна здатність', value: '32-біт/768кГц' },
      { label: 'Виходи', value: 'Балансний XLR' }
    ]
  },
  {
    id: '10',
    name: 'Grand Signature G9',
    description: "Наш найкращий прояв акустичної інженерії. Дерев'яне оздоблення ручної роботи.",
    price: 12500,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop',
    category: 'Підлогова',
    specs: [
      { label: 'Вага', value: '63 кг' },
      { label: 'Оздоблення', value: 'Горіх / Рояльний лак' }
    ]
  },
  {
    id: '11',
    name: 'Modern One Active',
    description: 'Бездротова аудіосистема "все-в-одному" з HDMI ARC та можливостями стрімінгу.',
    price: 2400,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop',
    category: 'Бездротова',
    specs: [
      { label: 'Стрімінг', value: 'AirPlay 2 / Spotify' },
      { label: 'Потужність', value: '300Вт разом' }
    ]
  },
  {
    id: '12',
    name: 'Silver Link Cable',
    description: 'Акустичні кабелі з чистого срібла для максимальної прозорості сигналу.',
    price: 450,
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800&auto=format&fit=crop',
    category: 'Аксесуари',
    specs: [
      { label: 'Матеріал', value: '99.999% Срібло' },
      { label: 'Довжина', value: '3 метри' }
    ]
  }
];
