/**
 * function returns the calculated eCPM
 * @param {number} revenue revenue data
 * @param {number} impressions impressions data
 */
export const getECPM = (revenue, impressions) => ((revenue / impressions) * 1000);

// function returns true if mobile screen
export const mediaQueryMobile = () => {
  const mediaQuery = window.matchMedia( "(max-width: 767px)" );
  return mediaQuery.matches;
};