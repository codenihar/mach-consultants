import React from "react";

export type NavItem = {
  name: string;
  route: string;
};

export type Policy = {
  name: string;
  route: string;
};

export type Stat = {
  icon: React.ReactNode;
  value: string;
  label: string;
};
