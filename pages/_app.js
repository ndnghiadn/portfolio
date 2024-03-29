import "../App.scss";
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";
import CustomCursorManager from "../components/CustomCursor/context/manager";
import CustomCursor from "../components/CustomCursor";
import { useRouter } from "next/router";

//makeStore function that returns a new store for every request
const makeStore = () => store;

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Provider store={store}>
        <CustomCursorManager>
          <CustomCursor />
        </CustomCursorManager>
        {router.asPath.startsWith("/projects/") ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <NextNProgress
              color="goldenrod"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
            />
            <Component {...pageProps} />
          </Layout>
        )}
      </Provider>
    </>
  );
}

export default withRedux(makeStore)(MyApp);
