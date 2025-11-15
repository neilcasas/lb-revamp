import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
  {
    label: "Home",
    ariaLabel: "Go to home page",
    link: "/",
  },
  {
    label: "Portfolio",
    ariaLabel: "View our portfolio",
    link: "/portfolio",
  },
  {
    label: "Services",
    ariaLabel: "Explore our services",
    link: "/services",
  },
  {
    label: "Leadership",
    ariaLabel: "Meet our leadership team",
    link: "/leadership",
  },
  {
    label: "Resources",
    ariaLabel: "Browse resources and blog",
    link: "/resources",
  },
];

const socialItems = [
  {
    label: "LinkedIn",
    link: "https://linkedin.com",
  },
  {
    label: "Twitter",
    link: "https://twitter.com",
  },
];

export function Navbar() {
  return (
    <StaggeredMenu
      position="right"
      colors={["#1a1a1a", "#0a0a0a"]}
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      logoUrl="/lb_long_icon.png"
      menuButtonColor="#ffffff"
      openMenuButtonColor="#000000"
      accentColor="#d4af37"
      isFixed={true}
      changeMenuColorOnOpen={true}
    />
  );
}
