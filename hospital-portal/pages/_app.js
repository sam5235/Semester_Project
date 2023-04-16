import { ChakraProvider } from "@chakra-ui/react";
import { createStore } from "redux";
import {Provider} from 'react-redux';
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import "../styles/globals.css";
import theme from "../theme/theme";
import ProtectedRoute from "../components/wrappers/ProtetctedRoute";
import AuthContextProvider from "../context/AuthContext";
import Layout from "../Layout/Layout";
import allReducers from "../redux/reducers";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  const store = createStore(allReducers);
  const { pathname } = useRouter();

  const shouldBeAuth = pathname?.toLowerCase() !== "/login";

  return (
    <Provider store={store}>

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
    </Provider>

  );
}
