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
    href: '/clothes',
  },
  {
    label: 'Electronics',
    href: '/electronics',
  },
  {
    label: 'Furniture',
    href: '/furniture',
  },
  {
    label: 'Shoes',
    href: '/shoes',
  },
  {
    label: 'Miscellaneous',
    href: '/miscellaneous',
  },
  {
    label: 'Smart Home',
    href: '/smart-home',
  },
  {
    label: 'Arts & Crafts',
    href: '/arts-crafts',
  },
  {
    label: 'Pet supplies',
    href: '/pet-supplies',
  },
];
