import { ThemeProvider } from "@mui/material/styles";
import "../../styles/globals.css";
import Layout from "../@core/layouts";
import { AppTheme } from "../@core/theme";
import { Provider } from "react-redux";
import { store } from "../redux/store";


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={AppTheme}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}
