import Layout from "../components/layouts/Layout";
import 'remixicon/fonts/remixicon.css'
import "../styles/globals.scss";
import '../../public/css/stylesheet.css'
import { AppProvider } from "../context/appContext";

function MyApp({ Component, pageProps }) {
    return (
        <AppProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AppProvider>
    )
}

export default MyApp;
