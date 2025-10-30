export const siteConfig: SiteConfig = {
  name: "Milestone Project Management",
  description: "",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About us",
      href: "/",
      isDropDown: true,
      menus: [
        { label: "Company profile", href: "/company-profile" },
        { label: "Leadership", href: "/Leadership" },
        { label: "Our Sectors", href: "/our-sectors" },
        { label: "Business Practices", href: "/business-practices" },
        { label: "Our Expertise", href: "/our-expertise" },
        { label: "Our Innovation", href: "/our-compliance" },
        { label: "Sustainability", href: "/sustainability" },
      ],
    },
    {
      label: "Services",
      href: "/services",
      isDropDown: true,
      services: [
        {
          label: "Engineering & Infrastructure",
          children: [
            {
              label: "Construction Management",
              href: "/engineering-and-infrastructure-solutions/construction-management",
            },
            {
              label: "Electrical & Mechanical Advisory",
              href: "/engineering-and-infrastructure-solutions/electrical-and-mechanical-advisory",
            },
            {
              label: "Foundation Solutions",
              href: "/engineering-and-infrastructure-solutions/foundation-solutions",
            },
            {
              label: "Structural Engineering",
              href: "/engineering-and-infrastructure-solutions/structural-engineering",
            },
            {
              label: "Tunnel Infrastructure",
              href: "/engineering-and-infrastructure-solutions/tunnel-infrastructure",
            },
          ],
        },
        {
          label: "Urban Planning & Design",
          children: [
            {
              label: "City Master Planning",
              href: "/urban-planning-and-design/city-planning",
            },
            {
              label: "Community Design",
              href: "/urban-planning-and-design/community-design",
            },
            {
              label: "Interior & Spatial Design",
              href: "/urban-planning-and-design/interior-and-spatial-design",
            },
            {
              label: "Urban Planning",
              href: "/urban-planning-and-design/urban-planning",
            },
            {
              label: "Visualization & 3D Modeling",
              href: "/urban-planning-and-design/visualization-and-3d-modeling",
            },
          ],
        },
        {
          label: " Transportation & Smart Mobility",
          children: [
            {
              label: "City Development",
              href: "/transportation-and-smart-mobility/city-development",
            },
            {
              label: "Pedestrian Mobility",
              href: "/transportation-and-smart-mobility/pedestrian-mobility",
            },
            {
              label: "Rail & Transit Advisory",
              href: "/transportation-and-smart-mobility/rail-and-transit-advisory",
            },
            {
              label: "Urban Planning",
              href: "/transportation-and-smart-mobility/urban-planning",
            },
            {
              label: "Vertical Mobility Solutions",
              href: "/transportation-and-smart-mobility/vertical-mobility-solutions",
            },
          ],
        },
      ],
    },
    {
      label: "Digital Solutions",
      href: "/services",
      isDropDown: true,
      services: [
        {
          label: "Overview",
          submenu: [
            { label: "Company Overview", link: "Company-Overview" },
            { label: "Our Divisions", link: "Our-Divisions" },
            { label: "Our Ethics", link: "Our-Ethics" },
            { label: "Safety Commitments", link: "Safety-Commitments" },
            { label: "Sustainability", link: "Sustainability" },
            { label: "Technical Expertise", link: "Technical-Expertise" },
          ],
        },
      ],
    },
    {
      label: "Insights",
      href: "/blogs",
    },
    {
      label: "Office Locations",
      href:'/our-presence'
    },
    {
      label: "Contact Us",
      href: "/Contact",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

export type SiteConfig = {
  name: string;
  description: string;
  navItems: NavItem[];
  links: {
    github: string;
    twitter: string;
    docs: string;
    discord: string;
    sponsor: string;
  };
};

// ─── NAV ITEM TYPES ───────────────────────────────────────────────

export type NavItem =
  | BaseNavItem
  | AboutNavItem
  | ServicesNavItem
  | DigitalSolutionsNavItem
  | DropdownNavItem;

type BaseNavItem = {
  label: string;
  href: string;
  isDropDown?: false;
  menus?: { label: string; href: string }[];
  services?: ServiceCategory[];
};

// About Menu (like "About us")
export type AboutNavItem = {
  label: string;
  href?: string;
  isDropDown: true;
  menus: { label: string; href: string }[];
};

// Services Menu
export type ServicesNavItem = {
  label: string;
  href?: string;
  isDropDown: true;
  services: ServiceCategory[];
};

export type ServiceCategory = {
  label: string;
  children: { label: string; href: string }[];
};

// Digital Solutions example
type DigitalSolutionsNavItem = {
  label: string;
  href?: string;
  isDropDown: true;
  services: {
    label: string;
    submenu: { label: string; link: string }[];
  }[];
};

// Office Locations dropdown
type DropdownNavItem = {
  label: string;
  isDropDown: true;
  href?: string;
};
