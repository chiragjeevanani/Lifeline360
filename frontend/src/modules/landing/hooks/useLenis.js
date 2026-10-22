// In-page "#section" links are scrolled by Lenis (its `anchors` option).
// Cancel the browser's instant jump so only the smooth scroll happens.
export const preventHashJump = (e) => e.preventDefault();
