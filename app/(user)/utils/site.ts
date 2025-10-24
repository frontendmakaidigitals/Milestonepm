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
        { label: "Company profile", href: "/" },
        { label: "Leadership", href: "/" },
        { label: "Our Partnerships", href: "/" },
        { label: "Business Practices", href: "/" },
        { label: "Governance", href: "/" },
        { label: "Our Innovation", href: "/" },
        { label: "Sustainability", href: "/" },
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
              href: "/construction-management",
            },
            {
              label: "Structural Engineering",
              href: "/structural-engineering",
            },
            {
              label: "Electrical & Mechanical Advisory",
              href: "/electrical-mechanical-advisory",
            },
            { label: "Foundation Solutions", href: "/foundation-solutions" },
            { label: "Tunnel Infrastructure", href: "/tunnel-infrastructure" },
          ],
        },
        {
          label: "Urban Planning & Design",
          children: [
            { label: "City Master Planning", href: "/city-master-planning" },
            { label: "Urban Planning", href: "/urban-planning" },
            { label: "Community Planning", href: "/community-planning" },
            {
              label: "Interior & Spatial Design",
              href: "/interior-spatial-design",
            },
            {
              label: "Visualization & 3D Modeling",
              href: "/visualization-3d-modeling",
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
      isDropDown: true,
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
