import '../styles/globals.css'
import { ThemeProvider, theme } from 'legion-ui';
import { agr } from '@legion-theme/agree';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
