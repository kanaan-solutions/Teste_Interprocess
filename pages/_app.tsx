import GlobalStyle from '../styles/globals';
import { Provider } from "react-redux";
import store, { Persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={Persistor} >
          <Component {...pageProps} />
          <GlobalStyle />
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
