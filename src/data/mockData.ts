import { Product, Tutorial } from '../types';

export const products: Product[] = [
  {
    id: 'digispark-hid',
    name: 'Digispark USB HID',
    description: 'Pre-programmed rubber ducky style HID for automated keystroke injection. Compact and stealthy.',
    price: 24.99,
    category: 'Injection',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Microcontroller': 'ATTiny85',
      'Memory': '8KB Flash',
      'Interface': 'USB 2.0',
      'Dimensions': '18mm x 22mm'
    },
    features: [
      'Fast keystroke injection',
      'Customizable payloads',
      'Arduino IDE compatible',
      'Status LED indicator'
    ]
  },
  {
    id: 'esp32-marauder',
    name: 'ESP32 Marauder Kit',
    description: 'A powerful WiFi and Bluetooth testing tool for security audits. Comes pre-flashed with the Marauder firmware.',
    price: 89.99,
    category: 'WiFi',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    specs: {
      'CPU': 'Dual-core ESP32',
      'Display': '2.8" TFT Touchscreen',
      'Battery': '2000mAh Li-Po',
      'Radio': '2.4GHz WiFi / BT'
    },
    features: [
      'Packet sniffing',
      'Deauthentication attacks',
      'SSID Probing',
      'Wardriving capability'
    ]
  },
  {
    id: 'wifi-pentest-pro',
    name: 'WiFi Pentesting Pro Tool',
    description: 'Enterprise-grade WiFi penetration testing tool with high-gain antennas and monitor mode support.',
    price: 149.99,
    category: 'WiFi',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Chipset': 'Atheros AR9271',
      'Antenna': '9dBi Dual-band',
      'OS Support': 'Kali, Parrot, Windows',
      'Connector': 'USB-C'
    },
    features: [
      'Monitor mode support',
      'Packet injection',
      'High-range reception',
      'Sturdy aluminum casing'
    ]
  },
  {
    id: 'bad-usb-c',
    name: 'Stealth USB-C HID',
    description: 'A discreet USB-C keystroke injector designed for modern mobile devices and laptops.',
    price: 39.99,
    category: 'Injection',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
    specs: {
      'Processor': 'ARM Cortex-M0+',
      'Storage': '4MB Flash',
      'Connector': 'USB Type-C',
      'Stealth': 'Low-profile design'
    },
    features: [
      'Native USB-C support',
      'Ultra-compact design',
      'Encrypted payloads',
      'Remote trigger support'
    ]
  }
];

export const tutorials: Tutorial[] = [
  {
    id: 'getting-started-esp32',
    title: 'Getting Started with ESP32 Marauder',
    excerpt: 'Learn how to set up and use your Marauder kit for basic security audits.',
    date: 'Oct 12, 2023',
    author: 'Admin',
    category: 'Hardware',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    content: 'The ESP32 Marauder is a powerful tool... [Full Tutorial Content]'
  },
  {
    id: 'hid-payload-dev',
    title: 'Developing Custom HID Payloads',
    excerpt: 'A comprehensive guide to writing and deploying your own DuckyScript payloads.',
    date: 'Nov 05, 2023',
    author: 'Security Expert',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    content: 'Payload development requires understanding... [Full Tutorial Content]'
  }
];
