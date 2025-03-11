import '../styles.css'; // ✅ Import global CSS here
import '../styles.module.css'; // ✅ If using CSS Modules, also import here

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
