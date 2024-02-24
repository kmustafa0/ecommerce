import { IoPersonOutline, IoHeartOutline, IoCartOutline } from 'react-icons/io5';

export const HEADERLINKS = [
  {
    href: '/account',
    label: 'Account',
    icon: <IoPersonOutline size={20} />,
    subItems: [
      {
        href: '/account/profile',
        label: 'Profile',
      },
      {
        href: '/account/orders',
        label: 'Orders',
      },
      {
        href: '/account/settings',
        label: 'Settings',
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
  },
];
