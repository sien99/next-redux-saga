// https://nextjs.org/docs/advanced-features/customizing-babel-config
import Main from "../components/Main/Main";
import { Provider } from "react-redux";
import store from "../redux/configureStore";

export default function Home() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
