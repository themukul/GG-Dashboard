export const getECPM = (revenue, impressions) => ((revenue / impressions) * 1000);

export const mediaQueryMobile = query => {
  const mediaQuery = window.matchMedia( "(max-width: 767px)" );
  return mediaQuery.matches;
};