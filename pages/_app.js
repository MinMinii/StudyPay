import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css'; // اگه همچین فایلی نداری، این خط رو پاک کن

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
