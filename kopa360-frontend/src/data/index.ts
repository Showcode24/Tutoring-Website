export interface NavigationItem {
  label: string;
  dropdownItems?: { label: string; url: string }[];
  url?: string;
}

export const navigationItems: Record<string, NavigationItem> = {
  findTalent: {
    label: 'Find talent',
    dropdownItems: [
      { label: 'Post a job and hire a pro', url: '/post-job' },
      { label: 'Browse and buy projects', url: '/browse-projects' },
      { label: 'Let us help you hire', url: '/hire-help' }
    ]
  },
  findWork: {
    label: 'Find work',
    dropdownItems: [
      { label: 'Ways to earn', url: '/ways-to-earn' },
      { label: 'Direct contracts', url: '/direct-contracts' },
      { label: 'Getting paid', url: '/getting-paid' }
    ]
  },
  whyUpwork: {
    label: 'Why Kopa360',
    dropdownItems: [
      { label: 'Success stories', url: '/success-stories' },
      { label: 'Reviews', url: '/reviews' },
      { label: 'How to hire', url: '/how-to-hire' }
    ]
  },
  whatsNew: {
    label: "What's new",
    dropdownItems: [
      { label: 'Feature updates', url: '/feature-updates' },
      { label: 'Events', url: '/events' },
      { label: 'Blog', url: '/blog' }
    ]
  },
  pricing: {
    label: 'Pricing',
    url: '/pricing'
  }
};

export const heroData = {
  title: "We connect learners and tutors to unlock academic success",
  subtitle: "Discover top-rated educators or find tutoring opportunities with smart tools that empower your teaching journey",
  searchPlaceholder: "Mathematics Tutor",
};

export const trustedCompanies = {
  title: "TRUSTED BY",
  companies: [
    {
      name: "Microsoft",
      logo: `<svg height="32" viewBox="0 0 150 32">
              <path d="M15.2 0h15.2v15.2H15.2z" fill="#F25022"/>
              <path d="M0 0h15.2v15.2H0z" fill="#7FBA00"/>
              <path d="M15.2 15.2h15.2v15.2H15.2z" fill="#00A4EF"/>
              <path d="M0 15.2h15.2v15.2H0z" fill="#FFB900"/>
            </svg>`
    },
    {
      name: "Airbnb",
      logo: `<svg height="32" viewBox="0 0 32 32">
              <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm0 28C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12-5.4 12-12 12z" fill="currentColor"/>
            </svg>`
    },
    {
      name: "Bissell",
      logo: `<svg height="32" viewBox="0 0 32 32">
              <path d="M16 0L0 16l16 16 16-16L16 0zm0 24L8 16l8-8 8 8-8 8z" fill="currentColor"/>
            </svg>`
    }
  ]
};

export const sideImages = {
  left: [
    {
      alt: "Professional with pink hair",
      position: "top-0 left-10"
    },
    {
      alt: "Professional with beard",
      position: "top-1/3 left-0"
    },
    {
      alt: "Professional with dreadlocks",
      position: "bottom-0 left-10"
    }
  ],
  right: [
    {
      alt: "Professional smiling",
      position: "top-0 right-10"
    },
    {
      alt: "Business professionals",
      position: "top-1/3 right-0"
    },
    {
      alt: "Professional in white shirt",
      position: "bottom-0 right-10"
    }
  ]
};

