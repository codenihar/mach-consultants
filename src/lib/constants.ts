import { NavItem, Policy } from "@/lib/types";

export const NavItems: NavItem[] = [
  { name: "Home", route: "/" },
  { name: "About Us", route: "/about" },
  { name: "Services", route: "/services" },
  { name: "Publications", route: "/publications" },
  { name: "RISE Conference", route: "/events" },
  { name: "CODE Scientific Consulting", route: "/code" },
];

export const policies: Policy[] = [
  { route: "/about", name: "About us" },
  { route: "/", name: "Privacy Policy" },
  { route: "/", name: "User Terms" },
  { route: "/#contactUs", name: "Help Centre" },
];
