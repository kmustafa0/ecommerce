import {
  IoPersonOutline,
  IoHeartOutline,
  IoCartOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from 'react-icons/io5';
import { MdOutlineLocalShipping, MdCreditCard } from 'react-icons/md';

export const HEADERLINKS = [
  {
    href: '/account',
    label: 'Account',
    icon: <IoPersonOutline size={20} />,
    subItems: [
      {
        href: '/account/profile',
        label: 'Profile',
        icon: <IoPersonOutline size={15} />,
      },
      {
        href: '/account/orders',
        label: 'Orders',
        icon: <MdOutlineLocalShipping size={15} />,
      },
      {
        href: '/account/settings',
        label: 'Settings',
        icon: <IoSettingsOutline size={15} />,
      },
      {
        href: '/logout',
        label: 'Logout',
        icon: <IoLogOutOutline size={15} />,
      },
    ],
  },
  {
    href: '/favorites',
    label: 'Favorites',
    icon: <IoHeartOutline size={20} />,
  },
  {
    href: '/cart',
    label: 'Cart',
    icon: <IoCartOutline size={20} />,
    subItems: [
      {
        href: '/cart',
        label: 'Go to cart',
        icon: <IoCartOutline size={15} />,
      },
      {
        href: '/cart/checkout',
        label: 'Go to checkout',
        icon: <MdCreditCard size={15} />,
      },
    ],
  },
];

export const HAMBURGER_MENU_LINKS = [
  {
    label: 'Clothes',
    href: '/cat/clothes',
  },
  {
    label: 'Electronics',
    href: '/cat/electronics',
  },
  {
    label: 'Furniture',
    href: '/cat/furniture',
  },
  {
    label: 'Shoes',
    href: '/cat/shoes',
  },
  {
    label: 'Miscellaneous',
    href: '/cat/miscellaneous',
  },
  {
    label: 'Smart Home',
    href: '/cat/smart-home',
  },
  {
    label: 'Arts & Crafts',
    href: '/cat/arts-crafts',
  },
  {
    label: 'Pet supplies',
    href: '/cat/pet-supplies',
  },
];

export const TOP_LINKS = [
  {
    label: 'Corporate',
    href: '/corporate',
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Corporate',
    href: '/corporate',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'Partners',
    href: '/partners',
  },
  {
    label: 'Customer Service',
    href: '/customer-service',
  },
  {
    label: 'Corporate',
    href: '/corporate',
  },
  {
    label: 'Protection of Personal Data',
    href: '/kvkk',
  },
  {
    label: '0531 668 81 22',
    href: 'telto:05316688122',
  },
];

export const CAROUSEL_IMAGES = [
  {
    path: '/slider/1.webp',
    alt: 'slider image',
  },
  {
    path: '/slider/2.webp',
    alt: 'slider image',
  },
  {
    path: '/slider/3.webp',
    alt: 'slider image',
  },
];
