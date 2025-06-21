export const isMobileSSR = () => {
  if (typeof navigator === "undefined") return false;

  return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
};
