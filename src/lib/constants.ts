import { NavItem, Policy } from "@/lib/types";

export const NavItems: NavItem[] = [
  { name: "Home", route: "/" },
  { name: "About Us", route: "/about" },
  { name: "Services", route: "/services" },
  { name: "Publications & Blogs", route: "/blogs" },
  { name: "Events", route: "/events" },
  { name: "Code", route: "/code" },
];

export const policies: Policy[] = [
  { route: "/about", name: "About us" },
  { route: "/", name: "Privacy Policy" },
  { route: "/", name: "User Terms" },
  { route: "/#contactUs", name: "Help Centre" },
];
