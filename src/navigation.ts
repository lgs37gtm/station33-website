import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Commercial',
      href: getPermalink('/commercial'),
    },
    {
      text: 'Residential',
      href: getPermalink('/residential'),
    },
    {
      text: 'Retail & Dining',
      href: getPermalink('/retail-dining'),
    },
    {
      text: 'The Hotel',
      href: getPermalink('/hotel'),
    },
    {
      text: 'About',
      links: [
        {
          text: 'Our Vision',
          href: getPermalink('/about'),
        },
        {
          text: 'Disney Imagineering',
          href: getPermalink('/about#disney'),
        },
        {
          text: 'Location & Map',
          href: getPermalink('/location'),
        },
        {
          text: 'News & Updates',
          href: getBlogPermalink(),
        },
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Schedule Tour', href: getPermalink('/contact#tour'), variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Leasing',
      links: [
        { text: 'Commercial Space', href: getPermalink('/commercial') },
        { text: 'Residential Units', href: getPermalink('/residential') },
        { text: 'Retail & Dining', href: getPermalink('/retail-dining') },
        { text: 'The Hotel', href: getPermalink('/hotel') },
      ],
    },
    {
      title: 'About',
      links: [
        { text: 'Our Vision', href: getPermalink('/about') },
        { text: 'Disney Imagineering', href: getPermalink('/about#disney') },
        { text: 'Historic Trolley Building', href: getPermalink('/about#trolley') },
        { text: 'Location & Map', href: getPermalink('/location') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'News & Updates', href: getBlogPermalink() },
        { text: 'Press Kit', href: getPermalink('/press') },
        { text: 'FAQs', href: getPermalink('/faq') },
        { text: 'Virtual Tour', href: getPermalink('/#tour') },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'Schedule Tour', href: getPermalink('/contact#tour') },
        { text: '(423) 555-1234', href: 'tel:4235551234' },
        { text: 'info@station33.com', href: 'mailto:info@station33.com' },
        { text: 'South Broad St, Chattanooga', href: getPermalink('/location') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/station33cha' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/station33chattanooga' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/station33' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <div class="flex flex-col items-center gap-1">
      <div>&copy; ${new Date().getFullYear()} South Broad Development. All rights reserved.</div>
      <div class="text-station-cream font-semibold">A Disney Imagineering Partnership</div>
    </div>
  `,
};
