import { NavItem, Policy } from "@/lib/types";

export const NavItems: NavItem[] = [
  { name: "Home", route: "/" },
  { name: "About Us", route: "/about" },
  { name: "Services", route: "/services" },
  { name: "Blogs & Publications", route: "/blogs" },
];

export const policies: Policy[] = [
  { route: "/", name: "About us" },
  { route: "/", name: "Privacy Policy" },
  { route: "/", name: "User Terms" },
  { route: "/", name: "Help Centre" },
];
