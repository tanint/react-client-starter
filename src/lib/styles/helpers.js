export const breakpoints = {
  xs: '32rem', // ~512px
  sm: '48rem', // ~768px
  md: '64rem', // ~1024px
  lg: '80rem', // ~1280px
  xl: '90rem', // ~1440px
}

export function mq(bp = 'lg') {
  return `@media (min-width: ${breakpoints[bp]})`
}
