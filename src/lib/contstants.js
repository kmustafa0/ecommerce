import {
  IoPersonOutline,
  IoHeartOutline,
  IoCartOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from 'react-icons/io5';
import { MdOutlineLocalShipping, MdCreditCard } from 'react-icons/md';
import { FaFacebookSquare, FaTwitter, FaLinkedinIn, FaGithubSquare } from 'react-icons/fa';

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
    label: 'Women',
    href: '/cat/women',
    subItems: [
      { href: '/cat/women/dresses', label: 'Dresses' },
      { href: '/cat/women/tops', label: 'Tops' },
      { href: '/cat/women/skirts', label: 'Skirts' },
      { href: '/cat/women/pants', label: 'Pants' },
      { href: '/cat/women/jackets-coats', label: 'Jackets & Coats' },
      { href: '/cat/women/accessories', label: 'Accessories' },
      { href: '/cat/women', label: 'See all' },
    ],
  },
  {
    label: 'Men',
    href: '/cat/men',
    subItems: [
      { href: '/cat/men/suits', label: 'Suits' },
      { href: '/cat/men/shirts', label: 'Shirts' },
      { href: '/cat/men/pants', label: 'Pants' },
      { href: '/cat/men/knitwear', label: 'Knitwear' },
      { href: '/cat/men/jackets-coats', label: 'Jackets & Coats' },
      { href: '/cat/men/accessories', label: 'Accessories' },
      { href: '/cat/men', label: 'See all' },
    ],
  },
  {
    label: 'Shoes',
    href: '/cat/shoes',
    subItems: [
      { href: '/cat/shoes/women', label: 'Women' },
      { href: '/cat/shoes/men', label: 'Men' },
      { href: '/cat/shoes', label: 'See all' },
    ],
  },
  {
    label: 'Accessories',
    href: '/cat/accessories',
    subItems: [
      { href: '/cat/accessories/bags', label: 'Bags' },
      { href: '/cat/accessories/jewelry', label: 'Jewelry' },
      { href: '/cat/accessories/scarves', label: 'Scarves' },
      { href: '/cat/accessories/belts', label: 'Belts' },
      { href: '/cat/accessories/other', label: 'Other Accessories' },
      { href: '/cat/accessories', label: 'See all' },
    ],
  },
  { label: 'New Arrivals', href: '/cat/new-arrivals' },
  { label: 'Sale', href: '/cat/sale' },
  { label: 'Designers', href: '/cat/designers' },
  { label: 'Gifts', href: '/cat/gifts' },
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
    label: 'Protection of Personal Data',
    href: '/kvkk',
  },
  {
    label: '0531 668 81 22',
    href: 'telto:05316688122',
  },
];

export const HERO_CAROUSEL_IMAGES = [
  {
    path: '/slider/1.webp',
    link: '#',
    alt: 'slider image',
  },
  {
    path: '/slider/2.webp',
    link: '#',
    alt: 'slider image',
  },
  {
    path: '/slider/3.webp',
    link: '#',
    alt: 'slider image',
  },
  {
    path: '/slider/4.webp',
    link: '#',
    alt: 'slider image',
  },
  {
    path: '/slider/5.webp',
    link: '#',
    alt: 'slider image',
  },
  {
    path: '/slider/6.webp',
    link: '#',
    alt: 'slider image',
  },
];

export const PRODUCT_CAROUSEL_IMAGES = [
  {
    title: 'AXOLO R-SKIN® MONOCHROME Khaki',
    link: '/product/shoes-1',
    path: '/product/shoes-1.jpg',
    alt: 'product image',
    price: '170',
    discountedPrice: '',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME Black',
    link: '/product/shoes-2',
    path: '/product/shoes-2.jpg',
    alt: 'product image',
    price: '170',
    discountedPrice: '150',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME White',
    link: '/product/shoes-3',
    path: '/product/shoes-3.jpg',
    alt: 'product image',
    price: '170',
    discountedPrice: '140',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME Blue',
    link: '/product/shoes-4',
    path: '/product/shoes-4.jpg',
    alt: 'product image',
    price: '170',
    discountedPrice: '',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME Gray',
    link: '/product/shoes-5',
    path: '/product/shoes-5.jpg',
    alt: 'product image',
    price: '170',
    discountedPrice: '120',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME Khaki',
    link: '/product/shoes-1',
    path: '/product/shoes-1.jpg',
    alt: 'product image',
    price: '170',
    discountedPrice: '',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME Black',
    link: '/product/shoes-2',
    path: '/product/shoes-2.jpg',
    alt: 'product image',
    price: '170',
    discountedPrice: '150',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME White',
    link: '/product/shoes-3',
    path: '/product/shoes-3.jpg',
    alt: 'product image',
    price: '170',
    discountedPrice: '140',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME Blue',
    link: '/product/shoes-4',
    path: '/product/shoes-4.jpg',
    alt: 'product image',
    price: '170',
    discountedPrice: '',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME Gray',
    link: '/product/shoes-5',
    path: '/product/shoes-5.jpg',
    alt: 'product image',
    price: '170',
    discountedPrice: '120',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME Khaki',
    link: '/product/shoes-1',
    path: '/product/shoes-1.jpg',
    alt: 'product image',
    price: '170',
    discountedPrice: '',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME Black',
    link: '/product/shoes-2',
    path: '/product/shoes-2.jpg',
    alt: 'product image',
    price: '170',
    discountedPrice: '150',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME White',
    link: '/product/shoes-3',
    path: '/product/shoes-3.jpg',
    alt: 'product image',
    price: '170',
    discountedPrice: '140',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME Blue',
    link: '/product/shoes-4',
    path: '/product/shoes-4.jpg',
    alt: 'product image',
    price: '170',
    discountedPrice: '',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME Gray',
    link: '/product/shoes-5',
    path: '/product/shoes-5.jpg',
    alt: 'product image',
    price: '170',
    discountedPrice: '120',
  },
];

