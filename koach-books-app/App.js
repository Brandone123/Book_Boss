import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import Toast from "react-native-toast-message";
import store from "./redux/store";
import RootContainer from "./routes/RootContainer";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
export default function App() {
  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  return (
    <PaperProvider>
      <Provider store={store}>
        <RootContainer />
        <Toast visibilityTime={2000} />
      </Provider>
    </PaperProvider>
  );
}
