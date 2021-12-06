import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Righteous',
    body: 'Open Sans',
  },
  colors: {
    green: {
      100: '#D2F368',
      200: '#C2EE2F',
      300: '#98C010',
      400: '#77970C',
      500: '#4A5E08',
    },
  },
});

export default theme;
