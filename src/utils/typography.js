import Typography from 'typography';

const typographyOptions = {
  baseFontSize: '20px',
  googleFonts: [
    {
      name: 'Quattrocento Sans',
      styles: ['600', '400', '400i', '700'],
    },
  ],
  headerFontFamily: ['Work Sans', 'sans-serif'],
  bodyFontFamily: ['Quattrocento Sans', 'sans-serif'],
  headerWeight: '600',
  bodyWeight: 400,
  boldWeight: 700,
};
const typography = new Typography(typographyOptions);

export default typography;
