import { css } from '@emotion/core'

export default css`
  :root {
    --space-unit: 1em;
    --space-xxxxs: calc(0.125 * var(--space-unit));
    --space-xxxs: calc(0.25 * var(--space-unit));
    --space-xxs: calc(0.375 * var(--space-unit));
    --space-xs: calc(0.5 * var(--space-unit));
    --space-sm: calc(0.75 * var(--space-unit));
    --space-md: calc(1.25 * var(--space-unit));
    --space-lg: calc(2 * var(--space-unit));
    --space-xl: calc(3.25 * var(--space-unit));
    --space-xxl: calc(5.25 * var(--space-unit));
    --space-xxxl: calc(8.5 * var(--space-unit));
    --space-xxxxl: calc(13.75 * var(--space-unit));
    --component-padding: var(--space-md);
  }
`
