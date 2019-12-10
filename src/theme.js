// example theme.js
import theme from 'mdx-deck/themes';
import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark';

export default {
  ...theme,
  font: 'Gilroy, sans-serif',
  h1: {
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  monospace: '"Dank Mono", monospace',
  prism: {
    style: atomDark,
  },
  img: {
    maxWidth: '100%',
  },
  weights: 300,
  p: {
    padding: '20px 40px',
    fontSize: 35,
  },
  li: {
    paddingBottom: '20px',
  },
  ul: {
    listStyle: 'disc',
    paddingLeft: '20px',
    fontSize: 35,
  },
  colors: {
    text: 'black',
    background: 'white',
    link: '#ccc',
    pre: '#ccc',
    preBackground: '#efefef',
    code: '#fff',
  },
};
