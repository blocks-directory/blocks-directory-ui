import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '22px',
  baseLineHeight: 1.666,
  headerWeight: 500,
  bodyWeight: 400,
  bodyColor: '#000',
  headerFontFamily: [
    'Quicksand',
    'sans-serif',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Quicksand',
    'sans-serif',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  overrideStyles: () => ({
    html: {
      overflowY: 'initial',
    },
  }),
})
// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const { rhythm } = typography
export const { scale } = typography
