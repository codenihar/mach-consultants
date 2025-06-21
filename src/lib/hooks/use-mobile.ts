import * as React from "react";
import { isMobileSSR } from "@/lib/hooks/use-mobile-ssr";

export const useResponsiveFlag = (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window === "undefined") {
      return isMobileSSR();
    }
    return window.innerWidth < breakpoint;
  });

  React.useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < breakpoint);

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [breakpoint]);

  return isMobile;
};
