export interface NavigationItem {
  label: string;
  dropdownItems?: string[];
  url?: string;
}

export const navigationItems: Record<string, NavigationItem> = {
  findTalent: {
    label: 'Find talent',
    dropdownItems: ['Post a job and hire a pro', 'Browse and buy projects', 'Let us help you hire']
  },
  findWork: {
    label: 'Find work',
    dropdownItems: ['Ways to earn', 'Direct contracts', 'Getting paid']
  },
  whyUpwork: {
    label: 'Why Kopa360',
    dropdownItems: ['Success stories', 'Reviews', 'How to hire']
  },
  whatsNew: {
    label: "What's new",
    dropdownItems: ['Feature updates', 'Events', 'Blog']
  },
  pricing: {
    label: 'Pricing',
    url: '/pricing'
  }
};

