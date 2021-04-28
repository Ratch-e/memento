import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Layout } from "src/components/layout/Layout";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);

export default App;
