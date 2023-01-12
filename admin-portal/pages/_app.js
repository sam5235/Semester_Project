import { ChakraProvider } from "@chakra-ui/react";
import Router, { useRouter } from "next/router";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

import Layout from "../components/Layout";
import ProtectedRoute from "../components/wrappers/ProtectedRoute";
import AuthContextProvider from "../context/AuthContext";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  const shouldBeAuth = pathname?.toLowerCase() !== "/login";

  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        {shouldBeAuth ? (
          <ProtectedRoute>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ProtectedRoute>
        ) : (
          <Component {...pageProps} />
        )}
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