export const SOCIAL_MEDIA_CAROUSEL_IMAGES = [
  {
    title: 'AXOLO R-SKIN® MONOCHROME',
    link: '#',
    path: '/social-media/1.jpg',
    alt: 'social media image',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME',
    link: '#',
    path: '/social-media/2.jpg',
    alt: 'social media image',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME',
    link: '#',
    path: '/social-media/3.jpg',
    alt: 'social media image',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME',
    link: '#',
    path: '/social-media/4.jpg',
    alt: 'social media image',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME',
    link: '#',
    path: '/social-media/5.jpg',
    alt: 'social media image',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME',
    link: '#',
    path: '/social-media/6.jpg',
    alt: 'social media image',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME',
    link: '#',
    path: '/social-media/7.jpg',
    alt: 'social media image',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME',
    link: '#',
    path: '/social-media/8.jpg',
    alt: 'social media image',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME',
    link: '#',
    path: '/social-media/9.jpg',
    alt: 'social media image',
  },
  {
    title: 'AXOLO R-SKIN® MONOCHROME',
    link: '#',
    path: '/social-media/10.jpg',
    alt: 'social media image',
  },
];

export const FOOTER_LINKS = [
  {
    label: 'Can we help you?',
    items: ['Call us +90 2123738880', 'Write us on WhatsApp', 'Contacts', 'FAQ', 'Sitemap'],
  },
  {
    label: 'Help',
    items: ['Shop online', 'Payment', 'Delivery', 'Returns', 'Gift Card', 'Guest purchase'],
  },
  {
    label: 'We are Lusso Attire',
    items: ['About Lusso Attire', 'Sustainability', 'Work with us', 'Press', 'Our stores'],
  },
  {
    label: 'You might be interested',
    items: [
      'Dresses',
      'Jackets',
      'Coats',
      'Sweaters and cardigans',
      'Baggy jeans',
      'Trousers',
      'Skirts & Shorts',
    ],
  },
];

export const MIDDLE_ROW_INFO = {
  address: '95216 Will Branch Suite 164 Washington/USA',
  languages: ['English', 'Türkçe', 'Deutsch', 'Русский'],
};

export const BOTTOM_LINKS = [
  'Terms and conditions of purchase',
  'Privacy Policy',
  'Cookies policy',
  'Security',
  'Accessibility Statement',
];

export const SOCIAL_MEDIA_ICONS = [
  { icon: <FaFacebookSquare size={26} /> },
  { icon: <FaTwitter size={26} /> },
  { icon: <FaLinkedinIn size={26} /> },
  { icon: <FaGithubSquare size={26} /> },
];

export const PRODUCT = {
  name: 'AXOLO LINEN SNEAKERS',
  price: '$165',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Women', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      id: 1,
      imageSrc: '/product/shoes-1.jpg',
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc: '/product/shoes-1-3.jpg',
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: '/product/shoes-1-2.jpg',
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  colors: [
    {
      name: 'Beige',
      bgColor: '#e6dac6',
      selectedColor: '#e6dac6',
    },
    { name: 'Black', bgColor: '#111827', selectedColor: '#111827' },
    {
      name: 'Heather Grey',
      bgColor: '#9CA3AF',
      selectedColor: '#9CA3AF',
    },
  ],
  sizes: [
    { name: '35', inStock: false },
    { name: '36', inStock: true },
    { name: '37', inStock: true },
    { name: '38', inStock: true },
    { name: '39', inStock: true },
    { name: '40', inStock: false },
    { name: '41', inStock: true },
  ],
  description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  details: [
    'Only the best materials',
    'Ethically and locally made',
    'Pre-washed and pre-shrunk',
    'Machine wash cold with similar colors',
  ],
};

export const REVIEWS = {
  average: 3.9,
  totalCount: 512,
  featured: [
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
        <p>I had an amazing shopping experience. My order even came with a small, personal handwritten note, which made me really happy!</p>
<p>The product quality is outstanding, it looks and feels even better than I expected. Brilliant stuff! I would gladly recommend this store to my friends. And come to think of it... I actually have, many times!</p>
      `,
      author: 'Mustafa K.',
      date: 'March 20, 2024',
      datetime: '2024-03-20',
    },
  ],
};
