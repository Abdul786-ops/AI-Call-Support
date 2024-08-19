import {
  IconArrowDown,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'This template is made with Next.js 14 using the new App Router »',
    href: 'https://nextjs.org/blog/next-14',
  },
  callToAction2: {
    text: 'Follow @onWidget on Twitter',
    href: 'https://twitter.com/intent/user?screen_name=onwidget',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Solutions',
      icon: IconArrowDown,
      links: [
        {
          label: 'E-commerce',
          href: '/ecommerce',
        },
        {
          label: 'Dropshipping',
          href: '/dropshipping',
        },
        {
          label: 'Enterprise',
          href: '/enterprise',
        }
      ],
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Pricing',
      href: '/pricing',
    },
  ],
  actions: [
    {
      text: 'Try for free',
      href: 'https://app.callsupport.ai',
      targetBlank: true,
    },
  ],
  isSticky: true,
  showRssFeed: false,
  position: 'right',
};

// // Footer data
// export const footerData: FooterProps = {
//   title: 'CallSupport',
//   links: [CallSupport
//     {
//       label: 'Terms & Conditions',
//       href: '/terms',
//     },
//     {
//       label: 'Privacy Policy',
//       href: '/privacy',
//     },
//   ],
//   columns: [
//     {
//       title: 'Product',
//       links: [
//         {
//           label: 'Features',
//           href: '/',
//         },
//         {
//           label: 'Security',
//           href: '/',
//         },
//         {
//           label: 'Team',
//           href: '/',
//         },
//         {
//           label: 'Enterprise',
//           href: '/',
//         },
//         {
//           label: 'Customer stories',
//           href: '/',
//         },
//         {
//           label: 'Pricing',
//           href: '/pricing',
//         },
//         {
//           label: 'Resources',
//           href: '/',
//         },
//       ],
//     },
//     {
//       title: 'Platform',
//       links: [
//         {
//           label: 'Developer API',
//           href: '/',
//         },
//         {
//           label: 'Partners',
//           href: '/',
//         },
//       ],
//     },
//     {
//       title: 'Support',
//       links: [
//         {
//           label: 'Docs',
//           href: '/',
//         },
//         {
//           label: 'Community Forum',
//           href: '/',
//         },
//         {
//           label: 'Professional Services',
//           href: '/',
//         },
//         {
//           label: 'Skills',
//           href: '/',
//         },
//         {
//           label: 'Status',
//           href: '/',
//         },
//       ],
//     },
//     {
//       title: 'Company',
//       links: [
//         {
//           label: 'About',
//           href: '/',
//         },
//         {
//           label: 'Blog',
//           href: '/blog',
//         },
//         {
//           label: 'Careers',
//           href: '/',
//         },
//         {
//           label: 'Press',
//           href: '/',
//         },
//         {
//           label: 'Inclusion',
//           href: '/',
//         },
//         {
//           label: 'Social Impact',
//           href: '/',
//         },
//         {
//           label: 'Shop',
//           href: '/',
//         },
//       ],
//     },
//   ],
//   socials: [
//     { label: 'Linkedin', icon: IconBrandLinkedin, href: '#' },
//   ],
//   footNote: (
//     <div className="mr-4 text-sm">
//      CallSupport LLM 2024. All rights reserved.  
//     </div>
//   ),
// };

// Footer data
export const footerData: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Contact',
      texts: ['founders@callsupport.ai'],
    },
  ],
  socials: [
    { label: 'Linkedin', icon: IconBrandLinkedin, href: 'https://www.linkedin.com/company/103872017' },
  ],
  footNote: (
    <div className="mr-4 text-sm">
       CallSupport Enterprise LLM 2024. All rights reserved.
    </div>
  ),
};
